const wonders = document.getElementById('wonder');
const wonder = async()=>{
    try{
const response = await axios.get('https://www.world-wonders-api.org/v0/wonders/');
console.log(response.data);
response.data.forEach((element) => {
    let name = element.name;
    let location = element.location;
    let images = element.links.images;
    console.log(name);
    const ItemDiv = document.createElement('div');
    ItemDiv.className = 'element';
    ItemDiv.innerHTML=`<div><img src="${images[0]}"/></div><h3>${name}</h3><h4>${location}</h4>`;
    ItemDiv.addEventListener("click",()=>{
        window.location.href="details.html";

    })
    wonders.appendChild(ItemDiv);
});


    }
    catch(error){
        console.error('Error:',error);
    }
}
wonder();