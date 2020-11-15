
export const delay = ms => ({
  then: resolve => setTimeout(resolve, ms)
})
