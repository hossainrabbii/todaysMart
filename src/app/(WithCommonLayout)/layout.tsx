import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" bg-gray-100">
      <Navbar />
      <main className="container mx-auto min-h-screen w-full lg:w-[75%] px-2">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
