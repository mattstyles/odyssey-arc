
import { emit } from 'kunai'
import { actions } from '@battle/core'

/**
 * Block component, this is a placeholder for now to test how an actionable
 * component might work. (passive action)
 */

export const block = {
  powerConsumption: 1,
  action: () => {
    emit(actions.changeBlock, 4)
  }
}
