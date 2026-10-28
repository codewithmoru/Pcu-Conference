'use client';

import { useEffect, useRef, type ButtonHTMLAttributes, type CSSProperties, type ReactNode } from 'react';
import './SpecularButton.css';

export type SpecularButtonSize = 'sm' | 'md' | 'lg';

export interface SpecularButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'> {
  children?: ReactNode;
  size?: SpecularButtonSize;
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  idleIntensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  glow?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  variant?: 'default' | 'featured';
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  target?: string;
  rel?: string;
}

export default function SpecularButton({
  children = 'Get Started',
  size = 'md',
  radius = 14,
  tint = '#ffffff',
  tintOpacity = 0.08,
  blur = 8,
  textColor = '#ffffff',
  lineColor = '#ffffff',
  baseColor = 'rgba(255, 255, 255, 0.15)',
  intensity = 1,
  idleIntensity = 0.35,
  followMouse = true,
  proximity = 250,
  autoAnimate = false,
  variant = 'default',
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  href,
  target,
  rel,
  style,
  ...rest
}: SpecularButtonProps) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el || disabled) return;

    let rafId = 0;
    let currentX = 50;
    let currentY = 50;
    let targetX = 50;
    let targetY = 50;
    let currentOpacity = idleIntensity;
    let targetOpacity = idleIntensity;
    let isInside = false;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Distance from center of button
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(clientX - centerX, clientY - centerY);

      if (dist < proximity) {
        // Map to percentage inside the element
        const px = ((clientX - rect.left) / rect.width) * 100;
        const py = ((clientY - rect.top) / rect.height) * 100;
        targetX = Math.max(-20, Math.min(120, px));
        targetY = Math.max(-20, Math.min(120, py));
        const factor = Math.max(0, 1 - dist / proximity);
        targetOpacity = idleIntensity + (1 - idleIntensity) * factor * intensity;
      } else if (!isInside) {
        targetOpacity = idleIntensity;
      }
    };

    const handlePointerEnter = () => {
      isInside = true;
      targetOpacity = 1 * intensity;
    };

    const handlePointerLeave = () => {
      isInside = false;
      targetOpacity = idleIntensity;
    };

    let angle = 0;
    const animate = () => {
      if (autoAnimate && !isInside) {
        angle = (angle + 0.03) % (Math.PI * 2);
        targetX = 50 + Math.cos(angle) * 45;
        targetY = 50 + Math.sin(angle) * 45;
        targetOpacity = 0.7 * intensity;
      }

      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      currentOpacity += (targetOpacity - currentOpacity) * 0.15;

      el.style.setProperty('--mouse-x', `${currentX.toFixed(1)}%`);
      el.style.setProperty('--mouse-y', `${currentY.toFixed(1)}%`);
      el.style.setProperty('--specular-opacity', currentOpacity.toFixed(2));

      rafId = requestAnimationFrame(animate);
    };

    if (followMouse) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      el.addEventListener('pointerenter', handlePointerEnter);
      el.addEventListener('pointerleave', handlePointerLeave);
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      if (followMouse) {
        window.removeEventListener('pointermove', handlePointerMove);
        el.removeEventListener('pointerenter', handlePointerEnter);
        el.removeEventListener('pointerleave', handlePointerLeave);
      }
    };
  }, [followMouse, proximity, idleIntensity, intensity, autoAnimate, disabled]);

  const classes = [
    'specular-button',
    `specular-button--${size}`,
    variant === 'featured' ? 'specular-button--featured' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const inlineStyles: CSSProperties = {
    ['--sb-radius' as any]: `${radius}px`,
    ['--sb-tint-opacity' as any]: tintOpacity,
    ['--sb-blur' as any]: `${blur}px`,
    ['--sb-text-color' as any]: textColor,
    ...style,
  };

  if (href) {
    return (
      <a
        ref={(node) => {
          elementRef.current = node;
        }}
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noreferrer noopener' : undefined)}
        onClick={onClick as any}
        className={classes}
        style={inlineStyles}
      >
        <span className="specular-button__label">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={(node) => {
        elementRef.current = node;
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      style={inlineStyles}
      {...rest}
    >
      <span className="specular-button__label">{children}</span>
    </button>
  );
}
