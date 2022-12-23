import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  return (
    <header className=" bg-white">
      <div className="flex justify-between p-5 items-center max-w-screen-2xl mx-auto">
        <div className="max-w-[175px]">
          <Image
            src={logo}
            alt="finnish interiors - leading interior contractors"
          />
        </div>
        <nav>
          <ul className="flex gap-12 items-center justify-center h-full font-light text-xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <button className="bg-theme-100 border-theme-100 border-2 py-4 px-7 h-fit font-semibold text-theme-200 lg:text-lg">
          Get a quote
        </button>
      </div>
    </header>
  );
};

export default Navbar;
