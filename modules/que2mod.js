exports.factorial=(num)=>{
    var num=parseInt(num);
    var fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact;
}
exports.myprime=(num)=>{
    var num=parseInt(num);
    var count=0
    for(let i=2;i<num/2;i++){
        if(num%i!==0){
            count +=1;
        }
        if(count>1)
        {return "is not a prime"}
        else if(count==0){
            return "is a prime"
        }
    }
        
   

}
exports.printable=(num)=>{
var num=parseInt(num);
const ans=0;
for(let i=1;i<=10;i++){
    ans=num*i;
    // return ("<h1>"+num+" * "+(+i)+" = "+ans+"</h1>");
   return ans+=ans;
}
}