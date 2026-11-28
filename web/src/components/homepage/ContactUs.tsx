import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <footer id="contact" className="bg-aozora-blue py-8 md:py-4 px-4 md:pr-8 min-h-[320px] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center h-full w-full">
        
        {/* 1. Logo Section */}
        <div className="flex justify-center md:justify-start">
          <Image 
            src="/images/logo.webp" 
            alt="Aozora Logo" 
            width={320}
            height={320}
            className="object-cover object-left"
          />
        </div>

        {/* 2. Contact Us Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-aozora-dark text-lg mb-4">Contact Us</h3>
          <p className="text-slate-600 mb-2">Phone: 061-451707</p>
          <p className="text-slate-600">email coming soon...</p>
        </div>

        {/* 3. Address Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-aozora-dark text-lg mb-4">Address</h3>
          <p className="text-slate-600 mb-2">Phewa marga 183</p>
          <p className="text-slate-600 mb-4">Lakeside-6, Pokhara, Nepal</p>
          
          {/* Maps Link with Red Hover */}
          <Link 
            href="https://www.google.com/maps/search/?api=1&query=Aozora+Japanese+Restaurant+Pokhara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-aozora-dark font-bold hover:text-aozora-red transition-colors duration-300"
          >
            Open in Google Maps
          </Link>
        </div>

        {/* 4. Business Hours Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-bold text-aozora-dark text-lg mb-4">Business Hours</h3>
          <p className="text-slate-600 mb-1">Sunday - Saturday:</p>
          <p className="text-slate-600">9:00 AM - 9:00 PM</p>
        </div>

        {/* 5. Social Media Section */}
        <div className="flex justify-center md:justify-start mt-2 md:mt-0">
          <Link 
            href="https://www.facebook.com/people/Aozora-Japanese-Restaurant/100063741122413/#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-aozora-dark hover:text-aozora-red transition-colors duration-300"
          >
            {/* Facebook SVG Icon */}
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">Follow us on FaceBook</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}