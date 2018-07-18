module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true
  },
  extends: 'standard',
  rules: {
    'space-before-function-paren': 0,
  },
  plugins: [
    'standard',
    'promise'
  ]
}
