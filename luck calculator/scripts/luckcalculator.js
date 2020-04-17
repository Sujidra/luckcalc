let b1=document.querySelector("#b1");
let b2=document.querySelector("#b2");
let b3=document.querySelector("#b3");
let n=document.querySelector("#number");
let attemps=document.querySelector(`#attemp`)
let crct=document.querySelector(`#correct`)
let wrng=document.querySelector(`#wrong`)
let result=document.querySelector("#result")
class Luckcalc{
    constructor(){
        this.attemps=0;
        this.correct=0;
        this.wrong=0;
        this.b1=10;
        this.b2=20;
        this.b3=30
        this.number=0;
        this.options=[];
    }
    createnumber(){
        
        this.number=Math.floor(Math.random()*99)+1;
        this.options.push(this.number);
        for(let i=1;i<3;i++){
            let num2=Math.floor(Math.random()*99)+1;
            this.options.push(num2);
        }
        this.show();
    }
        
    show(){
        this.createDom(attemps,`Attemps:${this.attemps}/10`)
        this.createDom(crct,`Correct Attemps:${this.correct}`)
        this.createDom(wrng,`Wrong Attemps:${this.wrong}`)
        this.createDomtime(b1,"?")
        this.createDomtime(b2,"?")
        this.createDomtime(b3,"?")
        this.createDomtime(n,`${this.number}`)
        }
    

    createDom(elementid,content){
        let tempvar=document.createElement("p");
        elementid.innerHTML=" ";
        tempvar.textContent=content;
        elementid.appendChild(tempvar)
    }
    createDomtime(elementid,content)
    {
        let tempvar=document.createElement("p");
        setTimeout(function(){ elementid.innerHTML=" "},2000);
        tempvar.textContent=content;
        setTimeout(function(){ elementid.appendChild(tempvar)},2000);
    }

    calculate(a){
        let crctbut;
        if(this.number==this.b1){
            crctbut = "b1";
        }else if(this.number==this.b2)
        {
            crctbut = "b2"
        }else{
            crctbut = "b3"
        }
        console.log(a);
        console.log(crctbut);
        if(a===crctbut){
            this.correct++;
            console.log("correct"+this.correct)
        }else{
            this.wrong++;
            console.log("wrong"+this.wrong)
        }
        this.attemps++;
    }
    showbutton(){
        
        for(let i=1;i<4;i++){
            let b1=document.createElement("p");
            document.querySelector(`#b${i}`).innerHTML=" ";
            let a=Math.floor(Math.random()*this.options.length);
            b1.textContent=this.options[a];
            document.querySelector(`#b${i}`).appendChild(b1)
            this.options.splice(a,1);
        }
        this.b1=b1.textContent;
        this.b2=b2.textContent;
        this.b3=b3.textContent;
        
    }
    result(correct){
        attemps.innerHTML=" ";
        document.querySelector(`#right-content`).innerHTML=" ";
        b1.innerHTML=" "
        b2.innerHTML=" "
        b3.innerHTML=" "
        n.innerHTML=" "
        b1.style.display="none"
        b2.style.display="none"
        b3.style.display="none"
        result.style.display="block";
        n.style.display="none"
       if(correct<=3){
        this.number="So Sad!! u have Bad luck today"
        result.style.color="brown"
       }else if(correct<=6){
           this.number="WoW!!! U have Good Luck today";
           result.style.color="green"
        }else{
            this.number="Great!!! U have Excellent luck today";
            result.style.color="green"
        }
        let num=document.createElement("p");
        result.innerHTML=" "
        num.textContent=`${this.number}`;
        result.appendChild(num)
    }
    processsteps(id){   
        this.showbutton()
        this.calculate(id)
        if(this.attemps<10){
            this.createnumber()
        }else if(this.attemps === 10){
            this.show();
            setTimeout(this.result,2000,this.correct)
        }
        
    }
    
    
}


const luck=new Luckcalc();
luck.createnumber();
luck.createDom(n,luck.number);

document.querySelector("#b1").addEventListener("click",function(e){
    luck.processsteps("b1")
})
document.querySelector("#b2").addEventListener("click",function(e){
    luck.processsteps("b2")
})
document.querySelector("#b3").addEventListener("click",function(e){
    luck.processsteps("b2")
})