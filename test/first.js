const { expect } = require('chai')


describe('Array',()=>{
  it( `it should return -1 when arr don't include 4`,()=>{
    expect([1,2,3].indexOf(4)).to.equal(-1)
  })
})