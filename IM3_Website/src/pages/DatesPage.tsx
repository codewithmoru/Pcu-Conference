import React from 'react';

interface DatesPageProps {
  navigateTo: (path: string) => void;
}

interface Milestone {
  step: string;
  dateBadge: string;
  month: string;
  year: string;
  title: string;
  phase: string;
  description: string;
  guidelines: string;
  isCrucial?: boolean;
}

export default function DatesPage({ navigateTo }: DatesPageProps) {
  const milestones: Milestone[] = [
    {
      step: '01',
      dateBadge: '15',
      month: 'NOV',
      year: '2026',
      title: 'Call for Papers Announcement',
      phase: 'Phase 1 · Submissions',
      description:
        'Official announcement and paper submission portal opened for all eight multidisciplinary technical tracks.',
      guidelines:
        'Submission tracks open for original research manuscripts. Initial abstract registration and author profile verification.',
    },
    {
      step: '02',
      dateBadge: '15',
      month: 'FEB',
      year: '2027',
      title: 'Initial Paper Submission Deadline',
      phase: 'Phase 1 · Submissions',
      description:
        'Last date for authors to submit full-length original research papers for double-blind peer review.',
      guidelines:
        'Strict hard deadline. Submissions must adhere to standard IEEE 2-column format and be fully anonymized for double-blind review.',
      isCrucial: true,
    },
    {
      step: '03',
      dateBadge: '15',
      month: 'MAR',
      year: '2027',
      title: 'Notification of Acceptance',
      phase: 'Phase 2 · Review & Evaluation',
      description:
        'Double-blind peer review outcomes and detailed reviewer feedback communicated to corresponding authors.',
      guidelines:
        'Each manuscript reviewed by at least 3 independent domain specialists. Acceptance decisions sent with revision comments.',
    },
    {
      step: '04',
      dateBadge: '25',
      month: 'MAR',
      year: '2027',
      title: 'Camera-Ready Paper Submission',
      phase: 'Phase 3 · Proceedings & Camera-Ready',
      description:
        'Submission of final revised manuscript adhering to formatting, author details, and IEEE publication compliance standards.',
      guidelines:
        'Authors must incorporate all reviewer recommendations, verify IEEE PDF eXpress compliance, and submit final source files.',
      isCrucial: true,
    },
    {
      step: '05',
      dateBadge: '31',
      month: 'MAR',
      year: '2027',
      title: 'Author Registration with Payment',
      phase: 'Phase 3 · Registration & Payment',
      description:
        'Mandatory registration with fee payment for at least one author per paper to guarantee inclusion in the conference proceedings.',
      guidelines:
        'Non-registered papers cannot be included in final presentation schedule or published proceedings.',
      isCrucial: true,
    },
    {
      step: '06',
      dateBadge: '20',
      month: 'APR',
      year: '2027',
      title: 'Final Programme Agenda Announcement',
      phase: 'Phase 4 · Programme & Logistics',
      description:
        'Announcement of the complete conference schedule, track session allocations, session chairs, and keynote speakers.',
      guidelines:
        'Detailed schedule of oral presentations, poster sessions, keynote halls, and networking dinners released.',
    },
    {
      step: '07',
      dateBadge: '06–08',
      month: 'MAY',
      year: '2027',
      title: 'IM3-2027 Conference Days',
      phase: 'Phase 4 · Conference Days',
      description:
        'Three days of groundbreaking multidisciplinary paper presentations, workshops, exhibitions, and industry networking at PCU Pune.',
      guidelines:
        'In-person paper presentations at Pimpri Chinchwad University campus, Pune, India.',
      isCrucial: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900">
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24 border-b border-neutral-200 bg-gradient-to-b from-white via-[#fdf7f7] to-[#faf9f6]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,44,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fef2f2] text-[#b91c2c] border border-[#fecaca] mb-6">
              <span>Important Dates Schedule</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b91c2c]" />
              <span>Fixed Milestones</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-neutral-950 leading-[1.1] mb-6">
              A clear path to <br />
              <span className="text-[#b91c2c]">May 2027.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-normal">
              Official timeline for paper submissions, double-blind peer review evaluations, camera-ready manuscripts, author registrations, and conference proceedings at PCU Pune.
            </p>
          </div>

          {/* Quick Notice Badge */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-[#fbd5d5] shadow-sm max-w-2xl flex items-start gap-4">
            <div className="w-9 h-9 rounded-full bg-[#fdf2f2] text-[#b91c2c] flex items-center justify-center shrink-0 font-bold text-sm">
              !
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900">Important Note on Schedule Compliance</h4>
              <p className="text-xs md:text-sm text-neutral-600 mt-0.5 leading-relaxed">
                Dates are based on the official IEEE Technical Co-Sponsorship schedule. All submission deadlines are strictly enforced at 23:59 IST on the specified dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Timeline Section */}
      <div className="max-w-[1080px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-16">
        {/* Phase Summary Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-neutral-200 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Phase 01</span>
            <div className="font-display font-bold text-neutral-900 text-base md:text-lg mt-1">Submissions</div>
            <div className="text-xs text-[#b91c2c] font-semibold mt-1">Nov 2026 – Feb 2027</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-neutral-200 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Phase 02</span>
            <div className="font-display font-bold text-neutral-900 text-base md:text-lg mt-1">Peer Review</div>
            <div className="text-xs text-[#b91c2c] font-semibold mt-1">Feb 2027 – Mar 2027</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-neutral-200 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Phase 03</span>
            <div className="font-display font-bold text-neutral-900 text-base md:text-lg mt-1">Camera-Ready</div>
            <div className="text-xs text-[#b91c2c] font-semibold mt-1">Mar 2027</div>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-neutral-200 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Phase 04</span>
            <div className="font-display font-bold text-neutral-900 text-base md:text-lg mt-1">Conference</div>
            <div className="text-xs text-[#b91c2c] font-semibold mt-1">6–8 May 2027</div>
          </div>
        </div>

        {/* Milestone Cards Stack with Theme Color Scheme */}
        <div className="space-y-6">
          {milestones.map((m, idx) => (
            <div
              key={m.step}
              className={`p-6 md:p-8 rounded-2xl bg-white border transition-all duration-200 hover:shadow-md ${
                m.isCrucial
                  ? 'border-[#b91c2c]/40 ring-1 ring-[#b91c2c]/10 bg-gradient-to-r from-white via-white to-[#fff8f8]'
                  : 'border-neutral-200'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                {/* Date Badge */}
                <div className="flex items-center md:flex-col md:items-center justify-center shrink-0 w-full md:w-32 p-4 rounded-xl bg-[#fdf2f2] border border-[#fbd5d5] text-center">
                  <div className="text-2xl md:text-3xl font-black font-display text-[#b91c2c] leading-none">
                    {m.dateBadge}
                  </div>
                  <div className="text-xs font-bold text-[#7f1420] tracking-wider uppercase mt-1">
                    {m.month} {m.year}
                  </div>
                  {m.isCrucial && (
                    <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold bg-[#b91c2c] text-white uppercase tracking-wider">
                      Crucial
                    </span>
                  )}
                </div>

                {/* Milestone Details */}
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      Step {m.step} of 07
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="text-xs font-semibold text-[#b91c2c] uppercase tracking-wide">
                      {m.phase}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-neutral-950">
                    {m.title}
                  </h3>
                  <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
                    {m.description}
                  </p>
                  <div className="pt-2 text-xs md:text-sm text-neutral-500 flex items-start gap-2 bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                    <span className="font-semibold text-neutral-700 shrink-0">Guidelines:</span>
                    <span>{m.guidelines}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paper Submission Checklist */}
        <section className="bg-white rounded-3xl p-8 md:p-12 border border-neutral-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b91c2c]">
              Author Checklist
            </span>
            <h3 className="text-2xl font-bold font-display text-neutral-900 mt-1">
              Before You Submit
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              Ensure your manuscript complies with double-blind review criteria and standard format.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#faf9f6] border border-neutral-200 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-sm text-neutral-900 block">Strict Double-Blind Anonymization</strong>
                <span className="text-xs text-neutral-600">Remove author names, affiliations, acknowledgments, and grant IDs from the initial manuscript PDF.</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#faf9f6] border border-neutral-200 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-sm text-neutral-900 block">Manuscript Length & Format</strong>
                <span className="text-xs text-neutral-600">Standard IEEE two-column format, up to 6 pages. Additional pages subject to supplementary fees.</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#faf9f6] border border-neutral-200 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-sm text-neutral-900 block">Similarity & Plagiarism Screening</strong>
                <span className="text-xs text-neutral-600">All submissions will be screened via Turnitin / CrossCheck. Similarity must be strictly below 15%.</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[#faf9f6] border border-neutral-200 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div>
                <strong className="text-sm text-neutral-900 block">Registration Compliance</strong>
                <span className="text-xs text-neutral-600">At least one author must register with payment by 31 March 2027 for paper presentation and proceedings.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bar */}
        <section className="p-8 md:p-12 rounded-3xl bg-neutral-900 text-white text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-display">
            Plan your IM3-2027 submission
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
            Review the registration fee categories or explore the eight technical tracks to select your primary domain.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => navigateTo('/registration')}
              className="btn-learn-more"
            >
              View Registration Fees →
            </button>
            <button
              type="button"
              onClick={() => navigateTo('/about')}
              className="px-5 py-2.5 text-xs font-semibold rounded-full border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition-colors"
            >
              Learn More About Conference
            </button>
            <button
              type="button"
              onClick={() => navigateTo('/')}
              className="px-5 py-2.5 text-xs font-semibold rounded-full border border-neutral-700 text-neutral-300 hover:bg-neutral-800 transition-colors"
            >
              ← Back to Homepage
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

