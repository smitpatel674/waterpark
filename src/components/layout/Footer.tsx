import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-ocean-900 text-white overflow-hidden pt-32 pb-10">
      {/* Animated waves background using SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-cyan-50"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Image
                src="/image.png"
                alt="Aquatown Logo"
                width={200}
                height={50}
                className="h-12 w-auto object-contain mix-blend-screen"
              />
            </a>
            <p className="text-white/70 max-w-sm mb-6 leading-relaxed">
              India’s Ultimate Inflatable Water Adventure Park. Get ready for thrilling water challenges, floating attractions, and family-friendly entertainment.
            </p>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-wider uppercase text-aqua-400">
              Coming Soon
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#attractions" className="text-white/70 hover:text-aqua-400 transition-colors font-medium">Attractions</a></li>
              <li><a href="#experience" className="text-white/70 hover:text-aqua-400 transition-colors font-medium">Experience</a></li>
              <li><a href="#safety" className="text-white/70 hover:text-aqua-400 transition-colors font-medium">Safety</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-aqua-400 transition-colors font-medium">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li className="leading-relaxed">E/4, Vatsalya City, Detroj Road,<br/>Kadi – 382715, Gujarat, India</li>
              <li>+91 63559 18057</li>
              <li>
                <a href="mailto:info@aquatown.in" className="hover:text-aqua-400 transition-colors">
                  info@aquatown.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left font-medium">
            © 2026 Aquatown. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
              <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 rounded-sm bg-white/50 group-hover:bg-aqua-400 transition-colors"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
