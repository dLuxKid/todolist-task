import { create } from 'zustand'

interface StoreState {
    bears: number
    increase: (by: number) => void
}

const useBearStore = create<StoreState>()((set) => ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by })),
}))
