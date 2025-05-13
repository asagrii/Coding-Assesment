// Add functionality to zoom feature on image
const image = document.getElementById('mainImage');

image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.3s';
});

image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
});
