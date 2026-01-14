import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  MailIcon,
  MessageCircle,
  PhoneIcon,
} from "lucide-react"
import Link from "next/link"

const Contact = () => (
  <div className="flex min-h-screen items-center justify-center py-20">
    <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6 xl:px-0">

      <span className="text-sm font-semibold uppercase text-muted-foreground">
        Entre em contato
      </span>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        Envie uma mensagem!
      </h2>

      <p className="mt-3 max-w-[60ch] text-base text-muted-foreground sm:text-lg">
        Fique à vontade para falar comigo. Vou adorar conhecer sua ideia
        ou tirar suas dúvidas.
      </p>

      <div className="mt-16 flex flex-col gap-16 md:gap-10 lg:flex-row">
        {/* Contact Info */}
        <div className="grid w-full max-w-3xl items-center grid-cols-1 gap-1 border bg-muted p-1 sm:grid-cols-2 lg:col-span-2 [&>*]:border [&>*]:bg-background [&>*]:p-6">

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-foreground/5 text-foreground dark:bg-foreground/10">
              <MailIcon />
            </div>

            <h3 className="mt-6 text-xl font-semibold">E-mail</h3>

            <p className="my-2.5 text-muted-foreground">
              Me envie um e-mail que respondo o quanto antes.
            </p>

            <Link
              href="mailto:tami@gmail.com"
              className="font-medium text-primary"
            >
              tami@gmail.com
            </Link>
          </div>

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-foreground/5 text-foreground dark:bg-foreground/10">
              <MessageCircle />
            </div>

            <h3 className="mt-6 text-xl font-semibold">Instagram</h3>

            <p className="my-2.5 text-muted-foreground">
              Para tirar suas dúvidas ou comprar um item, me chame no instagram!
            </p>

            <Link
              href="#"
              className="font-medium text-primary"
            >
              @tam.artsy
            </Link>
          </div>
        </div>

        <div className="w-full max-w-lg border bg-muted p-1">
          <Card className="rounded-none shadow-none lg:ms-auto">
            <CardHeader>
              <CardTitle>Fale comigo</CardTitle>
              <CardDescription>
                Preencha o formulário e entrarei em contato.
              </CardDescription>
            </CardHeader>

            <CardContent className="mt-2">
              <form>
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">

                  <div>
                    <Label htmlFor="firstName">Primeiro nome</Label>
                    <Input
                      id="firstName"
                      placeholder="Seu primeiro nome"
                      className="mt-2 h-10 bg-white shadow-none"
                    />
                  </div>

                  <div>
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input
                      id="lastName"
                      placeholder="Seu sobrenome"
                      className="mt-2 h-10 bg-white shadow-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="email">E-mail para contato</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="mt-2 h-10 bg-white shadow-none"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      placeholder="Escreva sua mensagem aqui..."
                      rows={6}
                      className="mt-2 bg-white shadow-none"
                    />
                  </div>
                </div>

                <Button className="mt-6 w-full" size="lg">
                  Enviar mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
)

export default Contact
