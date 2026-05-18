import { create } from "zustand";
import type { NavSectionId } from "@/lib/constants";

interface Toast {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}

interface UiState {
  activeSection: NavSectionId;
  isMobileMenuOpen: boolean;
  toasts: Toast[];
  setActiveSection: (section: NavSectionId) => void;
  setMobileMenuOpen: (open: boolean) => void;
  addToast: (type: Toast["type"], message: string) => void;
  removeToast: (id: string) => void;
}

export const useUiStore = create<UiState>((set) => ({
  activeSection: "hero",
  isMobileMenuOpen: false,
  toasts: [],
  setActiveSection: (section) => set({ activeSection: section }),
  setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
  addToast: (type, message) => {
    const id = `toast_${Date.now()}`;
    set((state) => ({
      toasts: [...state.toasts, { id, type, message }],
    }));
    setTimeout(() => {
      set((state) => ({
        toasts: state.toasts.filter((t) => t.id !== id),
      }));
    }, 5000);
  },
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));
