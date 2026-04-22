app.post('/comandas', (req, res) =>{
	const platos = req.body.platos.map(plato => new PlatoPedido(Menu.getPlatoPorId(parseInt(plato.id)), plato.cantidad, plato.notas) //Medio mal hecho, bien pensado, construir elemento por elemento igualando y return plato pedido
	const comanda = new Comanda(req.body.mesa, platos)

	//Crear repository q guarde
	//Comandas.guardarComanda(comanda)

})

app.get('/comandas/:id', (req, res) => {
	res.status(200).json(Comandas.getComandaPorId(parseInt(req.param.id)))

//imprimir cada uno con formato lindo con un metodo que devuelva un Jason mejor, con datos que se calculan mas q ser atributis

})