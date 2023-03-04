//<------- modal data setion------->
const loadModalFetch =(id)=>{
    const url2 =`https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url2)
    .then( res => res.json())
    .then(data =>displayModal(data.data))

 }


const displayModal =(data)=>{
  console.log(data);
 const modalHeader = document.getElementById('modal-header');
  modalHeader.innerText =`${data.description}`;
   

//<-------- image section ---------->
  const modalImagae = getElementByIds('img-part');
  modalImagae.innerHTML =`
  <img class="img-fluid rounded pb-4" src="${data.image_link[0]}" alt="">
   <h5>${data.input_output_examples[0].input}</h5>
   <p>${data.input_output_examples[0].output}</p>
  `;

//<---------price section basic----------->
const basics = getElementByIds('basic') ;
const basicPrice = data.pricing[0];
  const div = document.createElement('div');
  basics.innerText ='';
  if(basicPrice.price === '0' || basicPrice.price === 'No cost'){
        div.innerText = `Free Of Cost , Basic`;
  }
  else{
        div.innerText = `${basicPrice.price},
        ${basicPrice.plan}`
    }

    basics.appendChild(div)

// <-------- pro ------->
const pro = getElementByIds('pro') ;
const proPrice = data.pricing[1];
  const div1 = document.createElement('div');
  pro.innerText ='';
  if(proPrice.price === '0' || proPrice.price === 'No cost'){
        div1.innerText = 'Free Of Cost , Pro';
  }
  else{
        div1.innerText = `${proPrice.price},
        ${proPrice.plan}`
    }

    pro.appendChild(div1)

//<--------------- enterprice--------->
const enterprice = getElementByIds('enterprice') ;
const enterpricePrice = data.pricing[2];
  const div2 = document.createElement('div');
  enterprice.innerText ='';
  if(enterpricePrice.price === '0' || enterpricePrice.price === 'No cost'){
        div2.innerText = 'Free Of Cost';
  }
  else{
        div2.innerText = `${enterpricePrice.price},
        ${enterpricePrice.plan}`
    }

    enterprice.appendChild(div2)
 
 
//<--------- accuracy button ----------->
const accuracyBtn = getElementByIds('accuaray-btn');
const btnDetails = data.accuracy.score*100;
accuracyBtn.innerText ='';
const div4 = document.createElement('div')
if(btnDetails > 0){
    div4.innerText =`${btnDetails +'% Accuracy'}`
    accuracyBtn.classList.remove('d-none')
}
else{
    accuracyBtn.classList.add('d-none')
};
accuracyBtn.appendChild(div4)
 





//<--------integration--------->
const integerSection = getElementByIds('integration-display');
const integration = data.integrations;
    integerSection.innerText ='';
for(const items of integration ){
  const li = document.createElement('li');
  li.innerText =`${items}`
  integerSection.appendChild(li)
}


//<------features Section----->
  const modalFeatures = getElementByIds('features');
  const featuresArray = data.features;
       modalFeatures.innerText ='';
  for(const [feature,value] of Object.entries(featuresArray)){
      const div = document.createElement('li')
      div.innerText =`${value.feature_name}`;
      modalFeatures.appendChild(div)
  }

 };
 


// <----- function for get element --->
 function getElementByIds(id){
    const field = document.getElementById(id);
    return field;
  };
  
 