import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Brain, Sparkles } from 'lucide-react';

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      {/* Left */}
      <div className="text-xl font-bold text-zinc-950 tracking-tight">
        VitaCare Premium
      </div>
      
      {/* Center */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#hizmetlerimiz" className="text-stone-500 hover:text-emerald-600 transition-colors font-medium">Hizmetlerimiz</a>
        <a href="#hakkimizda" className="text-stone-500 hover:text-emerald-600 transition-colors font-medium">Hakkımızda</a>
      </div>
      
      {/* Right */}
      <div className="flex items-center space-x-6">
        <Link to="/login" className="text-stone-500 hover:text-emerald-600 transition-colors font-medium">
          Giriş Yap
        </Link>
        <Link to="/appointment" className="px-6 py-2.5 rounded-[1.5rem] border border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-50 transition-colors text-center">
          Randevu Al
        </Link>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Left Side */}
    <div className="flex flex-col items-start space-y-8">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
        PRESTİJLİ SAĞLIK ÇÖZÜMLERİ
      </div>
      
      <h1 className="text-5xl lg:text-6xl font-bold text-zinc-950 leading-tight tracking-tight">
        Sağlığınız İçin<br />
        Modern & Profesyonel<br />
        Yaklaşım.
      </h1>
      
      <p className="text-lg text-stone-500 max-w-lg leading-relaxed">
        VitaCare Polyclinic'te en ileri tıbbi teknolojileri, kişiselleştirilmiş hasta deneyimi ile harmanlıyoruz. Sağlığınız en değerli varlığınızdır.
      </p>
      
      <Link to="/appointment" className="px-8 py-4 rounded-[1.5rem] bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all shadow-[0_10px_25px_-5px_rgba(5,150,105,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(5,150,105,0.4)] flex items-center gap-2 w-fit">
        Randevu Al
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>

    {/* Right Side - Masonry Grid */}
    <div className="grid grid-cols-2 gap-4 h-[600px]">
      <div className="flex flex-col gap-4 h-full">
        <div className="rounded-[24px] overflow-hidden h-[60%] w-full relative shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)]">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Clinic Hallway" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="rounded-[24px] overflow-hidden h-[40%] w-full relative shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)]">
          <img 
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Medical Device" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="rounded-[24px] overflow-hidden h-[90%] w-full relative shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)] mt-[10%]">
        <img 
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Doctor" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-8 rounded-[24px] shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)] hover:shadow-[0_15px_30px_-5px_rgba(15,23,42,0.12)] transition-shadow duration-300 group">
    <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
      <Icon className="w-7 h-7 text-emerald-600" />
    </div>
    <h3 className="text-xl font-bold text-zinc-950 mb-3">{title}</h3>
    <p className="text-stone-500 leading-relaxed">
      {description}
    </p>
  </div>
);

const Services = () => (
  <section className="max-w-7xl mx-auto px-6 py-24" id="hizmetlerimiz">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-zinc-950 mb-4">Ayrıcalıklı Hizmetlerimiz</h2>
      <p className="text-lg text-stone-500 max-w-2xl mx-auto">
        Size özel tasarlanmış alanlarda, alanında uzman hekimlerimizle kapsamlı sağlık hizmetleri sunuyoruz.
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ServiceCard 
        icon={HeartPulse} 
        title="Kardiyoloji" 
        description="Modern cihazlarla kalp sağlığınızı güvence altına alan detaylı tetkik ve tedavi yöntemleri." 
      />
      <ServiceCard 
        icon={Brain} 
        title="Nöroloji" 
        description="Sinir sistemi rahatsızlıklarında uzman kadromuzla erken teşhis ve etkili tedavi süreçleri." 
      />
      <ServiceCard 
        icon={Sparkles} 
        title="Dermatoloji" 
        description="Cilt sağlığınız ve estetiğiniz için en yenilikçi tıbbi yaklaşımlar ve profesyonel bakım." 
      />
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-stone-50 py-8 border-t border-stone-200 mt-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-stone-600 text-sm font-medium">
        © 2024 VitaCare Polyclinic. Prestijli Sağlık Çözümleri.
      </div>
      <div className="flex items-center space-x-6 text-sm text-stone-500">
        <a href="#" className="hover:text-emerald-600 transition-colors">KVKK Aydınlatma</a>
        <a href="#" className="hover:text-emerald-600 transition-colors">Gizlilik Politikası</a>
        <a href="#" className="hover:text-emerald-600 transition-colors">İletişim</a>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
