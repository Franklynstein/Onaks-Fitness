import { Link } from 'react-router-dom';

// Primary pill button (Ignite gradient). Renders a router Link (to), anchor (href) or button.
export function Button({ to, href, children, className = '', ...rest }) {
  const cls = `btn ${className}`.trim();
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}

// Ghost (outlined pill) button.
export function GhostButton({ to, href, children, className = '', ...rest }) {
  const cls = `btn-ghost ${className}`.trim();
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}
