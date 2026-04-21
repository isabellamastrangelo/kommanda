import bodyParser from "body-parser";
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { readFileSync } from 'fs'
import { parse } from 'yaml'
import {Plato} from "./src/domain/plato.js";
import {Menu} from "./src/repositories/menu.js";

const app = express()
const port = 3000
const spec = parse(readFileSync('./docs.yaml', 'utf-8'))

app.use(bodyParser.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec))

app.get('/healthCheck', (req, res) => {
  res.status(200).json({mensaje:'Todo marcha bien!'})
})

app.post('/platos', (req, res) => {
	try{
		const plato = Menu.agregarPlato(new Plato(req.body))
  	res.status(201).json(plato)
	} catch(error){
		if(error instance of Plato inválido) {
			res.status(400).Jason({ error> error.message })
		}
	}
if(req.body.precio <= 0 && !req.body.nombre){
		throw.new Error("El plato esta mocho")
	}
  
})

app.get('/platos', (req, res) => {
  res.status(200).json([
    { id: 1, nombre: "Milanesa con puré", precio: 10000, categoria: "PRINCIPAL", estaDisponible: true },
    { id: 2, nombre: "Ensalada César", precio: 7000, categoria: "ENTRADA", estaDisponible: true },
    { id: 3, nombre: "Flan casero", precio: 4000, categoria: "POSTRE", estaDisponible: false }
  ])
})

app.get('/platos/:id', (req, res) => {
  res.status(200).json({ id: 1, nombre: "Milanesa con puré", precio: 10000, categoria: "PRINCIPAL", estaDisponible: true })
})

app.put('/platos/:id', (req, res) => {
  res.status(200).json({ id: 1, nombre: "Milanesa con puré", precio: 10000, categoria: "PRINCIPAL", estaDisponible: true })
})

app.patch('/platos/:id', (req, res) => {
  res.sendStatus(200)
})



//Inicio apuntes Clase 2 (21/4)
/*
postman no verifica que esten todos los valores
excepciones: cortan el flujo de ejecución y burbujean (vuelven para arriba hasta que le llegue al usuario)
uso try catch para mandar excepción y no tener que cambiar logica en muchos lados  (por ej si de repente un precio puede ser 0) --> Estaría mal distribuida la responsabilidad, acoplamiento y falta de cohesion
	Método fail fast --> Cuando hay error quiero fallar lo antes posible, no esperar (por ej en el constructor)
*/
app.post('/comandas', (req, res) => { // entra a carpeta comandas, manda en body la comanda, devuelve la q crea
	res.status(200).Jason({})
})

//very comanda y buscar comanda
app.get('/comanda/:id', (req, res) => {
	// recibe un id, devuelve comanda
})

app.put('/comanda/:id', (req, res) => {
// recibe id y por body el plato a agregar
})

app.patch('/comanda/:id/:idPlato', (req, res) => {
// recibe id de comanda y plato y por body el plato a modificar
})

app.patch('/comanda/:id', (req, res) => {
// recibe id y por body lo que quiere modificar
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
