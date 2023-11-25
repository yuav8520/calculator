    const display=document.querySelector('#display');
    const calculator=document.querySelector('#calculator')
    const numbers=document.querySelector('#numbers')
    const mind=document.querySelector('#mind')
    const operators=document.querySelector('#operators')
    let num1=0;
    let num2=0;
    const operatorsSigns = ['×','-','+','÷'];
    let allnumbers;
    let operator;
    const isOperator=function (operator){
      return  operatorsSigns.includes(operator)
    };
    const add = function(num1,num2) {
        return num1+num2;
    };
    
    const subtract = function(num1,num2) {
        return num1-num2;
    };
    const divide= function(num1,num2)
    {
        return num1/num2;
    }
    const multiply= function(num1,num2)
    {
        return num1*num2;
    }
    const calculatorOperation=function(num1,operator,num2)
    {if (operator=='+') add(num1,num2);
    if (operator=='-') subtract(num1,num2);
    if (operator=='*') divide(num1,num2);
    if (operator=='/') multiply(num1,num2);
    }
    const gridCaculatorNumbers =function()//function to create number grid to calculator
    {for (let i = 0; i < 3; i++) {
        const column=document.createElement('div');
        numbers.append(column)
        column.classList.add("column")
        for (let j = 1; j <= 3; j++) {
            const gridItem=document.createElement('button');
            column.append(gridItem)
            gridItem.classList.add('number');
            gridItem.textContent=i*3+j
           gridItem.setAttribute('id',gridItem.textContent)
           //gridItem.addEventListener('click',()=>{
           //(isOperator(display.textContent))? num2=i*3+j:num1=i*3+j
          // display.textContent=display.textContent*10+i*3+j

         //  });
            
        }
     }

    }
    //needs to remove addeventlisnter in grid creatin and add number in here too
           document.addEventListener('click',(e)=>{
            const pressed=e.target.textContent;
         if  (isOperator(pressed)) 
         {operator=pressed;
            display.textContent=pressed;
        }
         if(pressed=='=')
            {display.textContent=calculatorOperation(num1,operator,num2)
           operator='=';
         }
         if(+pressed>=0&&+pressed<=9)
          {(isOperator(display.textContent))? num2=pressed:num1=pressed
          display.textContent=display.textContent+pressed;
                    
          }
             
           console.log(pressed);
           console.log(isOperator(pressed));
           //console.log(num1+' '+num2);
           //console.log(isOperator(display.textContent))
          // console.log(+pressed>=0&&+pressed<=9);
           
        } );
    //function for on click late add in in gridcacnum
    
    gridCaculatorNumbers();
