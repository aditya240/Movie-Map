export default function ErrorMessage({ msg }) {
  return (
    <p className="error">
      <span>❌</span> {msg}
    </p>
  );
}
