import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '7s' }}></div>
        
        <div className="absolute top-16 right-1/4 w-8 h-8 border border-white/10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-16 left-1/3 w-6 h-6 border border-white/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4 animate-fade-in">
                HireMeet
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Connecting exceptional talent with your organization.
              </p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-slate-400 mb-4 font-medium">Follow us</p>
              <a 
                href="https://x.com/HireMeet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-slate-800 hover:bg-slate-950 rounded-xl transition-all duration-300 hover:scale-101 hover:shadow-sm hover:shadow-blue-500/25 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Contact', 'Help Center'].map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <span className="relative z-10">{link}</span>
                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded transition-all duration-300 group-hover:w-full -z-10"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              {['Job Search', 'Talent Acquisition', 'Resume Builder', 'Interview Prep'].map((service, index) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <span className="relative z-10">{service}</span>
                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 rounded transition-all duration-300 group-hover:w-full -z-10"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm animate-fade-in" style={{ animationDelay: '1s' }}>
              © 2025 HireMeet. All rights reserved.
            </div>
            
            <div className="flex space-x-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-slate-400 hover:text-white text-sm transition-all duration-300 relative group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
    </footer>
  );
};

export default Footer;