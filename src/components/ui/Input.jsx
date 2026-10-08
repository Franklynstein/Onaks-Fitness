// Labeled input matching the Onaks form style (styling comes from the .form scope).
export default function Input({ label, id, ...rest }) {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...rest} />
    </div>
  );
}
