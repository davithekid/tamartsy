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
  LayoutGrid,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const productCategories = [
  { href: "/bolsas", title: "Bolsas", icon: ShoppingBag, description: "Estilo Único!" },
  { href: "/tops", title: "Tops", icon: Shirt, description: "Para Subir o Seu Look!" },
  { href: "/headpiece", title: "Headpiece", icon: Crown, description: "Elevar o visual" },
  { href: "/variados", title: "Variados", icon: Shapes, description: "Peças criativas" },
  { href: "/unissex", title: "Unissex", icon: LayoutGrid, description: "Para Todos", highlight: true },
]

export const NavMenu = (props) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-1 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navItemStyles()}>
          <Link href="/">Início</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="hidden md:block">
        <NavigationMenuTrigger className={navItemStyles()}>
          Produtos
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid w-[450px] grid-cols-2 gap-2 p-4">
            <div className="col-span-1 flex flex-col gap-2">
              <span className="mb-2 px-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Categorias</span>
              {productCategories.filter(c => !c.highlight).map((item) => (
                <MenuItem key={item.href} {...item} />
              ))}
            </div>
            <div className="col-span-1 flex flex-col gap-2 border-l pl-2">
              <span className="mb-2 px-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Destaques</span>
              {productCategories.filter(c => c.highlight).map((item) => (
                <MenuItem key={item.href} {...item} />
              ))}
              <Link
                href="/produtos"
                className="group mt-auto flex items-center justify-between rounded-xl bg-primary p-3 text-primary-foreground transition-all hover:opacity-90"
              >
                <span className="text-sm font-bold">Ver Catálogo</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      {productCategories.map((item) => (
        <NavigationMenuItem key={item.href} className="md:hidden">
          <NavigationMenuLink asChild className={navItemStyles()}>
            <Link href={item.href}>{item.title}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
      <NavigationMenuItem className="md:hidden">
        <NavigationMenuLink asChild className={navItemStyles()}>
          <Link href="/produtos" className="text-primary font-bold">Ver Tudo</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navItemStyles()}>
          <Link href="/sobre">Sobre</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navItemStyles()}>
          <Link href="/contato">Contato</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
)
const navItemStyles = () => cn(
  navigationMenuTriggerStyle(),
  "bg-transparent px-4 text-[11px] font-bold uppercase tracking-[0.15em] transition-all hover:bg-accent hover:text-primary focus:bg-transparent"
)

const MenuItem = ({ href, title, description, icon: Icon, highlight }) => (
  <Link
    href={href}
    className={cn(
      "group block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-accent",
      highlight && "bg-muted/30"
    )}
  >
    <div className="flex items-center gap-3">
      {Icon && (
        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-background border border-border/50 group-hover:border-primary/30 transition-colors">
          <Icon className="size-4 text-muted-foreground group-hover:text-primary" />
        </div>
      )}

      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-bold tracking-tight">{title}</span>
        {description && (
          <p className="line-clamp-1 text-[11px] leading-snug text-muted-foreground font-light">
            {description}
          </p>
        )}
      </div>
    </div>
  </Link>
)