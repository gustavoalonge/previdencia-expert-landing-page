
import { User, Shield, Book } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="bg-white section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Sobre Nós</h2>
        <p className="section-subtitle text-center">
          Com mais de 10 anos de experiência, somos referência em direito previdenciário, 
          ajudando nossos clientes a conquistarem seus direitos com dignidade.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <User className="text-maroon w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 text-center">Experiência</h3>
            <p className="text-gray-600 text-center">
              Equipe de advogados com mais de 10 anos de experiência exclusivamente dedicada 
              ao direito previdenciário.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Shield className="text-maroon w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 text-center">Compromisso</h3>
            <p className="text-gray-600 text-center">
              Atendimento personalizado e dedicação total à causa, 
              garantindo que cada cliente receba a atenção que merece.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
              <Book className="text-maroon w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4 text-center">Conhecimento</h3>
            <p className="text-gray-600 text-center">
              Constante atualização sobre as mudanças na legislação previdenciária
              para oferecer as melhores estratégias jurídicas.
            </p>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24">
          <h3 className="text-3xl font-bold text-navy mb-10 text-center">Nossa Equipe</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-6 relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full h-full bg-gray-200 floating-img">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop" 
                    alt="Dr. Hiago Rufino" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-navy">Dr. Hiago Rufino</h4>
              <p className="text-maroon font-semibold mb-4">Advogado Especialista</p>
              <p className="text-gray-600">
                Especializado em Direito Previdenciário pela PUC-SP com vasta experiência em casos complexos.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-6 relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full h-full bg-gray-200 floating-img">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" 
                    alt="Dra. Ana Carolina" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-navy">Dra. Ana Carolina</h4>
              <p className="text-maroon font-semibold mb-4">Advogada Associada</p>
              <p className="text-gray-600">
                Especialista em Benefícios por Incapacidade e Aposentadorias Especiais.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-6 relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full h-full bg-gray-200 floating-img">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop" 
                    alt="Dr. Rafael Mendes" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h4 className="text-2xl font-bold text-navy">Dr. Rafael Mendes</h4>
              <p className="text-maroon font-semibold mb-4">Advogado Associado</p>
              <p className="text-gray-600">
                Especialista em Revisões de Benefícios e Aposentadorias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
