
import { render } from 'react-dom'
import { debug, scope, safe } from '@raid/addons'

import { signal } from 'kunai'

import { ModuleLoader } from 'components/moduleLoader'
import { App } from 'components/app'
import { Navigation } from 'components/navigation'

const el = document.querySelector('.js-main')

if (process.env.DEBUG) {
  // Debug log everything unless the event type is silent
  const scoped = scope((state, event) => !/silent/i.test(event.type))
  signal.register(scoped(debug('[app]')))

  signal.register(safe((state, event) => {
    window.state = state
  }))
}

signal.observe(state => {
  render(
    <App>
      <ModuleLoader>
        <Navigation navigation={state.navigation} />
      </ModuleLoader>
    </App>,
    el
  )
}, err => console.error(err))

if (module.hot) {
  module.hot.dispose(() => {
    console.group('[HMR] dispose')
    console.log('disposing signal updates, detaching observers')
    // signal.disposeAll()
    // signal.detachAll()

    console.groupEnd('[HMR] dispose')
  })
  // Enable if you're happy with HMR for your app
  // module.hot.accept(() => {
  //   console.group('[HMR] accept')
  //   signal.emit({
  //     hmr: 'accept'
  //   })
  //   console.groupEnd('[HMR] accept')
  // })
}
