import type { AnchorHTMLAttributes } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'accent' | 'outline' | 'outline-light';
  size?: 'lg' | 'md';
  /** Text that rolls in on hover. Defaults to the label itself, as in Nova. */
  hoverLabel?: string;
  label: string;
};

/** Nova pill button with the rolling-label hover effect. */
export function Button({ variant = 'primary', size = 'lg', label, hoverLabel, className = '', ...rest }: Props) {
  const isExternal = rest.href?.startsWith('http');
  const isFile = rest.href?.endsWith('.pdf');
  return (
    <a
      className={`btn btn--${variant} btn--${size} ${className}`}
      {...(isExternal || isFile ? { target: '_blank', rel: 'noreferrer' } : {})}
      {...rest}
    >
      <span className="btn__wrap">
        <span className="btn__text">{label}</span>
        <span className="btn__hover" aria-hidden="true">
          {hoverLabel ?? label}
        </span>
      </span>
    </a>
  );
}
