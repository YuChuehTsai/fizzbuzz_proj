var should = chai.should()
describe('function fizzBuzz', function () {
  it('a % 3 === 0',
    function () {
      var result = fizzBuzz(9)
      result.should.be.equal('Fizz')
    })
  it('a % 5 === 0',
    function () {
      var result = fizzBuzz(10)
      result.should.be.equal('Buzz')
    })

  it('a % 3 === 0 && a % 5 === 0',
    function () {
      var result = fizzBuzz(15)
      result.should.be.equal('FizzBuzz')
    })

  it('a % 3 !== 0 && a % 5 !== 0',
    function () {
      var result = fizzBuzz(8)
      result.should.be.equal(8)
    })
})