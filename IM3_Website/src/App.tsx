import { useEffect, useState, useRef } from 'react';
import HowItWorks, { type Step } from '@/components/ui/how-it-works';
import FlexCarousel, { type FlexCarouselRef, EIGHT_DOMAINS_ITEMS } from '@/components/ui/FlexCarousel';
import SpecularButton from '@/components/ui/SpecularButton';

const nav = [
  ['About', 'about'],
  ['Tracks', 'tracks'],
  ['Call for Papers', 'papers'],
  ['Dates', 'dates'],
  ['Registration', 'registration'],
  ['Committees', 'committees'],
  ['Contact', 'contact'],
];

const conferenceDates: Step[] = [
  {
    title: 'Call for Papers',
    description: 'Official announcement and paper submission portal opened for all eight multidisciplinary technical tracks.',
    dateBadge: '15 NOV',
    year: '2026',
    colorTheme: 'crimson',
  },
  {
    title: 'Initial Paper Submission Deadline',
    description: 'Last date for authors to submit full-length original research papers for double-blind peer review.',
    dateBadge: '15 FEB',
    year: '2027',
    colorTheme: 'blue',
  },
  {
    title: 'Notification of Acceptance',
    description: 'Double-blind peer review outcomes and reviewer feedback communicated to corresponding authors.',
    dateBadge: '15 MAR',
    year: '2027',
    colorTheme: 'purple',
  },
  {
    title: 'Camera-Ready Paper',
    description: 'Submission of final revised manuscript adhering to formatting and publication compliance standards.',
    dateBadge: '25 MAR',
    year: '2027',
    colorTheme: 'orange',
  },
  {
    title: 'Author Registration with Payment',
    description: 'Mandatory registration with fee payment for at least one author per paper for conference proceedings.',
    dateBadge: '31 MAR',
    year: '2027',
    colorTheme: 'crimson',
  },
  {
    title: 'Final Programme Agenda',
    description: 'Announcement of the complete conference schedule, track session allocations, and keynote speakers.',
    dateBadge: '20 APR',
    year: '2027',
    colorTheme: 'blue',
  },
  {
    title: 'IM3-2027 Conference',
    description: 'Three days of groundbreaking multidisciplinary paper presentations, workshops, and industry networking at PCU Pune.',
    dateBadge: '06–08 MAY',
    year: '2027',
    colorTheme: 'crimson',
  },
];

const fees = [
  ['Indian Student Author', '₹8,000', '₹9,000'],
  ['Indian Faculty Member', '₹9,000', '₹10,000'],
  ['Indian Industry Author', '₹10,000', '₹12,000'],
  ['International Author', 'USD 250', 'USD 300'],
  ['Indian Student Delegate', '₹2,500', '₹3,000'],
  ['Faculty / Research Delegate', '₹3,500', '₹4,500'],
  ['Industry Delegate', '₹5,000', '₹6,000'],
  ['International Delegate', 'USD 100', 'USD 125'],
];

// Clean inline SVG arrow - never renders as missing font glyph [x]
function Arrow({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="IM3-2027 home">
      <img src="/pcu-conference-logo.png" alt="Pimpri Chinchwad University" />
    </a>
  );
}

function ConvergenceGraphic() {
  const nodes = [
    ['Artificial Intelligence', 'node-1'],
    ['Materials Science', 'node-2'],
    ['Healthcare Innovation', 'node-3'],
    ['Sustainable Systems', 'node-4'],
    ['Advanced Engineering', 'node-5'],
    ['Science & Society', 'node-6'],
  ];

  return (
    <div className="convergence" aria-hidden="true">
      <div className="orbit orbit-one">
        {nodes.slice(0, 2).map(([label, position]) => (
          <span className={`planet ${position}`} key={label}>
            <b>{label}</b>
          </span>
        ))}
      </div>
      <div className="orbit orbit-two">
        {nodes.slice(2, 4).map(([label, position]) => (
          <span className={`planet ${position}`} key={label}>
            <b>{label}</b>
          </span>
        ))}
      </div>
      <div className="orbit orbit-three">
        {nodes.slice(4).map(([label, position]) => (
          <span className={`planet ${position}`} key={label}>
            <b>{label}</b>
          </span>
        ))}
      </div>
      <div className="axis axis-x" />
      <div className="axis axis-y" />
      <h1 className="core-title" id="hero-title">
        <span>International</span>
        <strong>Master-Mind</strong>
        <em>Meet 2027</em>
      </h1>
    </div>
  );
}

