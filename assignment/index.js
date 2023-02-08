
const headerBar = document.getElementById('toggle_my_header'); 
const searchBar = document.querySelector('.search_bar_input');
const body = document.body;
let homeContainer = document.querySelector('.center_container');

const seeMoreBtn = document.getElementById('see_more_center_responsive');
const favoriteContainer = document.getElementById('responsive_favoris');
const shawProfileBtn = document.querySelector('.me');
const btnMessageArea = document.querySelector('#btn_toggle_message_box');
const messageArea = document.querySelector('.sms_container');
let blurEl = document.createElement('span');

const profilesArray = [
    {
      id: 1,
      photoProfile: "./css/images/profil15.jpg",
      userName: "Rafael",
      job : "Engineer mechanical",
      img: "https://picsum.photos/id/237/300/200",
      day: "3j",
      text: "Nourrissez votre envie de voyager avec ces citations de voyage inspirantes de voyageurs célèbres ainsi que de belles images que vous pouvez partager.",
    },
    {
      id: 2,
      photoProfile: "./css/images/profil12.jpg",
      userName: "Eric malin",
      job : "Engineer Electrical",
      img: "https://picsum.photos/id/27/300/200",
      day: "3J",
      text: " Voyager n'est pas toujours joli, pas toujours confortable. Parfois, il te fait mal, il te brise même le cœur. Mais ça va... Le voyage te change, il doit te changer. Il laisse des traces sur ta mémoire, sur ta conscience, dans ton cœur, et sur ton corps. Tu prends quelque chose avec toi. Espérons que tu laisses quelque chose de bon derrière.",
    },
  ];

try {
  seeMoreBtn.addEventListener('click', ()=>{
    console.log("clicked")
    favoriteContainer.classList.toggle('shaw_favorite_container')
    seeMoreBtn.classList.toggle('shaw_favorite_container')
  })

} catch (error) {
  
}
   

body.appendChild(blurEl);

searchBar.addEventListener('focus', ()=>{
   blurEl.classList.add('blur_element');
   searchBar.classList.add('input_on_focus');

})
searchBar.addEventListener('blur', ()=>{

   blurEl.classList.remove('blur_element');
   searchBar.classList.remove('input_on_focus');
})

window.addEventListener('scroll', ()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

   if ( (scrollHeight - (scrollTop + clientHeight) ) <= 20 ){
    

    addProfiles(2);

   }
   try{
      if ( scrollTop > 400){
      headerBar.classList.add('toggle_menu_come');
    }
    else{
     
      headerBar.classList.remove('toggle_menu_come');
    }
   }
   catch (error) {
    
    }
    
});

const addProfiles = idx =>{
    for(let i = 0; i < idx; i++){
    
        displayProfiles()
    }
}



function displayProfiles(){
    let profiles = profilesArray.map(items =>{
  
      return `<div class="post third_post">
        <div class="profil_name_job">
            <img class="post_photo_profil" src="${profilesArray[getRandomNumber()].photoProfile}" alt="#">
            <div class="name_and_job"> 
                <h5>${profilesArray[getRandomNumber()].userName}</h4>
                <p>${profilesArray[getRandomNumber()].job}</p>
                <span>${profilesArray[getRandomNumber()].day} &nbsp;. <i class="fa-solid fa-earth-americas"></i></span>
            </div>
        </div>
        <p class="post_text"> ${profilesArray[getRandomNumber()].text}</p>
        <div class="publication">
            <img src="${profilesArray[getRandomNumber()].img}" alt="">
        </div>
        </div>
        <div class="like_share">
              <p><i class="fa-solid fa-thumbs-up"></i><span>J'aime</span></p>
              <p><i class="fa-solid fa-comment"></i><span>Commenter</span></p>
              <p><i class="fa-solid fa-share"></i><span>Partager</span></p>
              <p><i class="fa-solid fa-paper-plane"></i><span>Envoyer</span></p>
        </div>`
  
    })
    profiles = profiles.join('');
    homeContainer.innerHTML = profiles;
    
}
  
function getRandomNumber() {
    return Math.floor(Math.random() * 12);
  }

const dynamicSearch = () => {

    const valueSearch = document.getElementById("search_message").value.toUpperCase();
    const boxItems = document.querySelectorAll(".message_profil_item");
  
    const title = document.getElementsByClassName("name_pro");
  
    for (let i = 0; i < title.length; i++) {
      let match = boxItems[i].getElementsByClassName("name_pro")[0];
  
      if (match) {
        let textValue = match.textContent;
        if (textValue.toUpperCase().indexOf(valueSearch) > -1) {
          boxItems[i].style.display = "";
        } else {
          boxItems[i].style.display = "none";
        }
      }
    }
  };
  shawProfileBtn.addEventListener('click', ()=>{
    // console.log("clicked")
    shawProfileBtn.classList.toggle('shaw_profile')
  })
  btnMessageArea.addEventListener('click', ()=>{
    console.log("clicked")
    btnMessageArea.classList.toggle('switch_btn_icon')
    messageArea.classList.toggle('shaw_message_container')
  })










