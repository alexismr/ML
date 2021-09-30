import  app  from './App'

const port = process.env.PORT || 5000

/**
 * method main start aplication 
 * @param port
 * @returns server
 */
app.listen(port, () => {
  return console.log(`Express server  ${port}: \x1b[32m%s\x1b[0m', 'online`);
})
