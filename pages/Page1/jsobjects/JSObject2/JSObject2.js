export default {
	myFun1 () {
		let datos = Query2.data;
		let prueba;
		datos.map((val, index) => { 
		 	prueba = val.category_id.id
			datos[index].nombreCategoria = Categorias.data[parseInt(val.category_id.id)].name
		})
		return datos	
	}
}