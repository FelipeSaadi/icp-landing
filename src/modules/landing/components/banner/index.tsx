'use client'

// import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const schema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
})

export const Banner = () => {
  // const router = useRouter()

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data)
    // router.push('http://aprendaicp.xyz')
  }

  return (
    <section className="w-full">
      {/* Desktop Layout */}
      <div className="relative w-full rounded-[30px] hidden md:flex">
        <img src="/hero.png" alt="" className="absolute top-0 w-full h-full rounded-[30px] object-cover" />
        <div className="flex w-full h-full z-10 my-12">
          <img src="/hero-image.png" alt="" className="absolute top-0 left-0 w-[60%] h-full object-fill" />
          <div className="md:mr-12 ml-auto md:my-16 lg:my-20 w-[40%] flex flex-col">
            <div className="mb-8 max-w-[90%]">
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-highlight">Ganhe </span>
                <span className="text-light">para Estudar</span>
              </h1>
              <p className="text-text text-xl leading-relaxed md:max-w-[90%] lg:max-w-[80%]">
                Acesse nossa <strong>trilha educacional</strong> e ganhe para
                estudar enquanto aprende tudo sobre a <strong>ICP</strong>!
              </p>
            </div>

            <div className="flex flex-col bg-background rounded-[30px] w-fit p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">E-mail</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu e-mail"
                            {...field}
                            className="rounded-[30px] md:min-w-[200px] lg:min-w-[300px] px-4 py-6 text-primary placeholder:text-primary"
                          />
                        </FormControl>
                        <FormMessage className="text-danger" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            {...field}
                            className="rounded-[30px] md:min-w-[200px] lg:min-w-[300px] px-4 py-6 text-primary placeholder:text-primary"
                          />
                        </FormControl>
                        <FormMessage className="text-danger" />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" variant="default" className="flex items-center justify-center w-full bg-primary rounded-[30px] px-4 py-6">
                    <span className="mr-2 text-light md:text-xs lg:text-lg">
                      QUERO GANHAR PARA ESTUDAR
                      <span className="ml-4">→</span>
                    </span>
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="relative flex w-full rounded-[30px] overflow-hidden">
          <img src="/hero.png" alt="" className="absolute top-0 w-full h-full object-cover" />
          <div className="flex flex-col w-full z-10">
            <div className="mx-auto mb-8 px-4 py-8">
              <h1 className="text-3xl font-bold mb-2 text-center">
                <span className="text-highlight">Ganhe </span>
                <span className="text-light">para Estudar</span>
              </h1>
              <p className="text-text text-lg text-center px-2">
                Acesse nossa <strong>trilha educacional</strong> e ganhe para
                estudar enquanto aprende tudo sobre a <strong>ICP</strong>!
              </p>
            </div>

            <div className="flex flex-col bg-background rounded-[30px] mx-12 py-6 px-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">E-mail</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu e-mail"
                            {...field}
                            className="rounded-[30px] min-w-[160px] px-4 py-6 text-primary placeholder:text-primary"
                          />
                        </FormControl>
                        <FormMessage className="text-danger" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Nome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome"
                            {...field}
                            className="rounded-[30px] min-w-[160px] px-4 py-6 text-primary placeholder:text-primary"
                          />
                        </FormControl>
                        <FormMessage className="text-danger"/>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" variant="default" className="flex items-center justify-center w-full bg-primary rounded-[30px] px-8 py-6">
                    <span className="mr-1 text-light text-[10px] xxs:text-xs">
                      QUERO GANHAR PARA ESTUDAR
                      <span className="ml-2 text-[10px] xxs:text-xs">→</span>
                    </span>
                  </Button>
                </form>
              </Form>
            </div>
            <div className="flex">
              <img src="/hero-image.png" alt="" className="w-full object-fill" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
