export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className={'container max-w-6xl mx-auto'}>
            {children}
        </div>
    )
}
