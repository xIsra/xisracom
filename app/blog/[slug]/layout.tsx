export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={'container mx-auto max-w-7xl p-3 mt-16'}>{children}</div>;
}
