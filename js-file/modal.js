//<------- modal data setion------->
const loadModalFetch =(id)=>{
    const url2 =`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url2)
    .then( res => res.json())
    .then(data =>displayModal(data.data))

 }


const displayModal =(data)=>{
  console.log(data)
 const modalHeader = document.getElementById('modal-header');
  modalHeader.innerText =`${data.description}`;
   

// image section 
  const modalImagae = getElementByIds('img-part');
  modalImagae.innerHTML =` <img class="img-fluid rounded pb-4" src="${data.image_link[0]}" alt="">
   <h5>${data.input_output_examples[0].input}</h5>
   <p>${data.input_output_examples[0].output}</p>
  `;

//   price section 
  






//   integerSection
const integerSection = getElementByIds('integration-display');
const integration = data.integrations;
    integerSection.innerText ='';
for(const items of integration ){
   const li = document.createElement('li');
   li.innerText =`${items}`
   integerSection.appendChild(li)
}


// features Section
  const modalFeatures = getElementByIds('features');
  const featuresArray = data.features;
       modalFeatures.innerText ='';
  for(const [feature,value] of Object.entries(featuresArray)){
      const div = document.createElement('li')
      div.innerText =`${value.feature_name}`
      modalFeatures.appendChild(div)
  }

 };
 



 function getElementByIds(id){
    const field = document.getElementById(id);
    return field;
  }
 