function SectionHead({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="section-head" data-aos="fade-up">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const carouselRef = useRef<FlexCarouselRef>(null);

  // AOS (Animate On Scroll) Observer
  useEffect(() => {
    const aosElements = document.querySelectorAll<HTMLElement>('[data-aos]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    aosElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleDomainSelect = (index: number) => {
    setActiveDomainIndex(index);
    carouselRef.current?.goTo(index);
  };

  const currentDomain = EIGHT_DOMAINS_ITEMS[activeDomainIndex] || EIGHT_DOMAINS_ITEMS[0];

  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Header */}
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
            {nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href="#papers">
            <span>Call for papers</span>
            <Arrow />
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-art" data-aos="zoom-in" data-aos-duration="1000">
              <ConvergenceGraphic />
            </div>
            <div className="hero-meta" data-aos="fade-up" data-aos-delay="200">
              <div>
                <small>When</small>
                <strong>6—8 May 2027</strong>
              </div>
              <div>
                <small>Where</small>
                <strong>PCU, Pune, India</strong>
              </div>
              <p>
                Where disciplines converge.
                <br />
                Where ideas become innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Glance */}
        <section className="glance" aria-label="Conference at a glance">
          <div className="glance-inner">
            <p className="glance-lead" data-aos="fade-right">
              A global forum for rigorous research and practical innovation.
            </p>
            <div data-aos="fade-up" data-aos-delay="100">
              <strong>08</strong>
              <span>
                Proposed
                <br />
                technical tracks
              </span>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <strong>500</strong>
              <span>
                Target full-paper
                <br />
                submissions
              </span>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <strong>100–120</strong>
              <span>
                Target final
                <br />
                acceptances
              </span>
            </div>
          </div>
        </section>

        {/* 01 / About */}
        <section className="section about" id="about">
          <div className="editorial-grid">
            <SectionHead eyebrow="01 / The conference" title="Research without boundaries." />
            <div className="about-copy" data-aos="fade-left" data-aos-delay="150">
              <p className="lede">
                IM3-2027 brings researchers, educators and industry together to explore the space where disciplines meet—and where rigorous ideas become useful innovation.
              </p>
              <div className="two-col-copy">
                <p>
                  Hosted by PCET’s Pimpri Chinchwad University, the conference is conceived as an international platform for multidisciplinary research, peer exchange and meaningful academia–industry engagement.
                </p>
                <p>
                  The proposed programme combines reviewed oral presentations, poster sessions and collaboration opportunities, with an emphasis on clear methodology, evidence and societal relevance.
                </p>
              </div>
              <a className="text-link" href="#papers">
                <span>Read the call for papers</span>
                <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* 02 / Eight Domains - Visually Stunning Flex Carousel */}
        <section className="section tracks" id="tracks">
          <div className="max-w-[1240px] mx-auto">
            <SectionHead
              eyebrow="02 / Research across disciplines"
              title="Eight domains. One shared frontier."
              note="Explore the eight technical tracks for IM3-2027. Use the previous / next buttons or click any domain tab below to inspect the track cards."
            />

            {/* Domain Quick-Select Indicator Bar */}
            <div
              className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-4"
              role="tablist"
              aria-label="Select technical domain"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {EIGHT_DOMAINS_ITEMS.map((item, index) => {
                const isActive = activeDomainIndex === index;
                return (
                  <button
                    key={item.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleDomainSelect(index)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#b91c2c] text-white border-[#b91c2c] shadow-md scale-105'
                        : 'bg-white/90 text-neutral-700 border-neutral-300 hover:border-[#b91c2c] hover:text-[#b91c2c]'
                    }`}
                  >
                    <span className="font-mono opacity-80">{String(index + 1).padStart(2, '0')}</span>
                    <span className="hidden md:inline">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Luminous, Visually Appealing Carousel Stage */}
            <div
              className="tracks-stage"
              data-aos="zoom-in"
              data-aos-duration="850"
            >
              <FlexCarousel
                ref={carouselRef}
                items={EIGHT_DOMAINS_ITEMS}
                preset="ribbon"
                intro="rise"
                cardHeight={0.65}
                gap={22}
                radius={24}
                fit="portrait"
                autoplay={false}
                captureWheel={false}
                showNavButtons={true}
                focusOnClick={true}
                captions={true}
                onChange={(index) => setActiveDomainIndex(index)}
              />
            </div>

            {/* Active Domain Spotlight Showcase Card */}
            <div
              className="mt-6 p-6 md:p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#fdf2f2] text-[#b91c2c] border border-[#f5d0d0]">
                    Track {String(activeDomainIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Domain Spotlight · {activeDomainIndex + 1} of 08
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight">
                  {currentDomain.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 max-w-3xl leading-relaxed">
                  {currentDomain.description}
                </p>
                {currentDomain.tags && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentDomain.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => carouselRef.current?.prev()}
                  className="px-4 py-2.5 text-xs font-semibold rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  ← Prev Track
                </button>
                <button
                  type="button"
                  onClick={() => carouselRef.current?.next()}
                  className="px-4 py-2.5 text-xs font-semibold rounded-lg bg-[#b91c2c] text-white hover:bg-[#7f1420] transition-colors cursor-pointer"
                >
                  Next Track →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / Call for Papers */}
        <section className="papers" id="papers">
          <div className="papers-grid">
            <div data-aos="fade-right">
              <p className="eyebrow light">03 / Call for papers</p>
              <h2>
                Bring your research
                <br />
                into the conversation.
              </h2>
            </div>
            <div className="papers-copy" data-aos="fade-left" data-aos-delay="150">
              <p>
                Original, unpublished research aligned with the conference tracks and interdisciplinary applications is invited. Submissions should demonstrate technical rigour, clear methodology, evidence and attention to reproducibility and practical or societal relevance.
              </p>
              <ul>
                <li>Proposed double-blind peer review</li>
                <li>Oral and poster presentation formats</li>
                <li>At least three independent reviewers proposed per paper</li>
              </ul>
              <button className="btn btn-light" type="button" disabled title="Official submission destination not yet supplied">
                Paper submission — link pending
              </button>
            </div>
          </div>
        </section>

        {/* 04 / Important Dates - Professional How-It-Works Timeline */}
        <section className="section dates" id="dates">
          <SectionHead
            eyebrow="04 / Important dates"
            title="A clear path to May 2027."
            note="Official milestone timeline for paper submission, peer review, and conference proceedings. All dates are fixed as scheduled."
          />
          <div className="mt-12" data-aos="fade-up" data-aos-delay="100">
            <HowItWorks features={conferenceDates} />
          </div>
        </section>

        {/* 05 / Review */}
        <section className="review">
          <div className="review-grid">
            <SectionHead eyebrow="05 / Publication & review" title="Quality, made transparent." />
            <div className="review-cards" data-aos="fade-up" data-aos-delay="150">
              <article>
                <span>01</span>
                <h3>Independent review</h3>
                <p>
                  A double-blind process with at least three independent reviewers per paper is proposed, supported by track-chair and TPC review.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Quality assurance</h3>
                <p>
                  Technical quality control and plagiarism or similarity screening are proposed as part of the review process.
                </p>
              </article>
              <article className="publication">
                <span>Status note</span>
                <h3>IEEE approval is not confirmed</h3>
                <p>
                  IEEE Maharashtra Section technical co-sponsorship has been requested. IEEE Xplore publication is intended, subject to approval and all applicable IEEE requirements.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 06 / Registration */}
        <section className="section registration" id="registration">
          <SectionHead
            eyebrow="06 / Registration"
            title="Proposed registration fees."
            note="Fees are subject to revision. Taxes, bank charges and applicable additional-page charges will be announced separately."
          />
          <div className="fee-table" role="table" aria-label="Proposed registration fees" data-aos="fade-up" data-aos-delay="150">
            <div className="fee-row fee-head" role="row">
              <span role="columnheader">Category</span>
              <span role="columnheader">IEEE member</span>
              <span role="columnheader">Non-IEEE</span>
            </div>
            {fees.map(([category, member, nonMember], idx) => (
              <div
                className="fee-row"
                role="row"
                key={category}
                data-aos="fade-up"
                data-aos-delay={String(50 * idx)}
              >
                <strong role="cell">{category}</strong>
                <span role="cell" data-label="IEEE member">
                  {member}
                </span>
                <span role="cell" data-label="Non-IEEE">
                  {nonMember}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 07 / Committees */}
        <section className="section committees" id="committees">
          <SectionHead
            eyebrow="07 / Conference leadership"
            title="Convened with purpose."
            note="The full committee directory will be populated with exact names, titles and affiliations from the brochure when supplied."
          />
          <div className="leadership" data-aos="fade-up" data-aos-delay="100">
            <article>
              <p>Conference Convener</p>
              <h3>Dr. Rahul G. Sonkamble</h3>
            </article>
            <article>
              <p>Conference Co-Convener</p>
              <h3>Dr. Swati Shirke-Deshmukh</h3>
            </article>
          </div>
          <div className="committee-groups" data-aos="fade-up" data-aos-delay="200">
            {[
              'Chief Patrons',
              'Patrons',
              'General & Organizing Chairs',
              'Technical & Support Leadership',
              'National Advisory Committee',
              'International Advisory Committee',
              'Proposed Eminent / International Invitees',
            ].map((group, index) => (
              <div key={group} data-aos="fade-right" data-aos-delay={String(index * 60)}>
                <span>Directory</span>
                <strong>{group}</strong>
                <small>Source details pending</small>
              </div>
            ))}
          </div>
        </section>

        {/* 08 / Industry engagement */}
        <section className="engagement">
          <div className="engagement-grid">
            <SectionHead eyebrow="08 / Industry engagement" title="From research insight to real-world impact." />
            <div className="engagement-list" data-aos="fade-up" data-aos-delay="150">
              {[
                'Technology demonstrations',
                'Research collaboration',
                'Exhibitions',
                'Recruitment engagement',
                'Industry & CSR engagement',
                'Academic–industry interaction',
              ].map((item, index) => (
                <div key={item} data-aos="fade-up" data-aos-delay={String(index * 50)}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </div>
              ))}
              <p>These are proposed opportunities and do not represent confirmed arrangements.</p>
            </div>
          </div>
        </section>

        {/* 09 / Venue */}
        <section className="venue" id="contact">
          <div className="venue-image" data-aos="zoom-in" data-aos-duration="900">
            <img src="/banner.webp" alt="Contemporary university buildings surrounded by green landscape" loading="lazy" />
          </div>
          <div className="venue-copy" data-aos="fade-left" data-aos-delay="200">
            <p className="eyebrow">09 / Host & venue</p>
            <h2>
              Meet in Pune.
              <br />
              Think globally.
            </h2>
            <p>
              Hosted by PCET’s Pimpri Chinchwad University, a university environment shaped for interdisciplinary learning, research and industry connection.
            </p>
            <address>
              Pimpri Chinchwad University
              <br />
              Sate, Taluka Maval, District Pune
              <br />
              Maharashtra 412206, India
            </address>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Pimpri+Chinchwad+University+Sate+Maval+Pune+Maharashtra+412206"
              target="_blank"
              rel="noreferrer"
            >
              <span>Get directions</span>
              <Arrow />
            </a>
          </div>
        </section>
      </main>

      {/* Footer with PCU Conference Logo on left & Specular Buttons for hyperlinking */}
      <footer className="footer-container">
        <div className="footer-inner">
          <div className="footer-main-grid">
            {/* Left side: PCU conference logo & branding */}
            <div className="footer-left" data-aos="fade-right">
              <a href="#top" className="footer-logo-card" aria-label="IM3-2027 home">
                <img
                  src="/pcu-conference-logo.png"
                  alt="PCU Conference Logo - Pimpri Chinchwad University"
                  className="footer-logo-image"
                />
              </a>
              <h3 className="footer-tagline">
                Where disciplines converge.
                <br />
                Where ideas become innovation.
              </h3>
              <p className="footer-host-info">
                Hosted by PCET’s Pimpri Chinchwad University
                <br />
                Sate, Taluka Maval, Pune, Maharashtra 412206, India
                <br />
                <strong>Conference Dates: 6—8 May 2027</strong>
              </p>
            </div>

            {/* Right side: Specular Buttons for hyperlinking */}
            <div className="footer-right" data-aos="fade-left" data-aos-delay="150">
              <div className="footer-cta-wrapper">
                <p className="footer-cta-label">Featured Destination</p>
                <SpecularButton
                  href="https://pcupune.in/international-mastermind/"
                  target="_blank"
                  variant="featured"
                  size="lg"
                  radius={16}
                  followMouse
                  autoAnimate
                >
                  <span>Official Conference Website</span>
                  <Arrow />
                </SpecularButton>
              </div>

              <div className="footer-specular-nav">
                <p className="footer-nav-label">Conference Navigation</p>
                <div className="footer-buttons-group">
                  {nav.map(([label, id]) => (
                    <SpecularButton
                      key={id}
                      href={`#${id}`}
                      size="sm"
                      radius={12}
                      followMouse
                    >
                      {label}
                    </SpecularButton>
                  ))}
                  <SpecularButton
                    href="https://www.google.com/maps/search/?api=1&query=Pimpri+Chinchwad+University+Sate+Maval+Pune+Maharashtra+412206"
                    target="_blank"
                    size="sm"
                    radius={12}
                    followMouse
                  >
                    <span>Directions</span>
                    <Arrow />
                  </SpecularButton>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar" data-aos="fade-up" data-aos-delay="200">
            <p>© 2027 International Master-Mind Meet (IM3-2027). All rights reserved.</p>
            <p>PCET’s Pimpri Chinchwad University (PCU), Pune, India · Technical Co-Sponsorship Requested with IEEE Maharashtra Section</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
