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
import { 
  ShoppingBag, 
  Shirt, 
  Crown, 
  Shapes, 
  LayoutGrid 
} from "lucide-react"

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
      
      <NavigationMenuItem className={'hidden md:block'}>
        <NavigationMenuTrigger
          className={`${navigationMenuTriggerStyle()} bg-background-80 px-4 font-semibold uppercase tracking-widest transition-colors hover:text-primary`}
        >
          Produtos
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <div className="grid w-[300px] p-2"> 
            <MenuItem
              href="/bolsas"
              title="Bolsas"
              icon={ShoppingBag}
              description="Estilo Unico!"
            />
            <MenuItem
              href="/tops"
              title="Tops"
              icon={Shirt}
              description="Para Subir o Seu Look!"
            />
            <MenuItem
              href="/headpiece"
              title="Headpiece"
              icon={Crown}
              description="Elevar o visual"
            />
            <MenuItem
              href="/variados"
              title="Variados"
              icon={Shapes}
              description="Peças funcionais e criativas"
            />

            <MenuItem
              href="/unissex"
              title="Unissex"
              icon={LayoutGrid}
              description="Para Todos"
              highlight 
            />
            <MenuItem
              href="/produtos"
              title="Ver todos"
              icon={LayoutGrid}
              description="Explorar catálogo completo"
              highlight 
            />
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem className={'md:hidden'}>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} bg-background-80 px-4 font-semibold uppercase tracking-widest transition-colors hover:text-primary`}
        >
          <Link href="/bolsas">Bolsas</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className={'md:hidden'}>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} bg-background-80 px-4 font-semibold uppercase tracking-widest transition-colors hover:text-primary`}
        >
          <Link href="/tops">Tops</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem className={'md:hidden'}>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} bg-background-80 px-4 font-semibold uppercase tracking-widest transition-colors hover:text-primary`}
        >
          <Link href="/headpiece">Headpieces</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem className={'md:hidden'}>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} bg-background-80 px-4 font-semibold uppercase tracking-widest transition-colors hover:text-primary`}
        >
          <Link href="/variados">Variados</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem className={'md:hidden'}>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} bg-background-80 px-4 font-semibold uppercase tracking-widest transition-colors hover:text-primary`}
        >
          <Link href="/produtos">Todos os Produtos</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem className={'md:hidden'}>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} bg-background-80 px-4 font-semibold uppercase tracking-widest transition-colors hover:text-primary`}
        >
          <Link href="/unissex">Unissex</Link>
        </NavigationMenuLink>
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

const MenuItem = ({ href, title, description, icon: Icon, highlight }) => (
  <Link
    href={href}
    className={`
      group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors 
      hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground
      ${highlight ? "bg-muted/40" : ""}
    `}
  >
    <div className="flex items-center gap-3">
      {Icon && (
        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
      )}
      
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-none">{title}</span>
        {description && (
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </div>
  </Link>
)