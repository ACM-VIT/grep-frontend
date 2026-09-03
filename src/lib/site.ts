/** Chapter-level facts used across the site. */

export const site = {
  name: 'grep',
  org: 'ACM-VIT',
  orgFull: 'Association for Computing Machinery - VIT Student Chapter',
  tagline: 'Because Technology Matters',
  description:
    'grep is the official newsletter of ACM-VIT - the Association for Computing Machinery’s student chapter at VIT Vellore. Events, projects, research and the people behind them, once an edition.',
  url: 'https://grep.acmvit.in',
  email: 'acmvit@vit.ac.in',
} as const;

export interface SocialLink {
  label: string;
  href: string;
  /** Basename of the icon in `public/logos/socials/`. */
  icon: string;
}

/**
 * The link grid printed on the back page of every edition, in the order the
 * page sets it: three rows of three, read left to right.
 */
export const socials: SocialLink[] = [
  { label: 'acmvit.in', href: 'https://acmvit.in', icon: 'website' },
  { label: 'email', href: 'mailto:acmvit@vit.ac.in', icon: 'mail' },
  { label: 'facebook', href: 'https://www.facebook.com/acmvitvellore/', icon: 'facebook' },
  { label: 'github', href: 'https://github.com/ACM-VIT', icon: 'github' },
  { label: 'hashnode', href: 'https://blog.acmvit.in', icon: 'hashnode' },
  { label: 'instagram', href: 'https://instagram.com/acmvit', icon: 'instagram' },
  { label: 'linkedin', href: 'https://www.linkedin.com/company/acmvit/', icon: 'linkedin' },
  { label: 'x.com', href: 'https://x.com/acm_vit', icon: 'x' },
  { label: 'youtube', href: 'https://www.youtube.com/@acm_vit', icon: 'youtube' },
];
