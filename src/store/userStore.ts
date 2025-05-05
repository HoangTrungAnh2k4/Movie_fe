// store/userStore.ts
import { create } from 'zustand';

type User = {
    id: string;
    name: string;
    email: string;
    favorite: string[];
};

type State = {
    user: User | null;
    setUser: (user: User | null) => void;
};

export const useUserStore = create<State>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}));
