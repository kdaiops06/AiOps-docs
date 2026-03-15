# AIOps Vista

**Technical Intelligence Hub for AI Infrastructure, DevOps & Enterprise LLM Systems**

[![Live](https://img.shields.io/badge/Live-aiopsvista.com-0f62fe?style=flat-square)](https://aiopsvista.com) [![Pages](https://img.shields.io/badge/Pages-68-6929c4?style=flat-square)](#pages) [![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?style=flat-square)](https://github.com/kdaiops06/AiOpsVista/actions) [![Docusaurus](https://img.shields.io/badge/Docusaurus-3.9.2-3ecc5f?style=flat-square)](https://docusaurus.io)

[Live Site](https://aiopsvista.com) · [AI Tool Directory](https://aiopsvista.com/ai-tools) · [Comparisons](https://aiopsvista.com/comparisons) · [Docs](https://aiopsvista.com/docs/) · [Blog](https://aiopsvista.com/blog) · [Partner Program](https://aiopsvista.com/partner-with-aiopsvista)

---

AIOps Vista is a technical growth platform serving three purposes:

1. **DevOps & AI Consulting** — Professional consulting for cloud architecture, Kubernetes, observability, AI infrastructure, and LLM security
2. **Technical Authority** — In-depth documentation, architecture guides, tool reviews, and head-to-head comparisons
3. **Growth Partnerships** — AI infrastructure startups grow through technical reviews, architecture guides, and consulting referrals

Powered by Docusaurus 3.9.2, React 19, TypeScript, GitHub Actions, and Claude API.

---

## Consulting Services

| Service | Description |
|---------|-------------|
| **AIOps Consulting** | AI-driven monitoring, anomaly detection, automated incident response |
| **DevOps Automation** | CI/CD pipelines, GitOps workflows, infrastructure automation |
| **Cloud Architecture** | Scalable, secure cloud design on AWS, Azure, and GCP |
| **Observability & Monitoring** | Prometheus, Grafana, distributed tracing, SLO tracking |
| **Cost Optimization** | Cloud cost audits, rightsizing, reserved capacity strategy |
| **Kubernetes Architecture** | Production clusters, service mesh, multi-tenancy, auto-scaling |
| **AI Infrastructure Consulting** | LLM pipelines, AI observability, RAG systems, model serving |
| **AI Security & Governance** | Prompt injection defense, PII protection, compliance, risk frameworks |

---

## AI Tool Intelligence

### Tool Directory (`/ai-tools`)
Curated directory of 12+ AI infrastructure tools across 6 categories:
- LLM Security (Lakera Guard, Rebuff, Guardrails AI)
- AI Observability (Langfuse, Arize Phoenix)
- AI Orchestration (LangChain)
- RAG Platforms (Haystack, LlamaIndex)
- AI Agent Frameworks (CrewAI, AutoGen)
- MLOps (MLflow, Kubeflow)

### Tool Reviews (`/tools`)
In-depth technical reviews with architecture analysis, pros/cons, use cases, and implementation guidance:
- Lakera Guard Review
- Langfuse Review
- LangChain Review

### Comparisons (`/comparisons`)
Head-to-head feature comparisons with scoring tables and recommendations:
- LangChain vs Haystack
- Lakera vs Guardrails AI
- CrewAI vs AutoGen
- Langfuse vs Arize Phoenix

### Partnership Program (`/partner-with-aiopsvista`)
AI infrastructure startups can partner for technical reviews, architecture guide integration, tool directory listings, and consulting referrals.

---

## Documentation Portal

In-depth technical guides across 7 categories:

- **AIOps** — Architecture patterns, AI-powered incident detection, anomaly detection
- **AI Architecture** — Secure LLM pipelines, AI observability stack, DevOps for AI agents, enterprise AI security
- **AI Infrastructure** — GPU cluster setup, model serving with Triton/vLLM, MLOps
- **Cloud & DevOps** — CI/CD pipeline patterns, Terraform best practices, Kubernetes operations, observability stack
- **Tool Setup** — VS Code for DevOps, Docker development workflows
- **AI Learning** — Prompt engineering, RAG systems, LLMs, AI agents
- **Hands-On Labs** — AIOps monitoring pipeline lab, RAG knowledge assistant lab

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Docusaurus 3.9.2 + React 19 |
| Language | TypeScript |
| Styling | Custom CSS (Inter + JetBrains Mono) |
| Content | Markdown / MDX |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| AI Automation | Claude API (Anthropic) |
| DNS | Cloudflare |
| Domain | aiopsvista.com |

---

## AI Content Automation

Three GitHub Actions workflows generate content using the Claude API:

| Workflow | Schedule | Output |
|----------|----------|--------|
| Blog Generator | Weekly (Monday 9AM UTC) | Technical blog post → PR |
| Tech News | Weekly (Friday 9AM UTC) | Industry news roundup → PR |
| Docs Updater | Monthly (1st at 9AM UTC) | Documentation page → PR |

All AI-generated content goes through pull requests for human review before publishing.

---

## Project Structure

```
AiOpsVista/
├── .github/workflows/
│   ├── deploy.yml              # Build & deploy to GitHub Pages
│   ├── ai-blog-generator.yml   # Weekly AI blog generation
│   ├── ai-tech-news.yml        # Weekly tech news roundup
│   └── ai-docs-updater.yml     # Monthly docs update
├── ARCHITECTURE.md             # System architecture document
├── website/
│   ├── docusaurus.config.ts    # Site configuration
│   ├── src/
│   │   ├── pages/              # React pages (15+ pages)
│   │   │   ├── ai-tools.tsx    # AI Tool Directory
│   │   │   ├── tools/          # Individual tool reviews
│   │   │   ├── comparisons/    # Head-to-head comparisons
│   │   │   ├── partner-with-aiopsvista.tsx
│   │   │   └── ...             # Home, Services, About, Contact, etc.
│   │   └── css/custom.css      # Professional theme
│   ├── docs/                   # Documentation portal (7 categories, 25+ docs)
│   │   ├── ai-architecture/    # Secure LLM pipelines, AI observability, etc.
│   │   └── ...                 # AIOps, Cloud-DevOps, Labs, etc.
│   ├── blog/                   # Technical blog (5+ posts, RSS feeds)
│   └── static/                 # Assets, CNAME, images
└── README.md
```

---

## Pages

**68 pages live** — all returning HTTP 200. TTFB ~115ms via Fastly CDN.

| Page | URL | Status |
|------|-----|--------|
| Home | [`/`](https://aiopsvista.com) | ✅ Live |
| Services | [`/services`](https://aiopsvista.com/services) | ✅ Live |
| AI Tools Directory | [`/ai-tools`](https://aiopsvista.com/ai-tools) | ✅ Live |
| Tool Reviews Index | [`/tools`](https://aiopsvista.com/tools) | ✅ Live |
| Lakera Guard Review | [`/tools/lakera-guard-review`](https://aiopsvista.com/tools/lakera-guard-review) | ✅ Live |
| Langfuse Review | [`/tools/langfuse-review`](https://aiopsvista.com/tools/langfuse-review) | ✅ Live |
| LangChain Review | [`/tools/langchain-review`](https://aiopsvista.com/tools/langchain-review) | ✅ Live |
| Comparisons Index | [`/comparisons`](https://aiopsvista.com/comparisons) | ✅ Live |
| LangChain vs Haystack | [`/comparisons/langchain-vs-haystack`](https://aiopsvista.com/comparisons/langchain-vs-haystack) | ✅ Live |
| Lakera vs Guardrails | [`/comparisons/lakera-vs-guardrails`](https://aiopsvista.com/comparisons/lakera-vs-guardrails) | ✅ Live |
| CrewAI vs AutoGen | [`/comparisons/crewai-vs-autogen`](https://aiopsvista.com/comparisons/crewai-vs-autogen) | ✅ Live |
| Langfuse vs Arize | [`/comparisons/langfuse-vs-arize`](https://aiopsvista.com/comparisons/langfuse-vs-arize) | ✅ Live |
| Partnership Program | [`/partner-with-aiopsvista`](https://aiopsvista.com/partner-with-aiopsvista) | ✅ Live |
| AI Architecture Guides | [`/docs/ai-architecture/`](https://aiopsvista.com/docs/category/ai-architecture) | ✅ Live |
| Secure LLM Pipelines | [`/docs/ai-architecture/secure-llm-pipelines`](https://aiopsvista.com/docs/ai-architecture/secure-llm-pipelines) | ✅ Live |
| AI Observability Stack | [`/docs/ai-architecture/ai-observability-stack`](https://aiopsvista.com/docs/ai-architecture/ai-observability-stack) | ✅ Live |
| DevOps for AI Agents | [`/docs/ai-architecture/devops-for-ai-agents`](https://aiopsvista.com/docs/ai-architecture/devops-for-ai-agents) | ✅ Live |
| Enterprise AI Security | [`/docs/ai-architecture/enterprise-ai-security`](https://aiopsvista.com/docs/ai-architecture/enterprise-ai-security) | ✅ Live |
| Case Studies | [`/case-studies`](https://aiopsvista.com/case-studies) | ✅ Live |
| Docs Portal | [`/docs/`](https://aiopsvista.com/docs/) | ✅ Live |
| Blog | [`/blog`](https://aiopsvista.com/blog) | ✅ Live |
| Tech News | [`/tech-news`](https://aiopsvista.com/tech-news) | ✅ Live |
| Resources | [`/resources`](https://aiopsvista.com/resources) | ✅ Live |
| Newsletter | [`/newsletter`](https://aiopsvista.com/newsletter) | ✅ Live |
| About | [`/about`](https://aiopsvista.com/about) | ✅ Live |
| Contact | [`/contact`](https://aiopsvista.com/contact) | ✅ Live |

---

## Local Development

```bash
cd website
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

---

## Contributing

Contributions are welcome. To add a guide, fix an error, or suggest a topic:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

## License

This project is licensed under the MIT License.

---

> *Built with passion for the AI & DevOps community — sharing knowledge, one doc at a time.*
