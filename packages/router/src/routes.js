
export let routes = {
  home: '/',
  test: '/test'
}

export const registerRoute = (route) => {
  routes = {
    ...routes,
    ...route
  }
}
