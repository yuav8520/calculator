    const display=document.querySelector('#display');
    const calculator=document.querySelector('#calculator')
    const numbers=document.querySelector('#numbers')
    const mind=document.querySelector('#mind')
    const operators=document.querySelector('#operators')
    const oneTo9=document.querySelector('#oneTo9')
    let num1=0;
    let num2=0;
    const operatorsSigns = ['×','-','+','÷'];
    let allnumbers;
    let operator;
    const isOperator=function (operator){
      return  operatorsSigns.includes(operator)
    };
    const add = function(num1,num2) {
        return +num1+(+num2);
    };
    
    const subtract = function(num1,num2) {
        return +num1-(+num2);
    };
    const divide= function(num1,num2)
    {
        return +num1/(+num2);
    }
    const multiply= function(num1,num2)
    {
        return +num1*(+num2);
    }
    const calculatorOperation=function(num1,operator,num2)
    {if (operator=='+') return add(num1,num2);
    if (operator=='-') return subtract(num1,num2);
    if (operator=='÷') return divide(num1,num2);
    if (operator=='×') return multiply(num1,num2);
    }
    const gridCaculatorNumbers =function()//function to create number grid to calculator
    {for (let i = 0; i < 3; i++) {
        const column=document.createElement('div');
        oneTo9.append(column)
        column.classList.add("column")
        for (let j = 1; j <= 3; j++) {
            const gridItem=document.createElement('button');
            column.append(gridItem)
            gridItem.classList.add('number');
            gridItem.textContent=i+j*3-2
           gridItem.setAttribute('id',gridItem.textContent)
           //gridItem.addEventListener('click',()=>{
           //(isOperator(display.textContent))? num2=i*3+j:num1=i*3+j
          // display.textContent=display.textContent*10+i*3+j

         //  });
            
        }


     }
     const zero=document.createElement('button');
     numbers.append (zero);
     zero.classList.add('number');
     zero.textContent=0;
     zero.setAttribute('id','number0');
    }
    //needs to remove addeventlisnter in grid creatin and add number in here too
           document.addEventListener('click',(e)=>{
            const pressed=e.target.textContent;
         if  (isOperator(pressed))//if an operator is pressed 
         {  //if(operator==null)
            operator=pressed;
            display.textContent=pressed;
        }
         if(pressed=='=')//if = is pressed
            {display.textContent=calculatorOperation(num1,operator,num2)
           num1=display.textContent;
           num2=0
           operator=null;
         }
         if(+pressed>=0&&+pressed<10)//if a number is pressed
          {if(isOperator(operator)){

            if (num2>0) {
                num2=num2+pressed;
                display.textContent=num2;
            }
            else{
            num2=pressed;
            display.textContent=pressed;
          }
        }
          else{
            if(display.textContent>0){
                num1=num1+pressed;
                display.textContent=num1
            } 
            else{num1=pressed
          display.textContent=display.textContent+pressed;}
        }                 
          }
           if(pressed=='clear')
           {num1=0;
            num2=0;
            operator=null;
            display.textContent=null;
           }
        } );
    //function for on click late add in in gridcacnum
    
    gridCaculatorNumbers();
