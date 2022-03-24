const allFishSpeciesURL = 'http://localhost:8080/https://www.fishwatch.gov/api/species';
const picker = document.getElementById('picker-id');
const slideshow = document.getElementById('slideshow-id');
let _gImageMap = {};
let _gIntervalTimeMillis = 3000;
let _gInterval = null;

function pickerChanged(evt) {
    slideshow.innerHTML = '';
    if (_gInterval) {
        clearInterval(_gInterval);
        _gInterval = null;
    }

    if (picker.value && picker.value.length > 0) {
        let images = _gImageMap[picker.value];
        if (images && images.length > 0) {
            let imageIndex = 0;
            function showNextImage() {
                let image = images[imageIndex];
                imageIndex += 1;
                if (imageIndex >= images.length) {
                    imageIndex = 0;
                }
                let imgElement = document.createElement('img');
                imgElement.src = image.src;
                slideshow.innerHTML = '';
                slideshow.appendChild(imgElement);
            }
            _gInterval = setInterval(showNextImage, _gIntervalTimeMillis);
        } else {
            slideshow.innerHTML = 'No images for ' + picker.value;
        }
    }
}

function initPicker(speciesArray) {
    let speciesNames = [];
    speciesArray.forEach(speciesData => {
        let speciesName = speciesData['Species Name'];
        speciesNames.push(speciesName);
        _gImageMap[speciesName] = speciesData['Image Gallery'];
    });
    speciesNames.sort();
    let speciesOptionTags = speciesNames.map(name => `<option>${name}</option>`);
    speciesOptionTags.unshift('<option value = "">Choose</option>');
    picker.innerHTML = speciesOptionTags.join('');
}

async function fetchSpecies () {
    try {
        let response = await fetch(allFishSpeciesURL);
        let jsonData = await response.json();
        initPicker(jsonData);
    } catch (error) {
        alert('Problem! ' + error);
    }
}

fetchSpecies();
picker.addEventListener('change', pickerChanged);