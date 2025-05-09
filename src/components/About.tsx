
import { User, Shield, Book } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="bg-white section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Sobre Nós</h2>
        <p className="section-subtitle text-center">
          Com mais de 15 anos de experiência, somos referência em direito previdenciário, 
          ajudando nossos clientes a conquistarem seus direitos com dignidade.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <User className="text-navy w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 text-center">Experiência</h3>
            <p className="text-gray-600 text-center">
              Equipe de advogados com mais de 15 anos de experiência exclusivamente dedicada 
              ao direito previdenciário.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Shield className="text-navy w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 text-center">Compromisso</h3>
            <p className="text-gray-600 text-center">
              Atendimento personalizado e dedicação total à causa, 
              garantindo que cada cliente receba a atenção que merece.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Book className="text-navy w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 text-center">Conhecimento</h3>
            <p className="text-gray-600 text-center">
              Constante atualização sobre as mudanças na legislação previdenciária
              para oferecer as melhores estratégias jurídicas.
            </p>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-navy mb-6">Dr. Carlos Mendes</h3>
            <p className="text-lg text-gray-600 mb-6">
              Advogado especialista em Direito Previdenciário com mais de 15 anos de experiência.
              Formado pela Universidade de São Paulo (USP), com especialização em Direito Previdenciário
              pela PUC-SP e mestrado em Direito pela Universidade Federal do Rio de Janeiro.
            </p>
            <p className="text-lg text-gray-600">
              Palestrante renomado e autor de diversos artigos científicos sobre o tema,
              Dr. Carlos Mendes é referência nacional quando o assunto é garantir o direito
              dos aposentados e pensionistas.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="bg-gray-300 h-[400px] w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
