import { Helmet } from "react-helmet-async";

export default function SEO() {
  return (
    <Helmet>
      {/* Meta Tags for SEO */}
      <title>Trustopay</title>
      <meta
        name="description"
        content="Join Trustopay Community—India’s largest network for IT freelancers & agencies! Gain verified leads, collaborate with experts, access premium tools, and scale your business. "
      />

      <meta
        name="keywords"
        content="IT freelancer community, Freelancer network India, IT agency platform, Verified leads for freelancers, Networking for IT professionals, Best freelancer marketplace, IT projects for freelancers, Freelancer jobs in India, Find IT clients online, Business growth for freelancers, Best platform for freelancers, Find IT projects online, IT agency growth network, Freelance business tools, Collaboration for freelancers, IT agency business development, Best online networking for freelancers, Freelance web development jobs, Digital marketing freelancer network, Online marketplace for IT agencies, Best online community for IT freelancers in India, Where to find verified freelance IT projects, Networking and lead generation for IT agencies, Free business tools for freelancers and agencies, How to scale an IT freelance business, Best freelance platforms for Indian IT professionals, Free resources for IT freelancers and agencies, Where to find high-paying IT freelance jobs, How to grow an IT agency through networking, Best lead generation platform for IT professionals,"
      />

      <meta name="author" content="Trustopay Community" />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta
        property="og:title"
        content="Trustopay Community | India’s Largest IT Freelancer & Agency Network"
      />
      <meta
        property="og:description"
        content="Join Trustopay Community—India’s largest network for IT freelancers & agencies! Gain verified leads, collaborate with experts, access premium tools, and scale your business. "
      />
      <meta property="og:image" content="/icon.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://community.trustopay.com/" />

      <link rel="canonical" href="https://community.trustopay.com/" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Trustopay Community – India’s Largest IT Freelancer & Agency Network"
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="twitter:description"
        content="Join Trustopay Community—India’s largest network for IT freelancers & agencies! Gain verified leads, collaborate with experts, access premium tools, and scale your business."
      />
      <meta name="twitter:image" content="/icon.png" />
    </Helmet>
  );
}
