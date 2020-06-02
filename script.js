$(document).ready(()=>{
    $('.card-number-form').mask('0000   0000   0000   0000');
    $('.exp-date-form').mask('00/00');
});
var app = new Vue({
el: '.container',
data: {
number: '',
name: '',
date: '',
cvv: ''
}
})