const run = async() => {
  console.log('run')
  const { f } = await import('./dynamic-imported')
  console.log('imported')
  f()
}

run().catch(console.error)
