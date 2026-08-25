import { create } from "zustand";

interface HealthStore {
  viewMode: "compact" | "detailed";
  setViewMode: (mode: "compact" | "detailed") => void;
  toggleViewMode: () => void;
}

export const useHealthStore = create<HealthStore>((set) => ({
  viewMode: "detailed",
  setViewMode: (mode) => set({ viewMode: mode }),
  toggleViewMode: () =>
    set((state) => ({
      viewMode: state.viewMode === "detailed" ? "compact" : "detailed",
    })),
}));
