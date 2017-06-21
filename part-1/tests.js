import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Funcs from '../part-1/functions'

chai.use(chaiChange)

describe('functions', () => {
  'use strict'

  it('exists', () => {
    expect(Funcs).to.be.a('function')
    })
  context('dayOfWeek()', () => {
  it('takes a date and returns the day of week',() => {
    const date = new Funcs( 99, 5, 14 )
    expect(date.dayOfWeek(99, 5, 14)).to.equal( 'Tuesday' )
      })
    })

  context('snippet()', () => {
  it('takes a str and num and returns a str the length of number passed in',() => {
    Funcs.snippet("foobar barfoo", 6)
    expect(Funcs.snippet("foobar barfoo", 6)).to.equal( 'foobar' )
      })
    })


  })
