const express = require('express');
const router = express.Router();
const iPayOabPipe = require('../libfiles/iPayOabPipe'); // Adjust the path based on your project structure

router.post('/bankHosted/HostedPaymentResult', async (req, res) => {  // Added 'async' here
    try {
        const myObj = new iPayOabPipe();
        const key = "830206802958830206802958";
        myObj.setKey(key);
        
        const trandata = req.body.trandata || req.query.trandata;
        console.log('Received trandata:', trandata);
        
        console.log('About to call parseResponse...');
        const result = await myObj.parsePaymentResponse(trandata);
        console.log('parseResponse has been called');

        console.log('Parsed result:', result);
        res.render('bankHosted/HostedPaymentResult', {
            result: result,
            myObj: myObj
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred');
    }
});

module.exports = router;
