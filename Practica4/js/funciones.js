$(document).ready(function(){
    alert('hola desde jquery')
    $('h1').hide('slow');
    $('h1').show('fast');
    $('h1').click(function(){
        $(this).hide('slow');
        $('#consola').html($(this).css('fontSize'));
        if($(this).css('fontSize')=='50px'){
            $(this).css('fontSize','32px');
        }
        else{
            $(this).css('fontSize','50px');
        }        
        $(this).show('fast');
    });


    $('#btn2').click(function(){
        $('#img1').attr('src','img/cover.png');
    });

    $('#btn1').click(function(){
        $('#img1').attr('src','img/Taylor.jpg');


        $('#img1').animate({
            opacity: 0.25,
            width: "25",
            left: "50",
            height: "30"
        }, 5000, function(){
        
    });




    });





});









/*

        function calcula(operacion){
    		var operador1 = document.calc.operador1.value;
    		var operador2 = document.getElementById("operador2").value;
    		//alert(operador1);
    		//alert(operador2);
    		var result = eval(operador1+operacion+operador2);
    		document.calc.Resultado.value=result;	
    	}

    	function conv1 (argument) {
    		var moneda1 = document.moneda.moneda1.value;
    		if(argument==1){
    			result=moneda1/14.9936277;
    		}
    		if(argument==2){
    			result=moneda1*14.9936277;
    		}
    		document.moneda.Resultado.value=result;
    	}

    	function long (argument) {
    		var valor = document.longitud.long1.value;
    		if(argument==1){
    			result=valor/1000;
    		}
    		if(argument==2){
    			result=valor*1000;
    		}
    		if(argument==3){
    			result=valor*100;
    		}
    		if(argument==4){
    			result=valor/100;
    		}
    		document.longitud.Resultado.value=result;
    	}

    	function temp (argument) {
    		var valor = document.temperatura.temp1.value;
    		if(argument==1){
    			result=(valor*(9/5))+32;
    		}
    		if(argument==2){
    			result=(valor-32)*(5/9);
    		}
    		document.temperatura.Resultado.value=result;
    	} */