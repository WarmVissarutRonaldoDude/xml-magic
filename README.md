# xml-magic

Lovely XML!!

## How to use

`yarn add xml-magic`
or
`npm install xml-magic`


```ts
import xmlMagic from 'xml-magic';

// using with JSON object
const soap = xmlMagic.jsonToSoap({ JSON: true });

// using with JSON string
const xml = xmlMagic.jsonToXml('{ \"JSON\": true }'); 
```
or
```js
const xmlMagic = require('xml-magic');

// using with JSON object
const soap = xmlMagic.jsonToSoap({ JSON: true });

// using with JSON string
const xml = xmlMagic.jsonToXml('{ \"JSON\": true }'); 
```

## Available Methods
- jsonToSoap
- jsonToXML
- soapToJson
- xmlToJson
