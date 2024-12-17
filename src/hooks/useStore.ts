import { create } from 'zustand';

interface ComicStore {
  panels: Array<{ id: string; content: string }>;
  addPanel: (content: string) => void;
  updatePanel: (id: string, content: string) => void;
}

export const useStore = create<ComicStore>((set) => ({
  panels: [],
  addPanel: (content) =>
    set((state) => ({
      panels: [...state.panels, { id: crypto.randomUUID(), content }],
    })),
  updatePanel: (id, content) =>
    set((state) => ({
      panels: state.panels.map((panel) =>
        panel.id === id ? { ...panel, content } : panel
      ),
    })),
}));
