import { MapPin, Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden lg:block w-full h-10 bg-black border-b border-white/10 text-white">
      <div className="mx-auto flex h-full max-w-425 items-center justify-between px-6">
        <div className="flex items-center gap-2 text-[15px] text-gray-200 whitespace-nowrap overflow-hidden">
          <MapPin className="h-4 w-4 text-[#ee9d54] shrink-0" />
          <span className="truncate">
            Plot No. 1022, Cross Road No.87, Sachin GIDC, Surat - 394230
          </span>
        </div>

        <div className="flex items-center gap-6 text-[15px] text-gray-200 shrink-0">
          <a
            href="tel:+919574011132"
            className="flex items-center gap-2 hover:text-[#ee9d54] transition-colors"
          >
            <Phone className="h-4 w-4 text-[#ee9d54]" />
            <span>+91 95740 11132</span>
          </a>

          <a
            href="mailto:admin@nationalengrs.com"
            className="flex items-center gap-2 hover:text-[#ee9d54] transition-colors"
          >
            <Mail className="h-4 w-4 text-[#ee9d54]" />
            <span>admin@nationalengrs.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}