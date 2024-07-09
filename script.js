document.addEventListener('DOMContentLoaded', (event) => {
    const themeSwitch = document.getElementById("flexSwitchCheckDefault");
    const bodyElement = document.getElementById("monBody");
    const bagElements = document.querySelectorAll(".monBag");
    const links = document.querySelectorAll(".lien");

    themeSwitch.addEventListener('change', function() {
        if (themeSwitch.checked) {
            bodyElement.classList.remove('dark-theme');
            bodyElement.classList.add('light-theme');
            bagElements.forEach(element => { 
                element.classList.remove('monBag');
                element.classList.add('monBag2');
            });
            links.forEach(link => { 
                link.classList.remove('monLien2');
                link.classList.add('monLien');
            });
        } else {
            bodyElement.classList.remove('light-theme');
            bodyElement.classList.add('dark-theme');
            bagElements.forEach(element => { 
                element.classList.remove('monBag2');
                element.classList.add('monBag');
            });
            links.forEach(link => { 
                link.classList.remove('monLien');
                link.classList.add('monLien2');
            });
        }
    });
});
