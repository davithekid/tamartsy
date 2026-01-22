"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={cn(
          "relative flex h-10 w-20 items-center rounded-full p-1 transition-colors duration-500 shadow-inner border",
          isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-100 border-zinc-200"
        )}
        aria-label="Alternar tema"
      >
        <div className="flex w-full items-center justify-around text-muted-foreground/40">
          <Sun className={cn("size-4 transition-colors", !isDark && "text-orange-400 opacity-0")} />
          <Moon className={cn("size-4 transition-colors", isDark && "text-blue-400 opacity-0")} />
        </div>
        <motion.div
          className={cn(
            "absolute flex size-8 items-center justify-center rounded-full shadow-lg",
            isDark ? "bg-zinc-800 text-blue-400" : "bg-white text-orange-400"
          )}
          initial={false}
          animate={{
            x: isDark ? 40 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          {isDark ? (
            <Moon className="size-4 fill-current" />
          ) : (
            <Sun className="size-4 fill-current" />
          )}
        </motion.div>
      </button>
    </div>
  )
}