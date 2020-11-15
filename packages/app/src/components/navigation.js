
import React, { Suspense } from 'react'

import { Navigator, routes } from '@arc/router'
import { Loading } from '@arc/components'
import config from '@arc/config'

const defaultPageDelay = config.pageLoadDelay

const delay = ms => ({
  then: resolve => setTimeout(resolve, ms)
})

// This is a bit annoying as it must be a string and can not be a dynamic property for import to work properly when bundled
const Home = React.lazy(() => Promise.all([
  import('@home/ui'),
  delay(defaultPageDelay)
]).then(([mod]) => mod))

const Battle = React.lazy(() => Promise.all([
  import('@battle/ui'),
  delay(defaultPageDelay)
]).then(([mod]) => mod))

// Suspense fallback is currently a modal, this will likely change as there
// is a single page layout for the entire app and the page components will
// be composed into the body so a loading would need to centralise inside
// the body, not as an entire screen overlay.
export const Navigation = ({
  navigation
}) => {
  return (
    <Suspense fallback={<Loading sx={{ py: 10 }} />}>
      <Navigator navigation={navigation}>
        {/** <Home route={routes.home} /> **/}
        <Battle route={routes.home} />
      </Navigator>
    </Suspense>
  )
}
