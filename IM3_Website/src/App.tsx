import { useEffect, useState } from 'react';

const nav = [
  ['About', 'about'],
  ['Tracks', 'tracks'],
  ['Call for Papers', 'papers'],
  ['Dates', 'dates'],
  ['Registration', 'registration'],
  ['Committees', 'committees'],
  ['Contact', 'contact'],
];

const dates = [
  ['15 NOV', '2026', 'Call for Papers'],
  ['15 FEB', '2027', 'Initial paper submission deadline'],
  ['15 MAR', '2027', 'Notification of acceptance'],
  ['25 MAR', '2027', 'Camera-ready paper'],
  ['31 MAR', '2027', 'Author registration with payment'],
  ['20 APR', '2027', 'Final programme agenda'],
  ['06–08 MAY', '2027', 'Conference'],
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

const trackThemes = [
  ['01', 'Computational intelligence', 'AI, data-driven systems and advanced computing applications.'],
  ['02', 'Materials & manufacturing', 'Materials research, intelligent production and emerging processes.'],
  ['03', 'Healthcare innovation', 'Interdisciplinary technologies supporting health and wellbeing.'],
  ['04', 'Sustainable systems', 'Climate-conscious solutions, energy and resilient infrastructure.'],
  ['05', 'Engineering futures', 'Advanced engineering methods, automation and connected systems.'],
  ['06', 'Agriculture & food systems', 'Technology-led approaches to agriculture and food resilience.'],
  ['07', 'Science & society', 'Research connecting technology, policy and societal outcomes.'],
  ['08', 'Interdisciplinary frontiers', 'Convergent work that bridges established research domains.'],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
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
        {nodes.slice(0, 2).map(([label, position]) => <span className={`planet ${position}`} key={label}><b>{label}</b></span>)}
      </div>
      <div className="orbit orbit-two">
        {nodes.slice(2, 4).map(([label, position]) => <span className={`planet ${position}`} key={label}><b>{label}</b></span>)}
      </div>
      <div className="orbit orbit-three">
        {nodes.slice(4).map(([label, position]) => <span className={`planet ${position}`} key={label}><b>{label}</b></span>)}
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
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTrack, setActiveTrack] = useState<number | null>(0);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const milestones = document.querySelectorAll<HTMLElement>('.timeline-item');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    const timelineObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline-visible');
          timelineObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.45, rootMargin: '0px 0px -8% 0px' },
    );
    milestones.forEach((milestone) => timelineObserver.observe(milestone));
    return () => {
      observer.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
            {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <a className="nav-cta" href="#papers">Call for papers <Arrow /></a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span /><span />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-art"><ConvergenceGraphic /></div>
            <div className="hero-meta">
              <div><small>When</small><strong>6—8 May 2027</strong></div>
              <div><small>Where</small><strong>PCU, Pune, India</strong></div>
              <p>Where disciplines converge.<br />Where ideas become innovation.</p>
            </div>
          </div>
        </section>

        <section className="glance" aria-label="Conference at a glance">
          <div className="glance-inner">
            <p className="glance-lead">A global forum for rigorous research and practical innovation.</p>
            <div><strong>08</strong><span>Proposed<br />technical tracks</span></div>
            <div><strong>500</strong><span>Target full-paper<br />submissions</span></div>
            <div><strong>100–120</strong><span>Target final<br />acceptances</span></div>
          </div>
        </section>

        <section className="section about" id="about" data-reveal>
          <div className="editorial-grid">
            <SectionHead eyebrow="01 / The conference" title="Research without boundaries." />
            <div className="about-copy">
              <p className="lede">IM3-2027 brings researchers, educators and industry together to explore the space where disciplines meet—and where rigorous ideas become useful innovation.</p>
              <div className="two-col-copy">
                <p>Hosted by PCET’s Pimpri Chinchwad University, the conference is conceived as an international platform for multidisciplinary research, peer exchange and meaningful academia–industry engagement.</p>
                <p>The proposed programme combines reviewed oral presentations, poster sessions and collaboration opportunities, with an emphasis on clear methodology, evidence and societal relevance.</p>
              </div>
              <a className="text-link" href="#papers">Read the call for papers <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="section tracks" id="tracks" data-reveal>
          <SectionHead eyebrow="02 / Research across disciplines" title="Eight domains. One shared frontier." note="The thematic labels below are an editorial preview; exact brochure track titles will be inserted when the source document is supplied." />
          <div className="track-list">
            {trackThemes.map(([number, title, copy], index) => (
              <article className={activeTrack === index ? 'track active' : 'track'} key={number}>
                <button type="button" onClick={() => setActiveTrack(activeTrack === index ? null : index)} aria-expanded={activeTrack === index}>
                  <span>{number}</span><h3>{title}</h3><i>{activeTrack === index ? '−' : '+'}</i>
                </button>
                <div className="track-detail"><p>{copy}</p><span>Exact title pending brochure verification</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="papers" id="papers" data-reveal>
          <div className="papers-grid">
            <div>
              <p className="eyebrow light">03 / Call for papers</p>
              <h2>Bring your research<br />into the conversation.</h2>
            </div>
            <div className="papers-copy">
              <p>Original, unpublished research aligned with the conference tracks and interdisciplinary applications is invited. Submissions should demonstrate technical rigour, clear methodology, evidence and attention to reproducibility and practical or societal relevance.</p>
              <ul>
                <li>Proposed double-blind peer review</li>
                <li>Oral and poster presentation formats</li>
                <li>At least three independent reviewers proposed per paper</li>
              </ul>
              <button className="btn btn-light" type="button" disabled title="Official submission destination not yet supplied">Paper submission — link pending</button>
            </div>
          </div>
        </section>

        <section className="section dates" id="dates" data-reveal>
          <SectionHead eyebrow="04 / Important dates" title="A clear path to May 2027." note="All milestones are tentative and subject to revision." />
          <div className="timeline">
            {dates.map(([day, year, label], index) => (
              <div className="timeline-item" key={label}>
                <span className="timeline-index">{String(index + 1).padStart(2, '0')}</span>
                <time><strong>{day}</strong><small>{year}</small></time>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="review" data-reveal>
          <div className="review-grid">
            <SectionHead eyebrow="05 / Publication & review" title="Quality, made transparent." />
            <div className="review-cards">
              <article><span>01</span><h3>Independent review</h3><p>A double-blind process with at least three independent reviewers per paper is proposed, supported by track-chair and TPC review.</p></article>
              <article><span>02</span><h3>Quality assurance</h3><p>Technical quality control and plagiarism or similarity screening are proposed as part of the review process.</p></article>
              <article className="publication"><span>Status note</span><h3>IEEE approval is not confirmed</h3><p>IEEE Maharashtra Section technical co-sponsorship has been requested. IEEE Xplore publication is intended, subject to approval and all applicable IEEE requirements.</p></article>
            </div>
          </div>
        </section>

        <section className="section registration" id="registration" data-reveal>
          <SectionHead eyebrow="06 / Registration" title="Proposed registration fees." note="Fees are subject to revision. Taxes, bank charges and applicable additional-page charges will be announced separately." />
          <div className="fee-table" role="table" aria-label="Proposed registration fees">
            <div className="fee-row fee-head" role="row"><span role="columnheader">Category</span><span role="columnheader">IEEE member</span><span role="columnheader">Non-IEEE</span></div>
            {fees.map(([category, member, nonMember]) => (
              <div className="fee-row" role="row" key={category}><strong role="cell">{category}</strong><span role="cell" data-label="IEEE member">{member}</span><span role="cell" data-label="Non-IEEE">{nonMember}</span></div>
            ))}
          </div>
        </section>

        <section className="section committees" id="committees" data-reveal>
          <SectionHead eyebrow="07 / Conference leadership" title="Convened with purpose." note="The full committee directory will be populated with exact names, titles and affiliations from the brochure when supplied." />
          <div className="leadership">
            <article><p>Conference Convener</p><h3>Dr. Rahul G. Sonkamble</h3></article>
            <article><p>Conference Co-Convener</p><h3>Dr. Swati Shirke-Deshmukh</h3></article>
          </div>
          <div className="committee-groups">
            {['Chief Patrons', 'Patrons', 'General & Organizing Chairs', 'Technical & Support Leadership', 'National Advisory Committee', 'International Advisory Committee', 'Proposed Eminent / International Invitees'].map((group) => (
              <div key={group}><span>Directory</span><strong>{group}</strong><small>Source details pending</small></div>
            ))}
          </div>
        </section>

        <section className="engagement" data-reveal>
          <div className="engagement-grid">
            <SectionHead eyebrow="08 / Industry engagement" title="From research insight to real-world impact." />
            <div className="engagement-list">
              {['Technology demonstrations', 'Research collaboration', 'Exhibitions', 'Recruitment engagement', 'Industry & CSR engagement', 'Academic–industry interaction'].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</div>)}
              <p>These are proposed opportunities and do not represent confirmed arrangements.</p>
            </div>
          </div>
        </section>

        <section className="venue" id="contact" data-reveal>
          <div className="venue-image">
            <img src="/banner.webp" alt="Contemporary university buildings surrounded by green landscape" loading="lazy" />
          </div>
          <div className="venue-copy">
            <p className="eyebrow">09 / Host & venue</p>
            <h2>Meet in Pune.<br />Think globally.</h2>
            <p>Hosted by PCET’s Pimpri Chinchwad University, a university environment shaped for interdisciplinary learning, research and industry connection.</p>
            <address>Pimpri Chinchwad University<br />Sate, Taluka Maval, District Pune<br />Maharashtra 412206, India</address>
            <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Pimpri+Chinchwad+University+Sate+Maval+Pune+Maharashtra+412206" target="_blank" rel="noreferrer">Get directions <Arrow /></a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <Brand />
          <h2>Where disciplines converge.<br />Where ideas become innovation.</h2>
          <a className="btn btn-light" href="https://pcupune.in/international-mastermind/" target="_blank" rel="noreferrer">Official conference website <Arrow /></a>
        </div>
        <div className="footer-bottom">
          <p>6—8 May 2027 · Pune, India</p>
          <div>{nav.slice(0, 6).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
          <p>Hosted by PCET’s Pimpri Chinchwad University</p>
        </div>
      </footer>
    </div>
  );
}
