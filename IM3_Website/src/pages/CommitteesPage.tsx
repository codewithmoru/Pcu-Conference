import { useState, useMemo } from 'react';

interface CommitteesPageProps {
  navigateTo: (path: string) => void;
}

export interface CommitteePerson {
  name: string;
  role: string;
  institution?: string;
  image?: string;
  category: 'chief-patrons' | 'patrons' | 'organizing' | 'technical' | 'invitees';
}

const LEADERSHIP_MEMBERS: CommitteePerson[] = [
  // Chief Patrons
  {
    name: 'Padma Bhushan Dr. Vijay P. Bhatkar',
    role: 'Chief Patron',
    institution: 'Founder Director General, C-DAC',
    image: '/Leadership_&_Committee/Dr_Vijay_Bhatkar.webp',
    category: 'chief-patrons',
  },
  {
    name: 'Padma Shri Prof. Dr. Ganapati D. Yadav',
    role: 'Chief Patron',
    institution: 'Former Vice-Chancellor, ICT Mumbai',
    image: '/Leadership_&_Committee/Dr_Ganapati_Yadav.webp',
    category: 'chief-patrons',
  },
  {
    name: 'Prof. Shekhar C. Mande',
    role: 'Chief Patron',
    institution: 'President, INSA; Former Director General, CSIR',
    image: '/Leadership_&_Committee/Prof._Shekhar_Mande.webp',
    category: 'chief-patrons',
  },
  {
    name: 'Padma Shri Shri Prataprao Pawar',
    role: 'Chief Patron',
    institution: 'Indian Industrialist; Chairman, Sakal Media',
    image: '/Leadership_&_Committee/Prataprao_Pawar.webp',
    category: 'chief-patrons',
  },

  // Patrons
  {
    name: 'Honourable Harshwardhan S. Patil',
    role: 'Patron',
    institution: 'Chancellor, PCU; Trustee, PCET',
    image: '/Leadership_&_Committee/Harshwardhan_Patil.webp',
    category: 'patrons',
  },
  {
    name: 'Shri Dnyaneshwar P. Landge',
    role: 'Patron',
    institution: 'Chairman, PCET',
    image: '/Leadership_&_Committee/Dnyaneshwar_Landge.webp',
    category: 'patrons',
  },
  {
    name: 'Smt. Padma M. Bhosale',
    role: 'Patron',
    institution: 'Vice Chairperson, PCET',
    image: '/Leadership_&_Committee/Padma_Bhosale.webp',
    category: 'patrons',
  },
  {
    name: 'Shri Vitthal S. Kalbhor',
    role: 'Patron',
    institution: 'Secretary, PCET',
    image: '/Leadership_&_Committee/Vitthal_Kalbhor.webp',
    category: 'patrons',
  },
  {
    name: 'Shri Shantaram D. Garade',
    role: 'Patron',
    institution: 'Treasurer, PCET',
    image: '/Leadership_&_Committee/Shantaram_Garade.webp',
    category: 'patrons',
  },
  {
    name: 'Dr. Girish Desai',
    role: 'Patron',
    institution: 'Executive Director, PCET',
    image: '/Leadership_&_Committee/Girish_Desai.webp',
    category: 'patrons',
  },
  {
    name: 'Dr. Santosh S. Sonavane',
    role: 'Patron',
    institution: 'Vice-Chancellor, PCU',
    image: '/Leadership_&_Committee/Santosh _Sonavane.webp',
    category: 'patrons',
  },

  // General & Organizing Chairs
  {
    name: 'Dr. Bharat Kale',
    role: 'General Chair',
    institution: 'Director, R&D, PCU',
    image: '/Leadership_&_Committee/Bharat_Kale.webp',
    category: 'organizing',
  },
  {
    name: 'Dr. Shankar Deosarkar',
    role: 'Co-General Chair & International Relations Chair',
    institution: 'Director, IRO, PCU',
    image: '/Leadership_&_Committee/Shankar_Deosarkar.webp',
    category: 'organizing',
  },
  {
    name: 'Dr. Anil Maheshwari',
    role: 'Organizing Secretary',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Anil_Maheshwari.webp',
    category: 'organizing',
  },
  {
    name: 'Dr. Sachin Pawar',
    role: 'Organizing Secretary',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Sachin_Pawar.webp',
    category: 'organizing',
  },
  {
    name: 'Dr. Vijay Patil',
    role: 'Organizing Co-Secretary',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Vijay_Patil.webp',
    category: 'organizing',
  },
  {
    name: 'Dr. Ramdar Biradar',
    role: 'Organizing Co-Secretary',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Ramdar_Biradar.webp',
    category: 'organizing',
  },
  {
    name: 'Dr. Rahul G. Sonkamble',
    role: 'Conference Convener & Organizing Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Rahul_Sonkamble.webp',
    category: 'organizing',
  },
  {
    name: 'Dr. Swati Shirke-Deshmukh',
    role: 'Conference Co-Convener & Co-Organizing Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Swati_Shirke_Deshmukh.webp',
    category: 'organizing',
  },

  // Technical & Support Leadership
  {
    name: 'Dr. Jaydeep Patil',
    role: 'Technical Program Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Jaydeep_Patil.webp',
    category: 'technical',
  },
  {
    name: 'Dr. Amit Patil',
    role: 'Technical Program Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Amit_Patil.webp',
    category: 'technical',
  },
  {
    name: 'Dr. Amit Gadekar',
    role: 'Technical Program Co-Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Amit_Gadekar.webp',
    category: 'technical',
  },
  {
    name: 'Dr. Bhushan Chaudhari',
    role: 'Technical Program Co-Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Bhushan_Chaudhari.webp',
    category: 'technical',
  },
  {
    name: 'Dr. Anand Rajavat',
    role: 'Publication Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Anand_Rajavat.webp',
    category: 'technical',
  },
  {
    name: 'Dr. Abhijeet Banubakode',
    role: 'Publication Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Abhijeet_Banubakode.webp',
    category: 'technical',
  },
  {
    name: 'Mr. Shankar Patil',
    role: 'Finance Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Shankar_Patil.webp',
    category: 'technical',
  },
  {
    name: 'Ms. Shalaka Sarode',
    role: 'Finance Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Shalaka_Sarode.webp',
    category: 'technical',
  },
  {
    name: 'Mr. Satpalshing Rajput',
    role: 'Co-Finance Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Satpalsingh_Rajput.webp',
    category: 'technical',
  },
  {
    name: 'Dr. Pranav Charkha',
    role: 'Sponsorship Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Pranav_Charkha.webp',
    category: 'technical',
  },
  {
    name: 'Mr. Deepak Pandey',
    role: 'Hospitality Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Deepak_Pandey.webp',
    category: 'technical',
  },
  {
    name: 'Mr. Mahesh Mahajan',
    role: 'IT Support Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Mahesh_Mahajan.webp',
    category: 'technical',
  },
  {
    name: 'Mr. Shivam Sarsar',
    role: 'Promotion, Media & Marketing Chair',
    institution: 'PCU Pune',
    image: '/Leadership_&_Committee/Shivam_Sarsar.webp',
    category: 'technical',
  },

  // Proposed Eminent / International Invitees
  {
    name: 'Dr. Animesh Jha',
    role: 'Eminent Invitee',
    institution: 'University of Leeds, United Kingdom',
    category: 'invitees',
  },
  {
    name: 'Dr. Ashok Joshi',
    role: 'Eminent Invitee',
    institution: 'United States of America',
    category: 'invitees',
  },
  {
    name: 'Prof. Ashutosh Tiwari',
    role: 'Eminent Invitee',
    institution: 'United States of America',
    category: 'invitees',
  },
  {
    name: 'Dr. Kaustubh Dalal',
    role: 'Eminent Invitee',
    institution: 'Sweden',
    category: 'invitees',
  },
  {
    name: 'Dr. Nanasaheb Thorat',
    role: 'Eminent Invitee',
    institution: 'Ireland',
    category: 'invitees',
  },
  {
    name: 'Dr. Anna Bogush',
    role: 'Eminent Invitee',
    institution: 'United Kingdom',
    category: 'invitees',
  },
  {
    name: 'Dr. Pastor Arguelles',
    role: 'Eminent Invitee',
    institution: 'Philippines',
    category: 'invitees',
  },
  {
    name: 'Dr. Keisuke Kusaka',
    role: 'Eminent Invitee',
    institution: 'Japan',
    category: 'invitees',
  },
  {
    name: 'Dr. Craig Friedrich',
    role: 'Eminent Invitee',
    institution: 'Michigan Technological University, USA',
    category: 'invitees',
  },
  {
    name: 'Dr. Ashutosh Dutta',
    role: 'Eminent Invitee',
    institution: 'Johns Hopkins University, USA',
    category: 'invitees',
  },
  {
    name: 'Prof. Valant Matjaz',
    role: 'Eminent Invitee',
    institution: 'University of Nova Gorica, Slovenia, Europe',
    category: 'invitees',
  },
  {
    name: 'Dr. Michael Irwin',
    role: 'Eminent Invitee',
    institution: 'United States of America',
    category: 'invitees',
  },
  {
    name: 'Dr. Ahad Ali',
    role: 'Eminent Invitee',
    institution: 'Lawrence Technological University (LTU), USA',
    category: 'invitees',
  },
  {
    name: 'Dr. Yury Gogotsi',
    role: 'Special Invitee · Dist. University Professor',
    institution: 'Drexel University, Philadelphia, USA',
    category: 'invitees',
  },
];

