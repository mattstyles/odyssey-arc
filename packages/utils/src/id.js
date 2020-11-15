
const gen = num => num * 1e10 >>> 1

const seed = Math.random()
const hash = gen(seed)
let count = 0

export const generateUuid = () => (hash + gen(++count)).toString(36)
