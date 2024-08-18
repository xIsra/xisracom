export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={'container mx-auto max-w-6xl p-3'}>{children}</div>;
}
