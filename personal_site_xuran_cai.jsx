import React from "react";

// Personal website single-file React component (Tailwind CSS)
// Default export: a clean, responsive single-page site for Xuran Cai

export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Xuran Cai</h1>
            <p className="text-sm text-gray-600">Oxford, UK · Kaiserslautern, Germany</p>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#research" className="hover:underline">Research</a>
            <a href="#publications" className="hover:underline">Publications</a>
            <a href="#teaching" className="hover:underline">Teaching</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="mb-12">
          <div className="bg-white p-8 rounded-2xl shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold">Hi — I’m Xuran Cai.</h2>
                <p className="mt-2 text-gray-700 max-w-2xl">
                  I am a Computer Science phd student in the Oxford–Max Planck joint PhD program (2025–present).
                  My work focuses on compiler analysis, control-flow graph decompositions, and program optimizations.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="mailto:louiscaixuran@outlook.com"
                    className="inline-block px-4 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-50"
                  >
                    Email
                  </a>
                  <a
                    href="/RenderCV_EngineeringResumes_Theme.pdf"
                    className="inline-block px-4 py-2 rounded-md bg-gray-900 text-white text-sm"
                    download
                  >
                    Download CV (PDF)
                  </a>
                </div>
              </div>

              <div className="text-sm text-gray-600">
                <p><strong>Current:</strong> Oxford–Max Planck joint PhD (Computer Science)</p>
                <p className="mt-2"><strong>Email:</strong> louiscaixuran@outlook.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* About / Education */}
        <section id="about" className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">Oxford–Max Planck Joint Program</h4>
              <p className="text-sm text-gray-600">Doctor of Philosophy, Computer Science — Sep 2025 – Present</p>
              <p className="mt-2 text-sm">Supervisor: Prof. Amir Goharshady (Oxford) and Prof. Rupak Majumdar (MPI).</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">Hong Kong University of Science and Technology</h4>
              <p className="text-sm text-gray-600">Master of Philosophy, Computer Science & Engineering — Sept 2023 – June 2025</p>
              <p className="mt-2 text-sm">Supervisor: Prof. Amir Goharshady and Prof. Jiasi Shen.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">University of Wisconsin–Madison</h4>
              <p className="text-sm text-gray-600">B.Sc., Computer Science & Mathematics — Sept 2019 – May 2023</p>
              <p className="mt-2 text-sm">GPA: 3.86/4.0 — Graduated with Distinction and Major Distinction in CS.</p>
            </div>
          </div>
        </section>

        {/* Research & Publications */}
        <section id="research" className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Research</h3>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-sm text-gray-700">
              My research centers on compiler optimization, graph theory, and efficient algorithms for program analysis.
              I am generally interested in all areas of Theory Computer Science, including algorithms, formal methods, programming languages, and blockchain.
            </p>
          </div>
        </section>

        <section id="publications" className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Selected Publications & Manuscripts</h3>

          <div className="space-y-4">
            <article className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">Invariant Generation for Floating-Point Programs via Constraint Solving</h4>
              <p className="text-sm text-gray-600">October 2025 — Submitted to OOPSLA'26</p>
              <p className="mt-2 text-sm">Authors: X. Cai, L. Chen, H. Fu</p>
            </article>

            <article className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">Enhancing Compiler Optimization Efficiency through Grammatical Decompositions of CFGs</h4>
              <p className="text-sm text-gray-600">July 2025 — MPhil Final Thesis</p>
              <p className="mt-2 text-sm">Author: X. Cai</p>
            </article>

            <article className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">Faster Chaitin-like Register Allocation via Grammatical Decompositions of CFGs</h4>
              <p className="text-sm text-gray-600">March 2025 — ASPLOS'25</p>
              <p className="mt-2 text-sm">Authors: X. Cai, A.K. Goharshady, S. Hitarth, C.K. Lam</p>
            </article>

        </section>

        {/* Teaching */}
        <section id="teaching" className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Teaching & TA Experience</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">Functional Programming (practical)</h4>
              <p className="text-sm text-gray-600">MT Semester 2025–26 — Institute: Oxford</p>
              <p className="mt-2 text-sm">Instructor: Prof. Andrzej Murawski</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">Honors Discrete Mathematical Tools for CS</h4>
              <p className="text-sm text-gray-600">Fall Semester 2024–25 — Institute: HKUST</p>
              <p className="mt-2 text-sm">Instructor: Prof. Amir Goharshady</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">Discrete Mathematical Tools for CS</h4>
              <p className="text-sm text-gray-600">Spring Semester 2023–24 — Institute: HKUST</p>
              <p className="mt-2 text-sm">Instructors: Prof. Sunil Arya, Prof. Jiasi Shen</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-medium">Introduction to Computer Networks</h4>
              <p className="text-sm text-gray-600">Spring Semester 2021–22 — Institute: UW–Madison</p>
              <p className="mt-2 text-sm">Instructor: Prof. Suman Banerjee</p>
            </div>
          </div>
        </section>

        {/* Experience & Conferences */}
        <section id="experience" className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Experience & Conferences</h3>

          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <div>
              <h4 className="font-medium">Summer Intern — Software Developer, Intel (Shanghai)</h4>
              <p className="text-sm text-gray-600">June 2021 – Aug 2021</p>
              <p className="mt-2 text-sm">Worked on designing a service mesh structure with SGX hardware and implemented core system stereotypes.</p>
            </div>

            <div>
              <h4 className="font-medium">Conferences / Summer Schools</h4>
              <ul className="list-disc pl-5 text-sm mt-2 space-y-1 text-gray-700">
                <li>SETTA'24 — Hong Kong SAR (Nov 26–28, 2024)</li>
                <li>FM'24 — Milan, Italy (Sep 9–13, 2024)</li>
                <li>Summer School on Discrete Mathematics — Prague (July 1–5, 2024)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-16">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-sm">Email me at <a href="mailto:louiscaixuran@outlook.com" className="underline">louiscaixuran@outlook.com</a></p>
            <p className="text-sm mt-3">If you’d like the full CV (PDF) or supplementary materials, click the button above to download.</p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-6">
        <div className="max-w-4xl mx-auto px-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Xuran Cai — Built with ❤️ • Hosted wherever you prefer.</p>
        </div>
      </footer>
    </div>
  );
}
