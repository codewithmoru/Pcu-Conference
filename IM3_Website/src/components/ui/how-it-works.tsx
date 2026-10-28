"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "motion/react";

export interface CardProps {
  number: string;
  title: string;
  description: string;
  dateBadge?: string;
  year?: string;
  colorTheme?: "crimson" | "blue" | "purple" | "orange";
  className?: string;
  rotate?: string;
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

const Pin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

const Card = ({
  number,
  title,
  description,
  dateBadge,
  year,
  colorTheme = "crimson",
  className = "",
  rotate = "",
  colors: customColors,
}: CardProps) => {
  const defaultBgColors = {
    crimson: "bg-red-50/90 dark:bg-red-950/20",
    blue: "bg-sky-50/90 dark:bg-sky-950/20",
    purple: "bg-purple-50/90 dark:bg-purple-950/20",
    orange: "bg-amber-50/90 dark:bg-amber-950/20",
  };
  const defaultTextColors = {
    crimson: "text-[#b91c2c] dark:text-red-400",
    blue: "text-blue-700 dark:text-blue-400",
    purple: "text-purple-700 dark:text-purple-400",
    orange: "text-amber-700 dark:text-amber-400",
  };
  const defaultBorderColors = {
    crimson: "border-red-200 dark:border-red-900/40",
    blue: "border-blue-200 dark:border-blue-900/40",
    purple: "border-purple-200 dark:border-purple-900/40",
    orange: "border-amber-200 dark:border-amber-900/40",
  };

  const bgColor = customColors?.bg || defaultBgColors[colorTheme];
  const textColor = customColors?.text || defaultTextColors[colorTheme];
  const borderColor = customColors?.border || defaultBorderColors[colorTheme];

  return (
    <div
      className={`relative w-full md:w-[320px] transition-all duration-300 hover:z-30 hover:scale-105 ${rotate} ${className}`}
    >
      <div className="bg-white dark:bg-neutral-900 p-2.5 rounded-[22px] shadow-[0_12px_30px_-8px_rgba(0,0,0,0.12)] border border-neutral-200/80 dark:border-neutral-800 transition-shadow hover:shadow-[0_20px_40px_-10px_rgba(185,28,44,0.18)]">
        <Pin className={`w-7 h-7 ${textColor} z-20 mb-3 mx-auto drop-shadow-xs`} />
        <div
          className={`${bgColor} border ${borderColor} rounded-[14px] p-5 h-full flex flex-col relative overflow-hidden`}
        >
          {/* Header with index and date badge */}
          <div className="flex items-center justify-between mb-3">
            <span
              className={`${textColor} font-mono font-bold text-2xl tracking-tighter`}
            >
              {number}
            </span>
            {dateBadge && (
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border shadow-2xs bg-white dark:bg-neutral-800 ${textColor} ${borderColor}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                <span>{dateBadge}</span>
                {year && <small className="opacity-75 font-normal">{year}</small>}
              </span>
            )}
          </div>

          <h3 className="text-lg md:text-xl font-semibold text-neutral-900 dark:text-neutral-100 leading-snug mb-2 font-display">
            {title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export interface Step {
  title: string;
  description: string;
  dateBadge?: string;
  year?: string;
  colorTheme?: "crimson" | "blue" | "purple" | "orange";
  colors?: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface StepPosition {
  className?: string;
  rotate?: string;
}

export interface HowItWorksProps {
  features?: Step[];
  className?: string;
  stepPositions?: StepPosition[];
}

const DEFAULT_7_POSITIONS: StepPosition[] = [
  { className: "md:absolute md:top-[0px] md:left-[10%]", rotate: "rotate-2" },
  { className: "md:absolute md:top-[170px] md:right-[10%]", rotate: "-rotate-2" },
  { className: "md:absolute md:top-[370px] md:left-[10%]", rotate: "rotate-2" },
  { className: "md:absolute md:top-[570px] md:right-[10%]", rotate: "-rotate-2" },
  { className: "md:absolute md:top-[770px] md:left-[10%]", rotate: "rotate-2" },
  { className: "md:absolute md:top-[970px] md:right-[10%]", rotate: "-rotate-2" },
  { className: "md:absolute md:top-[1170px] md:left-[10%]", rotate: "rotate-1" },
];

export default function HowItWorks({
  features,
  className = "",
  stepPositions,
}: HowItWorksProps) {
  const defaultFeatures: Step[] = [
    {
      title: "Call for Papers",
      description: "Official announcement and portal opening for submissions across all 8 technical tracks.",
      dateBadge: "15 NOV",
      year: "2026",
      colorTheme: "crimson",
    },
    {
      title: "Initial Paper Submission Deadline",
      description: "Submission deadline for original, unpublished full papers for double-blind peer review.",
      dateBadge: "15 FEB",
      year: "2027",
      colorTheme: "blue",
    },
    {
      title: "Notification of Acceptance",
      description: "Review outcomes and detailed reviewer feedback communicated to corresponding authors.",
      dateBadge: "15 MAR",
      year: "2027",
      colorTheme: "purple",
    },
    {
      title: "Camera-Ready Paper",
      description: "Submission of finalized paper incorporating review remarks and adherence to publishing format.",
      dateBadge: "25 MAR",
      year: "2027",
      colorTheme: "orange",
    },
    {
      title: "Author Registration with Payment",
      description: "Mandatory author registration and fee payment deadline to ensure paper inclusion.",
      dateBadge: "31 MAR",
      year: "2027",
      colorTheme: "crimson",
    },
    {
      title: "Final Programme Agenda",
      description: "Release of complete conference schedule, keynote sessions, and oral presentation tracks.",
      dateBadge: "20 APR",
      year: "2027",
      colorTheme: "blue",
    },
    {
      title: "IM3-2027 Conference",
      description: "Three immersive days of multidisciplinary discourse, research, and industry engagement at PCU Pune.",
      dateBadge: "06–08 MAY",
      year: "2027",
      colorTheme: "crimson",
    },
  ];

  const data = features && features.length > 0 ? features : defaultFeatures;
  const positions = stepPositions || DEFAULT_7_POSITIONS;

  let height = 1450;
  if (data.length === 1) height = 400;
  else if (data.length === 2) height = 450;
  else if (data.length === 3) height = 800;
  else if (data.length === 4) height = 900;
  else if (data.length === 5) height = 1130;
  else if (data.length === 6) height = 1300;
  else height = 1450;

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`bg-neutral-50/60 dark:bg-black max-md:py-10 md:py-16 px-4 md:px-8 relative rounded-3xl border border-neutral-200/80 dark:border-neutral-800 ${className}`}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.12] rounded-3xl"
          style={{
            backgroundImage: "linear-gradient(#000 1px, transparent 1px)",
            backgroundSize: "100% 32px",
            marginTop: "4px",
          }}
        />
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r opacity-50" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l opacity-50" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div
            className="relative w-full max-w-[1000px] mx-auto flex flex-col space-y-6 md:space-y-0 md:block h-auto md:h-[var(--md-height)]"
            style={{ "--md-height": `${height}px` } as React.CSSProperties}
          >
            {data.length > 1 && (
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block z-0"
                viewBox={`0 0 1000 ${height}`}
                preserveAspectRatio="none"
              >
                {(() => {
                  const pathD = data.reduce((acc, _, index) => {
                    if (index >= data.length - 1) return acc;
                    if (index === 0) return "M 320 120 C 520 120, 560 230, 700 230"; // 1 -> 2
                    if (index === 1) return acc + " C 840 230, 520 330, 320 430"; // 2 -> 3
                    if (index === 2) return acc + " C 320 530, 560 630, 700 630"; // 3 -> 4
                    if (index === 3) return acc + " C 840 630, 520 730, 320 830"; // 4 -> 5
                    if (index === 4) return acc + " C 320 930, 560 1030, 700 1030"; // 5 -> 6
                    if (index === 5) return acc + " C 840 1030, 520 1130, 320 1230"; // 6 -> 7
                    return acc;
                  }, "");
                  return (
                    <m.path
                      d={pathD}
                      stroke="currentColor"
                      className="text-[#b91c2c]/40 dark:text-red-500/40"
                      strokeWidth="2.5"
                      strokeDasharray="8 6"
                      fill="none"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                      initial={{ strokeDashoffset: 0 }}
                      animate={{
                        strokeDashoffset: -140,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  );
                })()}
              </svg>
            )}

            {data.map((step, index) => {
              const position = positions[index % positions.length];

              return (
                <Card
                  key={step.title + index}
                  number={`0${index + 1}`}
                  title={step.title}
                  description={step.description}
                  dateBadge={step.dateBadge}
                  year={step.year}
                  colorTheme={step.colorTheme || (index % 2 === 0 ? "crimson" : "blue")}
                  colors={step.colors}
                  rotate={position.rotate}
                  className={position.className}
                />
              );
            })}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}

