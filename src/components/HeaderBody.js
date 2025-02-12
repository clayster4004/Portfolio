export default function HeaderBody({ header, body }) {
  return (
    <div className="header-body">
      <h1>{header}</h1>
      <p>{body}</p>
    </div>
  );
}