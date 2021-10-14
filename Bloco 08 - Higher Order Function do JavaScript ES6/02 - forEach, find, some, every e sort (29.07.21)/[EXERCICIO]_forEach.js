// 01 - Use o método forEach chamando a callback showEmailList para apresentar os emails.
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => { console.log(`O email ${email} esta cadastrado em nosso banco de dados!`); };

// Adicione seu código aqui
function emails(emails, callback) {
  return emails.forEach((email) => callback(email));
}

console.log(emails(emailListInData, showEmailList));

