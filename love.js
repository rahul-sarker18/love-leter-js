document.getElementById('yes').addEventListener('click', function(){
    document.body.style.backgroundColor ='goldenrod'
    document.getElementById('h1').style.backgroundColor ='honeydew';
    const h1 =document.getElementById('h1');
    h1.innerText ='YES LOVE YOU';
    h1.style.color ='black';
})

document.getElementById('no').addEventListener('click', function(){
    document.body.style.backgroundColor ='black'
    document.getElementById('h1').style.backgroundColor ='aqua';
    const anathet = document.getElementById('h1');
    anathet.innerText = 'NO ! IAM BOOKING'
    anathet.style.color ='red';
})