'use client'

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
  name: z.string().min(2),
  email: z.string().email(),
})

export const Banner = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data)
  }

  return (
    <section className="w-full">
      {/* Desktop Layout */}
      <div className="relative w-full rounded-[30px] overflow-hidden hidden lg:block">
        <img src="/hero.png" alt="" className="w-full max-h-[640px] object-cover" />
        <div className="absolute top-1/2 left-0 h-full transform -translate-y-1/2 w-[50%]">
          <img src="/hero-image.png" alt="" className="w-full h-full object-fill" />
        </div>
        <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-[40%]">
          <div className="mb-8 max-w-[400px]">
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-highlight">Ganhe </span>
              <span className="text-light">para Estudar</span>
            </h1>
            <p className="text-text text-xl leading-relaxed">
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
                          className="rounded-[30px] min-w-[300px] px-4 py-6 text-primary placeholder:text-primary"
                        />
                      </FormControl>
                      <FormMessage />
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
                          className="rounded-[30px] min-w-[300px] px-4 py-6 text-primary placeholder:text-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant="default" className="flex items-center justify-center w-full bg-primary rounded-[30px] px-4 py-6">
                  <span className="mr-2 text-light">
                    QUERO GANHAR PARA ESTUDAR
                    <span className="ml-4">→</span>
                  </span>
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="relative w-full rounded-t-[30px] overflow-hidden">
          <img src="/hero.png" alt="" className="w-full h-[300px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
            <div className="absolute bottom-8 left-0 right-0 px-4">
              <h1 className="text-3xl font-bold mb-4 text-center">
                <span className="text-highlight">Ganhe </span>
                <span className="text-light">para Estudar</span>
              </h1>
              <p className="text-light text-lg text-center">
                Acesse nossa <strong>trilha educacional</strong> e ganhe para
                estudar enquanto aprende tudo sobre a <strong>ICP</strong>!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-background px-4 py-8 rounded-b-[30px]">
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
                        className="rounded-[30px] w-full px-4 py-6 text-primary placeholder:text-primary opacity-50"
                      />
                    </FormControl>
                    <FormMessage />
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
                        className="rounded-[30px] w-full px-4 py-6 text-primary placeholder:text-primary opacity-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant="default" className="flex items-center justify-center w-full bg-primary rounded-[30px] px-4 py-6">
                <span className="mr-2 text-light text-sm">
                  QUERO GANHAR PARA ESTUDAR
                  <span className="ml-4">→</span>
                </span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}