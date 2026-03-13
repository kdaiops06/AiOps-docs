import type {ReactNode} from 'react';
import Layout from '@theme/Layout';

export default function Contact(): ReactNode {
  return (
    <Layout
      title="Contact"
      description="Get in touch with AIOps Vista for DevOps and AIOps consulting.">

      <header className="page-hero">
        <div className="container">
          <span className="hero-badge">Get In Touch</span>
          <h1>Let's Discuss Your<br />Infrastructure Challenges</h1>
          <p className="page-hero-description">
            Book a free 30-minute consultation to explore how we can help
            your team build better infrastructure.
          </p>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>How to Reach Us</h2>

                <div className="contact-method">
                  <h3>📧 Email</h3>
                  <p>For consulting inquiries and partnerships:</p>
                  <a href="mailto:contact@aiopsvista.com" className="contact-link">contact@aiopsvista.com</a>
                </div>

                <div className="contact-method">
                  <h3>📅 Book a Call</h3>
                  <p>Schedule a free 30-minute consultation to discuss your project:</p>
                  <a href="https://calendly.com" className="btn-primary" target="_blank" rel="noopener noreferrer">
                    Schedule on Calendly
                  </a>
                </div>

                <div className="contact-method">
                  <h3>💼 LinkedIn</h3>
                  <p>Connect for industry updates and networking:</p>
                  <a href="https://linkedin.com" className="contact-link" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                </div>

                <div className="contact-method">
                  <h3>🐙 GitHub</h3>
                  <p>Check out our open-source work and documentation:</p>
                  <a href="https://github.com/kdaiops06" className="contact-link" target="_blank" rel="noopener noreferrer">github.com/kdaiops06</a>
                </div>
              </div>

              <div className="contact-faq">
                <h2>Frequently Asked Questions</h2>

                <div className="faq-item">
                  <h3>What does a typical engagement look like?</h3>
                  <p>We start with a free discovery call, followed by a scoping document. Engagements range from 2-week assessments to multi-month implementations, depending on complexity.</p>
                </div>

                <div className="faq-item">
                  <h3>Do you work with startups or only enterprises?</h3>
                  <p>Both. We have worked with early-stage startups building their first production infrastructure and enterprise teams modernizing legacy systems.</p>
                </div>

                <div className="faq-item">
                  <h3>What is your pricing model?</h3>
                  <p>We offer project-based pricing and retainer agreements. Pricing depends on scope — we provide a detailed estimate after the discovery call.</p>
                </div>

                <div className="faq-item">
                  <h3>Do you provide ongoing support?</h3>
                  <p>Yes. We offer retainer-based support packages for teams that want ongoing advisory, architecture reviews, and on-call assistance.</p>
                </div>

                <div className="faq-item">
                  <h3>Can you work with our existing team?</h3>
                  <p>Absolutely. We work alongside your engineers, not in isolation. Knowledge transfer is a core part of every engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>The first consultation is on us. Let's figure out how to make your infrastructure better.</p>
            <a href="mailto:contact@aiopsvista.com" className="btn-primary">
              Email Us Today
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
