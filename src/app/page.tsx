import { ImageMarquee } from "@/modules/landing/components/image-marquee"
import { GetStarted } from "@/modules/landing/components/get-started"
import { Objectives } from "@/modules/landing/components/objectives"
import { Benefits } from "@/modules/landing/components/benefits"
import { UseCases } from "@/modules/landing/components/usecases"
import { Marquee } from "@/modules/landing/components/marquee"
import { Banner } from "@/modules/landing/components/banner"
import { Header } from "@/modules/landing/components/header"
import { Footer } from "@/modules/landing/components/footer"

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

      <GetStarted />

      <Footer />
    </div>
  )
}

export default Page
