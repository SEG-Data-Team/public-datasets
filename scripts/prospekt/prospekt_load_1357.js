function setInnerHTML(elm, html) {
    elm.innerHTML = html;
    
    Array.from(elm.querySelectorAll("script"))
      .forEach( oldScriptEl => {
        const newScriptEl = document.createElement("script");
        
        Array.from(oldScriptEl.attributes).forEach( attr => {
          newScriptEl.setAttribute(attr.name, attr.value) 
        });
        
        const scriptText = document.createTextNode(oldScriptEl.innerHTML);
        newScriptEl.appendChild(scriptText);
        
        oldScriptEl.parentNode.replaceChild(newScriptEl, oldScriptEl);
    });
  }

console.log('html loading')
// Fetch HTML content from a different source
fetch('https://raw.githubusercontent.com/SEG-Data-Team/public-datasets/main/scripts/prospekt/prospekt.html')
    .then(response => response.text())
    .then(html => {
        // Display the fetched HTML content
        var externalContent = document.getElementById('externalContent');
        setInnerHTML(externalContent, html)
        console.log('html loaded')
    })
    .catch(error => {
        console.error('Error fetching content:', error);
    });