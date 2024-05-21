import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/Logo.svg";

interface NavbarComponentArguments {
  currentState: "Logged in" | "Logged out";
  displayingPage: "About" | "Documentation" | "Login" | "Signup";
}

export default function Navbar(props: NavbarComponentArguments) {
  return (
    <>
      <div className="min-w-full min-h-8 h-auto bg-black flex flex-row px-6 py-4 items-center">
        <Image
          src={logo}
          alt="Logo"
          width={200}
          height={100}
          className="cursor-pointer md:mr-16"
        />
        <div className="flex flex-row items-center gap-x-14 font-mono text-white text-sm font-semibold">
          <Link
            href="/about"
            className={`cursor-pointer transition-colors duration-75 ease-linear hover:text-primaryColor ${
              props.displayingPage === "About"
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/documentation"
            className={`cursor-pointer transition-colors duration-75 ease-linear hover:text-primaryColor ${
              props.displayingPage === "Documentation"
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            Documentation
          </Link>
          <Link
            href="https://github.com/StarReach/Pluto-Web.git"
            className="cursor-pointer transition-colors duration-75 ease-linear hover:text-primaryColor"
          >
            Github
          </Link>
        </div>
        <div className="ml-auto h-full w-auto flex flex-row gap-x-8">
          <Link href="/login">
            <button className="bg-inherit text-white font-mono font-semibold px-4 py-2 cursor-pointer transition duration-75 ease-linear hover:text-[#e7e7e7]">
              Login
            </button>
          </Link>
          <button className="bg-primaryColor rounded-lg text-black font-mono font-semibold px-4 py-2 cursor-pointer transition duration-75 ease-linear hover:opacity-95">
            Try Now
          </button>
        </div>
      </div>
    </>
  );
}
