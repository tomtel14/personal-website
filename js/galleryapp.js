// array of objects
const galleryImages = [
    {
        id: 1,
        country: 'indonesia',
        img: 'img/GalleryApp/indonesia/image1-min.jpg',
        text: 'An old temple in Ubud, January 2020',
    },
    {
        id: 2,
        country: 'indonesia',
        img: 'img/GalleryApp/indonesia/image2-min.jpg',
        text: 'The rice terraces of Tegallalang, January 2020',
    },
    {
        id: 3,
        country: 'indonesia',
        img: 'img/GalleryApp/indonesia/image3-min.jpg',
        text: 'A moutain in the distance near Ubud, January 2020',
    },
    {
        id: 4,
        country: 'indonesia',
        img: 'img/GalleryApp/indonesia/image4-min.jpg',
        text: 'A paddy field used for growing rice, January 2020',
    },
    {
        id: 5,
        country: 'indonesia',
        img: 'img/GalleryApp/indonesia/image5-min.jpg',
        text: 'A pathway through palm trees, January 2020',
    },
    {
        id: 6,
        country: 'indonesia',
        img: 'img/GalleryApp/indonesia/image6-min.jpg',
        text: 'Seminyak beach in the evening, January 2020',
    },
    {
        id: 7,
        country: 'spain',
        img: 'img/GalleryApp/spain/image1-min.jpg',
        text: 'Mountain view looking over Port Soller, September 2019',
    },
    {
        id: 8,
        country: 'spain',
        img: 'img/GalleryApp/spain/image2-min.jpg',
        text: 'Boats docked in Port Soller, September 2019',
    },
    {
        id: 9,
        country: 'spain',
        img: 'img/GalleryApp/spain/image3-min.jpg',
        text: 'Sunset horizon view, September 2019',
    },
    {
        id: 10,
        country: 'spain',
        img: 'img/GalleryApp/spain/image4-min.jpg',
        text: 'A hotel on the edge of a mountain in Port Soller, September 2019',
    },
    {
        id: 11,
        country: 'spain',
        img: 'img/GalleryApp/spain/image5-min.jpg',
        text: 'Many Port Soller boats, September 2019',
    },
    {
        id: 12,
        country: 'switzerland',
        img: 'img/GalleryApp/switzerland/image1-min.jpg',
        text: 'View of mountain tops from The Rigi, October 2019',
    },
    {
        id: 13,
        country: 'switzerland',
        img: 'img/GalleryApp/switzerland/image2-min.jpg',
        text: 'Evening time in Schwyz, October 2019',
    },
    {
        id: 14,
        country: 'switzerland',
        img: 'img/GalleryApp/switzerland/image3-min.jpg',
        text: 'Swiss flag flying near the top of The Rigi, October 2019',
    },
    {
        id: 15,
        country: 'switzerland',
        img: 'img/GalleryApp/switzerland/image4-min.jpg',
        text: 'Another view from walking up The Rigi, October 2019',
    },
    {
        id: 16,
        country: 'switzerland',
        img: 'img/GalleryApp/switzerland/image5-min.jpg',
        text: 'Above the clouds on a long walk, October 2019',
    },
    {
        id: 17,
        country: 'switzerland',
        img: 'img/GalleryApp/switzerland/image6-min.jpg',
        text: 'A small town by Lake Lucerne, October 2019',
    },
    {
        id: 18,
        country: 'switzerland',
        img: 'img/GalleryApp/switzerland/image7-min.jpg',
        text: 'An abandoned car in the town of Schwyz, October 2019',
    },
    {
        id: 19,
        country: 'thailand',
        img: 'img/GalleryApp/thailand/image1-min.jpg',
        text: 'Cheow Lan Lake in Khao Sok National Park, March 2018',
    },
    {
        id: 20,
        country: 'thailand',
        img: 'img/GalleryApp/thailand/image2-min.jpg',
        text: 'A remote pool on a mountain in Koh Samui, March 2018',
    },
    {
        id: 21,
        country: 'thailand',
        img: 'img/GalleryApp/thailand/image3-min.jpg',
        text: 'Heading to an island from the mainland, March 2018',
    },
    {
        id: 22,
        country: 'thailand',
        img: 'img/GalleryApp/thailand/image4-min.jpg',
        text: 'On the still lake of Khao Sok National Park, March 2018',
    },
    {
        id: 23,
        country: 'thailand',
        img: 'img/GalleryApp/thailand/image5-min.jpg',
        text: 'Silver Beach in Koh Samui, March 2018',
    },
    {
        id: 24,
        country: 'thailand',
        img: 'img/GalleryApp/thailand/image6-min.jpg',
        text: 'Empty pier with a boat, March 2018',
    },
    {
        id: 25,
        country: 'thailand',
        img: 'img/GalleryApp/thailand/image7-min.jpg',
        text: 'Koh Samui shoreline with a pier in the distance, March 2018',
    },
    {
        id: 26,
        country: 'usa',
        img: 'img/GalleryApp/usa/image1-min.jpg',
        text: 'Views near the Grand Canyon, September 2013',
    },
    {
        id: 27,
        country: 'usa',
        img: 'img/GalleryApp/usa/image2-min.jpg',
        text: 'The Golden Gate bridge in San Francisco, July 2017',
    },
    {
        id: 28,
        country: 'usa',
        img: 'img/GalleryApp/usa/image3-min.jpg',
        text: 'A park overlooking the city of San Francisco, July 2017',
    },
    {
        id: 29,
        country: 'usa',
        img: 'img/GalleryApp/usa/image4-min.jpg',
        text: 'Three destroyed danks near Joshua Tree, July 2017',
    },
    {
        id: 30,
        country: 'usa',
        img: 'img/GalleryApp/usa/image5-min.jpg',
        text: 'A river running through Yosemite National Park, July 2017',
    },
    {
        id: 31,
        country: 'usa',
        img: 'img/GalleryApp/usa/image6-min.jpg',
        text: 'Walking over a stream in the mountains, July 2017',
    },
    {
        id: 32,
        country: 'usa',
        img: 'img/GalleryApp/usa/image7-min.jpg',
        text: 'The coast of San Francisco, July 2017',
    },
    {
        id: 33,
        country: 'vietnam',
        img: 'img/GalleryApp/vietnam/image1-min.jpg',
        text: 'View from a paddy in Sapa, April 2019',
    },
    {
        id: 34,
        country: 'vietnam',
        img: 'img/GalleryApp/vietnam/image2-min.jpg',
        text: 'Sand dunes near Mui Ne, April 2019',
    },
    {
        id: 35,
        country: 'vietnam',
        img: 'img/GalleryApp/vietnam/image3-min.jpg',
        text: 'Mountains of Sapa in the distance, April 2019',
    },
    {
        id: 36,
        country: 'vietnam',
        img: 'img/GalleryApp/vietnam/image4-min.jpg',
        text: 'Buffalo relaxing in the fields of Sapa, April 2019',
    },
    {
        id: 37,
        country: 'vietnam',
        img: 'img/GalleryApp/vietnam/image5-min.jpg',
        text: 'Fishing boats in the bay, April 2019',
    },
    {
        id: 38,
        country: 'vietnam',
        img: 'img/GalleryApp/vietnam/image6-min.jpg',
        text: 'Standing by a paddy overlooking the mountains, April 2019',
    },
    {
        id: 39,
        country: 'vietnam',
        img: 'img/GalleryApp/vietnam/image7-min.jpg',
        text: 'A dusty road somewhere in Sapa, April 2019',
    },

];

