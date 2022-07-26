let numA="",numB="";
let sign="";
const decimal = document.querySelector('#decimal');
const dot_button = document.querySelector('.disable')
let clickDecimal = false;
let operator = '';
let dot_count = 1;

function operate() {
    switch(sign)
    {   case '.':
            if (input === '.' && dot_count === 1) {
            dot_count--;
            dot_button.setAttribute('disabled', true);
            }
            break;
        case '+':
            numA=String(Number(numA)+Number(numB))
			document.getElementById('numDisplay').innerText=numA;
			numB="";sign="";
			break;
		case '-':
			numA=String(Number(numA)-Number(numB))
			document.getElementById('numDisplay').innerText=numA;
			numB="";sign="";
			break;
		case '*':
			numA=String(Number(numA)*Number(numB))
			document.getElementById('numDisplay').innerText=numA;
			numB="";sign="";
			break;
		case '/':
			if(numB=='0')
			{
			document.getElementById('numDisplay').innerText="Invalid!";
			numA="";numB="";c="";
			break;
            }else{
				numA=String(Number(numA)/Number(numB))
				document.getElementById('numDisplay').innerText=numA;
				numB="";sign="";
				break;
		    }
	}
}

function perform(m) {
	if(m=="=") {
        if((numA!="")&(numB!="")) {
			operate();
		}
	}else if((m=="+")||(m=="-")||(m=="*")||(m=="/")) {
		if((numA!="")&&(numB==""))
		{
			sign=m;
			document.getElementById('numDisplay').innerText=numA+sign;
		}else if((numA!="")&&(numB!="")){
			operate();
			sign=m;
			document.getElementById('numDisplay').innerText=numA+sign;
		}
	}else {
		if(sign=="") {
			numA=numA+m;
			document.getElementById('numDisplay').innerText=numA;
		}else {
			numB=numB+m;
			document.getElementById('numDisplay').innerText=numA+sign+numB;
		}
	}
}

function specialButton(m) {
	switch(m) {
		case 'reset':
			location.reload();
			break;
		case 'bs':
		if((numA!="")&&(sign!="")) {
			if(numB=="") {
				sign="";
				document.getElementById('numDisplay').innerText=numA;
				}else {
					let bx= new Array();
					bx=numB.split("");
					bx.pop();
					numB=bx.join("");
					document.getElementById('numDisplay').innerText=numA+sign+numB;
				}
		}else if((numA!="")&&(sign=="")) {
			let ax=new Array();
			ax=numA.split("");
			ax.pop();
			numA=ax.join("");
			document.getElementById("numDisplay").innerText=numA;
			}
		break;
	}
}