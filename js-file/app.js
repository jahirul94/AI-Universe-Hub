// console.log('hello world')
const loadFetch =()=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res =>res.json())
    .then(data => displayData(data.data))
}

const displayData =(data)=>{
 const mainContainer =document.getElementById('main-container')
 mainContainer.classList.add('main-comtainer')
 data.tools.forEach(singleAiTools => {
   console.log(singleAiTools)
  mainContainer.innerHTML += ` <div class="card">
  <img src="${singleAiTools.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Features</h5>
       <ol class ="ps-4"> 
        <li>${singleAiTools.features[0]}</li>
        <li>${singleAiTools.features[1]}</li>
        <li>${singleAiTools.features[2]}</li>
       </ol>
  </div>
   <div class="list-group ps-3 py-2">
      <h5 class="card-title">${singleAiTools.name}</h5>
       <div class="d-flex">
          <img height="18px" width ="18px" src="icons/calendar.png" alt="">
          <h6 class ="ps-2">${singleAiTools.published_in}</h6>
       </div>
   </div>   
  
  
  `;




 }); 
}

const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
     loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}