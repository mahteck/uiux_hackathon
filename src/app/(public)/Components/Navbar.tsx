
import { FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {

    return (
        <div>
            {/* Header */}
            <header className="bg-black text-white text-center py-2 text-sm">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
                <a href="#" className="underline">
                    ShopNow
                </a>
                <button className="hover:text-gray-400 ml-4">English</button>
            </header>
            <nav className="flex justify-between items-center py-4 px-10 border-b">
                <div className="text-2xl font-bold">Exclusive</div>
                <ul className="flex space-x-8 text-sm">
                    <li className="hover:underline cursor-pointer"><a href="/" className="hover:text-gray-500">Home</a></li>
                    <li className="hover:underline cursor-pointer"><a href="/Contact" className="hover:text-gray-500">Contact</a></li>
                    <li className="hover:underline cursor-pointer"><a href="/About" className="hover:text-gray-500">About</a></li>
                    <li className="hover:underline cursor-pointer"><a href="/Signup" className="hover:text-gray-500">Sign Up</a></li>
                </ul>

                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="border rounded px-4 py-1 text-sm"
                    />
                    <div className="flex space-x-4">
                        {/* Wishlist */}
                        <Link href="/Wishlist">
                            <FaHeart className="w-6 h-6 text-gray-500 hover:text-red-500" />
                        </Link>
                        {/* Shopping Cart */}
                        <Link href="/Cart">
                            <FaShoppingCart className="w-6 h-6 text-gray-500 hover:text-red-500" />
                        </Link>

                        {/* Profile */}
                        <Link href="/Profile">
                            <FaUserCircle className="w-6 h-6 text-gray-500 hover:text-red-500" />
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}