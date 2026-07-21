const request = require('supertest');
const app = require('../src/app');

describe('Validaci?n de Despliegue de la App Web', () => {
    it('Deber?a responder con status 200 y cargar el archivo HTML', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('<!DOCTYPE html>');
    });

    it('Debe mostrar los cuatro integrantes en el index', async () => {
        const res = await request(app).get('/');
        expect(res.text).toContain('Alexander');
        expect(res.text).toContain('Fernando Piguave');
        expect(res.text).toContain('Darly Barreto');
        expect(res.text).toContain('Joel Cedeño');
    });
});
