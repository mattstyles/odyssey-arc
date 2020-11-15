
const { ui } = require('@raid/rk/lib/babel')

const babel = ui()

babel.plugins = [
  'styled-components',
  'transform-react-require',
  [
    'module-resolver',
    {
      root: [
        './src'
      ]
    }
  ]
]

module.exports = babel
