import type { SiteConfig } from "@/lib/types";
export default {
  avatar: "/mesh-gradient.png",
  siteName: "Alex Carpenter",
  siteDescription:
    "Starter template for a personal website blog, built with Next.js, MDX, and Tailwind CSS.",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/alexcarpenter",
    twitter: "https://twitter.com/hyrbid_alex",
    linkedin: "https://www.linkedin.com/in/imalexcarpenter/",
    instagram: "https://www.instagram.com/alexcarp/",
  },
} as SiteConfig;
