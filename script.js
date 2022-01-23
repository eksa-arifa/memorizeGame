const cards = document.querySelectorAll('.card');


let kesatu,kedua;
let jeda = false;
let kebuka = 0;

function flip(e){
  let fliping = e.target;
  if (kesatu !== fliping && !jeda) {
    fliping.classList.add('flip');
    if (!kesatu) {
      return kesatu = fliping;
    }
    kedua = fliping;
    jeda = true;
    let image1 = kesatu.querySelector('img').src;
    let image2 = kedua.querySelector('img').src;
    
    nggongecek(image1, image2);
    
    
  }
}

function nggongecek(cek1, cek2){
  if (cek1 == cek2) {
    kebuka++;
    
    if (kebuka == 8) {
      setTimeout(function() {
        return kocok();
      }, 500);
    }
    
    kesatu.style.pointerEvents = 'none';
    kedua.style.pointerEvents = 'none';
    kesatu = kedua = "";
    return jeda = false;
  }
  
  setTimeout(function() {
    kesatu.classList.add('keder');
    kedua.classList.add('keder');
  }, 400);
  setTimeout(function() {
    kesatu.classList.remove('keder', 'flip');
    kedua.classList.remove('keder', 'flip');
    
    kesatu = kedua = "";
    
    jeda = false;
  }, 1200);
}

function kocok(){
  kebuka = 0;
  kesatu = kedua = "";
  
  let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
  arr.sort(()=>Math.random() > 0.5 ? 1 : -1);
  
  cards.forEach((card, index) => {
    card.style.pointerEvents = 'auto';
    card.classList.remove('flip');
    const gambar = card.querySelector('img');
    gambar.src = "img/img-"+arr[index]+".png";
    card.addEventListener('click', flip);
  });
}

kocok();