const loadFetch2 =(limit)=>{
    const url = 'https://openapi.programming-hero.com/api/ai/tools'
     fetch(url)
    .then(res => res.json())
    .then(data => displayData2(data.data.tools,limit))
}

// <------logic of short by date buttton------>
const displayData2 =(data,limit)=>{
 const shortByDate =(a,b)=>{
      const dateA = new Date(a.published_in);
      const dateB = new Date(b.published_in);
      if(dateA > dateB){
         return 1;
      }else if( dateA < dateB){
         return -1;
      }
      else{
         return 0;
      }
     }
     
     document.getElementById('short-b-date-btn').addEventListener('click',function(){
         const dataAray = (data.sort(shortByDate))
         displayData(dataAray,limit)
         
     })
}


loadFetch2('1');
