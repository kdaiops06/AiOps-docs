import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Newsletter(): ReactNode {
  return (
    <Layout
      title="Newsletter"
      description="Subscribe to the AIOps Vista newsletter — weekly DevOps, AIOps, and cloud infrastructure insights.">

      <header className="page-hero">
        <div className="container">
          <span className="hero-badge">Newsletter</span>
          <h1>The AIOps Vista<br />Weekly</h1>
          <p className="page-hero-description">
            Actionable DevOps and AIOps insights delivered to your inbox every week.
            No fluff — just practical guidance from the field.
          </p>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <div className="newsletter-page">
              <div className="newsletter-content">
                <h2>What You'll Get</h2>
                <div className="newsletter-features">
                  <div className="newsletter-feature">
                    <span className="newsletter-feature-icon">📰</span>
                    <div>
                      <h3>Weekly Tech Digest</h3>
                      <p>Curated DevOps, AIOps, and cloud news — the stories that actually matter for practitioners.</p>
                    </div>
                  </div>
                  <div className="newsletter-feature">
                    <span className="newsletter-feature-icon">🛠️</span>
                    <div>
                      <h3>Practical Tutorials</h3>
                      <p>Step-by-step guides on Kubernetes, Terraform, observability, and AI for operations.</p>
                    </div>
                  </div>
                  <div className="newsletter-feature">
                    <span className="newsletter-feature-icon">📊</span>
                    <div>
                      <h3>Architecture Patterns</h3>
                      <p>Real-world infrastructure patterns and lessons learned from consulting engagements.</p>
                    </div>
                  </div>
                  <div className="newsletter-feature">
                    <span className="newsletter-feature-icon">🎯</span>
                    <div>
                      <h3>Tool Reviews</h3>
                      <p>Honest evaluations of DevOps and AIOps tools, frameworks, and platforms.</p>
                    </div>
                  </div>
                </div>

                <div className="newsletter-signup-box">
                  <h3>Subscribe Now</h3>
                  <p>Join DevOps and AIOps practitioners who read the AIOps Vista Weekly.</p>
                  <p className="newsletter-note">
                    Newsletter launching soon. In the meantime, follow us on{' '}
                    <a href="https://github.com/kdaiops06" target="_blank" rel="noopener noreferrer">GitHub</a> and{' '}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> for updates.
                  </p>
                  <Link className="btn-primary" to="/contact">
                    Get in Touch →
                  </Link>
                </div>

                <div className="newsletter-past">
                  <h3>Recent Articles</h3>
                  <p>While we prepare the newsletter, check out our latest blog posts:</p>
                  <ul>
                    <li><Link to="/blog/building-aiops-strategy">Building an AIOps Strategy: From Reactive to Predictive</Link></li>
                    <li><Link to="/blog/kubernetes-production-checklist">Kubernetes in Production: The 15-Point Checklist</Link></li>
                    <li><Link to="/blog/terraform-module-patterns">Terraform at Scale: Module Patterns That Work</Link></li>
                    <li><Link to="/blog/complete-observability-stack-2026">The Complete Observability Stack in 2026</Link></li>
                    <li><Link to="/blog/platform-engineering-internal-developer-platform">Platform Engineering: Building Your IDP</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
