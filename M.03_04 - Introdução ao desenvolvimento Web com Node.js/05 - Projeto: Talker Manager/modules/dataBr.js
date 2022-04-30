// Retorna True se a data estiver na formatação brasileira, caso contrario retorna false
const dataBr = (date) => {
  const dataSplited = date.split('/'); // [ Dia, Mes, Ano ]
  const day = dataSplited[0];
  const month = dataSplited[1];
  const year = dataSplited[2];
  const newData = Date.parse(`${month}/${day}/${year}`);
  return !Number.isNaN(newData);
};

module.exports = dataBr;
