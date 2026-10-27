import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RibbonFlow from "@/components/RibbonFlow";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <div className="relative w-full overflow-hidden">
        <RibbonFlow height={290} lineCount={49} speed={1.4} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
