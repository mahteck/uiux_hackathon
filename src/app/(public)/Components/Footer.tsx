export default function Footer() {
    return (
        <footer className="bg-black text-white px-10 py-16">
            <div className="grid grid-cols-5 gap-10 text-sm">
                {/* Column 1 */}
                <div>
                    <h3 className="text-lg font-bold mb-2">Exclusive</h3>
                    <p>Subscribe</p>
                    <p className="mb-4">Get 10% off your first order</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-l-lg text-black"
                        />
                        <button className="bg-red-500 px-4 py-2 rounded-r-lg">→</button>
                    </div>
                </div>
                {/* Column 2 */}
                <div>
                    <h3 className="text-lg font-bold mb-2">Support</h3>
                    <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                {/* Column 3 */}
                <div>
                    <h3 className="text-lg font-bold mb-2">Account</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:underline">My Account</a></li>
                        <li><a href="/" className="hover:underline">Login / Register</a></li>
                        <li><a href="/" className="hover:underline">Cart</a></li>
                        <li><a href="/" className="hover:underline">Wishlist</a></li>
                    </ul>
                </div>
                {/* Column 4 */}
                <div>
                    <h3 className="text-lg font-bold mb-2">Quick Link</h3>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/" className="hover:underline">Terms Of Use</a></li>
                        <li><a href="/" className="hover:underline">FAQ</a></li>
                        <li><a href="/" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                {/* Column 5 */}
                <div>
                    <h3 className="text-lg font-bold mb-2">Download App</h3>
                    <p className="mb-2">Save $3 with App New User Only</p>
                    <div className="flex">
                        <img src="/images/QrCode.png" alt="Scan" className="h-20" />
                        <img src="/images/googleplay.png" alt="Google Play" className="h-10" />
                        <img src="/images/appstore.png" alt="App Store" className="h-10" />
                    </div>
                </div>
            </div>
            <div className="mt-12 text-center text-xs">
                &copy; Copyright Rimel 2022. All rights reserved.
            </div>
        </footer>


    )
}