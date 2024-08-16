import Link from "next/link";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaStackOverflow} from "react-icons/fa";
import {FaX} from "react-icons/fa6";

export function SocialLinksListOld() {
    return <ul className="flex gap-1">
        <li>
            <Link
                className="flex items-center justify-center text-red-400 transition hover:text-red-600"
                href="https://youtube.com/@israkouper"
                aria-label="Youtube"
            >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                     className="h-8 w-8 fill-current">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                       strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M19.67 8.14002C19.5811 7.7973 19.4028 7.48433 19.1533 7.23309C18.9038 6.98185 18.5921 6.80134 18.25 6.71001C16.176 6.4654 14.0883 6.35517 12 6.38001C9.91174 6.35517 7.82405 6.4654 5.75001 6.71001C5.40793 6.80134 5.09622 6.98185 4.84674 7.23309C4.59725 7.48433 4.41894 7.7973 4.33001 8.14002C4.10282 9.41396 3.99236 10.706 4.00001 12C3.99198 13.3007 4.10244 14.5994 4.33001 15.88C4.42355 16.2172 4.60391 16.5239 4.85309 16.7696C5.10226 17.0153 5.41153 17.1913 5.75001 17.28C7.82405 17.5246 9.91174 17.6349 12 17.61C14.0883 17.6349 16.176 17.5246 18.25 17.28C18.5885 17.1913 18.8978 17.0153 19.1469 16.7696C19.3961 16.5239 19.5765 16.2172 19.67 15.88C19.8976 14.5994 20.008 13.3007 20 12C20.0077 10.706 19.8972 9.41396 19.67 8.14002ZM10.36 14.39V9.63001L14.55 12L10.36 14.38V14.39Z"></path>
                    </g>
                </svg>
            </Link>
        </li>
        <li>
            <Link
                className="flex items-center justify-center text-red-400 transition hover:text-red-600"
                href="https://linkedin.com/in/xisra"
                aria-label="Linkedin"
            >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                        ></path>
                    </g>
                </svg>
            </Link>
        </li>
        <li>
            <Link
                className="flex items-center justify-center text-red-400 transition hover:text-red-600"
                href="https://stackoverflow.com/users/9634635/xisra"
                aria-label="StackOverflow"
            >
                <svg viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                     version="1.1" baseProfile="full" enableBackground="new 0 0 76.00 76.00" xmlSpace="preserve"
                     className={"h-8 w-8 fill-current"}
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path fillOpacity="1" strokeLinejoin="round"
                              d="M 24,42L 27,42L 27,54L 46,54L 46,42L 49,42L 49,57L 24,57L 24,42 Z M 44,52L 29,52L 29,49L 44,49L 44,52 Z M 43.7907,47.289L 28.8273,46.2427L 29.0365,43.25L 44,44.2963L 43.7907,47.289 Z M 44.0046,43.2365L 29.5157,39.3542L 30.2922,36.4565L 44.7811,40.3387L 44.0046,43.2365 Z M 44.8399,39.0526L 31.8496,31.5526L 33.3496,28.9545L 46.3399,36.4545L 44.8399,39.0526 Z M 46.8954,35.8657L 38.0786,23.7305L 40.5056,21.9671L 49.3224,34.1024L 46.8954,35.8657 Z M 50.0224,33.7538L 48.1943,18.8656L 51.172,18.5L 53,33.3882L 50.0224,33.7538 Z "></path>
                    </g>
                </svg>
            </Link>
        </li>
        <li>
            <Link
                className="flex items-center justify-center text-red-400 transition hover:text-red-600"
                href="https://github.com/xisra"
                aria-label="Github"
            >
                <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                </svg>
            </Link>
        </li>
    </ul>;
}

export default function SocialLinksList() {


    return <div
        data-aos-easing="ease-in-out"
        data-aos-duration="1500"
        data-aos="fade-up"
        className="mt-8 flex">
        <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <FaFacebook className="h-6 w-6" fill="currentColor"/>
        </a>
        <a href="https://www.instagram.com/israkouper/" className="ml-6 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="h-6 w-6" fill="currentColor"/>
        </a>
        <a href="https://x.com/israkouper" className="ml-6 text-gray-400 hover:text-gray-500">
            <span className="sr-only">X</span>
            <FaX className="h-6 w-6" fill="currentColor"/>
        </a>
        <a href="https://stackoverflow.com/users/9634635/xisra" className="ml-6 text-gray-400 hover:text-gray-500">
            <span className="sr-only">StackOverflow</span>
            <FaStackOverflow className="h-6 w-6" fill="currentColor"/>
        </a>
        <a href="https://github.com/xisra" className="ml-6 text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" fill="currentColor"/>
        </a>
        <a href="https://linkedin.com/in/xisra" className="ml-6 text-gray-400 hover:text-gray-500">
            <span className="sr-only">Linkedin</span>
            <FaLinkedin className="h-6 w-6" fill="currentColor"/>
        </a>
    </div>
}