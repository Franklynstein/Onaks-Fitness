// Pill segmented control with Ignite-gradient active state. options: [{value,label}].
export default function SegmentedControl({ options, value, onChange, mini = false, ariaLabel }) {
  return (
    <div className={`seg${mini ? ' mini' : ''}`} role="group" aria-label={ariaLabel}>
      {options.map((o) => (
        <button
          type="button"
          key={o.value}
          className={value === o.value ? 'on' : ''}
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
