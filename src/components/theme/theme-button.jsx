"use client"

import * as React from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="
            relative rounded-full border-border/60
            bg-background/80 backdrop-blur
            shadow-sm transition-all
            hover:bg-muted/60 hover:shadow-md
            focus-visible:ring-2 focus-visible:ring-primary
          "
        >
          {/* Sun */}
          <Sun
            className="
              h-[1.2rem] w-[1.2rem]
              rotate-0 scale-100 transition-all duration-300
              dark:-rotate-90 dark:scale-0
            "
          />

          {/* Moon */}
          <Moon
            className="
              absolute h-[1.2rem] w-[1.2rem]
              rotate-90 scale-0 transition-all duration-300
              dark:rotate-0 dark:scale-100
            "
          />

          <span className="sr-only">Alternar tema</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          w-44 rounded-xl border-border/60
          bg-background/95 p-1 shadow-xl backdrop-blur
        "
      >
        <ThemeItem
          active={theme === "light"}
          icon={<Sun className="size-4" />}
          label="Claro"
          onClick={() => setTheme("light")}
        />

        <ThemeItem
          active={theme === "dark"}
          icon={<Moon className="size-4" />}
          label="Escuro"
          onClick={() => setTheme("dark")}
        />

        <ThemeItem
          active={theme === "system"}
          icon={<Laptop className="size-4" />}
          label="Sistema"
          onClick={() => setTheme("system")}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/* ===== Item do menu ===== */
function ThemeItem({
  icon,
  label,
  active,
  onClick,
}) {
  return (
    <DropdownMenuItem
      onClick={onClick}
      className={`
        flex items-center gap-3 rounded-lg px-3 py-2 text-sm
        transition-colors cursor-pointer
        ${active ? "bg-muted font-medium" : ""}
      `}
    >
      {icon}
      <span>{label}</span>
    </DropdownMenuItem>
  )
}
