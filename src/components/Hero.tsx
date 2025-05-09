
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen bg-navy flex items-center"
    >
      <div 
        className="absolute inset-0 opacity-30" 
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop")`, 
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Especialistas em <span className="text-maroon">Direito Previdenciário</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fade-up">
            Garantindo seus direitos com excelência jurídica e anos de experiência em casos previdenciários
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <button
              onClick={scrollToContact}
              className="btn-primary flex items-center justify-center gap-2"
            >
              <span>Consulta Gratuita</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('servicos');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-maroon" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
