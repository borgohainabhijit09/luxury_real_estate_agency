import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[1440px] mx-auto px-5 md:px-12 lg:px-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
