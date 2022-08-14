import { ParseArgs, postman } from '../postman'

const args = new ParseArgs(__filename, () => {
  console.debug('Please supply an id as an argument:')
})

postman.get(`degree/${args.last}`).then(console.debug)
