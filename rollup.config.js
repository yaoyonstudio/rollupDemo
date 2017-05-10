import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import uglify from 'rollup-plugin-uglify'
import sass from 'rollup-plugin-sass'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

var PRODUCTION = process.env.NODE_ENV === 'production'

var config = {
  entry: 'src/js/app.js',
  format: 'iife',
  plugins: [
    sass({
      output: 'src/css/style.css',
      options: {
        outputStyle: 'compressed'
      },
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css)
    }),
    resolve({
      browser: true
    }),
    commonjs(),
    eslint({
      exclude: ['node_modules/**', 'src/css/**']
    }),
    babel({
      exclude: 'node_modules/**'
    })    
  ],
  dest: 'src/bundle.js'
}

if (PRODUCTION) {
  console.log('production')
  config.plugins.push(
    uglify()
  )
} else {
  console.log('development')
  config.plugins.push(
    serve({
      open: true,
      verbose: false,
      contentBase: 'src',
      host: 'localhost',
      port: 8899
    }),
    livereload({
      watch: 'src',
      verbose: false
    })
  )
}

export default config