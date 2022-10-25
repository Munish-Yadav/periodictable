const elements=document.querySelectorAll(".element");

function showeconfig(element){
  const curr_element=document.querySelector(`.${element.currentTarget.id}`);
  curr_element.style.display="block";
  element.currentTarget.style.border="4px solid black";
    

}
function removeeconfig(element){
  
  const curr_ele=document.querySelector(`.${element.currentTarget.id}`);
  curr_ele.style.display="none";
  element.currentTarget.style.border="none";

}

elements.forEach(element=>element.addEventListener("mouseenter",showeconfig));
elements.forEach(element=>element.addEventListener("mouseleave",removeeconfig))


const series=document.querySelectorAll(".elements");

const states=document.querySelectorAll(".state");

function showseries(e){
  
for(element of elements)
{
  if(element.classList[2]!=e.currentTarget.classList[0])
  {
    element.classList.add("changestyle");
  }
}  
}
    

function stateshow(e){ 
  for(element of elements)
{
  if(element.classList[1]!=e.currentTarget.classList[0])
  {
    element.classList.add("changestyle");
  }
}  
   


}
series.forEach(item=> item.addEventListener("mouseenter",showseries))  ;
states.forEach(state=>state.addEventListener("mouseenter",stateshow))

function removeshowseries(e){
  for(element of elements)
  {
    if(element.classList[2]!=e.currentTarget.classList[0])
    {
      element.classList.remove("changestyle");
    }
  }   
  
  
}
function removeshowstate(e){
  for(element of elements)
{
  if(element.classList[1]!=e.currentTarget.classList[0])
  {
    element.classList.remove("changestyle");
  }
}
}


    
series.forEach(item=>item.addEventListener("mouseleave",removeshowseries));
states.forEach(state=>state.addEventListener("mouseleave",removeshowstate));



const grps=document.querySelectorAll(".grp");


function showgrp(e){  
  
  
  const grp=document.querySelectorAll(`.${e.currentTarget.classList[0]}`);
  grp[1].style.scale="1.1";
   
}

function removegrp(e){

  const grp=document.querySelectorAll(`.${e.currentTarget.classList[0]}`);
  grp[1].style.scale="1";
  
}
grps.forEach(btn=>btn.addEventListener("mouseenter",showgrp))


grps.forEach(btn=>btn.addEventListener("mouseleave",removegrp))




