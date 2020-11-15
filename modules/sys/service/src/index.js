
import { warn } from '@arc/utils'

import { attack } from './attack'
import { block } from './block'

const map = {
  attack,
  block
}

export const getComponent = id => {
  const component = map[id]

  if (!component) {
    warn('Component ID unknown', id)
  }

  return component
}
