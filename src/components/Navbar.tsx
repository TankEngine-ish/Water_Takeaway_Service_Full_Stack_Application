import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import CartIcon from './CartIcon';
const Navbar = () => {

  const user = false;
  return (
  <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase">
    {/* Left Links */}
    <div className="hidden md:flex gap-4">
    <Link href="/">Homepage</Link>
    <Link href="/menu">Menu</Link>
    <Link href="/">Contact</Link>
    </div>
    {/* Logo */}
    <div className="text-xl">
      <Link href="/">Velingrad</Link>
    </div>
    {/* Mobile Menu */}
    <div className="md:hidden"></div>
    <div>
      <Menu/>
    </div>
    {/* Right Links */}
    <div className="hidden md:flex gap-4">
      <div>

      </div>
      {!user ? (
    <Link href="/login">Login</Link>
      ) : (
    <Link href="/orders">Orders</Link>
      )}
    <CartIcon/>
    </div>
</div>
)
}
export default Navbar
