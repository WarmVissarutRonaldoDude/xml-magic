import xmlParser from 'xml2json'

type JSONInput = string | object | object[]

export const jsonToXml = (json: JSONInput): string | null => {
  try {
    return xmlParser.toXml(json)
  } catch(err) {
    console.error('jsonToXml failed : ', err?.message ?? err);
  }

  return null
}

export const xmlToJson = (xml: string): string | null => {
  try {
    return xmlParser.toJson(xml)
  } catch(err) {
    console.error('xmlToJson failed : ', err?.message ?? err);
  }

  return null
}

export const jsonToSoap = (json: JSONInput): string | null => {
  try {
    const xml = xmlParser.toXml(json)
    return `
    <soapenv:Envelope>
      <soapenv:Body>
        ${xml}
      </soapenv:Body>
    </soapenv:Enveloppe>
    `
  } catch(err) {
    console.error('jsonToSoap failed : ', err?.message ?? err);
  }

  return null
}

export const soapToJson = (xml: string): string | null => {
  try {
    const json = xmlParser.toJson(xml)
    const jsonObj = JSON.parse(json);

    // TODO: fix soapenv nested
    return JSON.stringify(`${{
      ...jsonObj?.Envelope.Body
    }}`)
  } catch(err) {
    console.error('jsonToSoap failed : ', err?.message ?? err);
  }

  return null
}