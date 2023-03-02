// console.log('hello world')
const loadFetch =()=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res =>res.json())
    .then(data => displayData(data.data))
}

const displayData =(data)=>{
 const mainContainer =document.getElementById('main-container')
 data.tools.forEach(singleAiTools => {
   console.log(singleAiTools)
  mainContainer.innerHTML += ` <div class="card">
  <img src="${singleAiTools.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Features</h5>
     <li>${singleAiTools.features[0]}</li>
     <li>${singleAiTools.features[1]}</li>
     <li>${singleAiTools.features[2]}</li>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
  </ul>`;




 }); 
}




loadFetch()