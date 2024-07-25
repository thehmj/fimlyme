import Data from "../Confidential/Data"

export default RapidApi = {
    MovieData: async (value) => {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await fetch(`https://ott-details.p.rapidapi.com/advancedsearch?start_year=${value.start_year}&end_year=${value.end_year}&min_imdb=${value.min_imdb}&max_imdb=${value.max_imdb}&language=${value.language}&type=movie&sort=latest&page=1`, {
                    method: "GET",
                    headers: {
                        'Content-Type': "application/json",
                        'x-rapidapi-host': 'ott-details.p.rapidapi.com',
                        'x-rapidapi-key': Data["x-rapidapi-key"]
                    }
                })
                const data = await res.json();
                resolve(data)

            } catch (error) {
                reject(error);
                // console.log("error")
            }
        }
        )
    }
}
