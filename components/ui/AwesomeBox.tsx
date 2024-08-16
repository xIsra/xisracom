export default function AwesomeBox({primary, secondary}: { primary: string, secondary?: string }) {
    return <span className={"text-2xl font-extralight"}
                 style={{
                     position: "relative",
                     letterSpacing: ".3rem",
                     textDecoration: "none",
                     // color: "#e91e63",
                     backgroundImage: `linear-gradient(45deg, #fdd835 0%, #f06292 100%)`,
                     color: "white",
                     boxShadow: "2px 2px 0px black",
                     textShadow: "0px 0px 10px rgba(255, 255, 255, 1)",
                     transition: "text-shadow 0.5s ease",
                     padding: "0.25rem 1rem",
                     borderRadius: "0.25rem",
                 }}
    >
        {primary}
        {secondary && <div
            className={"absolute top-2/4 left-3/4 -rotate-12 text-2xl font-light font-yesteryear text-white whitespace-nowrap"}
            style={{
                textShadow: "1px 1px 0px rgba(0, 0, 0, 1)",
            }}
        >
            {secondary}
        </div>}
    </span>;
}