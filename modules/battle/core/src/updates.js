
import { safe, compress } from '@raid/addons'

import { patchUpdate as patch } from './state'
import { actions } from './actions'

const onAttack = patch((slice, payload) => {
  const { damage } = payload
  console.log('Attack damage:', damage)
  return slice
})

export const update = safe(compress({
  [actions.attack]: onAttack
}))
