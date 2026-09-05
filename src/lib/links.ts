
/** True for absolute http(s) and protocol-relative URLs - mailto/tel/# stay put. */
export function isExternal(href: string): boolean {
  return /^(https?:)?\/\//i.test(href);
}

/** Spread onto an anchor: `<a href={href} {...linkTarget(href)}>`. */
export function linkTarget(href: string): { target?: '_blank'; rel?: string } {
  return isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
}
