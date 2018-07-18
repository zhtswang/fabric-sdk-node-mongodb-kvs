# fabric-sdk-node-mongodb-kvs

MongoDB KeyValueStore implementation for Fabric Node.js SDK

## Install

```bash
npm i fabric-sdk-node-mongodb-kvs
```

## Configuration & Usage in SDK

```javascript
const Client = require('fabric-client')

Client.setConfigSetting('key-value-store', 'fabric-sdk-node-mongodb-kvs')

// Create KeyValuieStore using the MongoDB options
Client.newDefaultKeyValueStore({
  url: 'mongodb://localhost:27017',
  dbName: 'app',
  collectionName: 'credential'
})

// Create CryptoKeyStore using the MongoDB options
Client.newCryptoKeyStore({
  url: 'mongodb://localhost:27017',
  dbName: 'app',
  collectionName: 'crypto'
});

// Have fun with Fabric
```

## Test

```bash
npm run test
```
