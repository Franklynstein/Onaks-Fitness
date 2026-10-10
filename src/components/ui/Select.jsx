// Labeled select matching the Onaks form style (custom caret via .form select CSS).
export default function Select({ label, id, children, ...rest }) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} {...rest}>{children}</select>
    </div>
  );
}
