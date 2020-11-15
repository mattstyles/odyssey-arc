
import { patch as corePatch } from '@raid/addons'
import { patchSelector as selectorPatch } from '@arc/utils'

const shape = {
  stage: 'foo'
}

const rootKey = 'battle'
export const initialState = {
  [rootKey]: shape
}

export const patchUpdate = corePatch(rootKey)
export const patchSelector = selectorPatch(rootKey)
