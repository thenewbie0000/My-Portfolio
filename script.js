let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
let sidemenu = document.getElementById("sidemenu");

function openTab(tabName){
  for(tablink of tablinks){
    tablink.classList.remove("active-link")
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

function openMenu(){
  sidemenu.style.right = "0";
}

function closeMenu(){
  sidemenu.style.right = "-50%";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby_ZD_M65f5pvYnSdZqZuXPBHfv6viAv5J7pWU84_gNwFXPw9jbswUAbzQvGQ72ruYfug/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message Sent Successfully!"
      form.reset();
      setTimeout(()=>{msg.innerHTML = ''}, 5000);
    })
    .catch(error => console.error('Error!', error.message))
})


