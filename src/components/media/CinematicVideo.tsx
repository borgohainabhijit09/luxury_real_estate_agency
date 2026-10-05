"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CinematicVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string
  poster: string
  containerClassName?: string
}

export function CinematicVideo({
  src,
  poster,
  containerClassName,
  className,
  ...props
}: CinematicVideoProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const showFallback = prefersReducedMotion || videoError

  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName)}>
      {showFallback ? (
        <img
          src={poster}
          alt="Video fallback"
          className={cn("object-cover w-full h-full", className)}
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.svg"
          }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          onError={() => setVideoError(true)}
          className={cn("object-cover w-full h-full", className)}
          {...props}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
