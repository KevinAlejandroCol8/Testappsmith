export default {
	filterNombre: (data=MongoDB.data) => {
		let informacion = data;
		
		if (Select2Copy.selectedOptionValue !== 'all'){
			informacion = informacion.filter(u => u.name_category === Select2Copy.selectedOptionValue);
		}
		
		/*if (Input1.text !== 'all'){
				 informacion = informacion.filter( u => u.name === Input1.text);
		}*/
		
		return informacion;
	}
}