export { render }
export const clientRouting = true

import ReactDOM from 'react-dom/client'
import { PageLayout } from './PageLayout'
import './index.css'

let root
async function render(pageContext) {
  const { Page, pageProps } = pageContext

  const page = (
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  )

  const container = document.getElementById('react-container')
  // SPA
  if (container.innerHTML === '' || !pageContext.isHydration) {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
    // SSR
  } else {
    root = ReactDOM.hydrateRoot(container, page)
  }
}
