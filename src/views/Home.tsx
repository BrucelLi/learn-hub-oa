import { Button } from 'antd'
import type { FC } from 'react'

import { useUserStore } from '@/stores/useUserStore.ts'

const Home: FC = () => {
  const num = useUserStore((state) => state.num)
  const increate = useUserStore((state) => state.increate)
  const reduce = useUserStore((state) => state.reduce)

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <div className="text-2xl bg-amber-600">title</div>
      <p className="t-18px-bold-150-tight text-alias-rose-600">{num}</p>
      <div>
        <Button onClick={() => increate(1)}>increate</Button>
      </div>
      <div>
        <Button onClick={() => reduce(1)}>reduce</Button>
      </div>
    </div>
  )
}

export default Home
