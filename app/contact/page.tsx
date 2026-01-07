import { Mail, Facebook, Instagram, Linkedin, Link as LinkIcon, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const contactLinks = [
    {
      icon: <Mail className="h-6 w-6 text-[#F97316]" />,
      label: "Email",
      value: "techprep.mentor@gmail.com",
      url: "mailto:techprep.mentor@gmail.com",
      color: "hover:border-[#F97316]/30"
    },
    {
      icon: <Facebook className="h-6 w-6 text-[#1877F2]" />,
      label: "Facebook page",
      value: "CasePath",
      url: "https://www.facebook.com/profile.php?id=61585639323057",
      color: "hover:border-[#1877F2]/30"
    },
    {
      icon: <Facebook className="h-6 w-6 text-[#1877F2]" />,
      label: "Facebook community",
      value: "Vietnamese Professional Network",
      url: "https://www.facebook.com/groups/672801498954519",
      color: "hover:border-[#1877F2]/30"
    },
    {
      icon: <Instagram className="h-6 w-6 text-[#E4405F]" />,
      label: "Instagram",
      value: "Instagram Pathwise",
      url: "#",
      color: "hover:border-[#E4405F]/30"
    },
    {
      icon: <Linkedin className="h-6 w-6 text-[#0A66C2]" />,
      label: "LinkedIn",
      value: "Pathwise LinkedIn",
      url: "#",
      color: "hover:border-[#0A66C2]/30"
    }
  ]

  return (
    <div className="min-h-screen bg-[#FDFCFB] py-20 px-4">
      <div className="container max-w-2xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-[#19304D]">
            Connect with us!
          </h1>
          <p className="text-[#19304D] text-lg">
            Please feel free to reach out to us through the following channels.
          </p>
        </div>

        {/* Links List */}
        <div className="space-y-4">
          {contactLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.url}
              className={`flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-transparent transition-all ${link.color} hover:shadow-md group`}
            >
              <div className="flex-shrink-0">
                {link.icon}
              </div>
              <div className="flex-grow">
                <p className="text-[#19304D] font-medium flex items-center gap-2">
                  {link.label}: 
                  <span className="font-bold text-[#19304D] group-hover:text-primary transition-colors">
                    {link.value}
                  </span>
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-[#19304D] group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
