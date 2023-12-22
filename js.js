//global variables
var Name=document.getElementById('name');
var url=document.getElementById('Url');
var list=[];
var namecheck=document.getElementById('x');
var urlcheck=document.getElementById('urlvalid');
var no=document.getElementById('nosign');
//global functions
//********* add new ******* */
if(localStorage.getItem('list')!==null){
    list =JSON.parse( localStorage.getItem('list') );
    display();

    
}
function addSite(){ 
if(nameValidation()===true &&urlValidation()===true){
 var mark={
 markName:Name.value,
 markUrl:Url.value,

 }
 ;
 list.push(mark);
 localStorage.setItem('list',JSON.stringify(list) );
 display();
 clr();   
 

}
 else{

    no.innerHTML=`<p class="text-warning"> oh oh oh got you now try again and enter a valid name and url</p>`
    
    
 }
 namecheck.innerHTML="";
    urlcheck.innerHTML="";

}
/***************display *************** */
function display(){
    var tr='';
    for(var i=0;i<list.length;i++)
    {
        tr+=`
        <tr>
        <td>
            ${i+1}
        </td>
        <td>
          ${list[i].markName} 
        </td>
       <td>
                   <button class="btn btn-outline-info">
                   <a href="${list[i].markUrl}" target="-blank">
                   <i class="fa-solid fa-up-right-from-square" ></i></button></a>
               </td>
        <td>
         
             
        <button class="btn btn-outline-danger"><i class="fa-regular fa-trash-can" onclick="del(${i})"></i></button>
               </td>
               
       </tr>
        `
    }
    document.getElementById('tableBody').innerHTML=tr;
    
}
/**************clear*************** */
function clr(){
   Name.value="";
   Url.value="";
   
}function del(index){
        
    list.splice(index,1);
    console.log(list);
    display()
    }
function nameValidation()
{
var nameregex=/^[A-Za-z]{3,10}/;
var namevalid=Name.value;
if(nameregex.test(namevalid)==true){
    namecheck.innerHTML=`
    <p class="text-success">
    now we can be friends 
    <i class="fa-regular fa-face-laugh-beam" style="color: #ffffff;"></i> 
    </p>
    `
    return true
}
else{
    namecheck.innerHTML=`
    <p class="text-danger"> Whoa there,  You better write your name right now or else <i class="fa-solid fa-skull-crossbones" style="color: #000000;"></i> ...just kidding
    <br/>
    , I'll give you another chance. <i class="fa-regular fa-face-laugh-beam" style="color: #ffffff;"></i> </p>    `

}

}
function urlValidation()
{
var urlregex=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
var urlvalid=url.value;
if(urlregex.test(urlvalid)==true){
    urlcheck.innerHTML=`
    <p class="text-success">
    now we are good
    <i class="fa-regular fa-face-laugh-beam" style="color: #ffffff;"></i> 
    </p>
    `
    return true
}
else{
    urlcheck.innerHTML=`
    <p class="text-danger"> Whoa, you need to write it write   ...just copy and paste it it's not that hard 
    <br/>
    , I'll give you another chance. <i class="fa-regular fa-face-laugh-beam" style="color: #ffffff;"></i> </p>    `

}

}