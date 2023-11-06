import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/images/capelogo.jpg';

export default function Navbar() {
  return (
    <div className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={60} height={60} />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/home">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/about/us">
            About Us
          </Link>
          <Link href="/about/someone">
            About Someone
          </Link>
        </div>
      </div>
    </div>
  );
}
