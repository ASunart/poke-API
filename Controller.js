const bulbDiv = document.querySelector('#bulb');
const evoluteBulb = document.querySelector('#evoluteBulb');
const backBulb = document.querySelector('#backBulb');
let bulbLevel = 1;

async function getBulbasaurs() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${bulbLevel}`);
        const data = await response.json();
        bulbDiv.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}"/>
        <h3>${data.name}</h3>
        <div id="poke-info">
        <label for="base-hp">HP</label>
        <progress id="base-hp" value="${data.stats[0].base_stat}" max="100"></progress>

        <label for="base-attack">Attack</label>
        <progress id="base-attack" value="${data.stats[1].base_stat}" max="100"></progress>

        <label for="base-defense">Defense</label>
        <progress id="base-defense" value="${data.stats[2].base_stat}" max="100"></progress>

        <label for="base-speed">Speed</label>
        <progress id="base-speed" value="${data.stats[5].base_stat}" max="100"></progress>

        </div>
        `;
    } catch (error) {
        console.error(error);
    }
    
}

getBulbasaurs();

evoluteBulb.addEventListener('click', ()=>{
    if (bulbLevel < 3) {
        bulbLevel++;
        getBulbasaurs();
    } 
})

backBulb.addEventListener('click', ()=>{
    if (bulbLevel > 1) {
        bulbLevel--;
        getBulbasaurs();
    } 
})



const charma = document.querySelector('#charma');
const backCharma = document.querySelector('#backCharma');
const evoluteCharma = document.querySelector('#evoluteCharma');
let charmaLevel = 4;

async function getCharmander() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${charmaLevel}`);
        const data = await response.json();
        charma.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}"/>
        <h3>${data.name}</h3>
        <div id="poke-info">
        <label for="base-hp">HP</label>
        <progress id="base-hp" value="${data.stats[0].base_stat}" max="100"></progress>

        <label for="base-attack">Attack</label>
        <progress id="base-attack" value="${data.stats[1].base_stat}" max="100"></progress>

        <label for="base-defense">Defense</label>
        <progress id="base-defense" value="${data.stats[2].base_stat}" max="100"></progress>

        <label for="base-speed">Speed</label>
        <progress id="base-speed" value="${data.stats[5].base_stat}" max="100"></progress>
        </div>`;
    } catch (error) {
        console.error(error);
    }
}

getCharmander();

evoluteCharma.addEventListener('click', ()=>{
    if (charmaLevel < 6) {
        charmaLevel++;
        getCharmander();
    }

})

backCharma.addEventListener('click', ()=>{
    if (charmaLevel > 4) {
        charmaLevel--;
        getCharmander();
    }
})



const squirtle = document.querySelector('#squirtle');
const backSqt = document.querySelector('#backSqt');
const nextSqt = document.querySelector('#evoluteSqt');
let sqtLevel = 7;

async function getSquirtle() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${sqtLevel}`);
        const data = await response.json();
        squirtle.innerHTML = `<img src="${data.sprites.versions["generation-v"]["black-white"].animated.front_default}"/>
        <h3>${data.name}</h3>
        <div id="poke-info">
        <label for="base-hp">HP</label>
        <progress id="base-hp" value="${data.stats[0].base_stat}" max="100"></progress>

        <label for="base-attack">Attack</label>
        <progress id="base-attack" value="${data.stats[1].base_stat}" max="100"></progress>

        <label for="base-defense">Defense</label>
        <progress id="base-defense" value="${data.stats[2].base_stat}" max="100"></progress>

        <label for="base-speed">Speed</label>
        <progress id="base-speed" value="${data.stats[5].base_stat}" max="100"></progress>
        </div>`;
    } catch (error) {
        console.error(error);
    }
}

getSquirtle();

nextSqt.addEventListener('click', ()=>{
    if (sqtLevel < 9) {
        sqtLevel++;
        getSquirtle();
    }
})


backSqt.addEventListener('click', ()=>{
    if (sqtLevel > 7) {
        sqtLevel--;
        getSquirtle();
    }
})