import Link from "next/link";
import {
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b1a24] to-[#08131c] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Support */}
          <div>
            <h4 className="text-white tracking-widest text-sm mb-6">SUPPORT</h4>

            <div className="border border-gray-600 rounded-full px-4 py-3 flex items-center gap-3 mb-4">
              <Phone size={18} />
              <div>
                <p className="text-xs">9 AM - 8 PM</p>
                <p className="text-red-500 font-semibold text-lg">16793</p>
              </div>
            </div>

            <div className="border border-gray-600 rounded-full px-4 py-3 flex items-center gap-3">
              <MapPin size={18} />
              <p className="text-red-500 font-semibold">Find Our Stores</p>
            </div>
          </div>

          {/* About Us - Column 1 */}
          <div>
            <h4 className="text-white tracking-widest text-sm mb-6">
              ABOUT US
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#">Affiliate Program</Link>
              </li>
              <li>
                <Link href="#">Online Delivery</Link>
              </li>
              <li>
                <Link href="#">Refund and Return Policy</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>

          {/* About Us - Column 2 */}
          <div>
            <h4 className="text-white tracking-widest text-sm mb-6 invisible">
              ABOUT US
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#">EMI Terms</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Star Point Policy</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-white tracking-widest text-sm mb-6">
              STAY CONNECTED
            </h4>
            <p className="text-white font-semibold mb-2">Star Tech Ltd</p>
            <p className="text-sm leading-relaxed">
              Head Office: 28 Kazi Nazrul Islam Ave, Navana Zohura Square, Dhaka
              1000
            </p>

            <p className="mt-4 text-sm">
              Email:
              <br />
              <span className="text-red-500">webteam@todaysmart.com</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* App Links */}

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <MessageCircle size={20} />
            <Facebook size={20} />
            <Youtube size={20} />
            <Instagram size={20} />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>© 2025 Todays Mart | All rights reserved</p>
          <p>Powered By: Todays Mart</p>
        </div>
      </div>
    </footer>
  );
}
