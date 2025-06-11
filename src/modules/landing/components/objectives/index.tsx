import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const data = [
  {
    title: "Desenvolvedores",
    description: "Desenvolvedores que desejam criar aplicações descentralizadas com alto desempenho, segurança e autonomia, sem depender de infraestruturas centralizadas e tendo acesso a novas possibilidades técnicas além das limitações das plataformas tradicionais.",
    image: "/destination/dev.png"
  },
  {
    title: "Empresas",
    description: "Organizações que buscam reduzir custos de infraestrutura, aumentar a segurança de seus sistemas e dados, ou criar novos modelos de negócios através de aplicações descentralizadas, beneficiando-se da transparência e confiabilidade do blockchain.",
    image: "/destination/company.png"
  },
  {
    title: "Entusiastas de Blockchain",
    description: "Pessoas interessadas em tecnologias blockchain e Web3 que desejam participar de um ecossistema inovador que combina o melhor das aplicações web tradicionais com os benefícios da descentralização.",
    image: "/destination/blockchain.png"
  }
]

const Objectives = () => {
  return (
    <section>
      {/* Mobile */}
      <div className="mx-auto py-8 bg-primary lg:px-12 xl:px-40 mt-24 rounded-[30px] lg:hidden">
        <h2 className="text-4xl font-bold mb-4 text-light px-8 max-w-[280px]">Para quem se destina?</h2>
        <span className="ml-12 text-3xl text-light">→</span>
        <Carousel className="mt-4 px-1">
          <CarouselContent>
            {data.map((objective, index) => (
              <CarouselItem key={index}>
                <div className="bg-background h-full rounded-[20px] mx-8 p-8">
                  <div className="bg-primary w-20 h-20 p-4 rounded-full flex items-center justify-center mb-6">
                    <img src={objective.image} alt="" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{objective.title}</h3>
                  <p>
                    {objective.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Desktop */}
      <div className="mx-auto py-16 bg-primary lg:px-12 xl:px-40 mt-24 rounded-[30px] hidden lg:block">
        <h2 className="text-3xl font-bold mb-12 text-light">Para quem se destina?</h2>
        <div className="grid grid-cols-3 gap-8">
          {data.map((objective, index) => (
            <div className="bg-background rounded-[20px] p-8" key={index}>
              <div className="bg-primary w-20 h-20 p-4 rounded-full flex items-center justify-center mb-6">
                <img src={objective.image} alt="" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{objective.title}</h3>
              <p>
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Objectives