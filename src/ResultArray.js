
class ResultArray {
  constructor() {
    this.results = [];
  }

  push(result) {
    this.results.push(result)
  }

  isValid() {
    return this.results.every(result => result.errors.length === 0)
  }

  getErrorsByName(name) {
    const result = this.results.find(result => {
      return result.name === name
    })
    return result.errors
  }
}

module.exports = ResultArray;
