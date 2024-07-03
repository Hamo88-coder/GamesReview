import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

export class Games {
    constructor() {
        this.ui = new Ui();
        this.getGames('mmorpg');

        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
            });
        });
    }
    async getGames(category) {
        let loader = document.querySelector('.loading');
        loader.classList.remove('d-none');
        const endpoint ='https://free-to-play-games-database.p.rapidapi.com/api/games'+'?category='+ category;
        
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b83e06d914msh9aac9bae69b92f8p14eb08jsnfe04670fac2a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(endpoint, options);
            const result = await response.text();
            const json = JSON.parse(result);
            this.ui.displayGames(json);
        } catch (error) {
            console.error(error);
        }
        this.startEvent();
        loader.classList.add('d-none');
    }

    startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;
                this.showDetails(id);
            });
        });
    }

    showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }


}