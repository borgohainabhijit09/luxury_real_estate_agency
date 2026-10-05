import { cn } from "@/lib/utils"

interface SectionLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "text-xs tracking-[0.2em] text-champagne uppercase font-medium",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
