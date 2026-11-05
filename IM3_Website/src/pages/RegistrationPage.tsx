import React from 'react';

interface RegistrationPageProps {
  navigateTo: (path: string) => void;
}

export default function RegistrationPage({ navigateTo }: RegistrationPageProps) {
  const authorFees = [
    {
      category: 'Indian Student Author',
      ieeeMember: '₹8,000',
      nonIeee: '₹9,000',
      notes: 'Full-time undergraduate, postgraduate, or PhD research scholars with valid student ID.',
    },
    {
      category: 'Indian Faculty Member',
      ieeeMember: '₹9,000',
      nonIeee: '₹10,000',
      notes: 'Academic faculty members and teaching staff from recognized Indian universities / institutes.',
    },
    {
      category: 'Indian Industry Author',
      ieeeMember: '₹10,000',
      nonIeee: '₹12,000',
      notes: 'Professionals, scientists, and engineers affiliated with corporate or industrial R&D entities.',
    },
    {
      category: 'International Author',
      ieeeMember: 'USD 250',
      nonIeee: 'USD 300',
      notes: 'Authors affiliated with academic or industrial institutions outside India.',
    },
  ];

  const delegateFees = [
    {
      category: 'Indian Student Delegate',
      ieeeMember: '₹2,500',
      nonIeee: '₹3,000',
      notes: 'Attendee only (non-presenter) with valid student identification.',
    },
    {
      category: 'Faculty / Research Delegate',
      ieeeMember: '₹3,500',
      nonIeee: '₹4,500',
      notes: 'Academic attendee wishing to participate in sessions, keynotes, and networking.',
    },
    {
      category: 'Industry Delegate',
      ieeeMember: '₹5,000',
      nonIeee: '₹6,000',
      notes: 'Corporate delegate seeking technology discovery, recruiting, and networking.',
    },
    {
      category: 'International Delegate',
      ieeeMember: 'USD 100',
      nonIeee: 'USD 125',
      notes: 'International attendees participating without presenting an accepted paper.',
    },
  ];

  const entitlements = [
    {
      icon: '🎫',
      title: 'Full Technical Access',
      desc: 'Admission to all 8 technical tracks, keynote addresses, plenary sessions, and industrial showcases.',
    },
    {
      icon: '🎒',
      title: 'Conference Kit & Badge',
      desc: 'Official IM3-2027 conference delegate kit, proceedings compendium, badge, and documentation.',
    },
    {
      icon: '☕',
      title: 'Hospitality & Dining',
      desc: 'Catered buffet lunches, morning & afternoon tea/coffee breaks, and networking receptions (6–8 May 2027).',
    },
    {
      icon: '📜',
      title: 'Official Certification',
      desc: 'Authenticated Certificate of Paper Presentation for presenting authors; Certificate of Participation for delegates.',
    },
    {
      icon: '📚',
      title: 'Proceedings & Digital Access',
      desc: 'Full digital copy of conference proceedings; inclusion in IEEE Xplore for eligible presented papers.',
    },
    {
      icon: '🤝',
      title: 'Industry Matchmaking',
      desc: 'Access to MCCIA & GEF networking tables, startup demo kiosks, and academic-industry roundtable sessions.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900">
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24 border-b border-neutral-200 bg-gradient-to-b from-white via-[#fdf7f7] to-[#faf9f6]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,44,0.07),transparent_60%)] pointer-events-none" />
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fef2f2] text-[#b91c2c] border border-[#fecaca] mb-6">
              <span>Registration & Fees</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b91c2c]" />
              <span>Official Tariff Matrix</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-neutral-950 leading-[1.1] mb-6">
              Registration <br />
              <span className="text-[#b91c2c]">Fees & Policy.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-normal">
              Clear, transparent pricing structure for authors, academicians, students, and industry delegates participating in IM3-2027 at PCET’s Pimpri Chinchwad University.
            </p>
          </div>

          {/* Key Deadline Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-neutral-200">
            <div className="p-4 rounded-xl bg-white border border-neutral-200">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Author Registration Deadline</span>
              <div className="text-xl font-bold text-[#b91c2c] font-display mt-0.5">31 March 2027</div>
              <p className="text-xs text-neutral-500 mt-1">Mandatory for inclusion in proceedings</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-neutral-200">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">IEEE Member Discount</span>
              <div className="text-xl font-bold text-neutral-900 font-display mt-0.5">Substantial Savings</div>
              <p className="text-xs text-neutral-500 mt-1">Valid IEEE membership number required</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-neutral-200">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Venue Location</span>
              <div className="text-xl font-bold text-neutral-900 font-display mt-0.5">PCU Campus, Pune</div>
              <p className="text-xs text-neutral-500 mt-1">6–8 May 2027 in-person conference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-20">
        {/* Table 1: Author Registration Fees */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#b91c2c]">Category A</span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-neutral-950 mt-1">
              Author Registration Fees (Paper Presenters)
            </h2>
            <p className="text-sm md:text-base text-neutral-600 mt-1">
              At least one author of every accepted paper must complete registration by 31 March 2027.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">Author Category</th>
                    <th className="py-4 px-6 font-semibold bg-[#b91c2c]">IEEE Member Rate</th>
                    <th className="py-4 px-6 font-semibold">Non-IEEE Rate</th>
                    <th className="py-4 px-6 font-semibold hidden md:table-cell">Eligibility Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-sm">
                  {authorFees.map((fee) => (
                    <tr key={fee.category} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-neutral-900">{fee.category}</td>
                      <td className="py-4 px-6 font-black text-[#b91c2c] bg-red-50/50 font-mono text-base">
                        {fee.ieeeMember}
                      </td>
                      <td className="py-4 px-6 font-bold text-neutral-700 font-mono text-base">
                        {fee.nonIeee}
                      </td>
                      <td className="py-4 px-6 text-xs text-neutral-500 hidden md:table-cell">
                        {fee.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Table 2: Delegate Fees */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#b91c2c]">Category B</span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-neutral-950 mt-1">
              Delegate Registration Fees (Non-Presenters / Attendees)
            </h2>
            <p className="text-sm md:text-base text-neutral-600 mt-1">
              For participants who wish to attend technical sessions, workshops, keynotes, and network.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-neutral-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">Delegate Category</th>
                    <th className="py-4 px-6 font-semibold bg-[#b91c2c]">IEEE Member Rate</th>
                    <th className="py-4 px-6 font-semibold">Non-IEEE Rate</th>
                    <th className="py-4 px-6 font-semibold hidden md:table-cell">Attendee Scope</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-sm">
                  {delegateFees.map((fee) => (
                    <tr key={fee.category} className="hover:bg-neutral-50 transition-colors">
                      <td className="py-4 px-6 font-bold text-neutral-900">{fee.category}</td>
                      <td className="py-4 px-6 font-black text-[#b91c2c] bg-red-50/50 font-mono text-base">
                        {fee.ieeeMember}
                      </td>
                      <td className="py-4 px-6 font-bold text-neutral-700 font-mono text-base">
                        {fee.nonIeee}
                      </td>
                      <td className="py-4 px-6 text-xs text-neutral-500 hidden md:table-cell">
                        {fee.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-neutral-500 italic">
            * Note: Fees are proposed under the initial conference brochure and subject to revision before the final Call for Papers. Applicable statutory taxes, payment gateway/bank charges, and additional-page charges will be announced separately.
          </p>
        </section>

        {/* Section 3: Registration Entitlements */}
        <section className="bg-white rounded-3xl p-8 md:p-14 border border-neutral-200 shadow-sm space-y-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b91c2c]">
              Attendee Privileges
            </span>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-neutral-900 mt-1">
              What Your Registration Includes
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              Every registered author and delegate receives full access to conference amenities and technical proceedings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entitlements.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#faf9f6] border border-neutral-200/80 hover:border-[#b91c2c]/40 transition-all space-y-2"
              >
                <div className="text-2xl">{item.icon}</div>
                <h4 className="font-bold text-neutral-900 text-base">{item.title}</h4>
                <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Critical Author Policies */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-white border border-neutral-200 space-y-4">
            <h4 className="text-lg font-bold text-neutral-900 font-display">
              Author Presentation & "No-Show" Policy
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              In accordance with IEEE conference publication standards, each accepted paper must be presented in person at PCU Pune by one of the registered authors during the scheduled track session.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Papers that are not presented at the conference ("no-show" papers) will be excluded from submission to IEEE Xplore, and registration fees will not be refunded.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-neutral-200 space-y-4">
            <h4 className="text-lg font-bold text-neutral-900 font-display">
              IEEE Member Verification & Payment
            </h4>
            <p className="text-sm text-neutral-600 leading-relaxed">
              To avail of the discounted IEEE Member registration rate, authors and delegates must provide a valid IEEE Membership Number and upload digital proof of current active membership during registration.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Official payment gateway links and wire transfer bank credentials will be provided in author acceptance notifications.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="p-8 md:p-12 rounded-3xl bg-neutral-900 text-white text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-display">
            Need more information about IM3-2027?
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
            Check the important milestones timeline or review the conference committees and academic leadership.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => navigateTo('/dates')}
              className="btn-learn-more"
            >
              Check Important Dates →
            </button>
            <button
              type="button"
              onClick={() => navigateTo('/committees')}
              className="btn-learn-more-outline"
            >
              View Conference Committees
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

