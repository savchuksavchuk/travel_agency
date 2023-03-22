import placesList from '../places.json';

export function initSpotsSlider() {
    const viewport = document.querySelector('.recommendation__viewport');
    const prevButton = document.querySelector('.recommendation__prev');
    const nextButton = document.querySelector('.recommendation__next');
    const spotsCount = document.querySelectorAll('.recommendation__count');

    let currentPage = 1;
    const perPage = 3;
    const pagesCount = Math.ceil(placesList.length / perPage);

    let visibleSpots = [...placesList];

    setVisibleSpots();

    renderSpots();

    prevButton.addEventListener('click', () => {
        currentPage = currentPage > 1 ? currentPage -= 1 : 1;
        setVisibleSpots();
        renderSpots();
    })

    nextButton.addEventListener('click', () => {
        currentPage = currentPage < pagesCount ? currentPage += 1 : pagesCount;
        setVisibleSpots();
        renderSpots();
    })

    function renderSpots() {
        spotsCount.forEach(count => {
            count.innerText = `${currentPage}/${pagesCount}`
        });

        viewport.innerHTML = '';

        for (const spot of visibleSpots) {
            viewport.append(createSpot(spot));
        }
    }

    function setVisibleSpots() {
        visibleSpots = placesList.slice((currentPage - 1) * perPage, currentPage * perPage);
    }

    function createSpot(place) {
        const spot = document.createElement('div');
        spot.classList = 'spot';
    
        const spotPhoto = document.createElement('div');
        spotPhoto.classList = 'spot__photo';
    
        const spotImg = document.createElement('img');
        spotImg.classList = 'spot__image';
        spotImg.setAttribute('alt', place.name);
        spotImg.setAttribute('src', place.img);
        spotPhoto.append(spotImg);
    
        spot.append(spotPhoto);
    
        const title = document.createElement('h3');
        title.classList = 'spot__name title__t2';
        title.innerText = place.name;
        spot.append(title);
    
        const country = document.createElement('h4');
        country.classList = 'spot__country title__t3';
        country.innerText = place.location;
        spot.append(country);
    
        const description = document.createElement('p');
        description.classList = 'spot__description';
        description.innerText = place.description;
        spot.append(description);
    
        const link = document.createElement('a');
        link.classList = 'spot__link';
        link.setAttribute('href', '/');
        link.innerText = 'read more';
        spot.append(link);
    
        return spot;
    }
}