type CategoryFilter =
  | 'all'
  | 'chief-patrons'
  | 'patrons'
  | 'organizing'
  | 'technical'
  | 'invitees';

const CATEGORY_TABS: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Leadership' },
  { id: 'chief-patrons', label: 'Chief Patrons' },
  { id: 'patrons', label: 'Patrons' },
  { id: 'organizing', label: 'General & Organizing Chairs' },
  { id: 'technical', label: 'Technical Leadership' },
  { id: 'invitees', label: 'Eminent Invitees' },
];

function getInitials(name: string): string {
  const clean = name
    .replace(/^(Dr\.|Prof\.|Professor|Mr\.|Ms\.|Mrs\.|Shri|Smt\.|Honourable|Hon’ble|Padma Shri|Padma Bhushan)\s+/gi, '')
    .trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'PC';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function CommitteesPage({ navigateTo }: CommitteesPageProps) {
  const [activeTab, setActiveTab] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMembers = useMemo(() => {
    return LEADERSHIP_MEMBERS.filter((member) => {
      const matchesCategory = activeTab === 'all' || member.category === activeTab;
      const matchesSearch =
        searchQuery.trim() === '' ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (member.institution && member.institution.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900">
      {/* Page Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24 border-b border-neutral-200 bg-gradient-to-b from-white via-[#fcfaf8] to-[#f7f4f0]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,44,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#fef2f2] text-[#b91c2c] border border-[#fecaca] mb-6">
              <span>Governance & Leadership</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#b91c2c]" />
              <span>IM3-2027</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-neutral-950 leading-[1.1] mb-6">
              Leadership & <br />
              <span className="text-[#b91c2c]">Organizing Committee.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-normal">
              The distinguished academic patrons, executive leaders, and organizing committee chairs directing the conference execution, technical program, and publication quality for IM3-2027.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigateTo('/advisory-committee')}
              className="px-4 py-2 rounded-lg bg-white border border-neutral-300 text-xs font-semibold text-neutral-700 hover:border-[#b91c2c] hover:text-[#b91c2c] transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Looking for Advisory Committee?</span>
              <span className="text-[#b91c2c] font-bold">Go to Advisory Page →</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-12 md:py-16 space-y-10">
        {/* Filter Controls & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-[#b91c2c] text-white shadow-sm'
                      : 'bg-white text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:text-neutral-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              placeholder="Search by name, role, or institute..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-9 rounded-xl bg-white border border-neutral-300 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#b91c2c] focus:ring-1 focus:ring-[#b91c2c]"
            />
            <svg
              className="w-4 h-4 text-neutral-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Member Count Indicator */}
        <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
          <span>Showing <strong>{filteredMembers.length}</strong> committee members</span>
          {activeTab !== 'all' && (
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className="text-[#b91c2c] hover:underline"
            >
              Clear filter
            </button>
          )}
        </div>

        {/* Members Grid with Consistent, Sleek Card & Image Sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMembers.map((person, idx) => {
            const initials = getInitials(person.name);

            return (
              <article
                key={`${person.name}-${idx}`}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-md hover:border-[#b91c2c]/40 transition-all duration-200"
              >
                <div>
                  {/* Portrait Container - Fixed, Professional Aspect Ratio */}
                  <div className="relative w-full h-56 sm:h-60 bg-gradient-to-b from-[#f5f3f0] to-[#eae6e1] overflow-hidden flex items-center justify-center border-b border-neutral-100">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-20 h-20 rounded-full bg-white shadow-inner border border-neutral-200 flex items-center justify-center text-xl font-bold font-display text-[#b91c2c] mb-2">
                          {initials}
                        </div>
                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                          IM3-2027 Leadership
                        </span>
                      </div>
                    )}

                    {/* Category Pill Overlay */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-neutral-800 shadow-sm border border-neutral-200/70">
                        {person.category.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-display font-bold text-neutral-900 text-base md:text-lg leading-snug group-hover:text-[#b91c2c] transition-colors">
                      {person.name}
                    </h3>
                    <div className="text-xs font-semibold text-[#b91c2c] leading-relaxed">
                      {person.role}
                    </div>
                    {person.institution && (
                      <p className="text-xs text-neutral-600 leading-relaxed pt-1 border-t border-neutral-100">
                        {person.institution}
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <div className="w-full h-1 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#b91c2c] w-0 group-hover:w-full transition-all duration-300" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <div className="text-4xl">🔍</div>
            <h3 className="text-lg font-bold text-neutral-900">No committee members matched your search</h3>
            <p className="text-sm text-neutral-500">Try modifying your keyword or switching category tabs.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="btn-learn-more"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Navigation CTA */}
        <section className="p-8 md:p-12 rounded-3xl bg-white border border-neutral-200 text-center space-y-6 mt-16">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-neutral-900">
            Connect with IM3-2027 Leadership
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto text-sm md:text-base">
            For academic inquiries, track proposals, or sponsorship partnerships, please reach out to the organizing secretariat.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => navigateTo('/advisory-committee')}
              className="btn-learn-more"
            >
              View Advisory Committee →
            </button>
            <button
              type="button"
              onClick={() => navigateTo('/about')}
              className="btn-learn-more-outline"
            >
              About the University & Conference
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
