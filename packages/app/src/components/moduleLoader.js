
/**
 * Lazily loads in each service module
 */

import React, { useState, Suspense } from 'react'
import { LoadModal } from '@arc/components'

const Load = React.lazy(() => import('./loading/loader'))

export const ModuleLoader = ({ children }) => {
  const [isLoaded, setLoaded] = useState(false)

  if (isLoaded) {
    return children
  }

  return (
    <Suspense fallback={<LoadModal />}>
      <Load onLoaded={() => setLoaded(true)} />
    </Suspense>
  )
}
