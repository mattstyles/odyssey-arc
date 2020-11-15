
import { safe, compress } from '@raid/addons'

import { patchUpdate as patch } from './state'
import { actions } from './actions'

const onEnemyHullChange = patch((slice, payload) => {
  const [current, ...hull] = slice.enemy.hull

  return {
    ...slice,
    enemy: {
      ...slice.enemy,
      hull: [current + payload, ...hull]
    }
  }
})

const onTurnPowerChange = patch((slice, payload) => {
  const [current, ...power] = slice.turn.power

  return {
    ...slice,
    turn: {
      ...slice.turn,
      power: [current + payload, power]
    }
  }
})

const onTurnBlockChange = patch((slice, payload) => {
  const block = slice.turn.block

  return {
    ...slice,
    turn: {
      ...slice.turn,
      block: block + payload
    }
  }
})

export const update = safe(compress({
  [actions.changeEnemyHull]: onEnemyHullChange,
  [actions.changePower]: onTurnPowerChange,
  [actions.changeBlock]: onTurnBlockChange
}))
