import Link from "next/link";

// backgroundColor: pink['400'] || '#ec407a',
// backgroundImage: `linear-gradient(45deg, ${yellow['600'] || '#fdd835'} 0%, ${pink['300'] || '#f06292'} 100%)`,
// color: 'inherit'


export const backgroundAwesomeStyles = {
    backgroundColor: '#ec407a',
    backgroundImage: `linear-gradient(45deg, '#fdd835' 0%, '#f06292' 100%)`,
    color: 'inherit'
};


export default function Logo() {
    return (
        <Link href="/" className="inline-flex" aria-label="xisracom">
            <div className={"text-2xl font-bold"}
                 style={{
                     position: 'relative',
                     fontWeight: 200,
                     letterSpacing: '.3rem',
                     textDecoration: 'none',
                     // color: "#e91e63",
                     backgroundImage: `linear-gradient(45deg, #fdd835 0%, #f06292 100%)`,
                     color: "white",
                     boxShadow: "2px 2px 0px black",
                     fontSize: '1.25rem',
                     textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                     transition: 'text-shadow 0.5s ease',
                     padding: '0.25rem 1rem',
                     borderRadius: '0.25rem',
                 }}
            >
                xIsra.com
                <div style={{
                    transform: `rotate(-10deg)`,
                    position: 'absolute',
                    top: '30%',
                    left: '66%',
                    fontSize: '1.4rem',
                    letterSpacing: 0,
                    textTransform: 'initial',
                    fontFamily: `var(--font-yesteryear), cursive`,
                    fontWeight: 'normal',
                    color: '#fafafa',
                    textShadow: '1px 1px 0px rgba(0, 0, 0, 1)',
                    whiteSpace: 'nowrap'
                }}>Welcome!</div>
            </div>
        </Link>
    );
}
