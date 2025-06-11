import { Header } from "@/modules/landing/components/header"
import { Banner } from "@/modules/landing/components/banner"
import { Marquee } from "@/modules/landing/components/marquee"
import { ImageMarquee } from "@/modules/landing/components/image-marquee"
import { DiscordIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutubeIcon } from "@/modules/landing/components/icons"
import { Button } from "@/components/ui/button"
import Objectives from "@/modules/landing/components/objectives"
import Benefits from "@/modules/landing/components/benefits"
import UseCases from "@/modules/landing/components/usecases"

const Page = () => {
  return (
    <div className="bg-background">
      <Header />
      <div className="px-8">
        <Banner />
        <section className="mt-40 text-center">
          <h2 className="text-4xl font-bold max-w-[720px] mx-auto text-dark">A <strong className="text-primary">revolução</strong> na computação <strong className="text-primary">descentralizada</strong> que está redefinindo a internet como conhecemos</h2>
        </section>

        <section className="md:mx-12 xl:mx-32 mt-40">
          <div className="flex flex-col md:flex lg:flex-row lg:items-center gap-16">
            <div className="lg:max-w-[500px]">
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
        <Benefits />
        <Objectives />
        <UseCases />
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

      {/* <section className="mt-24 mx-8">
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
          <Button variant="outline" className="px-8 py-6 border border-primary text-primary rounded-[30px] text-sm transition-all">
            CONHECER A DOCUMENTAÇÃO →
          </Button>
          <Button variant="outline" className="px-8 py-6 border border-primary text-primary rounded-[30px] text-sm transition-all">
            JÁ SOU ALUNO →
          </Button>
        </div>
      </section> */}

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
