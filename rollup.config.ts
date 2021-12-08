import path from 'path'
import alias from '@rollup/plugin-alias'

export default {
  input: './plugins/components.ts',
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  plugins: [
    alias({
      entries: {
        '@': path.resolve(__dirname, './')
      }
    })
  ]
}
