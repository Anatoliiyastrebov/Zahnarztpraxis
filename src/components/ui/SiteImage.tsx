"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
} & (
  | { fill: true; width?: never; height?: never }
  | { fill?: false; width: number; height: number }
);

export function SiteImage({
  src,
  alt,
  className,
  imageClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
  fill,
  width,
  height,
}: SiteImageProps) {
  const [error, setError] = useState(false);

  const placeholder = (
    <div
      className={cn(
        "flex h-full min-h-[120px] w-full items-center justify-center bg-gradient-to-br from-medical-100 to-slate-100 text-sm text-medical-600",
        imageClassName,
        className
      )}
      role="img"
      aria-label={alt}
    >
      Bild
    </div>
  );

  if (error) {
    return fill ? (
      <div className={cn("relative block h-full w-full", className)}>
        {placeholder}
      </div>
    ) : (
      placeholder
    );
  }

  if (fill) {
    return (
      <div className={cn("relative block h-full w-full overflow-hidden", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
          onError={() => setError(true)}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", imageClassName, className)}
      onError={() => setError(true)}
    />
  );
}
