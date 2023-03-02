
const loadFetch =()=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res =>res.json())
    .then(data => displayData(data.data.tools))
}

const displayData =( data)=>{
//  const showAllBtn = document.getElementById('showall-btn');
 const mainContainer = document.getElementById('main-container')
 mainContainer.classList.add('main-container');
 const modalBody =document.getElementById('modal-body-text')
 data.forEach(singleAiTools => {
    // console.log(singleAiTools)
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
         <div class ="d-flex justify-content-between">
            <div class="d-flex align-items-center">
                <img height="18px" width ="18px" src="icons/calendar.png" alt="">
                <h6 class ="ps-2">${singleAiTools.published_in}</h6>
            </div>
            <div>
                <img onclick ="loadModalFetch('${singleAiTools.id}')" class ="me-2"  data-bs-toggle="modal" data-bs-target="#exampleModal"  height ="25px" width ="25px" src="icons/001-right-arrow.png" alt="">
            </div>
        </div>   
   </div>
 
  `;

  toggleSpinner(false)
 }); 
}

// modal data 
 const loadModalFetch =(id)=>{
    const url2 =`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url2)
    .then( res => res.json())
    .then(data =>displayModal(data.data))

 }

 const displayModal =(data)=>{
    console.log(data)
  const modalContainer =document.getElementById('modal-body-text');
   
  modalContainer.innerHTML =`
<div class ="d-flex">
   <div class ="p-4">
        <div>
           <div>
             <h5>${data.description}</h5>
           </div>
           <div class ="d-flex">
                <p">${data.pricing[0].price}</p>
                <p>${data.pricing[1].price}</p>
                <p>${data.pricing[2].price}</p>
             </div>
        </div>

     <div class ="d-flex">
        <div>
            <h3>Features</h3>
            <li>${data.features[1].feature_name}</li>
            <li>${data.features[2].feature_name}</li>
            <li>${data.features[3].feature_name}</li>
             
         </div>
         <div>
           <h3>Integrations</h3>
           <li>${data.integrations[0]}</li>
           <li>${data.integrations[1]}</li>
           <li>${data.integrations[2]}</li>
             
        </div>
      </div>
    </div>

  <div class ="p-4">
        <div>
           <img class ="img-fluid" src="${data.image_link[0]}" alt="...">
        </div>
         <div>
           <h3>${data.input_output_examples[0].input}</h3>
          <p>${data.input_output_examples[0].output}</p>
        </div>
     <div>
   </div>
        
 
  </div> 
 </div>  


 <div></div>
 
  
  `
 }










// sppiner section
const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
     loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}