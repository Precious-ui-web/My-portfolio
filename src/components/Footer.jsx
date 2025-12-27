 function Footer() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/precious-ayigbe",
      icon: "🔗",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "🐙",
      color: "hover:text-gray-300",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "𝕏",
      color: "hover:text-gray-300",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/07064509353",
      icon: "💬",
      color: "hover:text-green-400",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700 mt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Precious Ayigbe
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2 text-gray-400 text-sm">
              <a href="#projects" className="hover:text-pink-400 transition-colors duration-300">
                Projects
              </a>
              <a href="#skills" className="hover:text-pink-400 transition-colors duration-300">
                Skills
              </a>
              <a href="#contact" className="hover:text-pink-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">Get In Touch</h4>
            <p className="text-gray-400 text-sm">
              Have a project in mind? Let's work together and create something amazing!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Social links and copyright */}
        <div className="space-y-6">
          {/* Social icons */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 text-lg transition-all duration-300 ${link.color} hover:border-pink-500 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50`}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Precious Ayigbe. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Built with <span className="text-red-400">❤️</span> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
    </footer>
  );
}
export default Footer;