"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useUiStore } from "@/store/use-ui-store";
import { cn } from "@/lib/utils";

const icons = {
  success: CheckCircle2,
  error: AlertCircle,
  info: Info,
};

const styles = {
  success: "border-accent-200 bg-accent-50 text-accent-800",
  error: "border-red-200 bg-red-50 text-red-800",
  info: "border-medical-200 bg-medical-50 text-medical-800",
};

export function ToastContainer() {
  const { toasts, removeToast } = useUiStore();

  return (
    <div
      className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2"
      aria-live="polite"
      aria-label="Benachrichtigungen"
    >
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.type];
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-4 py-3 shadow-card min-w-[280px] max-w-sm",
                styles[toast.type]
              )}
              role="status"
            >
              <Icon className="h-5 w-5 shrink-0" aria-hidden />
              <p className="flex-1 text-sm font-medium">{toast.message}</p>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="shrink-0 rounded p-0.5 opacity-70 hover:opacity-100"
                aria-label="Benachrichtigung schließen"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
