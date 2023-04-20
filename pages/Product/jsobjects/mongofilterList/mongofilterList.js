export default {
	filterNombre: (data=ListData.data) => {
		let informacion = data;
		
		if (Filtro.selectedOptionValue !== 'all'){
			informacion = informacion.filter(u => u.name_category === Filtro.selectedOptionValue);
		}
		
		/*if (Input1.text !== 'all'){
				 informacion = informacion.filter( u => u.name === Input1.text);
		}*/
		
		return informacion;
	}
}