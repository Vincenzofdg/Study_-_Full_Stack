## O que é?
É um padrão de mercado que define um token no formato JSON, onde há uma troca de informações de forma leve, segura e autocontida.

- Leve: adota JSON como base, para troca de informações;
- Autocontido: Trás todas as informações para decriptar o mesmoç
- Seguro: Valida a integridade do token, utilizando algoritimos de hashing. 

## Quando utilizar?

- Troca de informações entre aplicação;
- Em mecanismo de autenticação e autorização.

## É mais seguro
É normalmente criptografado atravẽs de algoritmos, no qqual os principais são:
- HMAC: Usa uma chave secreta que criptografa e descriptografa;
- RSA: Par de chaves pública/privada.

## O que compôem um JWT
O seu resultado final gera uma hash dividida em 3 partes, sendo elas:
- Header: `codigo_do_header`;
- Payload: `codigo_do_payload`;
- Signature: `codigo_da_signature`.

**Resultado Final:** `codigo_do_header`.`codigo_do_payload`.`codigo_da_signature`


