let a="",b="";
let sign="";

function operate() {
    switch(sign)
    {
        case '+':
            a=String(Number(a)+Number(b))
			document.getElementById('numDisplay').innerHTML=a;
			b="";sign="";
			break;
		case '-':
			a=String(Number(a)-Number(b))
			document.getElementById('numDisplay').innerHTML=a;
			b="";sign="";
			break;
		case '*':
			a=String(Number(a)*Number(b))
			document.getElementById('numDisplay').innerHTML=a;
			b="";sign="";
			break;
		case '/':
			if(b=='0')
			{
			document.getElementById('numDisplay').innerHTML="Invalid!";
			a="";b="";c="";
			break;
            }else{
				a=String(Number(a)/Number(b))
				document.getElementById('numDisplay').innerHTML=a;
				b="";sign="";
				break;
		    }
	}
}

function perform(m) {
	if(m=="=") {
        if((a!="")&(b!="")) {
			operate();
		}
	} else if((m=="+")||(m=="-")||(m=="*")||(m=="/")) {
		if((a!="")&&(b==""))
		{
			sign=m;
			document.getElementById('numDisplay').innerHTML=a+sign;
		} else if((a!="")&&(b!="")){
			operate();
			sign=m;
			document.getElementById('numDisplay').innerHTML=a+sign;
		}
	} else {
		if(sign=="") {
			a=a+m;
			document.getElementById('numDisplay').innerHTML=a;
		} else {
			b=b+m;
			document.getElementById('numDisplay').innerHTML=a+sign+b;
		}
	}
}

function sperform(m) {
	switch(m) {
		case 'reset':
			location.reload();
			break;
		case 'bs':
			if((a!="")&&(sign!="")) {
				if(b=="") {
					sign="";
					document.getElementById('numDisplay').innerHTML=a;
				} else {
					var bx= new Array();
					bx=b.split("");
					bx.pop();
					b=bx.join("");
					document.getElementById('numDisplay').innerHTML=a+sign+b;
				}
			} else if((a!="")&&(sign=="")) {
				var ax=new Array();
				ax=a.split("");
				ax.pop();
				a=ax.join("");
				document.getElementById("numDisplay").innerHTML=a;
			}
			break;
	}
}