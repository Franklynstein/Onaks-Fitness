// Home-only keyword marquee. Three copies so the -33.333% loop is seamless.
const ITEMS = [
  'Proudly sponsored by potatoes',
  'eggs',
  'ground beef',
  'zero sugar drinks',
  'And of course, plantain',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="marq" aria-hidden="true">
      <div className="row">
        {row.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
