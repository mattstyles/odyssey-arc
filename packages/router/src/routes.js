
export let routes = {
  home: '/',
  battle: '/battle'
}

export const registerRoute = (route) => {
  routes = {
    ...routes,
    ...route
  }
}
