var a=123;
var b=0;


while(a>0){
	 var rem=a%10;
	 a=(a-rem)/10;
	 b=(b*10)+rem;
}
console.log(b);

2.part 2



var a=4561;
	var c=0;
	var z=0;
	
	
	while(a!=0){
		
		var b=a%10;
		a=(a-b)/10;
		if(b%2==0){
			
			c=c+b;
		}
	}
	
	console.log(c);
