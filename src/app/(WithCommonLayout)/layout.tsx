import { TrustSection } from "@/components/shared/TrustSection";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { Newsletter } from "@/components/shared/Newsletter";
import { UnderDevelopmentModal } from "@/components/UnderDevelopmentModal";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="container mx-auto min-h-screen w-full lg:w-[75%] px-2">
        {children}
      </main>
      <TrustSection />
      <Newsletter />
      <Footer />

      <UnderDevelopmentModal />
    </div>
  );
};

export default DashboardLayout;
