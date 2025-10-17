import { create } from "zustand";

export const useMacbookStore = create((set) => ({

    color: "#2E2C2E",
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    texture: "/videos/feature-1.mp4",
    setTexture: (texture) => set({ texture }),

    reset: () => set({ color: "#2E2C2E", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));