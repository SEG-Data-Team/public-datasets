console.log('html loading')
fetch('https://raw.githubusercontent.com/SEG-Data-Team/public-datasets/main/scripts/tester/tester.html')
            .then(response => response.text())
            .then(html => {
                // Display the fetched HTML content
                document.getElementById('externalContent').innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching content:', error);
            });

console.log('html loaded')

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
