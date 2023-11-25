
    const calculator=document.querySelector('#calculator')
    const numbers=document.querySelector('#numbers')
    const mind=document.querySelector('#mind')
    const operators=document.querySelector('#operators')
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
            gridItem.classList.add("number");
            gridItem.textContent=i*3+j
            
        }
        
    }

    }
    gridCaculatorNumbers();