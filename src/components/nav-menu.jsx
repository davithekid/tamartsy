import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const NavMenu = (props) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="space-x-4 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">

      {/* Home */}
      <NavigationMenuItem>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} font-bold tracking-widest uppercase hover:text-primary hover:underline underline-offset-8 transition-all px-4`}
        >
          <Link href="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={`${navigationMenuTriggerStyle()}  font-bold tracking-widest uppercase hover:text-primary hover:underline underline-offset-8 transition-all px-4`}
        >
          Produtos
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="flex flex-col p-3 space-y-2  rounded-xl">
            <Link
              href="/bolsas"
              className="p-2 rounded-lg  hover:bg-neutral-100 hover:dark:bg-neutral-800 transition-colors"
            >
              Bolsas
            </Link>
            <Link
              href="/headpiece"
              className="p-2 rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-800 transition-colors"
            >
              Headpiece
            </Link>
            <Link
              href="/cybershot"
              className="p-2 rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-800 transition-colors"
            >
              Cybershot
            </Link>
            <Link
              href="/produtos"
              className="p-2 rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-800 transition-colors"
            >
              Ver todos
            </Link>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} font-bold tracking-widest uppercase hover:text-primary hover:underline underline-offset-8 transition-all px-4`}
        >
          <Link href="#">Sobre</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          asChild
          className={`${navigationMenuTriggerStyle()} font-bold tracking-widest uppercase hover:text-primary hover:underline underline-offset-8 transition-all px-4`}
        >
          <Link href="/contato">Contato</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
);
