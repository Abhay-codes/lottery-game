let guessBtn=document.getElementById("guess-btn");
let inp =document.getElementById("inp");

score =10;
let scoreCount=document.getElementById("chances-left");
let again =document.getElementById("again");
let againBtn = document.getElementById("again-btn");
let body = document.getElementsByTagName("body");



c=0;
arr=[]
for(let i =1;i<=11;i++){
   if (i===inp.value){
      continue }
   arr.push(i)
   c+=1 
   if(c===9){
      break
   }


}
arr.push(inp.value)
set1 = new Set();
guessBtn.addEventListener("click",function(){

      if (score>0){
         score-=1;


         rand=Math.floor(Math.random()*10)
         while(set1.has(rand)){
               rand=Math.floor(Math.random()*10)


        }
        if (arr[rand]===x){
            document.getElementById("result")
                .innerHTML +="WIN\n"
        }
        else{
            document.getElementById("result")
            .innerHTML +="LOOSE\n"
        }
        set1.add(rand)


    }
      






   })

    /*if (score>0){
         score-=1;
         scoreCount.innerText="chances left = "+ score;
         currentValue.innerText=inp.value;
    
         
        
            
             
    }
    if (score===0){
    again.style.display="block";
    input.style.display="none";
    guessBtn.style.display="none";
    
    
    }

})
againBtn.addEventListener("click", function(){
     score = 10;
     scoreCount.innerText="chances left = "+ score;
     currentValue.innerText="";
     
   
     
     again.style.display="none";
     randomValue=Math.floor(Math.random()*100)+1;
     
        
     
})*/