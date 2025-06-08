import { Header } from "@/modules/landing/components/header";
import { Banner } from "@/modules/landing/components/banner";
import { Marquee } from "@/modules/landing/components/marquee";
import { ImageMarquee } from "@/modules/landing/components/image-marquee";
import { DiscordIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "@/modules/landing/components/icons";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="bg-background">
      <Header />
      <div className="px-8">
        <Banner />
        <section className="mt-40 text-center">
          <h2 className="text-4xl font-bold max-w-[720px] mx-auto text-dark">A <strong className="text-primary">revolução</strong> na computação <strong className="text-primary">descentralizada</strong> que está redefinindo a internet como conhecemos</h2>
        </section>

        <section className="mx-60 mt-40">
          <div className="flex items-center gap-16">
            <div className="max-w-[500px]">
              <div className="relative ">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-highlight/20 blur-3xl rounded-full" />
                <img src="/card-image.jpg" alt="" className="relative z-10 border-2 border-primary rounded-[30px]" />
              </div>
            </div>
            <div className="flex-1 text-primary">
              <h2 className="text-4xl font-bold mb-6">
                O que é a Internet<br />Computer Protocol?
              </h2>
              <p className="text-lg leading-relaxed">
                A Internet Computer Protocol (ICP), desenvolvida pela DFINITY Foundation, é uma tecnologia que permite criar aplicativos e sistemas que rodam inteiramente na internet, sem depender de servidores centralizados ou serviços de nuvem. Diferente de outros blockchains, o ICP permite que todo o código quanto os dados fiquem dentro da própria rede, oferecendo velocidade, segurança e escalabilidade.
                <br /><br />
                Com isso, desenvolvedores podem construir soluções totalmente descentralizadas, acessíveis diretamente pela navegação e com funcionamento autônomo, aproveitando o poder da internet como infraestrutura computacional.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-40">
        <Marquee />
      </div>

      <div className="px-8">
        <section className="mt-40">
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Diferenciais da ICP</h2>

          <div className="grid grid-cols-2 gap-8 mx-60">
            <div className="bg-white p-8 flex border-[1px] border-primary rounded-[12px] gap-6">
              <div className="shrink-0">
                <img src="/benefits/1.png" alt="" className="w-40 h-40 rounded-[12px] object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Alta performance e escalabilidade</h3>
                <p className="text-lg text-primary leading-relaxed">O ICP executa aplicações com velocidade em milissegundos e suporta crescimento para bilhões de usuários, mantendo descentralização validada.</p>
              </div>
            </div>

            <div className="bg-white p-8 flex border-[1px] border-primary rounded-[12px] gap-6">
              <div className="shrink-0">
                <div className="w-40 h-40 rounded-[12px] bg-[#7967F2]">
                  <img src="/benefits/2.png" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Segurança integrada</h3>
                <p className="text-lg text-primary leading-relaxed">A rede usa criptografia avançada e consenso descentralizado para proteger dados e eliminar falhas centralizadas.</p>
              </div>
            </div>

            <div className="bg-white p-8 flex border-[1px] border-primary rounded-[12px] gap-6">
              <div className="shrink-0">
                <img src="/benefits/3.png" alt="" className="w-40 h-40 rounded-[12px] object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Infraestrutura 100% on-chain</h3>
                <p className="text-lg text-primary leading-relaxed">Aplicações rodam totalmente dentro da rede, sem depender de servidores, bancos de dados ou nuvem externa.</p>
              </div>
            </div>

            <div className="bg-white p-8 flex border-[1px] border-primary rounded-[12px] gap-6">
              <div className="shrink-0">
                <img src="/benefits/4.png" alt="" className="w-40 h-40 rounded-[12px] object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Desenvolvimento otimizado</h3>
                <p className="text-lg text-primary leading-relaxed">Ferramentas próprias e uma arquitetura simples facilitam a criação de aplicativos completos e escaláveis diretamente na blockchain.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto py-16 bg-primary px-40 mt-24 rounded-[30px]">
            <h2 className="text-3xl font-bold mb-12 text-light">Para quem se destina?</h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-background rounded-[20px] p-8">
                <div className="bg-primary w-20 h-20 p-4 rounded-full flex items-center justify-center mb-6">
                  <img src="/destination/dev.png" alt="" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Desenvolvedores</h3>
                <p>
                  Desenvolvedores que desejam criar aplicações descentralizadas com alto desempenho, segurança e autonomia, sem depender de infraestruturas centralizadas e tendo acesso a novas possibilidades técnicas além das limitações das plataformas tradicionais.
                </p>
              </div>

              <div className="bg-background rounded-[20px] p-8">
                <div className="bg-primary w-20 h-20 p-4 rounded-full flex items-center justify-center mb-6">
                  <img src="/destination/company.png" alt="" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Empresas</h3>
                <p>
                  Organizações que buscam reduzir custos de infraestrutura, aumentar a segurança de seus sistemas e dados, ou criar novos modelos de negócios através de aplicações descentralizadas, beneficiando-se da transparência e confiabilidade do blockchain.
                </p>
              </div>

              <div className="bg-background rounded-[20px] p-8">
                <div className="bg-primary w-20 h-20 p-4 rounded-full flex items-center justify-center mb-6">
                  <img src="/destination/blockchain.png" alt="" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">Entusiastas de Blockchain</h3>
                <p>
                  Pessoas interessadas em tecnologias blockchain e Web3 que desejam participar de um ecossistema inovador que combina o melhor das aplicações web tradicionais com os benefícios da descentralização.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-24 py-16">
          <h2 className="text-4xl font-bold text-primary mb-16 px-40">Principais Casos de Uso</h2>
          <div className="grid grid-cols-2 gap-8 mx-40">
            <div className="bg-white rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-primary mb-2">Inteligência Artificial</h3>
              <p className="text-dark text-sm">Modelos de IA descentralizados com alta performance e privacidade de dados garantida pela arquitetura do protocolo.</p>
            </div>

            <div className="bg-white rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-primary mb-2">Jogos</h3>
              <p className="text-dark text-sm">Jogos online com ativos digitais reais de propriedade dos jogadores.</p>
            </div>

            <div className="bg-white rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-primary mb-2">DeFi</h3>
              <p className="text-dark text-sm">Aplicações financeiras descentralizadas com velocidade similar às plataformas tradicionais.</p>
            </div>

            <div className="bg-white rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-primary mb-2">NFTs</h3>
              <p className="text-dark text-sm">Marketplaces e galerias de NFTs com baixo custo de transação.</p>
            </div>

            <div className="bg-white rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-primary mb-2">Redes Sociais</h3>
              <p className="text-dark text-sm">Plataformas sociais descentralizadas com controle dos dados pelos usuários.</p>
            </div>

            <div className="bg-white rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-primary mb-2">SaaS</h3>
              <p className="text-dark text-sm">Software como serviço totalmente descentralizado e autônomo.</p>
            </div>

            <div className="bg-white rounded-[20px] p-8">
              <h3 className="text-lg font-bold text-primary mb-2">Governança</h3>
              <p className="text-dark text-sm">Sistemas de votação e governança transparentes e verificáveis.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-24">
        <ImageMarquee
          images={[
            { src: "/partners/unb.png", alt: "UNB" },
            { src: "/partners/seges.png", alt: "SEGES" },
            { src: "/partners/unebe.png", alt: "UNEBE" },
            { src: "/partners/ufv.png", alt: "UFVJM" },
            { src: "/partners/unifacs.svg", alt: "UNIFACS" },
            { src: "/partners/ita.png", alt: "ITA" },
            { src: "/partners/inteli.png", alt: "INTELI" },
          ]}
        />
      </div>

      <section className="mt-24 mx-8">
        <div className="rounded-[30px] overflow-hidden">
          <div className="flex items-center max-w-[1200px] mx-auto bg-backgroundHighlight rounded-[20px]">
            <div className="w-[45%]">
              <img src="/astro.jpg" alt="" className="w-full h-full object-cover rounded-[20px]" />
            </div>
            <div className="flex-1 p-16">
              <h2 className="text-[32px] font-bold text-dark mb-4">
                Pronto para explorar o<br />futuro da internet?
              </h2>
              <div className="flex flex-col gap-4 mt-8">
                <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-light rounded-[30px] font-bold hover:bg-primary/90 transition-all">
                  QUERO GANHAR PARA ESTUDAR <span className="ml-4">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Button variant="outline" className="px-8 py-8 border border-primary text-primary rounded-[30px] text-sm transition-all">
            CONHECER A DOCUMENTAÇÃO →
          </Button>
          <Button variant="outline" className="px-8 py-8 border border-primary text-primary rounded-[30px] text-sm transition-all">
            JÁ SOU ALUNO →
          </Button>
        </div>
      </section>

      <footer className="mt-24 bg-primary">
        <div className="max-w-[1200px] h-32 mx-auto px-8 py-4 flex items-center justify-between">
          <img src="/footer-logo.png" alt="ICP Brazil" className="h-6" />
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-light hover:text-dark transition-colors">
              <DiscordIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-light hover:text-dark transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-light hover:text-dark transition-colors">
              <TwitterIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-light hover:text-dark transition-colors">
              <LinkedInIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-light hover:text-dark transition-colors">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page
