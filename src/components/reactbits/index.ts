import type {ComponentType, ReactNode, CSSProperties} from 'react';

import BlurTextImpl from './BlurText';
import CountUpImpl from './CountUp';
import DecryptedTextImpl from './DecryptedText';
import DotFieldImpl from './DotField';
import ShinyTextImpl from './ShinyText';
import SpotlightCardImpl from './SpotlightCard';
import StarBorderImpl from './StarBorder';

/**
 * Typed wrappers around the copy-pasted react bits components.
 * The sources ship as plain .jsx, so we declare the props we actually use.
 */

export interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  stepDuration?: number;
}

export interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  separator?: string;
  direction?: 'up' | 'down';
  className?: string;
  startWhen?: boolean;
}

export interface DecryptedTextProps {
  text?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'center' | 'end';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  animateOn?: 'hover' | 'click' | 'inViewHover' | 'view';
  clickMode?: 'once' | 'loop';
}

export interface DotFieldProps {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  glowColor?: string;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  style?: CSSProperties;
}

export interface ShinyTextProps {
  text?: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export interface SpotlightCardProps {
  children?: ReactNode;
  className?: string;
  spotlightColor?: string;
}

export interface StarBorderProps {
  as?: ComponentType<any> | string;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  children?: ReactNode;
  style?: CSSProperties;
  to?: string;
  href?: string;
}

export const BlurText = BlurTextImpl as unknown as ComponentType<BlurTextProps>;
export const CountUp = CountUpImpl as unknown as ComponentType<CountUpProps>;
export const DecryptedText = DecryptedTextImpl as unknown as ComponentType<DecryptedTextProps>;
export const DotField = DotFieldImpl as unknown as ComponentType<DotFieldProps>;
export const ShinyText = ShinyTextImpl as unknown as ComponentType<ShinyTextProps>;
export const SpotlightCard = SpotlightCardImpl as unknown as ComponentType<SpotlightCardProps>;
export const StarBorder = StarBorderImpl as unknown as ComponentType<StarBorderProps>;

export default {
  BlurText,
  CountUp,
  DecryptedText,
  DotField,
  ShinyText,
  SpotlightCard,
  StarBorder,
};
