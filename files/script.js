'use strict';

let  guess = document.querySelector('.guess');

let rendomNum = Math.trunc(Math.random()*20+1);

document.querySelector('.check').addEventListener('click',function(){

    console.log(rendomNum)
})