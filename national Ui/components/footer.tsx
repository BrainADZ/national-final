 import { Linkedin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

 export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-gray-300 pt-14 pb-8 border-t border-white/10">
      
      <div className="max-w-425 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wide">
            NATIONAL <span className="text-[#ee9d54]">ENGINEERS</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs">
            Delivering precision-engineered heat transfer equipment, fabrication
            solutions and industrial engineering services with unmatched quality
            and reliability.
          </p>

          {/* Social Icons */}
          {/* Social Icons */}
{/* Social Media */}
<div className="flex items-center gap-4 mt-6">
  {/* YouTube */}
  <Link
    href="https://youtube.com/@national_engineers?si=AMV0srGlRfVUdmyo"
    target="_blank"
    aria-label="YouTube"
    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition hover:border-[#ee9d54] hover:bg-[#ee9d54]/10 hover:text-[#ee9d54]"
  >
    <Youtube className="h-5 w-5" />
  </Link>

  {/* Instagram */}
  <Link
    href="https://www.instagram.com/nationalengrs?igsh=dWNscnFxbmNxa2hz&utm_source=qr"
    target="_blank"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition hover:border-[#ee9d54] hover:bg-[#ee9d54]/10 hover:text-[#ee9d54]"
  >
    <Instagram className="h-5 w-5" />
  </Link>

  {/* LinkedIn */}
  <Link
    href="https://www.linkedin.com/company/national-engineers-steel-fabricators/"
    target="_blank"
    aria-label="LinkedIn"
    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-300 transition hover:border-[#ee9d54] hover:bg-[#ee9d54]/10 hover:text-[#ee9d54]"
  >
    <Linkedin className="h-5 w-5" />
  </Link>
</div>


        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-[#ee9d54] transition" href="/">Home</Link></li>
            <li><Link className="hover:text-[#ee9d54] transition" href="/about">About Us</Link></li>
            <li><Link className="hover:text-[#ee9d54] transition" href="#">Products</Link></li>
            <li><Link className="hover:text-[#ee9d54] transition" href="/careers">Carrers</Link></li>
            <li><Link className="hover:text-[#ee9d54] transition" href="/Gallery">Gallery</Link></li>
            <li><Link className="hover:text-[#ee9d54] transition" href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-[#ee9d54] transition" href="#">Heat Exchangers</Link></li>
            <li><Link className="hover:text-[#ee9d54] transition" href="#">Pressure Vessels</Link></li>
            <li><Link className="hover:text-[#ee9d54] transition" href="#">Reactors</Link></li>
            <li><Link className="hover:text-[#ee9d54] transition" href="#">Columns & Towers</Link></li>
            <li><Link className="hover:text-[#ee9d54] transition" href="#">Fabrication Services</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            <span className="font-medium text-gray-200">Address:</span><br />
Plot No. 1022, Cross Road No.87,<br/>
 Sachin GIDC, Surat - 394230
          </p>

          <p className="mt-3 text-sm text-gray-400">
            <span className="font-medium text-gray-200">Phone:</span><br />
            +91 95740 11132
          </p>

          <p className="mt-3 text-sm text-gray-400">
            <span className="font-medium text-gray-200">Email:</span><br />
            admin@nationalengrs.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 mb-6 border-t border-white/10"></div>

      {/* Bottom Bar */}
      <div className="max-w-425 mx-auto px-6 flex flex-col md:flex-row justify-around items-center text-sm text-gray-400">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} National Engineers. All Rights Reserved.
        </p>

        <div className="flex gap-6 mt-3 md:mt-0 pb-5 md:pd-2">
          <Link href="/privacy-policies" className="hover:text-[#ee9d54] transition">Privacy Policy</Link>
          <Link href="/t&c" className="hover:text-[#ee9d54] transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
