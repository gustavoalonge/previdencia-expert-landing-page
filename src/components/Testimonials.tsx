
const testimonials = [
  {
    name: "Maria Silva",
    content: "Graças ao Dr. Hiago, consegui minha aposentadoria após anos de tentativas frustradas. Profissional extremamente competente e atencioso.",
    role: "Aposentadoria por Tempo de Contribuição"
  },
  {
    name: "José Oliveira",
    content: "Excelente serviço! Revisaram meu benefício e descobriram que eu estava recebendo menos do que deveria. Hoje recebo o valor correto.",
    role: "Revisão de Benefício"
  },
  {
    name: "Ana Souza",
    content: "Atendimento impecável e muito profissional. Conseguiram minha aposentadoria especial em tempo recorde. Recomendo a todos!",
    role: "Aposentadoria Especial"
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="bg-navy section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center text-white">O Que Dizem Nossos Clientes</h2>
        <p className="section-subtitle text-center text-gray-300">
          A satisfação dos nossos clientes é nosso maior orgulho e motivação para continuar oferecendo serviços jurídicos de excelência
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-maroon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-bold text-navy">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-navy-light p-8 rounded-lg inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-maroon">"</span> 98% dos nossos clientes <span className="text-maroon">obtêm sucesso</span> em suas solicitações de benefícios previdenciários <span className="text-maroon">"</span>
            </h3>
            <p className="text-gray-300">Estatística baseada em casos concluídos nos últimos 5 anos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
