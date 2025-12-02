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
    <NavigationMenuList className="space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="#">Home</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
          Produtos
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="flex flex-col p-2 space-y-2shadow-md rounded-md">
            <Link href="#" className="p-2 rounded">Bolsas</Link>
            <Link href="#" className="p-2 rounded">Headpiece Top</Link>
            <Link href="#" className="p-2 rounded">Cyberchot</Link>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="#">Sobre</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="#">Conta</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
);
