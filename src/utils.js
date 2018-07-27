export default {
  isValid(results) {
    return results.every(result => result.errors.length === 0)
  },
  getErrorsByName(results, name) {
    const result = results.find(result => {
      return result.name === name
    })
    return result.errors
  }
}
