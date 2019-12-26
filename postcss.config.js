module.exports = {
  parser: 'postcss-scss',
  plugins: [
    purgecss({
      content: ['./**/*.html']
    }),
  ],
}