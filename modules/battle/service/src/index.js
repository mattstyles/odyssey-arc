
import { signal } from 'kunai'

const update = (state, event) => {
  console.log('@battle/service')
  return state
}

signal.register(update)
