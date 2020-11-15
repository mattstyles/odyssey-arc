
import { safe, compress } from '@raid/addons'

import { patchUpdate as patch } from './state'
import { actions } from './actions'

/**
 * @example emit(actions.changeHull, 4) - adds 4 to the hull variable
 */
const onHullChange = patch((slice, payload) => {
  return {
    ...slice,
    hull: [slice.hull[0] + payload, slice.hull[1]]
  }
})

export const update = safe(compress({
  [actions.changeHull]: onHullChange
}))
