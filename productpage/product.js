
function imgGallary() {
    const mainImg = document.querySelector('.product-big-img'),
    smallImg = document.querySelectorAll('.product-small-img');

    smallImg.forEach((img) =>{
        img.addEventListener('click' , function () {
            mainImg.src = this.src;
        });
    });
}

imgGallary()