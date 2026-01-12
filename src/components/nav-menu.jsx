import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export const NavMenu = (props) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} bg-background-80 px-4 font-semibold uppercase tracking-widest transition-colors hover:text-primary`}
        >
          <Link href="/">Início</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={`${navigationMenuTriggerStyle()} bg-background-80 px-4 font-semibold uppercase tracking-widest transition-colors hover:text-primary`}
        >
          Produtos
        </NavigationMenuTrigger>

        <NavigationMenuContent
          className="
            mt-2 rounded-2xl border border-border/50 
            bg-background/95 p-4 shadow-xl backdrop-blur
            data-[motion=from-start]:animate-in
            data-[motion=from-start]:fade-in
            data-[motion=from-start]:zoom-in-95
          "
        >
          <div className="grid w-[320px] gap-2">
            <MenuItem
              href="/bolsas"
              title="Bolsas"
              description="Design autoral e acabamento premium"
            /> 
            <MenuItem
              href="/tops"
              title="Tops"
              description="Design autoral e acabamento premium"
            />
            <MenuItem
              href="/headpiece"
              title="Headpiece"
              description="Acessórios que elevam o visual"
            />
            <MenuItem
              href="/cybershot"
              title="Variados"
              description="Peças funcionais e criativas"
            />

            <div className="mt-2 border-t pt-2">
              <MenuItem
                href="/produtos"
                title="Ver todos"
                description="Explorar catálogo completo"
                highlight
              />
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} bg-background-80 px-4 font-semibold uppercase tracking-widest transition-colors hover:text-primary`}
        >
          <Link href="/sobre">Sobre</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} bg-background-80 px-4 font-semibold uppercase tracking-widest transition-colors hover:text-primary`}
        >
          <Link href="/contato">Contato</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
)

const MenuItem = ({ href, title, highlight }) => (
  <Link
    href={href}
    className={`
      group rounded-xl p-3 transition-all
      hover:bg-muted/60 hover:shadow-sm
      ${highlight ? "bg-muted/40" : ""}
    `}
  >
    <div className="flex flex-col">
      <span className="font-medium">{title}</span>
    </div>
  </Link>
)
