// Shared gradient defs. Referenced by stroke="url(#ig)" / fill throughout the design.
export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="ig" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#00EB2B" />
          <stop offset="1" stopColor="#00B4FB" />
        </linearGradient>
        <linearGradient id="ig2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00EB2B" />
          <stop offset="1" stopColor="#00B4FB" />
        </linearGradient>
      </defs>
    </svg>
  );
}
