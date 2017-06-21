import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Weekday from '../part-1/functions'
chai.use(chaiChange)

describe('functions', () => {
  'use strict'

  it('exists', () => {
    expect(Weekday).to.be.a('function')
    })
  context('dayOfWeek()', () => {
  it('takes a date and returns the day of week',() => {
    const date = new Weekday( 99, 5, 14 )
    expect(date.dayOfWeek(99, 5, 14)).to.equal( 'Tuesday' )
      })
    })



  })
