import Link from "next/link";

import Image from "next/image";

// backgroundColor: pink['400'] || '#ec407a',
// backgroundImage: `linear-gradient(45deg, ${yellow['600'] || '#fdd835'} 0%, ${pink['300'] || '#f06292'} 100%)`,
// color: 'inherit'

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="xisracom">
        <div className={"text-2xl font-bold"}
             style={{
                color: "#e91e63",
                backgroundImage: `linear-gradient(45deg, #fdd835 0%, #f06292 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",

             }}
        >xIsra.com</div>
        {/*<Image src={xisraLogo} alt="xisracom" width={124} height={56} />*/}
      {/*<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">*/}
      {/*  <path*/}
      {/*    className="fill-red-500"*/}
      {/*    fillRule="evenodd"*/}
      {/*    d="M15.052 0c6.914.513 12.434 6.033 12.947 12.947h-5.015a7.932 7.932 0 0 1-7.932-7.932V0Zm-2.105 22.985V28C6.033 27.487.513 21.967 0 15.053h5.015a7.932 7.932 0 0 1 7.932 7.932Z"*/}
      {/*    clipRule="evenodd"*/}
      {/*  />*/}
      {/*  <path*/}
      {/*    className="fill-red-300"*/}
      {/*    fillRule="evenodd"*/}
      {/*    d="M0 12.947C.513 6.033 6.033.513 12.947 0v5.015a7.932 7.932 0 0 1-7.932 7.932H0Zm22.984 2.106h5.015C27.486 21.967 21.966 27.487 15.052 28v-5.015a7.932 7.932 0 0 1 7.932-7.932Z"*/}
      {/*    clipRule="evenodd"*/}
      {/*  />*/}
      {/*</svg>*/}
    </Link>
  );
}
