import { cn } from "@/lib/utils";

interface ToothIconProps {
  className?: string;
}

export function ToothIcon({ className }: ToothIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      aria-hidden
    >
      <path d="M12 2C9.5 2 7.2 3.1 5.8 5c-1.5 2-1.8 4.8-1.2 7.2.4 1.8 1.2 3.5 1.5 5.3.2 1.2.1 2.5.6 3.6.5 1.2 1.6 1.9 2.9 1.9h.8c1.3 0 2.4-.7 2.9-1.9.5-1.1.4-2.4.6-3.6.3-1.8 1.1-3.5 1.5-5.3.6-2.4.3-5.2-1.2-7.2C16.8 3.1 14.5 2 12 2zm0 2c1.6 0 3 .8 3.8 2.1.9 1.4 1.1 3.3.7 4.9-.4 1.5-1 2.9-1.3 4.4-.2.9-.2 1.9-.5 2.7-.2.5-.7.9-1.3.9h-.8c-.6 0-1.1-.4-1.3-.9-.3-.8-.3-1.8-.5-2.7-.3-1.5-.9-2.9-1.3-4.4-.4-1.6-.2-3.5.7-4.9C9 6.8 10.4 6 12 6z" />
    </svg>
  );
}
