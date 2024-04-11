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

const seeMoreBtn = document.querySelector('.see-more-btn');
const hiddenWorks = document.querySelectorAll('.work:nth-child(n+4)'); // Selects the works after the fourth one

// Initially show the first four works
const initialWorks = document.querySelectorAll('.work:nth-child(-n+3)');
initialWorks.forEach(work => {
    work.classList.add('show');
});

seeMoreBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Toggle a class to show/hide the additional works
    hiddenWorks.forEach(work => {
        work.classList.toggle('show');
    });

    // Change the text of the button based on the state
    if (seeMoreBtn.textContent === 'See More') {
        seeMoreBtn.textContent = 'See Less';
    } else {
        seeMoreBtn.textContent = 'See More';
    }
});
