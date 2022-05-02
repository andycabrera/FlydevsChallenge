module.exports = {

    findTwoBeers(beers, target) {
        let response = []
        beers.some((value, pos) => {
            if (beers.includes(target - value) && pos != beers.indexOf(target - value)) {

                response.push(pos)
                response.push(beers.indexOf(target - value))
                return response;

            }
        })
        return response;
    },

}