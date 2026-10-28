'use client';

import { useState, useImperativeHandle, forwardRef, type CSSProperties } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './FlexCarousel.css';

export interface FlexCarouselItem {
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  src?: string;
  alt?: string;
}

export interface FlexCarouselRef {
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
}

export interface FlexCarouselProps {
  items?: FlexCarouselItem[];
  showNavButtons?: boolean;
  captions?: boolean;
  onChange?: (index: number, item: FlexCarouselItem) => void;
  onSelect?: (index: number, item: FlexCarouselItem) => void;
  className?: string;
  style?: CSSProperties;
  // Kept for backward compatibility with previous prompt
  preset?: string;
  intro?: string;
  cardHeight?: number;
  gap?: number;
  radius?: number;
  fit?: string;
  autoplay?: boolean;
  captureWheel?: boolean;
  focusOnClick?: boolean;
}

export const EIGHT_DOMAINS_ITEMS: FlexCarouselItem[] = [
  {
    title: 'Computational Intelligence',
    subtitle: 'Track 01 · AI, Machine Learning & Computing',
    description: 'Artificial intelligence, machine learning, neural architectures, data-driven systems, quantum computing, and cybernetic applications.',
    tags: ['Artificial Intelligence', 'Data Systems', 'Neural Networks', 'Cybernetics']
  },
  {
    title: 'Materials & Manufacturing',
    subtitle: 'Track 02 · Smart Production & Materials Science',
    description: 'Advanced materials science, smart composites, additive manufacturing, intelligent automation, and sustainable nanotechnology.',
    tags: ['Smart Fabrication', 'Nanomaterials', 'Robotic Assembly', 'Composites']
  },
  {
    title: 'Healthcare Innovation',
    subtitle: 'Track 03 · Medical Technologies & Wellbeing',
    description: 'Interdisciplinary medical diagnostics, biomedical engineering, wearable bio-sensors, and healthcare informatics.',
    tags: ['Biomedical Tech', 'Diagnostics', 'Health Informatics', 'Bio-Sensors']
  },
  {
    title: 'Sustainable Systems',
    subtitle: 'Track 04 · Energy, Climate & Infrastructure',
    description: 'Clean energy transitions, grid resilience, climate-adaptive infrastructure, and circular environmental engineering.',
    tags: ['Clean Energy', 'Circular Economy', 'Resilient Grids', 'Climate Tech']
  },
  {
    title: 'Engineering Futures',
    subtitle: 'Track 05 · Automation, Robotics & Systems',
    description: 'Next-generation mechatronics, autonomous cyber-physical systems, Industrial IoT, and embedded intelligent devices.',
    tags: ['Autonomous Systems', 'Industrial IoT', 'Mechatronics', 'Embedded Systems']
  },
  {
    title: 'Agriculture & Food Systems',
    subtitle: 'Track 06 · AgriTech & Food Resilience',
    description: 'Smart precision agriculture, supply chain telemetry, sustainable crop resilience, and automated agro-processing.',
    tags: ['Precision Agri', 'Supply Chain', 'Food Security', 'Agro-Robotics']
  },
  {
    title: 'Science & Society',
    subtitle: 'Track 07 · Technology, Ethics & Policy',
    description: 'Responsible computing, socio-technical policy frameworks, digital transformation governance, and societal equity.',
    tags: ['AI Governance', 'Tech Policy', 'Societal Impact', 'Ethics in Tech']
  },
  {
    title: 'Interdisciplinary Frontiers',
    subtitle: 'Track 08 · Convergent Research Paradigms',
    description: 'Breakthrough multidisciplinary research bridging established disciplines to pioneer innovative technological domains.',
    tags: ['Cross-Domain', 'Convergent Tech', 'Emerging Science', 'Frontier Research']
  }
];

// Distinctive theme accent for each domain track
const TRACK_ACCENTS = [
  { border: '#b91c2c', badgeBg: '#fef2f2', badgeText: '#b91c2c', iconBg: 'linear-gradient(135deg, #b91c2c, #7f1420)' },
  { border: '#0284c7', badgeBg: '#f0f9ff', badgeText: '#0284c7', iconBg: 'linear-gradient(135deg, #0284c7, #0369a1)' },
  { border: '#059669', badgeBg: '#ecfdf5', badgeText: '#059669', iconBg: 'linear-gradient(135deg, #059669, #047857)' },
  { border: '#d97706', badgeBg: '#fffbeb', badgeText: '#d97706', iconBg: 'linear-gradient(135deg, #d97706, #b45309)' },
  { border: '#7c3aed', badgeBg: '#f5f3ff', badgeText: '#7c3aed', iconBg: 'linear-gradient(135deg, #7c3aed, #6d28d9)' },
  { border: '#16a34a', badgeBg: '#f0fdf4', badgeText: '#16a34a', iconBg: 'linear-gradient(135deg, #16a34a, #15803d)' },
  { border: '#4f46e5', badgeBg: '#eef2ff', badgeText: '#4f46e5', iconBg: 'linear-gradient(135deg, #4f46e5, #4338ca)' },
  { border: '#e11d48', badgeBg: '#fff1f2', badgeText: '#e11d48', iconBg: 'linear-gradient(135deg, #e11d48, #be123c)' },
];

