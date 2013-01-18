function validate(inputField){
	var reg1 = /^[0-9][0-9]\%B[0-4][0-9]\.[0-8][0-9]\'[N][0-3][0-6][0-9]\%B[0-4][0-9]\.[0-8][0-9]\'[E]$/;		//47°49.89'N009°00.50'E
	var reg2 = /^[0-9]?[0-9][N][0-3]?[0-6]?[0-9][E]$/;														//-->Bsp.:47N9E
	var reg3 = /^[0-9]?[0-9]\.[0-4][0-9][0-8][0-9][N][0-3]?[0-6]?[0-9]\.[0-4][0-9][0-8][0-9]?[E]$/; 		//-->47.4989N9.005E
	var reg4 = /^[0-9][0-9]\%B[0-4][0-9]\.[0-8][0-9][N][0-3][0-6][0-9]\%B[0-4][0-9]\.[0-8][0-9][E]$/;			//-->47°49.89N 009°00.50E
	var reg5 = /^[0-9]?[0-9]\%B[0-4][0-9][0-8][0-9]\'[N][0-3]?[0-6]?[0-9]\%B[0-4]?[0-9]\.[0-8][0-9]\'[E]$/;	//-->47°4989'N9°0.50'E
	
	if(reg1.test(inputField.value)){
		/*nothing to do*/
	}else if(reg2.test(inputField.value)){
		var neu;
		/*Umformen.....*/
		if(document.formular.position.value.length == 5){
			neu = "" + document.formular.position.value.charAt(0)
				+ document.formular.position.value.charAt(1)
				+ "°00.00'"
				+ document.formular.position.value.charAt(2)
				+ "00"
				+ document.formular.position.value.charAt(3)
				+ "°00.00'";
		}else if(document.formular.position.value.length == 6){
			neu = "" + document.formular.position.value.charAt(0)
				+ document.formular.position.value.charAt(1)
				+ "°00.00'"
				+ document.formular.position.value.charAt(2)
				+ "0"
				+ document.formular.position.value.charAt(3)
				+ document.formular.position.value.charAt(4)
				+ "°00.00'";
		}else if(document.formular.position.value.length == 7){
			neu = "" + document.formular.position.value.charAt(0)
				+ document.formular.position.value.charAt(1)
				+ "°00.00'"
				+ document.formular.position.value.charAt(2)
				+ document.formular.position.value.charAt(3)
				+ document.formular.position.value.charAt(4)
				+ document.formular.position.value.charAt(5)
				+ "°00.00'";
		}
		document.formular.position.value = neu;
	}else if(reg3.test(inputField.value)){
		var neu;
		/*Umformen.....*/
		if(document.formular.position.value.length == 14){
			neu = "" + document.formular.position.value.charAt(0)
				+ document.formular.position.value.charAt(1)
				+ "°"
				+ document.formular.position.value.charAt(3)
				+ document.formular.position.value.charAt(4)
				+ "."
				+ document.formular.position.value.charAt(5)
				+ document.formular.position.value.charAt(6)
				+ "'"
				+ document.formular.position.value.charAt(7)
				+ "00"
				+ document.formular.position.value.charAt(8)
				+ "°"
				+ document.formular.position.value.charAt(10)
				+ document.formular.position.value.charAt(11)
				+ "."
				+ document.formular.position.value.charAt(12)
				+ "0'"
				+ document.formular.position.value.charAt(13);
		}else if(document.formular.position.value.length == 15){
			neu = "" + document.formular.position.value.charAt(0)
				+ document.formular.position.value.charAt(1)
				+ "°"
				+ document.formular.position.value.charAt(3)
				+ document.formular.position.value.charAt(4)
				+ "."
				+ document.formular.position.value.charAt(5)
				+ document.formular.position.value.charAt(6)
				+ "'"
				+ document.formular.position.value.charAt(7)
				+ "0"
				+ document.formular.position.value.charAt(8)
				+ document.formular.position.value.charAt(9)
				+ "°"
				+ document.formular.position.value.charAt(11)
				+ document.formular.position.value.charAt(12)
				+ "."
				+ document.formular.position.value.charAt(13)
				+ "0'"
				+ document.formular.position.value.charAt(14);
		}else if(document.formular.position.value.length == 16){
			neu = "" + document.formular.position.value.charAt(0)
				+ document.formular.position.value.charAt(1)
				+ "°"
				+ document.formular.position.value.charAt(3)
				+ document.formular.position.value.charAt(4)
				+ "."
				+ document.formular.position.value.charAt(5)
				+ document.formular.position.value.charAt(6)
				+ "'"
				+ document.formular.position.value.charAt(7)
				+ "0"
				+ document.formular.position.value.charAt(8)
				+ document.formular.position.value.charAt(9)
				+ document.formular.position.value.charAt(10)
				+ "°"
				+ document.formular.position.value.charAt(12)
				+ document.formular.position.value.charAt(13)
				+ "."
				+ document.formular.position.value.charAt(14)
				+ "0'"
				+ document.formular.position.value.charAt(15);
		}
		document.formular.position.value = neu;
	}else if(reg4.test(inputField.value)){
		/*nothing to do*/
	}else if(reg5.test(inputField.value)){
		/*nothing to do*/
	}else{
		alert(unescape("Falsche Eingabe!\n"
		+"Folgende Formate sind erlaubt:\n"
		+"- 47%B049.89'N009%B000.50'E\n"
		+"- 47N9E\n"
		+"- 47.4989N9.005E\n"
		+"- 47%B049.89N009%B000.50E\n"
		+"- 47%B04989'N9%B00.50'E"));
	}	
}