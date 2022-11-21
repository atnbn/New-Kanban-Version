async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]')
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // includes the file name

        try {
            let resp = await fetch(file);
            element.innerHTML = await resp.text();
        } catch (e) {
            element.innerHTML = "Page not found.";
        }
    }
}