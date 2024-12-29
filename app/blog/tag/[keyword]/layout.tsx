export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={'container mx-auto mt-16 max-w-7xl p-3'}>{children}</div>
  );
}
