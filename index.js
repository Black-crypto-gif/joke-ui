const url = 'https://official-joke-api.appspot.com/random_joke';
const root = document.getElementById('root');
//comment to test
fetch(url)
.then(response => response.json())
.then((data)=>{
    const id = data.id;
    const punchline = data.punchline;
    const setup = data.setup;
    const type = data.type;
    root.innerHTML = `
    <div class="container-card">
    <div class="card">
         <span class="id"><i class="fa-solid fa-hashtag"></i> ID:${id}</span>
         <span class="general">TYPE OF JOKE : <span class="bgred">${type}</span></span>
         <span class="joke"><i class="fa-solid fa-face-grin-tongue-wink"></i> ${setup}</span>
         <span class="punshline"><i class="fa-solid fa-face-smile-wink"></i> ${punchline}
         </span>
    </div>
</div>
    `
})
