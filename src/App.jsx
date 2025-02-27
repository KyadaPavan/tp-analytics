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
import Connection from "./components/Connection";
import ProcessSteps from "./components/ProcessSteps";
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
      title: "Free Scope of Work (SOW)",
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
      category: "SEO REPORT",
      title: "Free SEO Report",
      description:
        "Optimize your website’s performance with a comprehensive SEO audit and actionable recommendations.",
      linkText: "Check Now",
      link: "#",
    },
    {
      category: "SOCIAL MEDIA AUDIT",
      title: "Free Social Media AUDIT Report",
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
    {
      category: "BUSINESS STRATEGY",
      title: "Free Business Proposal",
      description:
        "Get a professionally crafted business proposal to attract investors and secure potential clients.",
      linkText: "Start Now",
      link: "#",
    },
    {
      category: "BRAND IDENTITY",
      title: "Free Company Profile Proposal",
      description:
        "Receive a tailored company profile proposal to showcase your brand’s strengths and credibility.",
      linkText: "Start Now",
      link: "#",
    },
    {
      category: "WEB DEVELOPMENT",
      title: "Free Website Development Proposal",
      description:
        "Obtain a detailed website development proposal to enhance your online presence and user experience.",
      linkText: "Start Now",
      link: "#",
    },
    {
      category: "DIGITAL MARKETING",
      title: "Free Content Marketing Strategy",
      description:
        "Gain a strategic content marketing plan to boost engagement and grow your brand’s digital reach.",
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
            <Connection />
            <ProcessSteps />
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
