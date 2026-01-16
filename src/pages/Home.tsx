import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Mail, ExternalLink } from "lucide-react";

/**
 * Portfolio Home Page
 * Design: Minimalist Technical Elegance
 * - Clean typography hierarchy with Inter + JetBrains Mono
 * - Generous whitespace and breathing room
 * - Strategic blue accent color (#0066FF)
 * - Smooth transitions and purposeful interactions
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-2 flex justify-between items-center">
          <div className="text-lg font-bold text-foreground">Anthony</div>
          <div className="flex gap-2">
            <a
              href="#experience"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero-bg.png"
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container py-8 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Senior Frontend Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Building high-performance, pixel-perfect web interfaces for
              leading technology companies. Specialized in React, TypeScript,
              and modern frontend architecture with 3+ years of experience at
              OZON and Sber.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-border hover:bg-secondary"
              >
                <a
                  href="https://github.com/bezlant"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-6 md:py-14 border-t border-border"
      >
        <div className="container">
          <h2 className="text-4xl font-bold mb-16">Experience</h2>

          <div className="space-y-12">
            {/* OZON */}
            <div className="pb-12 border-b border-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Senior Frontend Developer
                  </h3>
                  <p className="text-primary font-medium mt-1">OZON.ru</p>
                </div>
                <span className="text-sm text-muted-foreground">
                  Aug 2023 - Present
                </span>
              </div>
              <p className="text-muted-foreground mb-6">Moscow, Russia</p>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    Architected and developed a product card transfer system
                    from scratch, increasing company profits by over 100 million
                    RUB
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    Led the successful implementation of a micro-frontend
                    architecture, reducing Time-to-Market from 4 hours to 45
                    minutes
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    Maintained large-scale application using Vue.js, Nuxt.js,
                    and TypeScript
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    Established end-to-end testing with Playwright, achieving
                    100% coverage of critical functionality
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    Mentored junior developers and participated in recruitment
                  </span>
                </li>
              </ul>
            </div>

            {/* Sber */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    Middle Frontend Developer
                  </h3>
                  <p className="text-primary font-medium mt-1">Sber</p>
                </div>
                <span className="text-sm text-muted-foreground">
                  Mar 2022 - May 2023
                </span>
              </div>
              <p className="text-muted-foreground mb-6">Moscow, Russia</p>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    Transformed a legacy cash settlement center into a modern,
                    user-friendly interface
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    Developed components using React, TypeScript, Redux Toolkit,
                    and Ant Design
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    Implemented Storybook for component documentation and
                    improved code quality
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>
                    Optimized interface performance and system response time
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-6 md:py-14 border-t border-border bg-secondary/30"
      >
        <div className="container">
          <h2 className="text-4xl font-bold mb-16">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Frontend
              </h3>
              <div className="space-y-2">
                <p className="text-foreground">
                  <span className="font-mono text-primary">JavaScript</span> •{" "}
                  <span className="font-mono text-primary">TypeScript</span> •{" "}
                  <span className="font-mono text-primary">React</span>
                </p>
                <p className="text-foreground">
                  <span className="font-mono text-primary">Next.js</span> •{" "}
                  <span className="font-mono text-primary">Vue.js</span> •{" "}
                  <span className="font-mono text-primary">Nuxt.js</span>
                </p>
                <p className="text-foreground">
                  <span className="font-mono text-primary">Tailwind CSS</span> •{" "}
                  <span className="font-mono text-primary">HTML5</span> •{" "}
                  <span className="font-mono text-primary">CSS3</span>
                </p>
                <p className="text-foreground">
                  <span className="font-mono text-primary">Framer Motion</span>{" "}
                  •{" "}
                  <span className="font-mono text-primary">Redux Toolkit</span>{" "}
                  • <span className="font-mono text-primary">Ant Design</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                Tools & Practices
              </h3>
              <div className="space-y-2">
                <p className="text-foreground">
                  <span className="font-mono text-primary">Playwright</span> •{" "}
                  <span className="font-mono text-primary">Jest</span> •{" "}
                  <span className="font-mono text-primary">Storybook</span>
                </p>
                <p className="text-foreground">
                  <span className="font-mono text-primary">Docker</span> •{" "}
                  <span className="font-mono text-primary">Webpack</span> •{" "}
                  <span className="font-mono text-primary">Git</span>
                </p>
                <p className="text-foreground">
                  <span className="font-mono text-primary">
                    Micro-frontends
                  </span>{" "}
                  • <span className="font-mono text-primary">REST API</span> •{" "}
                  <span className="font-mono text-primary">gRPC</span>
                </p>
                <p className="text-foreground">
                  <span className="font-mono text-primary">Figma</span> •{" "}
                  <span className="font-mono text-primary">Agile</span> •{" "}
                  <span className="font-mono text-primary">Leadership</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section className="py-6 md:py-14 border-t border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16">Education</h2>

          <div className="space-y-8">
            <div className="pb-8 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-primary font-medium mt-1">School 21 (Sber)</p>
              <p className="text-muted-foreground mt-1">Expected 2026</p>
            </div>

            <div className="pb-8">
              <h3 className="text-xl font-semibold text-foreground">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-primary font-medium mt-1">
                Shenzhen University
              </p>
              <p className="text-muted-foreground mt-1">2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-6 md:py-14 border-t border-border bg-secondary/30"
      >
        <div className="container max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm open to exciting opportunities, collaborations, and
            conversations about frontend development, modern web architecture,
            and building exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              asChild
              className="border-border hover:bg-secondary"
            >
              <a
                href="https://github.com/bezlant"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-2 border-t border-border">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 Anthony. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
