function scrollCarousel(direction, carouselId) {
    const carousel = document.querySelector(`#${carouselId} .carousel`);
    const itemWidth = document.querySelector(`#${carouselId} .carousel-item`).offsetWidth;
    const scrollAmount = itemWidth + 20; // 20 é a gap entre os itens
    carousel.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}
