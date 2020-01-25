
const express = require('express');
const router = express.Router();

const TourismService = require('../services/tourism-service');



router.post('', async(request, response) => {    

    try {
        await TourismService.save(request.body);
        response.sendStatus(200);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

router.get('', async(request, response) => {    

    try {
        const result = await TourismService.list();
        response.send(result);
    } catch (error) {
        response.status(500).send(error.message);
    }
});

router.put('', async(request, response) => {    

    try {
        await TourismService.update(request.body);
        response.send();
    } catch (error) {
        response.status(500).send(error.message);
    }
});

router.delete('/:id', async(request, response) => {    

    try {
        await TourismService.delete(request.params.id);
        response.send();
    } catch (error) {
        response.status(500).send(error.message);
    }
});



module.exports = router;