const FlexCarousel = forwardRef<FlexCarouselRef, FlexCarouselProps>(function FlexCarousel(
  {
    items = EIGHT_DOMAINS_ITEMS,
    showNavButtons = true,
    captions = true,
    onChange,
    onSelect,
    className = '',
    style,
  },
  ref
) {
  const [active, setActive] = useState(0);
  const count = items.length;

  const handleNext = () => {
    const nextIdx = (active + 1) % count;
    setActive(nextIdx);
    onChange?.(nextIdx, items[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (active - 1 + count) % count;
    setActive(prevIdx);
    onChange?.(prevIdx, items[prevIdx]);
  };

  const handleGoTo = (idx: number) => {
    const bounded = ((idx % count) + count) % count;
    setActive(bounded);
    onChange?.(bounded, items[bounded]);
  };

  useImperativeHandle(ref, () => ({
    next: handleNext,
    prev: handlePrev,
    goTo: handleGoTo,
  }));

  const currentItem = items[active];

  return (
    <div
      className={`depth-carousel-wrapper ${className}`.trim()}
      style={style}
      role="region"
      aria-roledescription="carousel"
      aria-label="Eight Technical Domains Carousel"
    >
      {/* 3D Depth Stage */}
      <div className="depth-stage">
        {items.map((item, index) => {
          // Calculate relative circular distance (-4 to +4)
          let diff = index - active;
          while (diff > count / 2) diff -= count;
          while (diff < -count / 2) diff += count;

          const isCenter = diff === 0;
          const isImmediate = Math.abs(diff) === 1;
          const isSecondary = Math.abs(diff) === 2;
          const isVisible = Math.abs(diff) <= 2;

          // 3D positioning parameters
          let translateX = 0;
          let translateZ = 0;
          let rotateY = 0;
          let scale = 1;
          let opacity = 0;
          let zIndex = 1;

          if (isCenter) {
            translateX = 0;
            translateZ = 0;
            rotateY = 0;
            scale = 1;
            opacity = 1;
            zIndex = 20;
          } else if (isImmediate) {
            translateX = diff > 0 ? 330 : -330;
            translateZ = -90;
            rotateY = diff > 0 ? -12 : 12;
            scale = 0.88;
            opacity = 0.78;
            zIndex = 10;
          } else if (isSecondary) {
            translateX = diff > 0 ? 590 : -590;
            translateZ = -200;
            rotateY = diff > 0 ? -22 : 22;
            scale = 0.74;
            opacity = 0.35;
            zIndex = 5;
          } else {
            translateX = diff > 0 ? 800 : -800;
            translateZ = -300;
            rotateY = diff > 0 ? -30 : 30;
            scale = 0.6;
            opacity = 0;
            zIndex = 1;
          }

          const accent = TRACK_ACCENTS[index % TRACK_ACCENTS.length];

          return (
            <motion.div
              key={item.title}
              className={`depth-card-slot ${isCenter ? 'is-active' : ''}`}
              initial={false}
              animate={{
                x: translateX,
                z: translateZ,
                rotateY: rotateY,
                scale: scale,
                opacity: isVisible ? opacity : 0,
              }}
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 26,
                mass: 0.8,
              }}
              style={{
                zIndex,
                pointerEvents: isVisible ? 'auto' : 'none',
              }}
              onClick={() => {
                if (!isCenter) {
                  handleGoTo(index);
                } else {
                  onSelect?.(index, item);
                }
              }}
            >
              <div
                className="depth-card"
                style={{
                  borderColor: isCenter ? accent.border : 'rgba(228, 228, 231, 0.9)',
                }}
              >
                {/* Top decorative gradient line */}
                <div
                  className="depth-card__accent-bar"
                  style={{ background: accent.iconBg }}
                />

                {/* Card Header with Track Pill and Watermark */}
                <div className="depth-card__header">
                  <div
                    className="depth-card__badge"
                    style={{
                      backgroundColor: accent.badgeBg,
                      color: accent.badgeText,
                      borderColor: accent.border,
                    }}
                  >
                    <span className="depth-card__dot" style={{ backgroundColor: accent.border }} />
                    <span>TRACK {String(index + 1).padStart(2, '0')}</span>
                  </div>

                  <span className="depth-card__watermark">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Card Main Content */}
                <div className="depth-card__body">
                  <h3 className="depth-card__title">
                    {item.title}
                  </h3>

                  {item.subtitle && (
                    <p
                      className="depth-card__subtitle"
                      style={{ color: accent.badgeText }}
                    >
                      {item.subtitle}
                    </p>
                  )}

                  {item.description && (
                    <p className="depth-card__desc">
                      {item.description}
                    </p>
                  )}

                  {/* Topic scope tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="depth-card__tags">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="depth-card__tag">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="depth-card__footer">
                  <span className="depth-card__brand">IM3-2027 · PCU PUNE</span>
                  <div
                    className="depth-card__btn-arrow"
                    style={{ background: isCenter ? accent.iconBg : '#e4e4e7' }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      style={{ color: isCenter ? '#ffffff' : '#52525b' }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Center Caption / Progress Counter */}
      {captions && currentItem && (
        <div className="depth-carousel__bottom-bar">
          <div className="depth-carousel__counter">
            <span className="font-mono font-bold text-neutral-900">
              {String(active + 1).padStart(2, '0')}
            </span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-500 font-mono">
              {String(count).padStart(2, '0')}
            </span>
          </div>
        </div>
      )}

      {/* Button-only Sliding Controls */}
      {showNavButtons && (
        <div className="depth-carousel__controls">
          <button
            type="button"
            className="depth-carousel__btn"
            onClick={handlePrev}
            aria-label="Previous Track"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Previous Track</span>
          </button>

          <button
            type="button"
            className="depth-carousel__btn depth-carousel__btn--next"
            onClick={handleNext}
            aria-label="Next Track"
          >
            <span>Next Track</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
});

export default FlexCarousel;
