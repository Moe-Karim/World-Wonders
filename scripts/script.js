const wonders = document.getElementById('wondered');
const wonder = async()=>{
    try{
const response = await axios.get('https://www.world-wonders-api.org/v0/wonders/');
console.log(response.data);
response.data.forEach((element,index) => {
    let name = element.name;
    let location = element.location;
    let images = element.links.images;
    const ItemDiv = document.createElement('div');
    console.log(name);
    ItemDiv.className = 'element';
    ItemDiv.innerHTML=`<div><img src="${images[0]}"/></div><h3>${name}</h3><h4>${location}</h4>`;
    ItemDiv.addEventListener("click",()=>{
        window.location.href=`details.html?index=${index}`;

    })
    wonders.appendChild(ItemDiv);
});


    }
    catch(error){
        console.error('Error:',error);
    }
}
wonder();