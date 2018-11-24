
// Select teh input field
const searchBar = document.forms['search-box'].querySelector('#search');
const gallery = document.querySelector('.gallery');
// add even listener to the input field

searchBar.addEventListener('keyup', function(event){
  // add the input value to a variable
  const inputs = event.target.value.toLowerCase();
  const pics = gallery.getElementsByTagName('a');
  Array.from(pics).forEach((pic) =>{
     const cap= pic.dataset.title.toLocaleLowerCase();
     if(cap.toLowerCase().indexOf(event.target.value.toLocaleLowerCase())!= -1){
       pic.style.display='block';
     }else{
       pic.style.display='none';
     }
  })

});

searchBar.addEventListener("blur", function(event){
  event.target.value="";

})
