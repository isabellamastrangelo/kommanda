app.post('/comandas', (req, res) =>{
	const platos = req.body.platos.map(plato => new PlatoPedido(Menu.getPlatoPorId(parseInt(plato.id)), plato.cantidad, plato.notas)
	const comanda = new Comanda(req.body.mesa, platos)

	//Crear repository q guarde
	//Comandas.guardarComanda(comanda)

})