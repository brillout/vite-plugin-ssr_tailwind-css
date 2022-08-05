export { Page }

import { Counter } from './Counter'

function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">SPA</h1>
      <p className="my-4">Vite + SPA (vite-plugin-ssr) + Tailwind</p>
      <p>
        <Counter />
      </p>
    </>
  )
}
