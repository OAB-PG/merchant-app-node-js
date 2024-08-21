const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const iPayOabPipe = require('./libfiles/iPayOabPipe'); // You would need to create this module
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const hostedPaymentResultRoute = require('./routes/index');
app.use('/', hostedPaymentResultRoute);

app.post('/bankHosted/HostedPaymentCoreSubmit', async (req, res) => {
  try {
    const currency = "512";
    const language = "ENG";
    const receiptURL = "http://localhost:3000/bankHosted/HostedPaymentResult";
    const errorURL = "http://localhost:3000/bankHosted/HostedPaymentResult";
    const id = "ipay**********";
    const password = "*********";
    const key = "***********************";
    //const webAddress = "https://securepayments.oabipay.com/trxns";
    const webAddress = "https://certpayments.oabipay.com/trxns";

    const myObj = new iPayOabPipe();

    myObj.setId(id);
    myObj.setPassword(password);
    myObj.setKey(key);
    myObj.setWebAddress(webAddress);
    myObj.setCurrency(currency);
    myObj.setLanguage(language);
    myObj.setResponseURL(receiptURL);
    myObj.setErrorURL(errorURL);

    myObj.setAction(req.body.action);
    myObj.setAmt(req.body.amount);
    myObj.setTrackId(req.body.trackId);
    myObj.setUdf1(req.body.udf1);
    myObj.setUdf2(req.body.udf2);
    myObj.setUdf3(req.body.udf3);
    myObj.setUdf4(req.body.udf4);
    myObj.setUdf5(req.body.udf5);

    if (req.body.tokennumber && req.body.tokennumber.trim() !== '') {
      myObj.setTokenNumber(req.body.tokennumber.trim());
      myObj.setTokenFlg('2');
    }

    const result = await myObj.performPaymentInitializationHTTP();

    let url;
    if (result === 0) {
      url = myObj.getWebAddress();
    } else {
      url = `${myObj.getErrorURL()}?ErrorText=${myObj.getError()}`;
    }

    res.render('redirectForm', {
      url: url,
      tranData: myObj.getTranData(),
      tranPortalId: myObj.getId(),
      errorURL: myObj.getErrorURL(),
      responseURL: myObj.getResponseURL()
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/serviceTransactionSubmit', async (req, res) => {
  try {
    const currency = "512";
    const language = "ENG";
    const receiptURL = "http://localhost:3000/bankHosted/HostedPaymentResult";
    const errorURL = "http://localhost:3000/bankHosted/HostedPaymentResult";

    const id = "ipay**********";
    const password = "*********";
    const key = "***********************";
    //const webAddress = "https://securepayments.oabipay.com/trxns";
    const webAddress = "https://certpayments.oabipay.com/trxns";

    const myObj = new iPayOabPipe();

    myObj.setId(id);
    myObj.setPassword(password);
    myObj.setKey(key);
    myObj.setWebAddress(webAddress);
    myObj.setResponseURL(receiptURL.trim());
    myObj.setErrorURL(errorURL.trim());
    myObj.setCurrency(currency.trim());
    myObj.setLanguage(language.trim());
    myObj.setAction(req.body.action?.trim());
    myObj.setAmt(req.body.amount?.trim());
    myObj.setTransId(req.body.transId?.trim());
    myObj.setTrackId(req.body.trackId?.trim());
    myObj.setUdf1(req.body.udf1?.trim());
    myObj.setUdf2(req.body.udf2?.trim());
    myObj.setUdf3(req.body.udf3?.trim());
    myObj.setUdf4(req.body.udf4?.trim());
    myObj.setUdf5(req.body.udf5?.trim());

    const result = await myObj.performTransaction();

    res.render('serviceTransaction/transactionResult', {
      result: result,
      myObj: myObj
    });

  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send(`Error: ${error.message}`);
  }
});


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));


function generateToken(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }
  return token;
}
// Routes
app.get('/', (req, res) => {
  const token = generateToken(17);
  res.render('index', {
    token: token
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
