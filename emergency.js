const bod = document.querySelector('.d1'),
form = document.querySelectorAll('.form'),
Input = form[0].querySelector('Input[type = "submit"]');

function getdata(e){
    e.preventDefault();
    var formdata  = new FormData(form[0]);
    if (formdata.get('regno')=='') {
        alert('Please enter your registration number')      
    }
    else if (formdata.get('regno').length != 9){
        alert("The registration number that has been enter is not in the right format");
    }
    else {
        location.replace('/front.html')
        alert('Your response has been noted and help is on its way')
    }
}

document.addEventListener('DOMContentLoaded',function(){
    Input.addEventListener('click',getdata,false)
},false);