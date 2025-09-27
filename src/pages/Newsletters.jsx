import Footer from "@/components/home/Main-footer";
import TeamSection from "@/components/newsletters/TeamSection";
import React, { useEffect } from "react";
import { useLenis } from "lenis/react";

const Newsletters = () => {
  const lenis = useLenis();

  useEffect(() => {
    // Scroll to top when component mounts using Lenis for smooth scrolling
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback to regular scroll if Lenis is not available
      window.scrollTo(0, 0);
    }
  }, [lenis]);

  return (
    <>
      <div className="lg:px-40 py-40">
        <TeamSection />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Newsletters;
