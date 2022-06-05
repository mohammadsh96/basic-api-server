'use strict';
const { app } = require('../src/server'); 
const supertest = require('supertest');
const mockRequest = supertest(app);
const { db } = require('../src/models/index');
beforeAll(async () => {
    await db.sync();
});
describe('my server', () => {
    it('Should respond with 404 status on an invalid route', async () => {
        const response = await mockRequest.get('/foodd');
        expect(response.status).toBe(404);
    });
    // it('Should respond with 500 status on an invalid route', async () => {
    //     // console.log(hi);
    //     const response = await mockRequest.get('/food');
    //     expect(response.status).toBe(500);
    // });
    it('can add a Food', async () => {
        const response = await mockRequest.post('/food').send({
            FoodId: 'maglopah',
            FoodType: 'launch'
        });
        expect(response.status).toBe(201);
    });
    it('can get all food', async () => {
        const response = await mockRequest.get('/food');
        expect(response.status).toBe(200);
    });
    it('it can update a record', async () => {
        const response = await mockRequest.put('/food/1');
        expect(response.status).toBe(201);
    });
    
    it(' if can delete a record', async () => {
        const response = await mockRequest.delete('/food/1');
        expect(response.status).toBe(204);
    });
    
    it('can add a clothes', async () => {
        const response = await mockRequest.post('/clothes').send({
            ClothesType: 'dress',
            Season: 'summer'
        });
        expect(response.status).toBe(201);
    });

    it('can get all clothes', async () => {
        const response = await mockRequest.get('/clothes');
        expect(response.status).toBe(200);
    });

    it(' if it can update a record', async () => {
        const response = await mockRequest.put('/clothes/1');
        expect(response.status).toBe(201);
    });
    
    it(' if can delete a record', async () => {
        const response = await mockRequest.delete('/clothes/1');
        expect(response.status).toBe(204);
    });
});

afterAll(async () => {
    await db.drop();
});