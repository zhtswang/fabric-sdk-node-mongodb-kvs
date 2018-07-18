const MongoDBKVS = require('../index')
const assert = require('assert')

let kvsDB

describe('Test MongoKVS', () => {
  it('Test missing options - url', () => {
    assert.throws(() => {
      kvsDB = new MongoDBKVS({
        dbName: 'app',
        collectionName: 'kvs'
      })
    })
  })

  it('Test missing options - dbName', () => {
    assert.throws(() => {
      kvsDB = new MongoDBKVS({
        url: 'mongodb://localhost:27017',
        collectionName: 'kvs'
      })
    })
  })

  it('Test missing options - collectionName', () => {
    assert.throws(() => {
      kvsDB = new MongoDBKVS({
        url: 'mongodb://localhost:27017',
        dbName: 'app'
      })
    })
  })

  it('Test constructor', (done) => {
    new MongoDBKVS({
      url: 'mongodb://localhost:27017',
      dbName: 'app',
      collectionName: 'kvs'
    })
      .then((db) => {
        kvsDB = db
        done()
      })
  })

  it('Test getValue & setValue', (done) => {
    const key = 'key'
    const value = 'value'

    kvsDB.setValue(key, value)
      .then((valueResolved) => {
        assert.strictEqual(valueResolved, value)
        return kvsDB.getValue(key)
      })
      .then((valueInDB) => {
        assert.strictEqual(valueInDB, value)
        return done()
      })
  })
})
