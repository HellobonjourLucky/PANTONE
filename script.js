
const title = document.querySelector('.title');
const products = document.querySelector('.products');
const gridContainter = document.querySelector('.grid-container');
const moneyRight = document.querySelector('.money_right');
const moneyLeft = document.querySelector('.money_left');

/*
0.my
1.euro:#add5a9/564 C
2.china: #9d5970/ 7432 C
3.USA: 858182/ 877 C
4.canada: aaa24f/618 C
5.mongol:675b7a/5275 C
6.japan: 6f6360/410 C
7.india: a5a3df/2705 C
8.cuba: 8c4b44/7587 C
9.laos: 8d7c74/409 C
10.costarica:e3cfc8/7611 C
11.swizerland : #345792/ 7685 C
12.nigeria: 927e91/ 7661 C
13.ukrani: c8c269/ 584 C
14.thailand: 9d6d71/ 4995 C
15.turkey:  6a7492/7667 C
16.southAfrica: 45557a/7686 C
17.egypt: 787165/404 C
*/

const hexColors = ['mycolor', 'add5a9', '9d5970', '858182', 'aaa24f', '675b7a', '6f6360', 'a5a3df','8c4b44', '8d7c74', 'e3cfc8', '345792', '927e91', 'c8c269', '9d6d71', '6a7492', '45557a', '787165'];

const pantoneColors = ['MYCOLOR', '564 C' ,'7432 C', '877 C', '618 C', '5275 C', '410 C', '2705 C', '7587 C', '409 C', '7611 C', '7685 C', '7661 C', '584 C', '4995 C', '7667 C', '7686 C', '404 C'];



let pantonesArray = [];
for(var i = 0 ; i < 18; i ++){
  const hexColor = hexColors[i];
  const pantoneColor = pantoneColors[i];
  let html = `
  <a href="#">
  <li class="grid-item ${i}">
    <img src="pantone/${i}.png"/>
    <p class="pantone_name">PANTONE ${pantoneColor} </br> #${hexColor}</p>
  </li></a>`;
  gridContainter.innerHTML += html;
  pantonesArray = Array.from(gridContainter.children);
}


// console.log(pantonesArray[1].innerHTML);
pantonesArray.forEach((pantone,index) => {
  pantone.addEventListener('mouseover',function(){
    const hexColor = hexColors[index];
    const pantoneColor = pantoneColors[index];
    const pantoneImg = pantone.querySelector('img');
    pantoneImg.setAttribute('src',`images/${index}.png`)
  });

  pantone.addEventListener('mouseleave',function(){
    const hexColor = hexColors[index];
    const pantoneColor = pantoneColors[index];
    const pantoneImg = pantone.querySelector('img');
    pantoneImg.setAttribute('src',`pantone/${index}.png`)
  });
})


pantonesArray.forEach((pantone,index) => {
  pantone.addEventListener('click',function(e){
    e.preventDefault();
    title.classList.toggle('blur');
    products.classList.toggle('blur');
    // console.log(e.target.parentElement.classList[1]);
    const num = Number(e.target.parentElement.classList[1]);
    if(num == 0){
      console.log(pantonesArray[num]);
      // pantonesArray[num].innerHTML = `
      // <a class="rm-mag-embed" href="https://readymag.com/2282279" data-uri="2282279"  data-width="responsive"  target="_blank">
      // <li class="grid-item 0">
      //   <img src="pantone/0.png"/>
      //   <p class="pantone_name">PANTONE $MYCOLOR </br> #mycolor</p>
      // </li>
      // </a>`
      // pantonesArray[num].setAttribute('src','mycolor.html');
      window.location.href = "https://readymag.com/2282279";
    }else if(num == 1 || num == 2 || num == 6 || num == 7 || num == 8 ||num == 12 || num == 13 || num == 14){
      // console.log("right");
      moneyRight.classList.toggle('d-none');
      const moneyImgChange = moneyRight.querySelector('img');
      moneyImgChange.setAttribute('src',`main_imgs/${num}.png`);
    }else if(num == 3 || num == 4 || num == 5 || num == 9 || num == 10 || num == 11 ||num == 15 || num == 16 || num == 17){
      // console.log("left");
      moneyLeft.classList.toggle('d-none');
      const moneyImgChange = moneyLeft.querySelector('img');
      moneyImgChange.setAttribute('src',`main_imgs/${num}.png`);
    }else{
      moneyLeft.classList.add('d-none');
      moneyRight.classList.add('d-none');
    }
  });
});

moneyRight.addEventListener('click', function(e){
  // console.log(e.target.parentElement);
  if(e.target.classList.contains('money_img_right')){
    e.target.parentElement.classList.add('d-none');
    title.classList.remove('blur');
    products.classList.remove('blur');
  }
});
moneyLeft.addEventListener('click', function(e){
  // console.log(e.target.parentElement);
  if(e.target.classList.contains('money_img_left')){
    e.target.parentElement.classList.add('d-none');
    title.classList.remove('blur');
    products.classList.remove('blur');
  }
})



// // ask section
// mainImage.addEventListener('mouseover',() => {
//     ask.classList.remove('d-none');
// });
// mainImage.addEventListener('mouseout',() => {
//     ask.classList.add('d-none');
// });
