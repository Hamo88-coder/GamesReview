import { Ui } from './ui.module.js';

export class Details {

    constructor(id) {
        this.ui = new Ui();

        document.getElementById("btnClose").addEventListener("click", () => {
            document.querySelector(".games").classList.remove("d-none");
            document.querySelector(".details").classList.add("d-none");
        });

        this.getDetails(id);
    }

    async getDetails(id) {
        let loader = document.querySelector('.loading');
        loader.classList.remove('d-none');
        const endpoint = "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + id;

        console.log(endpoint)

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'b83e06d914msh9aac9bae69b92f8p14eb08jsnfe04670fac2a',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(endpoint, options).then(
                async response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return await response.text();
                }
            ).then(
                json => {
                    this.ui.displayDetails(JSON.parse(json))
                }
            ).finally(
                () => {
                    loader.classList.add('d-none');
                }
            )
            // const result = await response.text();
            // const json = JSON.parse(result);
            // console.log(result);

        } catch (error) {
            console.error(error);
        }

    }
}