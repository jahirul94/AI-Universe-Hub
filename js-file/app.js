
const loadFetch =(limit)=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
    fetch(url)
    .then(res =>res.json())
    .then(data => displayData(data.data.tools , limit))
}
const displayData =(data , limit )=>{
 const showAllBtn = document.getElementById('showall-btn');
 if(data.length > 6 && limit){
   data = data.slice(0 , 6)
   showAllBtn.classList.remove('d-none')
 }else{
    showAllBtn.classList.add('d-none')
 }
 const mainContainer = document.getElementById('main-container')
 mainContainer.classList.add('main-container1');
 mainContainer.innerHTML ='';
 data.forEach(singleAiTools => {
  mainContainer.innerHTML += ` <div class="card">
  <img src="${singleAiTools.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Features</h5>
       <ol class ="ps-4"> 
        <li>${singleAiTools.features[0]}</li>
        <li>${singleAiTools.features[1]}</li>
        <li>${singleAiTools.features[2] != null ? singleAiTools.features[2] : "More Features coming...."}</li>
       </ol>
  </div>
   <div class="list-group ps-3 py-2">
      <h5 class="card-title">${singleAiTools.name}</h5>
         <div class ="d-flex justify-content-between">
            <div class="d-flex align-items-center">
                <img  height="18px" width ="18px" src="icons/calendar.png" alt="">
                <h6 class ="ps-2 pt-2">${singleAiTools.published_in}</h6>
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



//<------spinner section--------->
const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if(isLoading){
     loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}

//<------- show all btn section --------->
document.getElementById('show-all-btn').addEventListener('click',function(){
   loadFetch();
   loadFetch2()

})


loadFetch('1');
