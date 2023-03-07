const bod = document.querySelector('.d2'),form = document.querySelectorAll('.form'),Input = form[0].querySelector('Input[type = "submit"]');
let ele = document.getElementById('dattim');
let today = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));
ele.min = today;
ele.max = today.replace(today.slice(8,10),String(parseInt(today.slice(8,10))+7));
function getdata(e){
    e.preventDefault();
    var formdata  = new FormData(form[0]);
    if (formdata.get('first')=='' || formdata.get('last')=='' || formdata.get('regno')=='' || formdata.get('drname') =='' || formdata.get('datteme')==''){
        console.log('it worked !!!');
        console.log(formdata.get('datteme'));
        alert('Please enter all the detail of the form before clicking submitting');
    }
    else if (formdata.get('regno').length != 9){
            alert("The registration number that has been enter is not in the right format");
        }
    else {
        location.replace('/front.html');
        alert('Your response has been noted');
        console.log(formdata);
        const data = Object.fromEntries(formdata);
        console.log(data)
        }
}

document.addEventListener('DOMContentLoaded',function(){Input.addEventListener('click',getdata,false)},false);