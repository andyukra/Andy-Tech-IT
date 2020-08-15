const winLoad = {
    load() {
        const html5 = document.getElementById('html5');
        const css = document.getElementById('css');
        const js = document.getElementById('js');
        //Logos Effect
        const html5Logo = document.getElementById('html5Logo');
        const cssLogo = document.getElementById('cssLogo');
        const jsLogo = document.getElementById('jsLogo');
        //Scroll Coordinates of main cards
        const html5ScrollY = html5.getBoundingClientRect().top - 200;
        const cssScrollY = css.getBoundingClientRect().top - 200;
        const jsScrollY = js.getBoundingClientRect().top - 200;
        //navBar Change Color
        const item = document.getElementById('AppBar');
        window.onscroll = () => {
            //NavBar event
            if (window.scrollY > 500) {
                item.style.background = 'white';
                item.style.color = 'black';
            } else {
                item.style.background = 'rgba(0,0,255,0.3)';
                item.style.color = 'white';
            }
            //Apply Effects of main cards
            if (window.scrollY > html5ScrollY) {
                html5.style.opacity = '1';
                html5Logo.style.transform = 'scale(1)';
            }
            if (window.scrollY > cssScrollY) {
                css.style.opacity = '1';
                cssLogo.style.transform = 'scale(1)';
            }
            if (window.scrollY > jsScrollY) {
                js.style.opacity = '1';
                jsLogo.style.transform = 'scale(1)';
            }
        }
    }
}

export default winLoad;