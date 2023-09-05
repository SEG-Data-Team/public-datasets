
const dropList = document.getElementById("selectOptionDataset")

dropList.addEventListener('click', function () {
    const popupContent = document.getElementById('popupContent');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    
    const closeButton = document.createElement('button');
    closeButton.id = 'closeButton';
    closeButton.className = 'close-button';
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', closePopup);
    
    overlay.style.display = 'block';
    popup.style.display = 'block';
    popupContent.innerHTML = '<div class="loader" ></div>' 
})