const data = [
  {
    title: "Alta performance e escalabilidade",
    description: "O ICP executa aplicações com velocidade em milissegundos e suporta crescimento para bilhões de usuários, mantendo descentralização validada.",
    image: "/benefits/1.png"
  },
  {
    title: "Segurança integrada",
    description: "A rede usa criptografia avançada e consenso descentralizado para proteger dados e eliminar falhas centralizadas.",
    image: "/benefits/2.png"
  },
  {
    title: "Infraestrutura 100% on-chain",
    description: "Aplicações rodam totalmente dentro da rede, sem depender de servidores, bancos de dados ou nuvem externa.",
    image: "/benefits/3.png"
  },
  {
    title: "Desenvolvimento otimizado",
    description: "Ferramentas próprias e uma arquitetura simples facilitam a criação de aplicativos completos e escaláveis diretamente na blockchain.",
    image: "/benefits/4.png"
  }
]

const Benefits = () => {
  return (
    <section className="mt-40">
      <h2 className="text-4xl font-bold text-primary text-center mb-16">Diferenciais da ICP</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:mx-4 xl:mx-32">
        {data.map((benefit, index) => (
          <div className="bg-white p-8 flex flex-col xxs:flex-row border-[1px] border-primary rounded-[12px] gap-6" key={index}>
            <div className="shrink-0">
              <img src={benefit.image} alt="" className="w-40 h-40 mx-auto xs:mx-0 rounded-[12px] object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">{benefit.title}</h3>
              <p className="text-lg text-primary leading-relaxed">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits