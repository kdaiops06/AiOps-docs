---
title: "Terraform at Scale: Module Patterns That Actually Work"
slug: terraform-module-patterns
authors: [kdinesh]
tags: [terraform, devops, cloud]
description: "Battle-tested Terraform module patterns for managing infrastructure at scale — monorepo vs polyrepo, module composition, state management, and CI/CD."
---

Every team starts with a single `main.tf`. Six months later, it's 2,000 lines of spaghetti that nobody wants to touch. Here's how we structure Terraform at scale in our consulting engagements.

<!-- truncate -->

## The Module Hierarchy

Think of Terraform modules in three layers:

```
Layer 3: Root Modules (environments)
├── production/
├── staging/
└── development/

Layer 2: Service Modules (composition)
├── modules/api-service/
├── modules/data-pipeline/
└── modules/monitoring-stack/

Layer 1: Resource Modules (building blocks)
├── modules/vpc/
├── modules/eks-cluster/
├── modules/rds/
└── modules/s3-bucket/
```

### Layer 1: Resource Modules

Small, reusable modules that wrap a single AWS/GCP/Azure resource with your organization's defaults:

```hcl
# modules/s3-bucket/main.tf
resource "aws_s3_bucket" "this" {
  bucket = var.name

  tags = merge(var.tags, {
    ManagedBy = "terraform"
    Module    = "s3-bucket"
  })
}

resource "aws_s3_bucket_versioning" "this" {
  bucket = aws_s3_bucket.this.id
  versioning_configuration {
    status = var.versioning ? "Enabled" : "Suspended"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "this" {
  bucket = aws_s3_bucket.this.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "aws:kms"
    }
  }
}
```

### Layer 2: Service Modules

Compose resource modules into logical services:

```hcl
# modules/api-service/main.tf
module "alb" {
  source = "../alb"
  name   = "${var.service_name}-alb"
  vpc_id = var.vpc_id
}

module "ecs_service" {
  source       = "../ecs-service"
  name         = var.service_name
  cluster_id   = var.cluster_id
  target_group = module.alb.target_group_arn
  image        = var.container_image
  cpu          = var.cpu
  memory       = var.memory
}

module "monitoring" {
  source       = "../cloudwatch-alarms"
  service_name = var.service_name
  alb_arn      = module.alb.arn
}
```

### Layer 3: Root Modules

Environment-specific configurations that compose service modules:

```hcl
# environments/production/main.tf
module "api" {
  source          = "../../modules/api-service"
  service_name    = "api"
  vpc_id          = module.networking.vpc_id
  cluster_id      = module.ecs.cluster_id
  container_image = "api:${var.api_version}"
  cpu             = 1024
  memory          = 2048
}
```

## State Management

### One State File Per Environment Per Service

```
states/
├── production/
│   ├── networking.tfstate
│   ├── ecs-cluster.tfstate
│   ├── api-service.tfstate
│   └── monitoring.tfstate
├── staging/
│   ├── networking.tfstate
│   └── ...
```

Use remote state with S3 + DynamoDB locking:

```hcl
terraform {
  backend "s3" {
    bucket         = "company-terraform-state"
    key            = "production/api-service/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
```

### Cross-State References

Use `terraform_remote_state` or better, SSM Parameter Store:

```hcl
# Write output to SSM
resource "aws_ssm_parameter" "vpc_id" {
  name  = "/infrastructure/production/vpc_id"
  type  = "String"
  value = module.vpc.id
}

# Read from SSM in another state
data "aws_ssm_parameter" "vpc_id" {
  name = "/infrastructure/production/vpc_id"
}
```

## CI/CD Pipeline

Every Terraform change should go through a pipeline:

```yaml
# .github/workflows/terraform.yml
name: Terraform
on:
  pull_request:
    paths: ['infrastructure/**']

jobs:
  plan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: hashicorp/setup-terraform@v3

      - name: Terraform Init
        run: terraform init

      - name: Terraform Plan
        run: terraform plan -no-color -out=plan.tfplan

      - name: Comment PR with Plan
        uses: actions/github-script@v7
        with:
          script: |
            // Post plan output as PR comment
```

## Best Practices Summary

1. **Never use `terraform apply` locally** — Always through CI/CD
2. **Pin provider versions** — Avoid surprise breaking changes
3. **Use `moved` blocks** — Refactor state without destroying resources
4. **Tag everything** — Cost allocation, ownership, and automation
5. **Validate with `tflint`** — Catch issues before plan
6. **Use Terratest** — Automated testing for critical modules

---

*Struggling with Terraform complexity? [Let's talk](/contact) — we help teams build scalable IaC practices.*
