var a=123;
var b=0;


while(a>0){
	 var rem=a%10;
	 a=(a-rem)/10;
	 b=(b*10)+rem;
}
console.log(b);