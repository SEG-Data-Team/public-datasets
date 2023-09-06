console.log('html loading')
// Fetch HTML content from a different source
fetch('https://raw.githubusercontent.com/SEG-Data-Team/public-datasets/main/scripts/prospekt/prospekt.html')
    .then(response => response.text())
    .then(html => {
        // Display the fetched HTML content
        document.getElementById('externalContent').innerHTML = html;
        console.log('html loaded')
    })
    .catch(error => {
        console.error('Error fetching content:', error);
    });