
const p3 = document.querySelector('.p3');

function ubahWarnap2() {
    

    p2.style.backgroundColor = 'aqua';
}
function ubahWarnap3() {
    

    p3.style.backgroundColor = 'aqua';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnap2;




const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item Baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});