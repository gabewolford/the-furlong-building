import Link from "next/link";
import MobileMenu from "./MobileMenu";
import logo from "../../../public/logos/furlong-logo.png";
import Image from "next/image";

export default function TheHeader() {
  return (
    <header>
      <nav className="absolute top-0 flex w-full bg-primaryWhite px-5 pt-5">
        <div className="flex flex-row w-full justify-between border-t border-l border-primaryLight rounded-tl-3xl pl-5 pt-5 lg:px-10 lg:pt-10 pb-5">
          <Link href="/" className="w-[200px] lg:w-[250px]">
            <Image
              src={logo}
              alt="The Furlong Building"
              className="w-full h-auto"
              priority
            />
          </Link>
          <div className="flex flex-row h-full items-center gap-10">
            <a
              href="mailto:info@traditionrep.com?subject=Requesting%more%info%for%The%Furlong%Building"
              target="_blank"
              className="hidden md:flex bg-primaryMid text-primaryWhite hover:bg-primaryLight transition-colors duration-200 ease-in-out w-fit h-fit px-4 py-2 rounded-3xl"
            >
              Request Info
            </a>
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
