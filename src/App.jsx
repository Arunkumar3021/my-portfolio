import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mail, Github, Linkedin, FileText } from "lucide-react";

/**
 * Drop this file as src/App.jsx (replace existing).
 * Make sure these packages are installed:
 *   npm install framer-motion lucide-react
 *
 * Make sure these files exist in public/:
 *   photo.JPG
 *   resume.pdf
 *   report-blackfriday.pdf
 *   report-event.pdf
 *   report-violence.pdf
 *   public/certifications/cert1.jpeg
 *   public/certifications/cert2.jpeg
 *   public/certifications/cert3.jpeg
 *
 * Change LINKEDIN_URL below to your real LinkedIn profile.
 */

const LINKEDIN_URL = "https://www.linkedin.com/in/akarunkumar03"; // <<-- change this

export default function App() {
  const [openNav, setOpenNav] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const projects = [
    {
      title: "Black Friday Sales Prediction",
      desc: "Random Forest model for sales forecasting. End-to-end data cleaning, feature engineering and evaluation.",
      tech: ["Python", "Pandas", "Scikit-learn"],
      report: "/report-blackfriday.pdf",
    },
    {
      title: "Automatic Violence Detection",
      desc: "Video-based deep learning system using ConvLSTM & EfficientNet for spatio-temporal detection.",
      tech: ["Python", "OpenCV", "TensorFlow"],
      report: "/report-violence.pdf",
    },
    {
      title: "Event Horizon (Event Management)",
      desc: "Full-stack event management platform with payment integration and realtime notifications.",
      tech: ["Django", "JavaScript", "Stripe"],
      report: "/report-event.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900 antialiased">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 shadow-lg flex items-center justify-center text-white font-semibold">
              AK
            </div>
            <div>
              <h1 className="text-lg font-semibold">Arun Kumar A</h1>
              <p className="text-xs text-gray-600">Software Developer — Python · Django · ML</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#certifications" className="hover:text-indigo-600">Certifications</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-600 text-white text-sm shadow hover:opacity-95"
              href="#contact"
            >
              Hire me
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setOpenNav(!openNav)}
            aria-label="menu"
          >
            {openNav ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {openNav && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="md:hidden border-t bg-white/80">
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#about" onClick={() => setOpenNav(false)} className="py-2">About</a>
              <a href="#projects" onClick={() => setOpenNav(false)} className="py-2">Projects</a>
              <a href="#certifications" onClick={() => setOpenNav(false)} className="py-2">Certifications</a>
              <a href="#contact" onClick={() => setOpenNav(false)} className="py-2">Contact</a>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="space-y-4">
            <p className="text-sm text-indigo-600 font-medium">Hello, I'm Arun —</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Software Developer focused on Python, Web and Machine Learning</h2>
            <p className="text-gray-600 max-w-xl">
              MCA graduate building production-ready applications and data-driven systems. I enjoy turning data into insights and shipping polished software.
            </p>

            <div className="flex gap-3 mt-4 flex-wrap">
              <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white shadow hover:opacity-95">View Projects</a>

              {/* Resume button */}
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 hover:bg-gray-50">
                <FileText size={16} /> Resume
              </a>
            </div>

            <div className="flex items-center gap-4 mt-4 text-gray-600">
              <a href="https://github.com/akarunkumar03" aria-label="GitHub" className="hover:text-gray-900 inline-flex items-center gap-2">
                <Github size={18} /> <span className="hidden sm:inline">GitHub</span>
              </a>

              {/* Edit LINKEDIN_URL at top of file */}
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-blue-700 inline-flex items-center gap-2">
                <Linkedin size={18} /> <span className="hidden sm:inline">LinkedIn</span>
              </a>

              <a href="mailto:akarunkumar882@gmail.com" className="hover:text-green-600 inline-flex items-center gap-2">
                <Mail size={18} /> <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="p-6 bg-white rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4 items-center">
              {/* Profile photo */}
              <img src="/photo.JPG" alt="Arun Kumar" className="w-36 h-36 rounded-full object-cover border-4 border-indigo-50 shadow-md" />

              <div className="grid grid-cols-2 gap-3 w-full mt-4">
                <StatCard label="Experience" value="Internship @ Salesforce" />
                <StatCard label="Degree" value="MCA (2024)" />
                <StatCard label="Tech" value="Python · Django · ML" />
                <StatCard label="Location" value="Bengaluru, India" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="mt-12">
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-semibold">About</motion.h3>
          <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-3 text-gray-600 max-w-3xl">
            I am an MCA graduate with hands-on experience building web applications and machine learning systems. I build robust backend services using Python and Django, preprocess and analyze data with Pandas & NumPy, and prototype deep-learning models for video and image tasks.
          </motion.p>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-10">
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-semibold">Selected Projects</motion.h3>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <motion.article key={p.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className="bg-white p-5 rounded-xl shadow hover:shadow-lg border">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-lg">{p.title}</h4>
                    <p className="mt-2 text-sm text-gray-600">{p.desc}</p>

                    <div className="flex gap-2 flex-wrap mt-4">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-700 rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    {/* Report button replaces Live/Code */}
                    <a href={p.report} target="_blank" rel="noreferrer" className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Report</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mt-10">
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-semibold">Certifications</motion.h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "/certifications/cert1.jpeg",
              "/certifications/cert2.jpeg",
              "/certifications/cert3.jpeg",
            ].map((src, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer" onClick={() => setSelectedCert(src)}>
                <img src={src} alt={`cert-${i+1}`} className="w-full h-48 object-cover rounded" />
                <p className="mt-2 text-center text-sm font-medium">Certificate {i + 1}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-10 mb-16">
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-semibold">Contact</motion.h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold">Let's build something together</h4>
              <p className="text-gray-600 mt-2">Email me at <a className="text-indigo-600" href="mailto:akarunkumar882@gmail.com">akarunkumar882@gmail.com</a> or send a message through the form below.</p>

              <div className="mt-6 flex gap-4">
                <a href="https://github.com/akarunkumar03" className="inline-flex items-center gap-2 text-sm hover:text-gray-900">
                  <Github size={16} /> GitHub
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-blue-700">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, x: 6 }} whileInView={{ opacity: 1, x: 0 }} className="p-6 bg-white rounded-xl shadow space-y-4" onSubmit={(e) => { e.preventDefault(); window.location = 'mailto:akarunkumar882@gmail.com'; }}>
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input required className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Your name" />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="you@example.com" />
              </div>

              <div>
                <label className="text-sm text-gray-700">Message</label>
                <textarea required rows="4" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Brief message..." />
              </div>

              <div className="flex items-center justify-between">
                <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Send</button>
                <a href="/resume.pdf" className="text-sm inline-flex items-center gap-2" target="_blank" rel="noreferrer"><FileText size={16} /> Resume</a>
              </div>
            </motion.form>
          </div>
        </section>

        <footer className="mt-12 py-6 text-center text-sm text-gray-600">© 2025 Arun Kumar A · Built with care</footer>
      </main>

      {/* Certification modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={() => setSelectedCert(null)}>
          <motion.div className="bg-white p-4 rounded-lg max-w-3xl w-full" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <img src={selectedCert} alt="certificate" className="w-full h-auto rounded" />
            <div className="text-right mt-2">
              <button className="px-3 py-1 bg-indigo-600 text-white rounded" onClick={() => setSelectedCert(null)}>Close</button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

/* Helper components */
function StatCard({ label, value }) {
  return (
    <div className="p-3 bg-indigo-50 rounded-lg">
      <div className="text-xs text-gray-600">{label}</div>
      <div className="font-medium mt-1 text-sm">{value}</div>
    </div>
  );
}
