
/**
 * Attack system placeholder.
 * Eventually the system will have to respond to a number of different actions
 * that the player can perform each turn, for now this is it.
 */

import { compress, safe } from '@raid/addons'
import { emit } from 'kunai'
import { actions, selectors } from '@battle/core'
import { getComponent } from '@sys/service'

/**
 * This function decides if the action can be performed, and then triggers it
 */
const onTurnAction = (state, payload) => {
  const [currentPower] = selectors.getTurnPower(state)
  const component = getComponent(payload.componentID)

  if (!component) {
    return state
  }

  if (currentPower <= 0) {
    return state
  }

  emit(actions.changePower, 0 - component.powerConsumption)
  component.action()

  return state
}

const onTurnEnd = (state, payload) => {
  emit(actions.turnStart)

  return state
}

const onTurnStart = (state, payload) => {
  const [current, max] = selectors.getTurnPower(state)

  emit(actions.changePower, max - current)

  return state
}

export const update = safe(compress({
  [actions.turnAction]: onTurnAction,
  [actions.turnEnd]: onTurnEnd,
  [actions.turnStart]: onTurnStart
}))
