
const createShedule=function()
{
    const createShedule1=document.getElementById("schedule");
    for(let i=0;i<20;i++)
    {
        const numberCell=document.createElement("div");
            numberCell.classList.add("system");
            const numbervalue=document.createElement("h3");
            numbervalue.innerText=Math.floor(Math.random()*76);
            numberCell.appendChild(numbervalue);
            createShedule1.appendChild(numberCell);
            numberCell.addEventListener("click", function(e)
            {
                e.preventDefault()
                numberCell.classList.add("cellselected");
                
            })
    }
    
    
   
    const deletes=document.createElement("div");
    deletes.innerHTML=`<button onclick="svuotatutto(event)">svuota scheda</button>`
    createShedule1.appendChild(deletes);
    const number=document.createElement("h3");
    number.innerText=Math.floor(Math.random()*76);
    createShedule1.appendChild(number);
    console.log(number);

    
    number.innerText=Math.floor(Math.random()*76);
    createShedule.appendChild(number);
}





const svuotatutto=function(e)
{
    e.preventDefault();
    const everytab=document.getElementsByClassName("system");
    const everytab1=Array.from(everytab);
    for (let i=0;i<everytab1.length;i++)
    {
        everytab1[i].classList.remove("cellselected");
    }
}

createShedule();
