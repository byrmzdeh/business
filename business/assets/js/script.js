const ulmenu = document.querySelector('.ulmenu');
const btn = document.querySelector('.showbtn');
const menudiv = document.querySelector('.menu');
const nonebtn = document.querySelector('.nonebtn');





function showMenu() {
  nonebtn.style.display = 'block'
  btn.style.display = 'none';
  ulmenu.style.display = 'block';
  menudiv.style.height = '200px';
  menudiv.style.paddingTop = '50px'
  ulmenu.style.transition = '1s'
  menudiv.style.transition = '0.6s'
  homelink.setAttribute("href" , './home.html')

}

function noneMenu() {
  nonebtn.style.display = 'none';
  ulmenu.style.display = 'none';
  btn.style.display = 'block';
  menudiv.style.height = '30px';
  menudiv.style.paddingBottom = '50px'
}