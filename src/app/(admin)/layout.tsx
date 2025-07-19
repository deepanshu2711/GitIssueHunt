export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-8">{children}</div>;
}
