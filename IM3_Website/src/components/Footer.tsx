import React from 'react';
import SpecularButton from '@/components/ui/SpecularButton';

interface FooterProps {
  currentRoute: string;
  navigateTo: (path: string) => void;
}

export default function Footer({ currentRoute, navigateTo }: FooterProps) {
  const handleNavClick = (path: string) => {
    if (path.startsWith('#')) {
      if (currentRoute === '/') {
        document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigateTo('/');
        setTimeout(() => {
          document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else if (path.startsWith('/#')) {
      const anchor = path.replace('/', '');
      navigateTo('/');
      setTimeout(() => {
        document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      navigateTo(path);
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-main-grid">
          {/* Left side: PCU conference logo & branding */}
          <div className="footer-left">
            <a
              className="footer-logo-card cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/');
              }}
              aria-label="IM3-2027 home"
            >
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
          <div className="footer-right">
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
                <svg
                  className="w-3.5 h-3.5 inline-block ml-1"
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
              </SpecularButton>
            </div>

            <div className="footer-specular-nav">
              <p className="footer-nav-label">Conference Navigation</p>
              <div className="footer-buttons-group">
                <SpecularButton
                  size="sm"
                  radius={12}
                  followMouse
                  onClick={() => handleNavClick(currentRoute === '/' ? '#tracks' : '/#tracks')}
                >
                  Call for Papers
                </SpecularButton>

                <SpecularButton
                  size="sm"
                  radius={12}
                  followMouse
                  onClick={() => handleNavClick('/about')}
                >
                  About
                </SpecularButton>

                <SpecularButton
                  size="sm"
                  radius={12}
                  followMouse
                  onClick={() => handleNavClick('/dates')}
                >
                  Dates
                </SpecularButton>

                <SpecularButton
                  size="sm"
                  radius={12}
                  followMouse
                  onClick={() => handleNavClick('/registration')}
                >
                  Registration
                </SpecularButton>

                <SpecularButton
                  size="sm"
                  radius={12}
                  followMouse
                  onClick={() => handleNavClick('/committees')}
                >
                  Leadership & Committee
                </SpecularButton>

                <SpecularButton
                  size="sm"
                  radius={12}
                  followMouse
                  onClick={() => handleNavClick('/advisory-committee')}
                >
                  Advisory Committee
                </SpecularButton>

                <SpecularButton
                  href="https://www.google.com/maps/search/?api=1&query=Pimpri+Chinchwad+University+Sate+Maval+Pune+Maharashtra+412206"
                  target="_blank"
                  size="sm"
                  radius={12}
                  followMouse
                >
                  <span>Directions</span>
                  <svg
                    className="w-3 h-3 inline-block ml-0.5"
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
                </SpecularButton>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© 2027 International Master-Mind Meet (IM3-2027). All rights reserved.</p>
          <p>
            PCET’s Pimpri Chinchwad University (PCU), Pune, India · Technical Co-Sponsorship Requested with IEEE Maharashtra Section
          </p>
        </div>
      </div>
    </footer>
  );
}
