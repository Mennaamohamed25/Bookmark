//Inputs name
var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var addBtn = document.getElementById('submit');
//make array to add more inputs form customer
var websites = [];
var currentIndex =0;
//to make clear form






var inputs = document.getElementsByClassName('form-control')


if (JSON.parse(localStorage.getItem('websiteList'))!=null) 
{
    websites=JSON.parse(localStorage.getItem('websiteList')) ;
displayData();
}


//Event , What happen when someone press at submit key
addBtn.onclick = function(){
    //btn
if (addBtn.innerHTML == 'submit') {
    addWebsite();
}
else{
    updateWeb();
}

displayData();
clearForm();
};

//Make object in function and make push the array
function addWebsite(){
var website = {
    name:siteName.value,
    web:siteUrl.value,
};
websites.push(website);
localStorage.setItem('websiteList' ,JSON.stringify(websites) );
}
// convert from input to outputs in table
function displayData(){
var inbox = '';
for(var i=0 ; i<websites.length ; i++){
inbox+= `<tr>
<td><h2>${websites[i].name}</h2> </td>
<td> <a href="${websites[i].web}" target="_blank" class="btn btn-warning">Visit</a> </td>
<td><button class='btn btn-dark'onclick="getProduct(${i})" >update</button></td>
<td><button class='btn btn-danger'onclick="deleteProduct(${i})" >Delete</button></td>
</tr>`

}
document.getElementById('tableBody').innerHTML = inbox;
}
//Delete Function
function deleteProduct(i) {
    websites.splice(i,1);
    displayData()
    localStorage.setItem('websiteList' ,JSON.stringify(websites) );
}
//Clear Function ---> inputs
function clearForm(){
    for(var i=0 ; i<inputs.length ; i++)
    {
        inputs[i].value=''
    }
    }
   
    function getProduct(index){
        currentIndex=index;
       var currentWeb = websites[index]
       siteName.value=currentWeb.name;
       siteUrl.value=currentWeb.web;
       addBtn.innerHTML =('Update ')

    }
    function updateWeb(){
        var website = {
            name:siteName.value,
            web:siteUrl.value,
        };
        websites[currentIndex]=website;
        localStorage.setItem('websiteList' ,JSON.stringify(websites) );
        addBtn.innerHTML =('submit ')
    }