
import { Landmark, Gavel, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Landmark className="w-10 h-10 text-gold" />,
      title: "Aposentadoria por Tempo de Contribuição",
      description: "Orientação completa sobre as regras para aposentadoria por tempo de contribuição, incluindo as mudanças recentes na legislação.",
    },
    {
      icon: <Gavel className="w-10 h-10 text-gold" />,
      title: "Revisão de Benefícios",
      description: "Análise detalhada do seu benefício para identificar possíveis erros de cálculo e garantir que você receba o valor correto.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-gold" />,
      title: "Aposentadoria por Invalidez",
      description: "Acompanhamento jurídico completo para obtenção de aposentadoria por invalidez, incluindo auxílio na perícia médica.",
    },
    {
      icon: <Landmark className="w-10 h-10 text-gold" />,
      title: "Aposentadoria Especial",
      description: "Assessoria jurídica para quem trabalhou em condições prejudiciais à saúde ou à integridade física.",
    },
    {
      icon: <Gavel className="w-10 h-10 text-gold" />,
      title: "Pensão por Morte",
      description: "Orientação para dependentes que têm direito à pensão por morte, agilizando o processo e garantindo seus direitos.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-gold" />,
      title: "Auxílio-Doença",
      description: "Acompanhamento completo do processo de solicitação de auxílio-doença, incluindo recursos em caso de negativa.",
    },
  ];

  return (
    <section id="servicos" className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Nossos Serviços</h2>
        <p className="section-subtitle text-center">
          Oferecemos consultoria e representação jurídica especializada em todas as áreas do Direito Previdenciário
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-gold"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-navy mb-6">Não encontrou o serviço que procura?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma consulta personalizada sobre sua situação previdenciária.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contato');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Agende uma Consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
