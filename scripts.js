document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll('.image-gallery img');
    const featuredImage = document.querySelector('.featured-image img');
    let currentIndex = 0;
    const totalImages = galleryImages.length;

    // Function to change the featured image
    function changeFeaturedImage(index) {
        const newSrc = galleryImages[index].src;
        featuredImage.src = newSrc;
    }

    // Automatically change the image every 5 seconds
    function startSlideshow() {
        setInterval(function() {
            currentIndex = (currentIndex + 1) % totalImages; // Loop through the images
            changeFeaturedImage(currentIndex);
        }, 5000); // 5000ms = 5 seconds
    }

    // Start the slideshow when the page loads
    startSlideshow();

    // Allow manual image selection on click
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', function() {
            currentIndex = index; // Update the index to the clicked image
            changeFeaturedImage(currentIndex);
        });
    });
});


function slide() {
    let image = document.getElementById("image");
    let images = ["1.webp", "2.webp", "3.webp", "4.webp"];
    setInterval(function() {
        let rnd = Math.floor(Math.random() * images.length);
        image.src = images[rnd];
    }, 1000);
}
