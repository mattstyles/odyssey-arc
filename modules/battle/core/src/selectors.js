
import { createSelector } from 'reselect'
import { patchSelector as patch } from './state'

export const getStage = patch('stage', [])

export const getTurnMetrics = patch('turn', {})
export const getTurnBlock = patch('turn.block', 0)
export const getTurnPower = patch('turn.power', [0, 0])

export const getTurnPowerCurrent = createSelector(
  getTurnPower,
  ([current, _]) => current
)
export const getTurnPowerMax = createSelector(
  getTurnPower,
  ([_, max]) => max
)
