// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const cotainer=document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for(let i=1;i<=151;i++){
    const pokemon=document.createElement('div');
    pokemon.classList.add('pokemon'); // adding styling
    const img=document.createElement('img');
    const span=document.createElement('span');
    img.src=`${baseURL}${i}.png`;
    span.innerText=i;
    pokemon.appendChild(img);
    pokemon.appendChild(span);
    cotainer.appendChild(pokemon);
}

/*
<div>
    <img>
    <span>2</span>
</div>

*/