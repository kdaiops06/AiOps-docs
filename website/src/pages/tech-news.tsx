import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const newsItems = [
  {
    date: 'March 2026',
    items: [
      {
        title: 'OpenTelemetry 1.0 Reaches GA for All Signals',
        summary: 'OpenTelemetry has officially reached General Availability for metrics, logs, and traces across all supported languages. This milestone makes OTel the undisputed standard for observability instrumentation.',
        tag: 'Observability',
        link: '/blog/tags/observability',
      },
      {
        title: 'Kubernetes 1.33 Introduces Native Sidecar Containers',
        summary: 'The long-awaited native sidecar container support is now stable in Kubernetes 1.33, simplifying service mesh and logging agent deployments.',
        tag: 'Kubernetes',
        link: '/blog/tags/kubernetes',
      },
      {
        title: 'AWS Announces Graviton5 Instances with 2x ML Performance',
        summary: 'The new Graviton5 processor family delivers 2x machine learning inference performance and 30% better price-performance for general workloads.',
        tag: 'Cloud',
        link: '/blog/tags/cloud',
      },
    ],
  },
  {
    date: 'February 2026',
    items: [
      {
        title: 'GitOps Adoption Reaches 60% Among Enterprise Teams',
        summary: 'The CNCF annual survey reports that 60% of enterprise Kubernetes users now use GitOps practices, with ArgoCD leading adoption at 45%.',
        tag: 'DevOps',
        link: '/blog/tags/devops',
      },
      {
        title: 'AIOps Market Projected to Reach $40B by 2028',
        summary: 'Gartner projects the AIOps platform market will grow to $40 billion by 2028, driven by enterprises seeking to reduce operational costs through AI automation.',
        tag: 'AIOps',
        link: '/blog/tags/aiops',
      },
      {
        title: 'Terraform 2.0 Public Beta with Native Drift Detection',
        summary: 'HashiCorp releases Terraform 2.0 beta featuring built-in drift detection, improved state management, and a new testing framework.',
        tag: 'Terraform',
        link: '/blog/tags/terraform',
      },
    ],
  },
];

export default function TechNews(): ReactNode {
  return (
    <Layout
      title="Tech News"
      description="Latest DevOps, AIOps, cloud, and infrastructure technology news curated by AIOps Vista.">

      <header className="page-hero">
        <div className="container">
          <span className="hero-badge">Tech News</span>
          <h1>DevOps & Cloud<br />Industry News</h1>
          <p className="page-hero-description">
            Curated news and analysis on DevOps, AIOps, cloud infrastructure,
            and platform engineering — updated weekly.
          </p>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            {newsItems.map((month) => (
              <div key={month.date} className="news-month">
                <h2 className="news-month-title">{month.date}</h2>
                <div className="news-grid">
                  {month.items.map((item, idx) => (
                    <div key={idx} className="news-card">
                      <span className="case-tag">{item.tag}</span>
                      <h3>{item.title}</h3>
                      <p>{item.summary}</p>
                      <Link to={item.link} className="card-link">
                        Related articles →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER CTA */}
        <section className="cta-section">
          <div className="container">
            <h2>Stay Updated</h2>
            <p>Get weekly DevOps and AIOps news delivered to your inbox.</p>
            <div className="newsletter-inline">
              <Link className="btn-primary" to="/newsletter">
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
