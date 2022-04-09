export default function Paragraph(p) {
  return (
    <div style={{ textAlign: "justify", textIndent: "2em" }}>{p.children}</div>
  );
}
