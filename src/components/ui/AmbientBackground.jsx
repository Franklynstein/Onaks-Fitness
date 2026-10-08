// Three blurred radial orbs fixed behind the page (CSS drift animations in onaks.css).
export default function AmbientBackground() {
  return (
    <div className="bg" aria-hidden="true">
      <i className="o1" />
      <i className="o2" />
      <i className="o3" />
    </div>
  );
}
