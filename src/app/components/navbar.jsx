import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/images/capelogo.jpg';

export default function Navbar() {
  return (
    <div className="bg-customPurple p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={60} height={60} />
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">
            Home
          </Link>
          <Link href="/shop">
            Shop
          </Link>
          <Link href="/blog">
            Blog
          </Link>
          <Link href="/services">
            Services
          </Link>
          <Link href="/repairAccount">
            Repair Account
          </Link>
        </div>
      </div>
    </div>
  );
}
