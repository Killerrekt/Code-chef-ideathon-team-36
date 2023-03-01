const bod = document.querySelector('.d2'),
form = document.querySelectorAll('.form'),
Input = form[0].querySelector('Input[type = "submit"]');

function getdata(e){
    e.preventDefault();
    var formdata  = new FormData(form[0]);
    console.log(formdata.get('datteme'));
    if (formdata.get('first')=='' || formdata.get('last')=='' || formdata.get('regno')=='' || formdata.get('drname') =='' || formdata.get('datteme')==''){
        console.log('it worked !!!');
        alert('Please enter all the detail of the form before clicking submitting')
    }
    else {
        location.replace('/front.html')
        alert('Your response has been noted')
    }
}

document.addEventListener('DOMContentLoaded',function(){
    Input.addEventListener('click',getdata,false)
},false);