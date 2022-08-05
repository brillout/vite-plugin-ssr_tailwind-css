export { Counter }

import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button
      type="button"
      onClick={() => setCount((count) => count + 1)}
      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
    >
      Counter {count}
    </button>
  )
}
