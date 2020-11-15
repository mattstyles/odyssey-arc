
import { safe, compress } from '@raid/addons'

import { patchUpdate as patch } from './state'
import { actions } from './actions'

const onFoo = patch((state, payload) => {
  return state
})

export const update = safe(compress({
  [actions.foo]: onFoo
}))
