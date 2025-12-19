import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export interface UserStoreState {
  num: number
  increate: (score: number) => void
  reduce: (score: number) => void
}

export const useUserStore = create<UserStoreState>()(
  devtools(
    persist(
      immer((set) => ({
        num: 0,
        increate(score: number) {
          set((state) => {
            state.num += score
          })
        },
        reduce(score: number) {
          set((state) => {
            state.num -= score
          })
        }
      })),
      {
        name: 'recruitment.interview.rated'
      }
    )
  )
)
