app.get('/employees/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const employee = await Employee.findOne({
          where: { id },
          include: [{
            model: Address, as: 'addresses'
            // Se não quisermos o acesso ao número do endereço, bastaria alterar o código, adicionando a propriedade attributes e dentro dela o que queremos fazer
            // model: Address, as: 'addresses', attributes: { exclude: ['number'] },
          }],
        });
  
      if (!employee)
        return res.status(404).json({ message: 'Funcionário não encontrado' });
  
      return res.status(200).json(employee);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    };
  });