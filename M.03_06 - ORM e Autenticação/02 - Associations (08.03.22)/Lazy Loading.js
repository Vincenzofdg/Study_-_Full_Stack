// Esse método consiste, basicamente, em não especificar uma propriedade includes no momento de realizar a query no banco

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ where: { id } });

    if (!employee) return res.status(404).json({ message: 'Funcionário não encontrado' });

    // Para utilizarmos duas ações diferentes em um endpoint, iremos usar a query string includeAddresses,
    // na qual, caso o parâmetro dela seja true os endereços daquele funcionário também serão retornados
    if (req.query.includeAddresses === 'true') {
        const addresses = await Address.findAll({ where: { employeeId: id } });
        return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});
