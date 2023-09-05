
console.log('script loading')
const dropList = document.getElementById("selectOptionDataset")

dropList.addEventListener('click', function () {
    const popupContent = document.getElementById('popupContent');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    
    overlay.style.display = 'block';
    popup.style.display = 'block';
    popupContent.innerHTML = '<div class="loader" ></div>' 

    console.log('trigger worked')
})

prettyPlease = function() {
    console.log("I am here")
}
console.log('script loaded')
