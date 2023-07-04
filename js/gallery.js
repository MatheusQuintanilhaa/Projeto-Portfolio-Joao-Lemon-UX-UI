let overlay = document.querySelector('.jl-overlay');
let frameContainer = document.querySelector('.jl-gallery-frame-container');
let frameImage = document.querySelector('.jl-gallery-frame-image');
let galleryImages = document.querySelectorAll('.jl-thumb-box');
let closeGallery = document.querySelectorAll('.jl-toggle-gallery');
let btnNext = document.querySelector('.jl-item-next');
let btnPrev = document.querySelector('.jl-item-prev');
let currCounter = document.querySelector('.jl-current-slide');
let totalCounter = document.querySelector('.jl-total-slide');
let skeletonLoading = document.querySelector('.jl-skeleton-loading');

let postGallery = document.querySelector('.jl-post-gallery');
let postGalleryHeight = postGallery.clientHeight;
postGallery.style.height = (postGalleryHeight - 270) + 'px';

//Counter Formater
let counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

totalCounter.innerHTML = counterFormatter(galleryImages.length);

//Skeleton Loading
const skeletonAnim = function (imagem) {
    let myImage = new Image();
    myImage.src = imagem;
    myImage.addEventListener('load', function () {
        skeletonLoading.classList.add('jl-fade-out');
        console.log('iniciou fadeOut');
        setTimeout(function () {
            skeletonLoading.style.display = 'none';
            console.log('iniciou display None');
        }, 2000);
    });
}


//Open Gallery Modal
const getImageSrc = function () {
    for (let i = 0; i < galleryImages.length; i++) {
        galleryImages[i].addEventListener('click', function () {
            let imageSrc = this.querySelector('img').getAttribute('data-src');
            let itemNum = this.querySelector('img').getAttribute('data-item');

            skeletonLoading.style.display = 'flex';

            frameImage.setAttribute('src', imageSrc);
            frameImage.setAttribute('data-index', itemNum);
            overlay.classList.add('jl-is-open');
            frameContainer.classList.add('jl-is-open');
            currCounter.innerHTML = counterFormatter(itemNum);

            skeletonAnim(imageSrc);
        });
    }
}
getImageSrc();

for (let c = 0; c < closeGallery.length; c++) {
    closeGallery[c].addEventListener('click', function () {
        overlay.classList.remove('jl-is-open');
        frameContainer.classList.remove('jl-is-open');
    });
}

const nextItem = function () {

    //Identificamos o item atual no frame
    let currItemNum = frameImage.getAttribute('data-index');

    //Definimos o numero do proximo item
    let nextItemNum = parseInt(currItemNum) + 1;


    //Fazemos o loop e identificamos qual item faz match com o numero proximo item 
    for (let n = 0; n < galleryImages.length; n++) {
        let item = galleryImages[n].querySelector('img');
        let itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === nextItemNum) {
            //Capturamos o data-src
            let nextSrc = item.getAttribute('data-src');
            let nextIndex = item.getAttribute('data-item');

            skeletonLoading.style.display = 'flex';

            //Passamos o data-src para a tag de img no frame
            frameImage.setAttribute('src', nextSrc);
            frameImage.setAttribute('data-index', nextIndex);

            currCounter.innerHTML = counterFormatter(nextIndex);

            skeletonAnim(nextSrc);

        }
    }
}

const prevItem = function () {

    //Identificamos o item atual no frame
    let currItemNum = frameImage.getAttribute('data-index');

    //Definimos o numero do proximo item
    let prevItemNum = parseInt(currItemNum) - 1;


    //Fazemos o loop e identificamos qual item faz match com o numero proximo item
    for (let p = 0; p < galleryImages.length; p++) {
        let item = galleryImages[p];
        let itemNum = parseInt(item.getAttribute('data-item'));

        if (itemNum === prevItemNum) {
            //Capturamos o data-src
            let prevSrc = item.getAttribute('data-src');
            let prevIndex = item.getAttribute('data-item');

            skeletonLoading.style.display = 'flex';

            //Passamos o data-src para a tag de img no frame
            frameImage.setAttribute('src', prevSrc);
            frameImage.setAttribute('data-index', prevIndex);

            currCounter.innerHTML = counterFormatter(prevIndex);

            skeletonAnim(prevSrc);
        }
    }
}

btnNext.addEventListener('click', function () {
    nextItem();
});

btnPrev.addEventListener('click', function () {
    prevItem();
});