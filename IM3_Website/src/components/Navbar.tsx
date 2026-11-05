import { useState } from 'react';

interface NavbarProps {
  currentRoute: string;
  navigateTo: (path: string) => void;
}

export default function Navbar({ currentRoute, navigateTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Dates', path: '/dates' },
    { label: 'Registration', path: '/registration' },
    { label: 'Leadership & Committee', path: '/committees' },
    { label: 'Advisory Committee', path: '/advisory-committee' },
    { label: 'Contact', path: currentRoute === '/' ? '#contact' : '/#contact' },
  ];

  const handleNavClick = (path: string) => {
    setMenuOpen(false);
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
    <header className="site-header">
      <div className="nav-shell">
        {/* Brand Logo */}
        <a
          className="brand cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            navigateTo('/');
          }}
          aria-label="IM3-2027 home"
        >
          <img src="/logo2.webp" alt="Pimpri Chinchwad University" />
        </a>

        {/* Desktop & Mobile Navigation Links */}
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = currentRoute === item.path;
            return (
              <a
                key={item.label}
                className={`cursor-pointer ${isActive ? 'active-nav-link text-[#b91c2c] font-bold' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.path);
                }}
              >
                {item.label}
              </a>
            );
          })}

          <a
            className="mobile-nav-cta cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(currentRoute === '/' ? '#tracks' : '/#tracks');
            }}
          >
            <span>Call for papers</span>
            <svg
              className="w-3.5 h-3.5"
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
          </a>
        </nav>

        {/* Primary Call to Action Button */}
        <a
          className="nav-cta cursor-pointer"
          title="Tracks & Call for Papers"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(currentRoute === '/' ? '#tracks' : '/#tracks');
          }}
        >
          <span>Call for papers</span>
          <svg
            className="w-3.5 h-3.5"
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
        </a>

        {/* Mobile Menu Hamburger */}
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
  );
}
