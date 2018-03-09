import path from 'path'
import alphaX from '../src/alphax'

describe('alphax', () => {
  test('base', async () => {
    const app = alphaX()
    await app
      .src(path.join(__dirname, '/fixtures/package/**'), {
        baseDir: path.join(__dirname, '/fixtures/package'),
        filter: {
          'lib': true,
          'lib/util/**': false,
          'style/**': false,
          'index.js': true
        },
        rename: {
          'lib': 'lib2',
          '.js': '.ts'
        },
        transformFn(content, file) {
          return ' ==== source name is ' + content
        }
      })
      .dest(null)
    expect(app.fileMap()).toMatchSnapshot()
  })

  test('cwd', async () => {
    const app = alphaX()
    const prevCwd = process.cwd()
    process.chdir('test/fixtures')

    await app
      .src('**', {
        baseDir: path.resolve('package'),
        filter: {
          'lib': true,
          'lib/util/**': false,
          'style/**': false,
          'index.js': true
        },
        rename: {
          'lib': 'lib2',
          '.js': '.ts'
        },
        transformFn(content, file) {
          return ' ==== source name is ' + content
        }
      })
      .dest(null)

    expect(app.fileMap()).toMatchSnapshot()
    process.chdir(prevCwd)
  })

  test('filter function - 1', async () => {
    const app = alphaX()
    const prevCwd = process.cwd()
    process.chdir('test/fixtures')

    await app
      .src('**', {
        baseDir: path.resolve('package'),
        transformFn(content, file) {
          return file.relative + ': ' + content
        }
      })
      .filter(file => file.relative.indexOf('style') === -1)
      .dest(null)

    expect(app.fileMap()).toMatchSnapshot()
    process.chdir(prevCwd)
  })

  test('filter function - 2', async () => {
    const app = alphaX()
    const prevCwd = process.cwd()
    process.chdir('test/fixtures')

    await app
      .src('**', {
        baseDir: path.resolve('package'),
        transformFn(content, file) {
          return file.relative + ': ' + content
        }
      })
      .filter(file => file.relative.indexOf('style') > -1)
      .dest(null)

    expect(app.fileMap()).toMatchSnapshot()
    process.chdir(prevCwd)
  })

})
