import placesList from '../places.json';

export function initPickGallery() {
    const pickViewport = document.querySelector('.pick__viewport');
    const perPage = 5;
    let currentPage = 1;
    const pagesCount = Math.ceil(placesList.length / perPage);
    const pickCount = document.querySelector('.pick__count');
    pickCount.textContent = `${currentPage}/${pagesCount}`;
    
    let visiblePlaces = [...placesList];
    
    setVisiblePlaces();
    
    renderPlaces();
    
    const nextButton = document.querySelector('.pick__next');
    const prevButton = document.querySelector('.pick__prev');
    
    nextButton.addEventListener('click', () => {
        currentPage = currentPage < pagesCount ? currentPage += 1 : pagesCount;
        setVisiblePlaces();
        renderPlaces();
    })
    
    prevButton.addEventListener('click', () => {
        currentPage = currentPage > 1 ? currentPage -= 1 : 1;
        setVisiblePlaces();
        renderPlaces();
    })
    
    const filterButton = document.querySelector('.pick__filter-button');
    const filterSelect = document.querySelector('.pick__select');
    
    filterButton.addEventListener('click', () => {
        filterSelect.classList.toggle('filter__select--visible');
    })
    
    filterSelect.addEventListener('click', (e) => {
        if (e.target.tagName !== 'LI') return;
    
        const selectedOption = e.target;
    
        const options = document.querySelectorAll('.pick__option');
    
        options.forEach(option => {
            option.classList.remove('filter__option--selected')
        });
    
        selectedOption.classList.add('filter__option--selected');
    
        const filterValue = selectedOption.dataset['value'];
        placesList.sort((a, b) => a[filterValue].localeCompare(b[filterValue]));
    
        filterSelect.classList.remove('filter__select--visible');
    
        setVisiblePlaces();
        renderPlaces();
    })

    function createPlaceCard(place) {
        const card = document.createElement('div');
        card.classList = 'place pick__item';
        card.dataset.name = place.name;
    
        const image = document.createElement('img');
        image.classList = 'place__image';
        image.setAttribute('alt', 'place');
        image.setAttribute('src', place.img);
        card.append(image);

        const details = document.createElement('div');
        details.classList = 'place__details';

        const title = document.createElement('h2');
        title.classList = 'title__t2';
        title.innerText = place.name;
        details.append(title);

        const location = document.createElement('h4');
        location.classList = 'place__location title__t3';
        location.innerText = place.location;
        details.append(location);
    
        const description = document.createElement('p');
        description.classList = 'place__description';
        description.innerText = place.description;
        details.append(description);

        card.append(details);
    
        return card;
    }
    
    function setVisiblePlaces() {
        visiblePlaces = placesList.slice(((currentPage - 1) * perPage), currentPage * perPage);
    }
    
    function renderPlaces() {
        pickCount.textContent = `${currentPage}/${pagesCount}`;
        pickViewport.innerHTML = '';
    
        for (let place of visiblePlaces) {
            const card = createPlaceCard(place);
    
            card.addEventListener('click', (e) => {
                const index = visiblePlaces.indexOf(place);
    
                const temp = { ...visiblePlaces[index] };
                visiblePlaces[index] = { ...visiblePlaces[0] };
                visiblePlaces[0] = temp;
    
                renderPlaces();
            })
    
            pickViewport.append(card);
        }
    }
}