let cl = console.log;

const changeImg = document.getElementById('chnageImg');
// cl(changeImg)
const allImg = Array.from(document.querySelectorAll('.all'));

// cl(allImg)

const onchangeIMGHandler = imgs =>{
    let getImg = `.${imgs.target.value}`;
    // cl(getImg)
    allImg.forEach(ele =>{
        ele.classList.add('d-none')
    })
    let getSelectedImg = Array.from(document.querySelectorAll(getImg));
    getSelectedImg.forEach(ele =>{
        ele.classList.remove('d-none')
    })
    
}




















changeImg.addEventListener('change', onchangeIMGHandler)