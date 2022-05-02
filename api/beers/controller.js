const service = require('./service');

module.exports = {

    findTwoBeers(req, res) {
        try {

            if (req.body.beers instanceof Array && !isNaN(req.body.target)) {
                var index = service.findTwoBeers(req.body.beers, req.body.target);

                res.status(200).json({ index });
            } else {
                res.status(400).json({ error: `Invalid inputs.` })
            }

        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    },
}