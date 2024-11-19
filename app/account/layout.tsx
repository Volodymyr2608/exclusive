export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mt-20 mb-36">{children}</div>;
}