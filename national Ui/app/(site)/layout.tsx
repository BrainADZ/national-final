import Navbar from "@/components/header";
import Footer from "@/components/footer";
import FloatingActions from "@/sections/FloatingActions";
import AOSProvider from "@/components/AOSProvider";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <AOSProvider />
      <FloatingActions
        whatsappNumber="919574011132"
        linkedinUrl="https://www.linkedin.com/company/national-engineers-steel-fabricators/"
      />
      {children}
      <Footer />
    </>
  );
}
