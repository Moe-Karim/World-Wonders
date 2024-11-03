const wonders = document.getElementById('wonder');
document.addEventListener("DOMContentLoaded",()=>{
    const params = new URLSearchParams(window.location.search);
    const index = parseInt(params.get('index'));
    displayed(index);
});
    const displayed = async(index)=>{
    try{
        const response = await axios.get('https://www.world-wonders-api.org/v0/wonders/');
        const picked = response.data[index];
        let images = picked.links.images;
        document.title=picked.name;
        const ItemDiv = document.createElement('div');
        ItemDiv.className='picked-wonder';
        let randome = 0;
        ItemDiv.innerHTML=`<h1>${picked.name}</h1>
                            <h3>${picked.location}</h3>
                            <p>${picked.summary}</p>
                            <span>Build year: ${picked.build_year}, Time period: ${picked.time_period}</span>
                            <h3>Visit: <a href="${picked.links.google_maps}" target= "_blanck"><i class="fa fa-map-marker"></i></a>
                            <a href="${picked.links.trip_advisor}" target= "_blanck"><i class="fa fa-tripadvisor"></i></a>
                            <a href="${picked.links.wiki}" target= "_blanck"><i class="fa fa-wikipedia-w"></i></a></h3>`;
        setInterval(() => {
            randome = (randome + 1) % images.length;
            document.getElementById('wonder-image').innerHTML=`<img src="${images[randome]}" id="wonder-image"/>`;
            }
        ,5000);
        wonders.appendChild(ItemDiv);

    }
    catch(error){
        console.error('Error:',error);
    }
}

