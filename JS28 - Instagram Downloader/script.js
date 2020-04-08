// Template
const body = `
    <main>
        <header class="navbar">
            <input type="text" value="https://www.instagram.com/p/BzVwWQBi-9S/" placeholder="Paste address here">
            <button class="search" onClick="extractHtml()">Render</button>
        </header>

        <section class="result">
            <div class="no-image"></div>
        </section>

        <footer>
            Instagram Downloader
        </footer>
    </main>
`;
// Insert in body
document.body.innerHTML = body;

const _ = e => document.querySelector(e);
const render = _('.result');

// Create Video
const createVideo = data => {
    let v = document.createElement('video');
    v.id = "instavideo";
    v.src = data.content;
    v.controls = true;
    v.autoplay = true;

    // Create info
    let info = document.createElement('p');
    info.textContent = "Click the right button on video and select save as.";

    render.innerHTML = ""; // clear body
    render.appendChild(v); // append video
    render.appendChild(info); // append link
}

// Create Image
const createImg = data => {
    let i = document.createElement('img');
    i.id = "instaImg";
    i.src = data.content;

    // Create info
    let info = document.createElement('p');
    info.textContent = "Click the right button on the image and select save image.";

    render.innerHTML = ""; // clear body
    render.appendChild(i); // append image
    render.appendChild(info); // append link
}

// Extract Html
const extractHtml = () => {
    render.innerHTML = "<div class='no-image'></div>";
    // Get input value
    let url = _('input').value;
    if (url) {
        fetch(url)
            .then(r => r.text())
            .then(r => {
                // Render html
                render.innerHTML = r;
                // Wait, find meta and create video or image
                let w = setTimeout(() => {
                    let v = _('meta[property="og:video"]');
                    if (v) {
                        createVideo(v);
                    } else {
                        let img = _('meta[property="og:image"]');
                        if (img) {
                            createImg(img);
                        } else {
                            document.body.innerHTML = body;
                            alert('Error extracing Instagram image / video.');
                        };
                    }
                    clearTimeout(w);
                }, 200)
            })
    } else {
        _('input').setAttribute('placeholder', 'Invalid address, use a good');
    }
}