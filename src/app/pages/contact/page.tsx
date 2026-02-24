import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 md:px-12">
      {/* Global Blurred Background Layer */}
      <div className="fixed inset-0 z-[-50]">
        <Image
          src="/global_background_image.png"
          alt="Atmosphere"
          fill
          unoptimized={true}
          className="object-cover opacity-80 blur-md"
        />
        {/* Soft overlay to ensure text remains perfectly readable */}
        <div className="absolute inset-0 bg-white/20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center space-y-6 mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-[#601438]">Contact Us</h1>
          <p className="text-[#601438]/80 font-light text-lg max-w-2xl mx-auto tracking-wide">
            Have questions? We&apos;re here to help. Reach out to our team for support, booking inquiries, or just to say hello.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">

            <div className="space-y-8">
              <h2 className="text-2xl font-serif text-[#601438]">Get in Touch</h2>

              <div className="space-y-6 text-[#601438]/90 font-light">

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/80 backdrop-blur-md shadow-sm border border-[#601438]/10 rounded-none">
                    <MapPin className="w-6 h-6 text-[#601438]" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-serif text-[#601438] text-xl mb-2">Visit Us</h3>
                    <p>CareBraids Studio</p>
                    <p>123 Braiding Ave, Suite 100</p>
                    <p>Style City, SC 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/80 backdrop-blur-md shadow-sm border border-[#601438]/10 rounded-none">
                    <Phone className="w-6 h-6 text-[#601438]" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-serif text-[#601438] text-xl mb-2">Call Us</h3>
                    <p>+250 794 523 824</p>
                    <p className="text-sm text-[#601438]/60 mt-1 uppercase tracking-widest text-[10px] font-medium">Mon-Sat 9am-7pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/80 backdrop-blur-md shadow-sm border border-[#601438]/10 rounded-none">
                    <Mail className="w-6 h-6 text-[#601438]" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-serif text-[#601438] text-xl mb-2">Email Us</h3>
                    <p>support@carebraids.com</p>
                    <p>inquiries@carebraids.com</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="space-y-6 pt-8 border-t border-[#601438]/10">
              <h2 className="text-2xl font-serif text-[#601438]">Hours</h2>
              <div className="space-y-3 text-[#601438]/90 font-light">
                <div className="flex justify-between max-w-sm border-b border-[#601438]/10 pb-3">
                  <span>Monday - Saturday</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between max-w-sm border-b border-[#601438]/10 pb-3">
                  <span>Sunday</span>
                  <span className="italic text-[#601438]/60">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/85 backdrop-blur-xl p-8 md:p-12 shadow-2xl border border-[#601438]/10 rounded-none">
            <h2 className="text-3xl font-serif text-[#601438] mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#601438]/70">Name</label>
                  <input type="text" className="w-full bg-white/60 border border-[#601438]/10 p-4 focus:outline-none focus:border-[#601438] focus:bg-white transition-all text-[#601438]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#601438]/70">Email</label>
                  <input type="email" className="w-full bg-white/60 border border-[#601438]/10 p-4 focus:outline-none focus:border-[#601438] focus:bg-white transition-all text-[#601438]" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#601438]/70">Subject</label>
                <input type="text" className="w-full bg-white/60 border border-[#601438]/10 p-4 focus:outline-none focus:border-[#601438] focus:bg-white transition-all text-[#601438]" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#601438]/70">Message</label>
                <textarea rows={5} className="w-full bg-white/60 border border-[#601438]/10 p-4 focus:outline-none focus:border-[#601438] focus:bg-white transition-all text-[#601438] resize-none"></textarea>
              </div>
              <button className="w-full bg-[#601438] text-white py-5 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#4a0e2d] transition-all shadow-md mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
