import type { FC } from 'react'

import { useUserStore } from '@/stores/useUserStore.ts'

const Home: FC = () => {
  const num = useUserStore((state) => state.num)
  const increate = useUserStore((state) => state.increate)
  const reduce = useUserStore((state) => state.reduce)

  return (
    <>
      <div className="text-2xl bg-amber-600">title</div>
      <p className="text-[24px]">{num}</p>
      <div>
        <button onClick={() => increate(1)}>increate</button>
      </div>
      <div>
        <button onClick={() => reduce(1)}>reduce</button>
      </div>
    </>
  )
}

export default Home
