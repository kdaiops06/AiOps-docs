---
sidebar_position: 2
title: "CI/CD Pipeline Patterns"
description: "Modern CI/CD pipeline patterns — trunk-based development, GitOps, progressive delivery, and pipeline-as-code best practices."
---

# CI/CD Pipeline Patterns

Modern CI/CD goes beyond simple build-test-deploy. This guide covers pipeline patterns that scale with your team.

## Pipeline Architecture

```
Developer Push
    │
    ▼
┌──────────────┐
│   CI Stage    │  Build → Test → Lint → Security Scan → Artifact
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   CD Stage    │  Deploy Staging → Integration Tests → Deploy Production
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Post-Deploy  │  Smoke Tests → Monitoring → Rollback if needed
└──────────────┘
```

## Pattern 1: Trunk-Based Development

All developers commit to main (or a short-lived feature branch):

```yaml
# .github/workflows/ci.yml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build
        run: make build
      - name: Unit Tests
        run: make test
      - name: Lint
        run: make lint
      - name: Security Scan
        run: make security-scan
```

**Benefits:** Smaller changes, faster feedback, fewer merge conflicts.

## Pattern 2: GitOps with ArgoCD

Git repository is the single source of truth for deployments:

```yaml
# k8s/production/app/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api
  namespace: production
spec:
  replicas: 3
  template:
    spec:
      containers:
        - name: api
          image: registry.example.com/api:v1.2.3  # Updated via CI
```

**Flow:** CI builds image → Updates manifest in Git → ArgoCD detects change → Deploys to cluster.

## Pattern 3: Progressive Delivery

Roll out changes gradually to reduce blast radius:

### Canary Deployment

```yaml
# Argo Rollouts canary strategy
apiVersion: argoproj.io/v1alpha1
kind: Rollout
spec:
  strategy:
    canary:
      steps:
        - setWeight: 10
        - pause: {duration: 5m}
        - setWeight: 30
        - pause: {duration: 5m}
        - setWeight: 60
        - pause: {duration: 5m}
        - setWeight: 100
      analysis:
        templates:
          - templateName: success-rate
```

## Best Practices

1. **Pipeline as Code** — Store pipeline definitions in the same repo as the application
2. **Fail fast** — Run the fastest checks first (lint, unit tests before integration)
3. **Immutable artifacts** — Build once, deploy everywhere (dev → staging → prod)
4. **Automated rollbacks** — If post-deploy checks fail, automatically roll back
5. **Secrets management** — Never store secrets in pipeline files; use Vault or cloud KMS

## Pipeline Metrics to Track

| Metric | Target | Why |
|--------|:------:|-----|
| Lead time | < 1 day | Code to production speed |
| Deploy frequency | Multiple daily | Team throughput |
| Change failure rate | < 5% | Quality of changes |
| MTTR | < 1 hour | Recovery speed |

## Next Steps

- [Getting Started with Cloud & DevOps](./getting-started.md)
- [Terraform Module Patterns](/blog/terraform-module-patterns) (Blog)
