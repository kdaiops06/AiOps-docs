import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function About(): ReactNode {
  return (
    <Layout
      title="About"
      description="About AIOps Vista — a professional DevOps and AIOps consulting practice.">

      <header className="page-hero">
        <div className="container">
          <span className="hero-badge">About Us</span>
          <h1>Engineering-Led<br />Consulting Practice</h1>
          <p className="page-hero-description">
            AIOps Vista is a DevOps and AIOps consulting practice focused on helping
            engineering teams build, automate, and operate modern cloud infrastructure.
          </p>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <div className="about-content">
              <div className="about-block">
                <h2>Our Mission</h2>
                <p>
                  We believe infrastructure should enable teams, not slow them down. Our mission is to
                  bring enterprise-grade DevOps and AIOps practices to teams of all sizes — through
                  hands-on consulting, open documentation, and knowledge sharing.
                </p>
              </div>

              <div className="about-block">
                <h2>What We Stand For</h2>
                <div className="values-grid">
                  <div className="value-card">
                    <h3>🔧 Practitioners First</h3>
                    <p>We are engineers who consult, not consultants who engineer. Every solution comes from production experience.</p>
                  </div>
                  <div className="value-card">
                    <h3>📖 Open Knowledge</h3>
                    <p>We publish our documentation, guides, and best practices freely for the community.</p>
                  </div>
                  <div className="value-card">
                    <h3>🎯 Results-Driven</h3>
                    <p>We measure success in uptime, deployment speed, cost savings, and team productivity — not billable hours.</p>
                  </div>
                  <div className="value-card">
                    <h3>🤝 Knowledge Transfer</h3>
                    <p>Every engagement ends with your team fully enabled to operate independently.</p>
                  </div>
                </div>
              </div>

              <div className="about-block">
                <h2>Areas of Expertise</h2>
                <div className="expertise-list">
                  <div className="expertise-item">
                    <strong>AIOps & Intelligent Operations</strong>
                    <p>AI-driven monitoring, anomaly detection, event correlation, and automated remediation.</p>
                  </div>
                  <div className="expertise-item">
                    <strong>Cloud Architecture</strong>
                    <p>AWS, Azure, GCP — multi-cloud strategy, security, networking, and cost optimization.</p>
                  </div>
                  <div className="expertise-item">
                    <strong>Kubernetes & Container Orchestration</strong>
                    <p>Production clusters, service mesh, security hardening, and platform engineering.</p>
                  </div>
                  <div className="expertise-item">
                    <strong>DevOps & CI/CD</strong>
                    <p>Pipeline design, GitOps, infrastructure as code, and developer experience.</p>
                  </div>
                  <div className="expertise-item">
                    <strong>Observability</strong>
                    <p>Metrics, logs, traces — Prometheus, Grafana, Datadog, and custom solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Let's Work Together</h2>
            <p>Have a project in mind? We would love to hear about it.</p>
            <div className="hero-actions">
              <Link className="btn-primary" to="/contact">
                Get in Touch
              </Link>
              <Link className="btn-secondary-dark" to="/services">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
