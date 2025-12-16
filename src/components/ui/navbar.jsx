import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { ModeToggle } from "../theme/theme-button";

const Navbar = () => {
  return (
    <nav
      className="
        fixed top-0 inset-x-0 z-50
        h-16
        bg-background/80 backdrop-blur-md
        border-b border-border/40
      "
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavMenu />
        </div>

        <div className="flex items-center gap-3">
          <ModeToggle />

          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
