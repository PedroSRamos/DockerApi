const axios = require('axios');

const ts = process.env.ts;
const apikey = process.env.apikey;
const hash = process.env.hash;

const urlBaseMarvel = 'http://gateway.marvel.com/v1/public/characters';

const listAll = async (req, res) => {
    var url = urlBaseMarvel + gethash();
    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    });

}

const listOne = async (req, res) => {
    var id = req.params.id;
    var url = urlBaseMarvel + '/' + id + gethash();


    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character with id (${id}) not found`
        });
    });
}

const listcharactercomics = async (req, res) => {
    var id = req.params.id;
    var url = urlBaseMarvel + '/' + id + '/comics' + gethash();


    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character comics with id (${id}) not found`
        });
    });
}

const listcharacterevents = async (req, res) => {
    var id = req.params.id;
    var url = urlBaseMarvel + '/' + id + '/events' + gethash();


    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character events with id (${id}) not found`
        });
    });
}

const listcharacterseries = async (req, res) => {
    var id = req.params.id;
    var url = urlBaseMarvel + '/' + id + '/series' + gethash();


    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character series with id (${id}) not found`
        });
    });
}

const listcharacterstories = async (req, res) => {
    var id = req.params.id;
    var url = urlBaseMarvel + '/' + id + '/stories' + gethash();


    await axios.get(url).then(async function (response) {
        res.status(200).send(response.data);
    }).catch(function (error) {
        res.status(404).send({
            message: `character stories with id (${id}) not found`
        });
    });
}

function gethash() {
    return '?ts=' + ts + '&apikey=' + apikey + '&hash=' + hash;
}

module.exports = {
    listAll,
    listOne,
    listcharactercomics,
    listcharacterevents,
    listcharacterseries,
    listcharacterstories
};