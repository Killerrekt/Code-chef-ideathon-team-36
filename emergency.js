const bod = document.querySelector('.d1'),
form = document.querySelectorAll('.form'),
Input = form[0].querySelector('Input[type = "submit"]');

function getdata(e){
    e.preventDefault();
    var formdata  = new FormData(form[0]);
    if (formdata.get('regno')=='') {
        alert('Please enter your registration number')      
    }
    else {
        location.replace('/front.html')
        alert('Your response has been noted and help is on its way')
    }
}

document.addEventListener('DOMContentLoaded',function(){
    Input.addEventListener('click',getdata,false)
},false);