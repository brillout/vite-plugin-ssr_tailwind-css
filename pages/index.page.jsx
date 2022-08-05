export { Page }

import { Counter } from './Counter'

function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">SSR</h1>
      <p className="my-4">Vite + SSR (vite-plugin-ssr) + Tailwind</p>
      <p>
        <Counter />
      </p>
    </>
  )
}
