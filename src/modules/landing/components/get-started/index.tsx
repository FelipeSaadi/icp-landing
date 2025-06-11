"use client"

import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

export const GetStarted = () => {
    const router = useRouter()

    const handleGetStarted = () => {
        router.push('http://aprendaicp.xyz')
    }
    return (
        <section className="mt-24 mx-8">
        <div className="rounded-[30px] overflow-hidden">
          <div className="flex lg:items-center flex-col lg:flex-row max-w-[1200px] mx-auto bg-backgroundHighlight rounded-[20px]">
            <div className="lg:w-[45%]">
              <img src="/astro.jpg" alt="" className="w-full rounded-[20px]" />
            </div>
            <div className="flex-1 p-8 md:p-16">
              <h2 className="text-3xl font-bold text-dark mb-4">
                Pronto para explorar o<br />futuro da internet?
              </h2>
              <div className="flex flex-col gap-4 mt-8">
                <a href="http://aprendaicp.xyz" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-light rounded-[30px] font-bold hover:bg-primary/90 transition-all">
                  QUERO GANHAR PARA ESTUDAR <span className="ml-4">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mx-4 md:mx-8 lg:mx-0 flex-col lg:flex-row justify-center gap-4 mt-12">
          <Button variant="outline" className="px-8 py-6 border text-xs md:text-sm border-primary text-primary rounded-[30px] transition-all" onClick={handleGetStarted}>
            CONHECER A DOCUMENTAÇÃO →
          </Button>
          <Button variant="outline" className="px-8 py-6 border text-xs md:text-sm border-primary text-primary rounded-[30px] transition-all" onClick={handleGetStarted}>
            JÁ SOU ALUNO →
          </Button>
        </div>
      </section>   
    )
}
