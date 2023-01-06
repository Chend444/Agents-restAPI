const Agent = require('../models/agents');

exports.index = (req, res) => {
    Agent.findAll()
        .then((agents) => {
            res.send(agents);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.getById = (req, res) => {
    Agent.findByPk(req.params.id)
        .then((agent) => {
            if (!agent) {
                return res.status(404).send({
                    message: 'Agent Not Found'
                });
            }
            res.send(agent);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.create = (req, res) => {
    Agent.create(req.body)
        .then((agent) => {
            res.send(agent);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.update = (req, res) => {
    Agent.findByPk(req.params.id)
        .then((agent) => {
            if (!agent) {
                return res.status(404).send({
                    message: 'Agent Not Found'
                });
            }
            return agent.update(req.body)
                .then(() => res.send(agent));
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

exports.delete = (req, res) => {
    Agent.findByPk(req.params.id)
        .then((agent) => {
            if (!agent) {
                return res.status(404).send({
                    message: 'Agent Not Found'
                });
            }
            return agent.destroy()
                .then(() => res.send({ message: 'Agent was deleted successfully.' }));
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};
