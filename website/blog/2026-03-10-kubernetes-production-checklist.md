---
title: "Kubernetes in Production: The 15-Point Checklist Every Team Needs"
slug: kubernetes-production-checklist
authors: [kdinesh]
tags: [kubernetes, devops, cloud]
description: "A battle-tested checklist for running Kubernetes in production — covering security, observability, networking, and operational readiness."
---

Running Kubernetes in development is easy. Running it in production is where teams get burned. After helping dozens of teams move to production Kubernetes, here's the checklist we use in every engagement.

<!-- truncate -->

## Cluster Architecture

### 1. Multi-AZ / Multi-Region Deployment

Production clusters should span at least 3 availability zones. Single-AZ clusters are a single point of failure.

```yaml
# EKS node group spread across AZs
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig
metadata:
  name: production
  region: us-east-1
availabilityZones:
  - us-east-1a
  - us-east-1b
  - us-east-1c
```

### 2. Dedicated Node Pools

Separate workloads by node pool type:
- **System pool** — CoreDNS, kube-proxy, monitoring agents
- **Application pool** — Your services
- **Spot/Preemptible pool** — Batch jobs, non-critical workloads

### 3. Resource Requests and Limits

Every pod must define resource requests and limits. Without them, the scheduler can't make intelligent placement decisions.

```yaml
resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 512Mi
```

## Security

### 4. RBAC with Least Privilege

Never use `cluster-admin` for application service accounts. Define granular roles:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: app-reader
  namespace: production
rules:
  - apiGroups: [""]
    resources: ["pods", "services"]
    verbs: ["get", "list", "watch"]
```

### 5. Network Policies

Default deny all traffic, then explicitly allow what's needed:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress
```

### 6. Pod Security Standards

Enforce pod security standards to prevent privileged containers:
- No root containers
- Read-only root filesystem
- No privilege escalation
- Drop all capabilities

### 7. Secrets Management

Never store secrets in plain Kubernetes Secrets. Use:
- **External Secrets Operator** with AWS Secrets Manager or HashiCorp Vault
- **Sealed Secrets** for GitOps workflows
- **SOPS** for encrypted secrets in Git

## Observability

### 8. Metrics (Prometheus + Grafana)

Monitor cluster health, node resources, and application metrics:
- Cluster-level: node CPU, memory, disk, network
- Kubernetes-level: pod restarts, pending pods, deployment status
- Application-level: request rate, error rate, latency (RED metrics)

### 9. Logging (Loki or ELK)

Centralized logging with structured output:
- Application logs → stdout/stderr
- Log aggregation → Fluentd/Fluent Bit → Loki or Elasticsearch
- Retention policy → 30 days hot, 90 days warm

### 10. Distributed Tracing

Implement OpenTelemetry for request tracing across microservices. This is critical for debugging latency and understanding service dependencies.

## Operations

### 11. Horizontal Pod Autoscaler (HPA)

Scale based on CPU, memory, or custom metrics:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api
  minReplicas: 3
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```

### 12. Pod Disruption Budgets

Prevent deployments and node drains from taking down too many pods:

```yaml
apiVersion: policy/v1
kind: PodDisruptionBudget
metadata:
  name: api-pdb
spec:
  minAvailable: 2
  selector:
    matchLabels:
      app: api
```

### 13. Health Checks

Every container needs liveness, readiness, and startup probes:

```yaml
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 15
readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
```

### 14. GitOps Deployment

Use ArgoCD or Flux for declarative, Git-based deployments:
- All manifests in Git
- Automated sync from Git to cluster
- Drift detection and reconciliation
- Audit trail for every change

### 15. Disaster Recovery

- **etcd backups** — Automated daily backups with tested restore procedures
- **Cluster recreation** — Infrastructure as Code for cluster provisioning
- **Application state** — PersistentVolume snapshots and database backups
- **Runbooks** — Documented procedures for every failure scenario

## The Bottom Line

Production Kubernetes requires discipline across security, observability, and operational readiness. Skip any of these items and you're running on borrowed time.

---

*Need help getting your Kubernetes clusters production-ready? [Schedule a consultation](/contact) — we've done this for 50+ teams.*
