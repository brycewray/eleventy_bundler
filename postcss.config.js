module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 1,
      autoprefixer: {
        grid: true,
      },
      browsers: 'last 2 versions',
    }, 
    'postcss-nested': {},
  }
}