// shuffles array
let arrayShuffle = function (arr) {
    let newPos;
    let temp;

    for (let i = arr.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[newPos];
        arr[newPos] = temp;
    }
    return arr;
};


// selections
const img = document.getElementById('gallery-img');
const caption = document.getElementById('caption');

const prevBtn = document.getElementById('left-button');
const nextBtn = document.getElementById('right-button');

const selection = document.getElementById('dropdown');

const randomBtn = document.getElementById('random-button');

let currentImage;
let currentSlideshow;

const countryList = ['indonesia', 'spain', 'switzerland', 'thailand', 'usa', 'vietnam'];


function generateSlideshow(country) {
    return galleryImages.filter(function (galleryImage) {
        return galleryImage.country === country;
    });
};

const countryItems = {};

for (let index = 0; index < countryList.length; index++) {
    const country = countryList[index];
    countryItems[country] = generateSlideshow(country)
}



function setImageAndText(slideshow, currentImage) {
    const item = countryItems[slideshow][currentImage];
    img.src = item.img;
    caption.textContent = `- ${item.text} -`;
}

selection.addEventListener('change', (e) => {
    currentSlideshow = e.target.value;
    currentImage = 0;
    setImageAndText(currentSlideshow, currentImage);
    prevBtn.classList.add('show-arrow');
    nextBtn.classList.add('show-arrow');
});


nextBtn.addEventListener('click', function () {
    currentImage++;
    if (currentImage > countryItems[currentSlideshow].length - 1) {
        currentImage = 0;
    }
    setImageAndText(currentSlideshow, currentImage);
});

prevBtn.addEventListener('click', function () {
    currentImage--;
    if (currentImage < 0) {
        currentImage = countryItems[currentSlideshow].length - 1;
    }
    setImageAndText(currentSlideshow, currentImage);
});


randomBtn.addEventListener('click', function (e) {
    const question = document.querySelector('.question');
    countryItems.randomImages = arrayShuffle(galleryImages); // we create a property called randomImages
    currentSlideshow = 'randomImages'; // store the string of our key (which we just created) in currentSLideshow
    currentImage = 0;
    setImageAndText(currentSlideshow, currentImage);
    prevBtn.classList.add('show-arrow');
    nextBtn.classList.add('show-arrow');
    selection.value = '';
})










