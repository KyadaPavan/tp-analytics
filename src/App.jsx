import "./index.css";
import "./App.css";
import Navbar from "./components/Navbar";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import SEO from "./components/SEO";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import MarketingAnalytics from "./components/MarketingAnalytics";
import { HoverEffect } from "./components/ui/CardHoverEffect";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  // useEffect(() => {
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleClick = (e) => {
  //     if (e.button === 0) {
  //       e.preventDefault();
  //       e.stopPropagation();
  //     }
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);
  //   document.addEventListener("click", handleClick);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);

  const cardData = [
    {
      category: "EXCLUSIVE OFFER",
      title: "Free SOW",
      description:
        "Get a professionally crafted Scope of Work (SOW) document for free and simplify your project planning.",
      linkText: "Claim Now",
      link: "#",
    },
    {
      category: "MARKET INSIGHTS",
      title: "FREE Competition Analysis",
      description:
        "Gain valuable insights into your competitors with a detailed competition analysis report at no cost.",
      linkText: "Get Report",
      link: "#",
    },
    {
      category: "LIMITED TIME DEAL",
      title: "Free First Milestone Completion Offer",
      description:
        "Start your project risk-free! We’ll complete your first milestone at no cost to ensure top-quality service.",
      linkText: "Avail Now",
      link: "#",
    },
    {
      category: "SEO REPORT",
      title: "Free SEO Report",
      description:
        "Optimize your website’s performance with a comprehensive SEO audit and actionable recommendations.",
      linkText: "Check Now",
      link: "#",
    },
    {
      category: "SOCIAL MEDIA STRATEGY",
      title: "Free Social Media Strategy Report",
      description:
        "Boost your brand’s online presence with expert social media strategy insights tailored for your business.",
      linkText: "Explore Now",
      link: "#",
    },
    {
      category: "APP CONSULTATION",
      title: "Free App Development Consultation",
      description:
        "Get expert guidance on your app idea, development strategy, and best practices—completely free.",
      linkText: "Book Now",
      link: "#",
    },
    {
      category: "UI/UX REVIEW",
      title: "Free UI/UX Website Review",
      description:
        "Enhance your website’s design and user experience with a detailed UI/UX review from industry experts.",
      linkText: "Review Now",
      link: "#",
    },
    {
      category: "AUDIT & CONSULTANCY",
      title: "Free Consultancy Review & Audit",
      description:
        "Receive a professional audit and consultancy review to optimize your business strategy and operations.",
      linkText: "Start Now",
      link: "#",
    },
  ];

  return (
    <>
      <Router>
        <HelmetProvider>
          <div>
            <SEO />

            <Navbar />
            <MarketingAnalytics />
            <div>
              <HoverEffect items={cardData} />
            </div>

            <div className="bg-white">
              <FAQ />
            </div>
            <CallToAction />
            <div className="bg-gradient-to-r from-[#1D0C41] via-[#3B1E64] to-[#0B0033]">
              <Footer />
            </div>
          </div>
        </HelmetProvider>
      </Router>
    </>
  );
}

export default App;
