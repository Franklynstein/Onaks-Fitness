// "Sent, check your inbox" confirmation panel. Reusable by the calculator and
// free-workout lead-capture forms.
export default function FormConfirmation({
  heading = 'Sent. Check your inbox.',
  message,
  tips = [],
  ctaHref,
  ctaText,
}) {
  return (
    <div className="filled">
      <div className="tick">
        <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
      </div>
      <h3>{heading}</h3>
      {message && <p className="tip">{message}</p>}
      {tips.length > 0 && (
        <ul className="inc">
          {tips.map((t, i) => (
            <li key={i}>
              <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )}
      {ctaText && <a className="btn" href={ctaHref}>{ctaText}</a>}
    </div>
  );
}
