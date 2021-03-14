import getData from '../utils/getData';
const Home = async () => {
   const characters = await getData();
   const view = `
    <div class="Characters">
        ${characters.results
            .map((character) => `
                <article class="Character-item">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                    <a href="#/${character.id}/">
                        <button class="btn">Ver mas</button>
                    </a>
                </article>
            `
            ).join('')}
    </div>
    `;
   return view;
};
export default Home;
