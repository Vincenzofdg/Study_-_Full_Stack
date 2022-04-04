O resultado final do JWT dá-se através da assinatura criptográfica de dois blocos de JSON codificados em base64. Esses dois blocos JSON codificados são o header e o payload

### Header
Contém duas propriedades: o tipo do token, que é JWT, e o tipo do algoritmo de hash, como HMAC-SHA256 ou RSA:
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload
Segunda parte do token, que contém os dados. Esses dados são declarações sobre uma entidade (geralmente, o usuário):
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

### Signature
Deve-se usar o header e o payload codificados em base64, usando o algoritmo definido no header:
```js
import { hmac } from 'bibliotecaDeHmac';

function base64 (string) {
  return Buffer.from(string).toString('base64');
}

const header = JSON.stringify({
  alg: 'HS256',
  type: 'JWT'});

const payload = JSON.stringify({
  sub: '1234567890',
  name: 'John Doe',
  admin: true});

const secret = 'MinhaSenhaMuitoComplexa123';

const assinatura = hmac(`${base64(header)}.${base64(payload)}`, secret);

const token = `${base64(header)}.${base64(payload)}.${base64(assinatura)}`;
```
