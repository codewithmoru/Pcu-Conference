import { useState } from 'react';
import {
  nationalAdvisoryCommittee,
  internationalAdvisoryCommittee,
  type AdvisoryMember,
} from '@/data/advisoryCommitteeData';
import './AdvisoryCommittee.css';

interface AdvisoryCommitteePageProps {
  navigateTo: (url: string) => void;
}

function getInitials(name: string): string {
  const clean = name
    .replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.|Shri|Padma Shri|Padma Bhushan)\s+/gi, '')
    .trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return 'AC';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function MemberCard({ member, index }: { member: AdvisoryMember; index: number }) {
  const initials = getInitials(member.name);
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <article
      className="advisory-card"
      aria-label={`${member.name}, ${member.designation ? member.designation + ', ' : ''}${member.institution}`}
    >
      <div className="advisory-card-top">
        <div className="advisory-monogram" aria-hidden="true">
          {initials}
        </div>
        <span className="advisory-badge-pill" aria-label={`Index ${formattedIndex}`}>
          #{formattedIndex}
        </span>
      </div>

      <div className="advisory-card-content">
        <h3 className="advisory-member-name">{member.name}</h3>

        {member.designation && (
          <span className="advisory-member-role">{member.designation}</span>
        )}

        <div className="advisory-member-affiliation">
          <div className="advisory-inst-row">
            <svg
              className="advisory-inst-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 21h18" />
              <path d="M5 21V7l8-4v18" />
              <path d="M19 21V11l-6-4" />
              <path d="M9 9h1" />
              <path d="M9 13h1" />
              <path d="M9 17h1" />
            </svg>
            <span>{member.institution}</span>
          </div>

          {member.location && (
            <div className="advisory-loc-row">
              <span className="advisory-loc-dot" aria-hidden="true" />
              <span>{member.location}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function AdvisoryCommitteePage({ navigateTo }: AdvisoryCommitteePageProps) {
  const [activeTab, setActiveTab] = useState<'national' | 'international'>('national');

  const currentList = activeTab === 'national' ? nationalAdvisoryCommittee : internationalAdvisoryCommittee;

  const handleTabKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveTab((prev) => (prev === 'national' ? 'international' : 'national'));
    }
  };

  return (
    <div className="advisory-page">
      {/* 1. Page Introduction / Hero Header */}
      <section className="advisory-hero" aria-labelledby="advisory-heading">
        <div className="advisory-hero-inner">
          <nav className="advisory-breadcrumb" aria-label="Breadcrumb">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/');
              }}
            >
              IM3-2027
            </a>
            <span className="crumb-separator" aria-hidden="true">/</span>
            <span className="crumb-current">Academic Leadership</span>
          </nav>

          <h1 id="advisory-heading" className="advisory-title">
            Advisory <span>Committee</span>
          </h1>

          <p className="advisory-lead">
            The National and International Advisory Committees support the conference’s academic direction, track governance, and multidisciplinary research engagement to ensure rigorous international standards for IM3-2027.
          </p>

          <div className="advisory-meta-grid" role="region" aria-label="Conference Event Metadata">
            <div className="advisory-meta-item">
              <span className="advisory-meta-label">Conference Dates</span>
              <span className="advisory-meta-value accent">6–8 May 2027</span>
            </div>
            <div className="advisory-meta-item">
              <span className="advisory-meta-label">Venue</span>
              <span className="advisory-meta-value">Pimpri Chinchwad University, Pune, India</span>
            </div>
            <div className="advisory-meta-item">
              <span className="advisory-meta-label">Governance</span>
              <span className="advisory-meta-value">Academic Advisory Board</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="advisory-content-wrap">
        {/* Committee Navigation Tabs */}
        <section aria-labelledby="committee-directory-heading">
          <div className="advisory-tabs-bar">
            <div
              role="tablist"
              aria-label="Advisory Committee Sections"
              className="advisory-tablist"
              onKeyDown={handleTabKeyDown}
            >
              <button
                role="tab"
                id="tab-national"
                aria-selected={activeTab === 'national'}
                aria-controls="panel-national"
                tabIndex={activeTab === 'national' ? 0 : -1}
                className={`advisory-tab ${activeTab === 'national' ? 'active' : ''}`}
                onClick={() => setActiveTab('national')}
              >
                <span>National Advisory Committee</span>
                <span className="advisory-tab-count" aria-label={`${nationalAdvisoryCommittee.length} members`}>
                  {nationalAdvisoryCommittee.length}
                </span>
              </button>

              <button
                role="tab"
                id="tab-international"
                aria-selected={activeTab === 'international'}
                aria-controls="panel-international"
                tabIndex={activeTab === 'international' ? 0 : -1}
                className={`advisory-tab ${activeTab === 'international' ? 'active' : ''}`}
                onClick={() => setActiveTab('international')}
              >
                <span>International Advisory Committee</span>
                <span className="advisory-tab-count" aria-label={`${internationalAdvisoryCommittee.length} members`}>
                  {internationalAdvisoryCommittee.length}
                </span>
              </button>
            </div>

            <div className="advisory-category-info">
              Showing <strong>{currentList.length}</strong> verified members under{' '}
              <strong>{activeTab === 'national' ? 'National Board' : 'International Board'}</strong>
            </div>
          </div>

          {/* Tab Panel */}
          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            tabIndex={0}
          >
            <div className="advisory-panel-header">
              <h2 id="committee-directory-heading" className="advisory-panel-title">
                {activeTab === 'national'
                  ? 'National Advisory Committee'
                  : 'International Advisory Committee'}
              </h2>
              <p className="advisory-panel-desc">
                {activeTab === 'national'
                  ? 'Distinguished directors, senior professors, scientists, and academic leaders from premier Indian institutions including IITs, NITs, IIITs, IISc Bangalore, and national research centres.'
                  : 'Renowned international professors, research lab directors, and academic leaders representing institutions across Australia, Malaysia, UAE, USA, Germany, Sweden, and the United Kingdom.'}
              </p>
            </div>

            {/* 3. Member Directory Grid */}
            <div className="advisory-cards-grid">
              {currentList.map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Cross-navigation banner to Homepage Tracks */}
        <section className="advisory-cross-nav" aria-label="Conference Exploration">
          <div className="advisory-cross-copy">
            <h3>Explore IM3-2027 Conference Tracks</h3>
            <p>Eight multidisciplinary domains convening research from science, engineering, health, and society.</p>
          </div>
          <div className="advisory-cross-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigateTo('/#tracks')}
            >
              <span>View Technical Tracks</span>
            </button>
            <button
              type="button"
              className="btn btn-text"
              onClick={() => navigateTo('/#dates')}
            >
              <span>Important Dates</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

