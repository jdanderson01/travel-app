import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-5 md:px-10">
      <div className="max-container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start">
          <Image src="/astronaut.svg" alt="Logo" width={90} height={40} />
          <p className="mt-2 text-gray-400">Your gateway to the stars.</p>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-5 text-sm">
          <Link href="/" className="hover:text-white">About Us</Link>
          <Link href="/" className="hover:text-white">Services</Link>
          <Link href="/" className="hover:text-white">Blog</Link>
          <Link href="/" className="hover:text-white">Contact</Link>
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Celestial Routes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
