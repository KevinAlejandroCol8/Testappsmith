export default {
	filterNombre: (data=Query2.data) => {
		let informacion = data;
		
		/*if (Select2.selectedOptionValue !== 'all'){
			informacion = informacion.filter(u => u.name === Select2.selectedOptionValue);
		}*/
		
		if (Input1.inputText !== 'null'){
				informacion = informacion.filter( u => u.name === Input1.inputText)
		}
		
		return informacion;
	}
}