import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center uppercase tracking-wider text-xs md:text-sm font-medium transition-all duration-500 ease-out py-4 px-8 border cursor-pointer",
          {
            "bg-champagne text-obsidian border-champagne hover:bg-transparent hover:text-champagne": variant === "primary",
            "bg-transparent text-warm-ivory border-muted-border hover:border-champagne hover:text-champagne": variant === "secondary",
            "bg-transparent border-champagne text-champagne hover:bg-champagne hover:text-obsidian": variant === "outline",
            "bg-transparent border-transparent text-warm-ivory hover:text-champagne": variant === "ghost",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
