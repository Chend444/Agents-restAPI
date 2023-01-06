const Location = require('../models/locations');

exports.index = (req, res) => {
    Location.findAll()
        .then((location) => {
            res.send(location);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.getById = (req, res) => {
    Location.findByPk(req.params.id)
        .then((location) => {
            if (!location) {
                return res.status(404).send({
                    message: 'Location Not Found'
                });
            }
            res.send(location);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.create = (req, res) => {
    Location.create(req.body)
        .then((location) => {
            res.send(location);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.update = (req, res) => {
    Location.findByPk(req.params.id)
        .then((location) => {
            if (!location) {
                return res.status(404).send({
                    message: 'Location Not Found'
                });
            }
            return location.update(req.body)
                .then(() => res.send(location));
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.delete = (req, res) => {
    Location.findByPk(req.params.id)
        .then((location) => {
            if (!location) {
                return res.status(404).send({
                    message: 'Location Not Found'
                });
            }
            return location.destroy()
                .then(() => res.send({ message: 'Location was deleted successfully.' }));
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};
