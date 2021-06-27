const request = require('supertest')
const app = require('../../src/index')

const myCharacter = {
    id: 1011334,
    idwrong: 0
}

describe('Character Controller success', () => {
    it('Call listAll method should shows all characters', async () => {
        const res = await request(app)
            .get("/v1/public/characters")
        expect(res.status).toBe(200);
    })

    it('Call listOne method should shows One character', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.id)
        expect(res.status).toBe(200);
    })

    it('Call listcharactercomics method should shows all character comics', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.id + "/comics")
        expect(res.status).toBe(200);
    })

    it('Call listcharacterevents method should shows all character events', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.id + "/events")
        expect(res.status).toBe(200);
    })

    it('Call listcharacterseries method should shows all character series', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.id + "/series")
        expect(res.status).toBe(200);
    })

    it('Call listcharacterstories method should shows all character stories', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.id + "/stories")
        expect(res.status).toBe(200);
    })
})

describe('Character Controller Error', () => {
    it('Call listOne method should not shows One character', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.idwrong)
        expect(res.status).toBe(404);
    })

    it('Call listcharactercomics method should not shows all character comics', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.idwrong + "/comics")
        expect(res.status).toBe(404);
    })

    it('Call listcharacterevents method should not shows all character events', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.idwrong + "/events")
        expect(res.status).toBe(404);
    })

    it('Call listcharacterseries method should not shows all character series', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.idwrong + "/series")
        expect(res.status).toBe(404);
    })

    it('Call listcharacterstories method should not shows all character stories', async () => {
        const res = await request(app)
            .get("/v1/public/characters/" + myCharacter.idwrong + "/stories")
        expect(res.status).toBe(404);
    })
})