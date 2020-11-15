
/**
 * Attack system placeholder.
 * Eventually the system will have to respond to a number of different actions
 * that the player can perform each turn, for now this is it.
 */

import { compress, safe } from '@raid/addons'
import { emit } from 'kunai'
import { actions, selectors } from '@battle/core'

const componentMap = {
  attack: {
    powerConsumption: 1,
    perform: () => {
      emit(actions.enemyHullChange, -3)
    }
  },
  block: {
    powerConsumption: 1,
    perform: () => {
      emit(actions.blockChange, 4)
    }
  }
}

const onTurnAction = (state, payload) => {
  const [currentPower] = selectors.getTurnPower(state)
  const component = componentMap[payload.component]

  if (!component) {
    return state
  }

  if (currentPower <= 0) {
    return state
  }

  emit(actions.powerChange, 0 - component.powerConsumption)
  component.perform()

  return state
}

export const update = safe(compress({
  [actions.turnAction]: onTurnAction
}))
