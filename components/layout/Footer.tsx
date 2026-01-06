import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function Footer() {
  const footerSections = [
    {
      title: "Information",
      links: [
        { label: "Our Mentors", href: "#" },
        { label: "Outcomes Report", href: "#" },
        { label: "Fellow Stories", href: "#" },
        { label: "FAQ", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog", icon: true },
      ]
    },
    {
      title: "Fields of Mentorship",
      links: [
        { label: "Tech (Software & Data)", href: "#" },
        { label: "Finance", href: "#" },
        { label: "US Admissions", href: "#" },
      ]
    },
    {
      title: "Social",
      links: [
        { label: "LinkedIn", href: "#", icon: true },
        { label: "Facebook", href: "#", icon: true },
        { label: "Instagram", href: "#", icon: true },
        { label: "Threads", href: "#", icon: true },
      ]
    }
  ]

  return (
    <footer className="w-full bg-white border-t pt-16 pb-8">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-16">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-bold tracking-tighter text-[#0B1B2B]">
              CASE<span className="text-secondary">PATH</span>
            </Link>
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h4 className="font-bold text-[#5B3A29] text-base">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      href={link.href} 
                      className="text-[#8C7365] hover:text-[#5B3A29] transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.icon && (
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#8C7365]">
            Copyright © {new Date().getFullYear()} thecasepath.org
          </p>
          <div className="flex items-center gap-8 text-sm">
            <Link href="#" className="text-[#8C7365] hover:text-[#5B3A29] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#8C7365] hover:text-[#5B3A29] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
