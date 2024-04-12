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

const scriptURL = 'https://script.google.com/macros/s/AKfycbzZ7LXgu69GZa1uxQ_FGwDl9p6UbTg8hLXsaL6P3Omt8wHMLXpF6SOZIzUeRkUt2kVz4w/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(data => {
    msg.innerHTML = "Message Sent Successfully!";
    form.reset(); 
    setTimeout(() => {
      msg.innerHTML = ''; 
    }, 5000);
  })
  .catch(error => {
    console.error('Error!', error.message);
    msg.innerHTML = "Error sending message. Please try again later.";
  });
})

const seeMoreBtn = document.querySelector('.see-more-btn');
const hiddenWorks = document.querySelectorAll('.work:nth-child(n+4)'); 
const initialWorks = document.querySelectorAll('.work:nth-child(-n+3)');
initialWorks.forEach(work => {
    work.classList.add('show');
});

seeMoreBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    hiddenWorks.forEach(work => {
        work.classList.toggle('show');
    });

    if (seeMoreBtn.textContent === 'See More') {
        seeMoreBtn.textContent = 'See Less';
    } else {
        seeMoreBtn.textContent = 'See More';
    }
});
