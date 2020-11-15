
import { emit } from 'kunai'
import { actions } from '@battle/core'

/**
 * Attack component, this is a placeholder for now to test how an actionable
 * component might work. (user action)
 */

export const attack = {
  powerConsumption: 1,
  action: () => {
    emit(actions.changeEnemyHull, -3)
  }
}
