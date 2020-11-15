
import { createSelector } from 'reselect'
import { patchSelector as patch } from './state'

export const getHull = patch('hull', [0, 0])
export const getFuel = patch('fuel', 0)

export const getHullMax = createSelector(
  getHull,
  ([_, max]) => max
)
export const getHullCurrent = createSelector(
  getHull,
  ([current, _]) => current
)

/**
 * @returns {Number} 0...1 current hull integrity percentage in the range 0..1
 */
export const getHullPercent = createSelector(
  getHull,
  ([current, max]) => current / max
)
