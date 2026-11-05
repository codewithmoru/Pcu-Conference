import React from 'react';

interface AboutPageProps {
  navigateTo: (path: string) => void;
}

export default function AboutPage({ navigateTo }: AboutPageProps) {
  const partners = [
    {
      name: 'Mahatma Phule Krishi Vidyapeeth (MPKV), Rahuri',
      role: 'Institutional & Agricultural Knowledge Partner',
      leader: 'Dr. Vilas K. Kharche',
      leaderTitle: 'Vice-Chancellor, MPKV Rahuri',
      description:
        'A premier agricultural university pioneering climate-resilient farming, precision agronomy, post-harvest technologies, and sustainable rural bio-economy.',
      tag: 'Agricultural Innovation',
    },
    {
      name: 'Materials Research Society of India (MRSI)',
      role: 'Knowledge Partner · Materials & Nanotech',
      leader: 'Prof. S. B. Krupanidhi',
      leaderTitle: 'President, MRSI',
      description:
        'The apex national society dedicated to the advancement of interdisciplinary materials science, semiconductor technologies, functional nanomaterials, and quantum devices.',
      tag: 'Advanced Materials',
    },
    {
      name: 'Maharashtra Academy of Sciences (MASc)',
      role: 'Knowledge Partner · Scientific Research & Policy',
      leader: 'Dr. Dinesh P. Amalnerkar',
      leaderTitle: 'President, Maharashtra Academy of Sciences',
      description:
        'The premier regional science academy fostering multidisciplinary scientific research, scientific talent recognition, and science-informed industrial innovation.',
      tag: 'Pure & Applied Sciences',
    },
  ];

  const pillars = [
    {
      num: '01',
      title: 'Selective Multidisciplinary Forum',
      description:
        'A global stage designed specifically to connect researchers across computing, materials science, healthcare, agriculture, management, and social sciences into a single convergent frontier.',
    },
    {
      num: '02',
      title: 'Rigorous Double-Blind Peer Review',
      description:
        'Every submitted manuscript undergoes evaluation by at least three independent domain experts under proposed IEEE technical co-sponsorship quality guidelines.',
    },
    {
      num: '03',
      title: 'Quality-Driven Acceptance (20–24%)',
      description:
        'Targeting approximately 500 full-paper submissions with final acceptance strictly capped at 100–120 papers based entirely on originality, technical depth, and reproducibility.',
    },
    {
      num: '04',
      title: 'Global Academia–Industry Exchange',
      description:
        'Featuring keynote talks by international fellows, technology showcases, industry exhibitions, and structured matchmaking for translational research with MCCIA and GEF.',
    },
    {
      num: '05',
      title: 'Real-World Societal Impact',
      description:
        'Prioritizing solutions to critical real-world challenges in healthcare delivery, food security, smart clean energy, resilient infrastructure, and ethical digital trust.',
    },
  ];

  const globalNations = [
    'United States of America',
    'United Kingdom',
    'South Korea',
    'Australia',
    'Germany',
    'South Africa',
    'Ireland',
    'Japan',
    'Sweden',
    'Slovenia',
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900">
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24 border-b border-neutral-200 bg-gradient-to-b from-white via-[#fcfaf8] to-[#f7f4f0]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,44,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fef2f2] text-[#b91c2c] border border-[#fecaca] mb-6">
              <span>About IM3-2027</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b91c2c]" />
              <span>Host University & Partners</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-neutral-950 leading-[1.1] mb-6">
              Where disciplines meet. <br />
              <span className="text-[#b91c2c]">Where ideas become impact.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-normal">
              IM3-2027 is a selective international conference hosted by PCET’s Pimpri Chinchwad University, Pune, bringing together world-class researchers, engineers, educators, and industry pioneers to solve challenges at the convergence of technology, materials, and society.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 pt-10 border-t border-neutral-200">
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#b91c2c] font-display">6–8 May</div>
              <div className="text-xs md:text-sm font-semibold text-neutral-500 uppercase tracking-wider mt-1">2027 at PCU Pune</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-neutral-900 font-display">08</div>
              <div className="text-xs md:text-sm font-semibold text-neutral-500 uppercase tracking-wider mt-1">Multidisciplinary Tracks</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-neutral-900 font-display">500</div>
              <div className="text-xs md:text-sm font-semibold text-neutral-500 uppercase tracking-wider mt-1">Target Submissions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-neutral-900 font-display">100–120</div>
              <div className="text-xs md:text-sm font-semibold text-neutral-500 uppercase tracking-wider mt-1">Quality Acceptances</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-24">
        {/* Section 1: About the University */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#b91c2c]">
              Host Institution
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-neutral-950 tracking-tight">
              About PCET’s Pimpri Chinchwad University
            </h2>
            <p className="text-neutral-700 leading-relaxed">
              Pimpri Chinchwad University (PCU) is a multidisciplinary, research-oriented university situated on an expansive 70-acre campus in the Pune Metropolitan Area, framed by the picturesque natural backdrop of the Sahyadri hills.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              PCU operates under the aegis of the renowned <strong>Pimpri Chinchwad Education Trust (PCET)</strong>, established in 1990. Over three decades of educational excellence, PCET institutions across Nigdi, Ravet, and Sate have shaped the careers of more than <strong>46,000 learners</strong>.
            </p>
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm space-y-2">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Statutory Standing</div>
                <p className="text-sm text-neutral-800 font-medium">
                  Established under <strong>Maharashtra Act No. V of 2023</strong> and recognized by the University Grants Commission under <strong>UGC Section 2(f)</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
              <img
                src="/banner.webp"
                alt="Pimpri Chinchwad University Campus"
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-1">Academic Faculties</h4>
                <p className="text-sm text-neutral-600">
                  Engineering & Technology, Science, Pharmacy, Media & Design, Liberal Arts, Law, and Allied Disciplines.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-neutral-200">
                <h4 className="font-bold text-neutral-900 mb-1">GARJE MARATHI Incubation Centre</h4>
                <p className="text-sm text-neutral-600">
                  A high-powered entrepreneurship hub nurturing student and faculty deep-tech start-ups and IP translation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: About IM3-2027 Conference & Evolution */}
        <section className="bg-white rounded-3xl p-8 md:p-14 border border-neutral-200/90 shadow-sm">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#b91c2c] mb-2">
              Conference Genesis & Horizon
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-neutral-950 tracking-tight mb-6">
              Building on the International Mastermind Meet
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              IM3-2027 builds on the International Mastermind Meet platform established through IM3-2026, advancing it into a rigorous, selective multidisciplinary international conference connecting sciences, engineering, healthcare, agriculture, digital trust, and societal policy.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8">
              The 2026 edition convened a global forum at PCU with distinguished academicians, scientists, and researchers representing ten nations worldwide:
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 mb-10">
            {globalNations.map((nation) => (
              <span
                key={nation}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fdf2f2] text-xs font-semibold text-[#b91c2c] border border-[#fbd5d5]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#b91c2c]" />
                {nation}
              </span>
            ))}
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-[#faf7f5] border border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-2">
              IEEE Technical Co-Sponsorship & Quality Intent
            </h3>
            <p className="text-sm md:text-base text-neutral-700 leading-relaxed mb-4">
              Technical Co-Sponsorship has been formally requested through the submitted application to the <strong>IEEE Maharashtra Section</strong>. Publication of accepted, peer-reviewed papers in <strong>IEEE Xplore</strong> is intended, subject to technical co-sponsorship approval, IEEE Conference Publication Program review, and compliance with all IEEE quality standards.
            </p>
            <div className="text-xs font-semibold text-[#b91c2c] uppercase tracking-wider">
              Double-Blind Peer Review · Minimum 3 Independent Reviewers Per Manuscript
            </div>
          </div>
        </section>

        {/* Section 3: Institutional & Knowledge Partners */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#b91c2c] mb-2">
              Collaborative Strength
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-neutral-950 tracking-tight mb-4">
              Institutional & Knowledge Partners
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              IM3-2027 is strengthened through formal partnerships with premier agricultural and scientific organizations, enriching conference tracks with deep scientific governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover:border-[#b91c2c]/40 hover:shadow-md transition-all"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-neutral-100 text-neutral-700 mb-4">
                    {partner.tag}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 font-display">
                    {partner.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#b91c2c] mb-4">
                    {partner.role}
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100">
                  <div className="text-xs text-neutral-400 font-semibold uppercase">Partner Leadership</div>
                  <div className="text-sm font-bold text-neutral-900 mt-0.5">{partner.leader}</div>
                  <div className="text-xs text-neutral-500">{partner.leaderTitle}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Outreach */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Industry & Ecosystem Outreach
              </span>
              <h4 className="text-lg font-bold text-neutral-900 mt-1">
                MCCIA, GEF & Corporate Innovation Partners
              </h4>
              <p className="text-sm text-neutral-600 max-w-2xl mt-1">
                Collaborative engagement with the Mahratta Chamber of Commerce, Industries and Agriculture (MCCIA), Global Economic Forum (GEF), and key industrial/CSR partners for technology demonstrations and academia-industry roundtables.
              </p>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('/committees')}
              className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-neutral-900 text-white hover:bg-[#b91c2c] transition-colors whitespace-nowrap cursor-pointer"
            >
              View Leadership & Governance →
            </button>
          </div>
        </section>

        {/* Section 4: Why IM3-2027 (Five Pillars) */}
        <section className="bg-gradient-to-br from-[#171717] to-[#262626] text-white rounded-3xl p-8 md:p-14 shadow-xl">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Core Principles
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-white tracking-tight mt-2 mb-4">
              Why IM3-2027
            </h2>
            <p className="text-neutral-300 text-sm md:text-base">
              Conceived as a premier scientific forum that prioritizes verifiable academic rigour, evidence, reproducible methodology, and real-world societal translation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/40 hover:bg-white/10 transition-all flex flex-col justify-between"
              >
                <div className="text-2xl font-black font-mono text-red-400 mb-3">
                  {pillar.num}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Bar to Next Steps */}
        <section className="p-8 md:p-12 rounded-3xl bg-white border border-neutral-200 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-neutral-900">
            Ready to participate in IM3-2027?
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto text-sm md:text-base">
            Check the official submission timelines, explore the eight technical tracks, or inspect the registration fee schedule.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => navigateTo('/dates')}
              className="btn-learn-more"
            >
              Important Dates Schedule →
            </button>
            <button
              type="button"
              onClick={() => navigateTo('/registration')}
              className="btn-learn-more-outline"
            >
              Registration Fees & Guidelines
            </button>
            <button
              type="button"
              onClick={() => navigateTo('/')}
              className="px-5 py-2.5 text-xs font-semibold rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              ← Back to Homepage
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

