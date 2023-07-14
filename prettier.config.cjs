/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  trailingComma: 'none',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 120
}

module.exports = config
