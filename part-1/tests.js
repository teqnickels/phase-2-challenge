import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import { funcs } from '../part-1/functions'

chai.use(chaiChange)

describe('functions', () => {
  'use strict'

  it('exists', () => {
    expect({ funcs }).to.be.a('object')
  })

  context('funcs.dayOfWeek()', () => {
  it('takes a date and returns the day of week',() => {
    expect(funcs.dayOfWeek(99, 5, 14)).to.equal( 'Tuesday' )
      })
    })

  context('funcs.snippet()', () => {
  it('takes a str and num and returns a str the length of number passed in',() => {
    funcs.snippet("foobar barfoo", 6)
    expect(funcs.snippet("foobar barfoo", 6)).to.equal( 'foobar...' )
      })
    })

    context('funcs.numProps()', () => {
      it('returns the number of properties an object has',() => {
        var keisha = {
          color: 'blue',
          age: 10,
          food: 'pizza'
        };
        var bre = {
          color: 'yellow',
          lastName: 'mcewen',
          age: 10,
          food: 'pizza'
        };
        expect(funcs.numProps(keisha)).to.equal( 3 )
        expect(funcs.numProps(bre)).to.equal( 4 )

      })
    })
  })
