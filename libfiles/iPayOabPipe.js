const crypto = require('crypto');
const axios = require('axios');
const { exec } = require('child_process');

class iPayOabPipe {
  constructor() {
    this.id = "";
    this.password = "";
    this.key = "";
    this.action = "";
    this.transId = "";
    this.amt = "";
    this.responseURL = "";
    this.trackId = "";
    this.udf1 = "";
    this.udf2 = "";
    this.udf3 = "";
    this.udf4 = "";
    this.udf5 = "";
    this.paymentId = "";
    this.result = "";
    this.auth = "";
    this.ref = "";
    this.avr = "";
    this.date = "";
    this.currency = "";
    this.errorURL = "";
    this.language = "";
    this.error = "";
    this.error_text = "";
    this.debugMsg = "";
    this.responseCode = "";
    this.member = "";
    this.cvv2 = "";
    this.type = "";
    this.card = "";
    this.expDay = "";
    this.expMonth = "";
    this.expYear = "";
    this.resourcePath = "";
    this.error_service_tag = "";
    this.webAddress = "";
    this.paymentUrl = "";
    this.tokenFlg = "";
    this.tokenNumber = "";
    this.tokenCustomerId = "";
    this.trandata = "";
    this.tranRequestDate = "";
    this.tranResponseDate = "";
    this.tranDate = "";
  }

  getPassword() {
    return this.password;
  }

  setPassword(val) {
    this.password = val;
  }

  getKey() {
    return this.key;
  }

  setKey(val) {
    this.key = val;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getAction() {
    return this.action;
  }

  setAction(action) {
    this.action = action;
  }

  getTransId() {
    return this.transId;
  }

  setTransId(transId) {
    this.transId = transId;
  }

  getAmt() {
    return this.amt;
  }

  setAmt(amt) {
    this.amt = amt;
  }

  getResponseURL() {
    return this.responseURL;
  }

  setResponseURL(responseURL) {
    this.responseURL = responseURL;
  }

  getTrackId() {
    return this.trackId;
  }

  setTrackId(trackId) {
    this.trackId = trackId;
  }

  getUdf1() {
    return this.udf1;
  }

  setUdf1(udf1) {
    this.udf1 = udf1;
  }

  getUdf2() {
    return this.udf2;
  }

  setUdf2(udf2) {
    this.udf2 = udf2;
  }

  getUdf3() {
    return this.udf3;
  }

  setUdf3(udf3) {
    this.udf3 = udf3;
  }

  getUdf4() {
    return this.udf4;
  }

  setUdf4(udf4) {
    this.udf4 = udf4;
  }

  getUdf5() {
    return this.udf5;
  }

  setUdf5(udf5) {
    this.udf5 = udf5;
  }

  getPaymentId() {
    return this.paymentId;
  }

  setPaymentId(paymentId) {
    this.paymentId = paymentId;
  }

  getResult() {
    return this.result;
  }

  setResult(result) {
    this.result = result;
  }

  getAuth() {
    return this.auth;
  }

  setAuth(auth) {
    this.auth = auth;
  }

  getRef() {
    return this.ref;
  }

  setRef(ref) {
    this.ref = ref;
  }

  getAvr() {
    return this.avr;
  }

  setAvr(avr) {
    this.avr = avr;
  }

  getDate() {
    return this.date;
  }

  setDate(date) {
    this.date = date;
  }

  getCurrency() {
    return this.currency;
  }

  setCurrency(currency) {
    this.currency = currency;
  }

  getErrorURL() {
    return this.errorURL;
  }

  setErrorURL(errorURL) {
    this.errorURL = errorURL;
  }

  getLanguage() {
    return this.language;
  }

  setLanguage(language) {
    this.language = language;
  }

  getError() {
    return this.error;
  }

  setError(error) {
    this.error = error;
  }

  getErrorText() {
    return this.error_text;
  }

  setErrorText(error_text) {
    this.error_text = error_text;
  }

  getDebugMsg() {
    return this.debugMsg;
  }

  setDebugMsg(debugMsg) {
    this.debugMsg = debugMsg;
  }

  getResponseCode() {
    return this.responseCode;
  }

  setResponseCode(responseCode) {
    this.responseCode = responseCode;
  }

  getMember() {
    return this.member;
  }

  setMember(member) {
    this.member = member;
  }

  getCvv2() {
    return this.cvv2;
  }

  setCvv2(cvv2) {
    this.cvv2 = cvv2;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getCard() {
    return this.card;
  }

  setCard(card) {
    this.card = card;
  }

  getExpDay() {
    return this.expDay;
  }

  setExpDay(expDay) {
    this.expDay = expDay;
  }

  getExpMonth() {
    return this.expMonth;
  }

  setExpMonth(expMonth) {
    this.expMonth = expMonth;
  }

  getExpYear() {
    return this.expYear;
  }

  setExpYear(expYear) {
    this.expYear = expYear;
  }

  getResourcePath() {
    return this.resourcePath;
  }

  setResourcePath(resourcePath) {
    this.resourcePath = resourcePath;
  }

  getErrorServiceTag() {
    return this.error_service_tag;
  }

  setErrorServiceTag(error_service_tag) {
    this.error_service_tag = error_service_tag;
  }

  getWebAddress() {
    return this.webAddress;
  }

  setWebAddress(webAddress) {
    this.webAddress = webAddress;
  }

  getPaymentUrl() {
    return this.paymentUrl;
  }

  setPaymentUrl(paymentUrl) {
    this.paymentUrl = paymentUrl;
  }

  getTokenFlg() {
    return this.tokenFlg;
  }

  setTokenFlg(tokenFlg) {
    this.tokenFlg = tokenFlg;
  }

  getTokenNumber() {
    return this.tokenNumber;
  }

  setTokenNumber(tokenNumber) {
    this.tokenNumber = tokenNumber;
  }

  getTokenCustomerId() {
    return this.tokenCustomerId;
  }

  setTokenCustomerId(tokenCustomerId) {
    this.tokenCustomerId = tokenCustomerId;
  }

  getTranData() {
    return this.trandata;
  }

  setTranData(trandata) {
    this.trandata = trandata;
  }

  buildHostRequest() {
    const params = [
      this.amt && `amt=${this.amt}`,
      this.action && `action=${this.action}`,
      this.responseURL && `responseURL=${this.responseURL}`,
      this.errorURL && `errorURL=${this.errorURL}`,
      this.trackId && `trackId=${this.trackId}`,
      this.udf1 && `udf1=${this.udf1}`,
      this.udf2 && `udf2=${this.udf2}`,
      this.udf3 && `udf3=${this.udf3}`,
      this.udf4 && `udf4=${this.udf4}`,
      this.udf5 && `udf5=${this.udf5}`,
      this.currency && `currencycode=${this.currency}`,
      this.language && `langid=${this.language}`,
      this.tokenFlg && `tokenFlag=${this.tokenFlg}`,
      this.tokenNumber && `tokenNumber=${this.tokenNumber}`,
    ].filter(Boolean).join('&');

    return params || null;
  }


  async performPaymentInitializationHTTP() {
    try {

      const requestBuffer = `${this.buildHostRequest()}&id=${this.id}&password=${this.password}&`;
      const keyParser = new KeyStoreOab();
      console.log('Request Buffer:', requestBuffer);

      this.trandata = await keyParser.encryptData(requestBuffer, this.key);
      if (!this.trandata) {
        throw new Error("Encryption failed: trandata is null or empty.");
      }
      console.log('Encrypted Transaction Data:', this.trandata);
      const request = `&trandata=${this.trandata}&errorURL=${this.errorURL}&responseURL=${this.responseURL}&tranportalId=${this.id}`;
      this.webAddress += `/PaymentHTTP.htm?param=paymentInit${request}`;
      console.log('Web Address:', this.webAddress);

      return 0;
    } catch (error) {
      console.error('Error in Payment Initialization:', error.stack);
      this.error = "Problem while encrypting request data";
      return -1;
    }
  }


  async performTransaction() {
    let requestBuffer = null;
    try {
      requestBuffer = this.buildXMLRequest();
      requestBuffer += `<id>${this.id}</id>`;
      requestBuffer += `<password>${this.password}</password>`;
      requestBuffer += `</request>`;
      console.log('performTransaction requestBuffer:', requestBuffer);
      console.log('performTransaction this.webAddress:', this.webAddress);
      const response = await this.performTranPortalTransaction(requestBuffer, this.webAddress);
      console.log('performTransaction responseBuffer:', response);
      const resultMap = this.parseResponse(response);
      return this.setTransactionData(resultMap);
    } catch (e) {
      this.error = "Error! " + e.message;
      return -1;
    }
  }

  buildXMLRequest() {
    let requestBuffer = "";
    try {
      requestBuffer += "<request>";
      if (this.card && this.card.length > 0) {
        requestBuffer += `<card>${this.card}</card>`;
      }
      if (this.cvv2 && this.cvv2.length > 0) {
        requestBuffer += `<cvv2>${this.cvv2}</cvv2>`;
      }
      if (this.currency && this.currency.length > 0) {
        requestBuffer += `<currencycode>${this.currency}</currencycode>`;
      }
      if (this.expYear && this.expYear.length > 0) {
        requestBuffer += `<expyear>${this.expYear}</expyear>`;
      }
      if (this.expMonth && this.expMonth.length > 0) {
        requestBuffer += `<expmonth>${this.expMonth}</expmonth>`;
      }
      if (this.type && this.type.length > 0) {
        requestBuffer += `<type>${this.type}</type>`;
      }
      if (this.transId && this.transId.length > 0) {
        requestBuffer += `<transid>${this.transId}</transid>`;
      }
      if (this.member && this.member.length > 0) {
        requestBuffer += `<member>${this.member}</member>`;
      }
      if (this.amt && this.amt.length > 0) {
        requestBuffer += `<amt>${this.amt}</amt>`;
      }
      if (this.action && this.action.length > 0) {
        requestBuffer += `<action>${this.action}</action>`;
      }
      if (this.trackId && this.trackId.length > 0) {
        requestBuffer += `<trackid>${this.trackId}</trackid>`;
      }
      if (this.udf1 && this.udf1.length > 0) {
        requestBuffer += `<udf1>${this.udf1}</udf1>`;
      }
      if (this.udf2 && this.udf2.length > 0) {
        requestBuffer += `<udf2>${this.udf2}</udf2>`;
      }
      if (this.udf3 && this.udf3.length > 0) {
        requestBuffer += `<udf3>${this.udf3}</udf3>`;
      }
      if (this.udf4 && this.udf4.length > 0) {
        requestBuffer += `<udf4>${this.udf4}</udf4>`;
      }
      if (this.udf5 && this.udf5.length > 0) {
        requestBuffer += `<udf5>${this.udf5}</udf5>`;
      }
      if (this.currency && this.currency.length > 0) {
        requestBuffer += `<currencycode>${this.currency}</currencycode>`;
      }
      if (this.tokenFlg && this.tokenFlg.length > 0) {
        requestBuffer += `<tokenflag>${this.tokenFlg}</tokenflag>`;
      }
      if (this.tokenNumber && this.tokenNumber.length > 0) {
        requestBuffer += `<tokennumber>${this.tokenNumber}</tokennumber>`;
      }
      if (this.errorURL && this.errorURL.length > 0) {
        requestBuffer += `<errorURL>${this.errorURL}</errorURL>`;
      }
      if (this.responseURL && this.responseURL.length > 0) {
        requestBuffer += `<responseURL>${this.responseURL}</responseURL>`;
      }
        return requestBuffer;
    } catch (e) {
      console.error('Error in buildXMLRequest:', e.message);
      return null;
    }
  }

  async performTranPortalTransaction(request, webAddress) {
    webAddress += "/tranPipe.htm?param=tranInit";
    const tranType = "tran";
    console.log('performTranPortalTransaction webAddress:', webAddress);
    const response = await this.sendMessage(request, webAddress, tranType);
    return response;
  }

  async sendMessage(request, webAddress, tranType) {
    let contentType = "";

    if (tranType === "host") {
      contentType = "application/x-www-form-urlencoded";
    } else if (tranType === "tran") {
      contentType = "application/xml";
    }

    if (!webAddress || webAddress.length <= 0) {
      return null;
    }

    try {
      const response = await axios.post(webAddress, request, {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": contentType,
        },
        httpsAgent: new require('https').Agent({ rejectUnauthorized: true }), // Enforce SSL verification
      });

      return response.data;
    } catch (error) {
      console.error("Error in sendMessage:", error.message);
      return null;
    }
  }

  async parsePaymentResponse(response) {
    try {
      console.log('Response before processing:', response);
      const keyParser = new KeyStoreOab();

      response = await keyParser.decryptData(response, this.key);
      console.log('Response after decryption:', response);

      const resultMap = this.parseResponse(response);
      console.log('Parsed Result Map:', resultMap);

      await this.parseUrlParam(response);
      console.log('Parsed URL Parameters:', response);

      return this.setTransactionData(resultMap);
    } catch (e) {
      console.error('Error in Parsing Payment Response:', e.stack);
      this.error = "Internal Error: " + e.message;
      return -1;
    }
  }

  async parseUrlParam(trandata) {
    try {
      const splitData = await this.splitData(trandata);
      this.paymentId = splitData["paymentid"] || this.paymentId;
      this.result = splitData["result"] || this.result;
      this.udf1 = splitData["udf1"] || this.udf1;
      this.udf2 = splitData["udf2"] || this.udf2;
      this.udf3 = splitData["udf3"] || this.udf3;
      this.udf4 = splitData["udf4"] || this.udf4;
      this.udf5 = splitData["udf5"] || this.udf5;
      this.amt = splitData["amt"] || this.amt;
      this.auth = splitData["auth"] || this.auth;
      this.ref = splitData["ref"] || this.ref;
      this.transId = splitData["tranid"] || this.transId;
      this.date = splitData["postdate"] || this.date;
      this.trackId = splitData["trackId"] || this.trackId || splitData["trackid"];
      this.action = splitData["action"] || this.action;
      this.error = splitData["Error"] || this.error;
      this.tranDate = splitData["tranDate"] || this.tranDate;
      this.tranRequestDate = splitData["tranRequestDate"] || this.tranRequestDate;
      this.tranResponseDate = splitData["tranResponseDate"] || this.tranResponseDate;
      this.error_text = splitData["ErrorText"] || splitData["error_text"] || this.error_text;
      this.tokenCustomerId = splitData["tokencustid"] || this.tokenCustomerId;
    } catch (e) {
      console.error('Error in Parsing URL Parameters:', e.stack);
      return -1;
    }
    return 0;
  }

  parseResponse(response) {
    const maps = {};
    response = response.trim();

    if (!response || !response.startsWith("<")) {
      return null;
    }

    while (response.length > 0) {
      const startTag = response.match(/<([^>]+)>/);
      if (!startTag) break;

      const [fullTag, tagName] = startTag;
      const closeTagIndex = response.indexOf(`</${tagName}>`);
      if (closeTagIndex === -1) break;

      const value = response.substring(fullTag.length, closeTagIndex).trim();
      maps[tagName] = value;

      response = response.slice(closeTagIndex + fullTag.length + 1);
    }

    return maps;
  }

  async setTransactionData(resultMap) {
    try {
      if (resultMap) {
        this.error = resultMap["error"]?.trim() || this.error;
        this.paymentId = resultMap["paymentid"]?.trim() || this.paymentId;
        this.result = resultMap["result"]?.trim() || this.result;
        this.auth = resultMap["auth"]?.trim() || this.auth;
        this.ref = resultMap["ref"]?.trim() || this.ref;
        this.date = resultMap["postdate"]?.trim() || this.date;
        this.transId = resultMap["tranid"]?.trim() || this.transId;
        this.amt = resultMap["amt"]?.trim() || this.amt;
        this.trackId = resultMap["trackid"]?.trim() || this.trackId;
        this.udf1 = resultMap["udf1"]?.trim() || this.udf1;
        this.udf2 = resultMap["udf2"]?.trim() || this.udf2;
        this.udf3 = resultMap["udf3"]?.trim() || this.udf3;
        this.udf4 = resultMap["udf4"]?.trim() || this.udf4;
        this.udf5 = resultMap["udf5"]?.trim() || this.udf5;
        this.tranDate = resultMap["tranDate"]?.trim() || this.tranDate;
        this.tranRequestDate = resultMap["tranRequestDate"]?.trim() || this.tranRequestDate;
        this.tranRequestDate = resultMap["tranRequestDate"]?.trim() || this.tranRequestDate;
        this.error_service_tag = resultMap["error_service_tag"]?.trim() || this.error_service_tag;
        this.error_text = resultMap["error_text"]?.trim() || this.error_text;
        this.responseCode = resultMap["responsecode"]?.trim() || this.responseCode;
        this.tokenCustomerId = resultMap["tokencustid"]?.trim() || this.tokenCustomerId;
      } else {
        console.error("resultMap is null or undefined");
      }
    } catch (e) {
      console.error('Error in Setting Transaction Data:', e.stack);
      return -1;
    }
    return 0;
  }

  async splitData(trandata) {
    const splitData = {};
    const dataPairs = trandata.split("&");

    dataPairs.forEach(pair => {
      const [key, value] = pair.split("=");
      if (key && value) {
        splitData[key] = decodeURIComponent(value);
      }
    });

    return splitData;
  }
}

class KeyStoreOab {

  async execute(param) {
    const jarPath = './libfiles/iPayOABCryptix.jar'; // Path to your JAR file
    return new Promise((resolve, reject) => {
      exec(`java -jar ${jarPath} ${param}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing JAR file: ${error.message}`);
          return reject(error);
        }
        if (stderr) {
          console.error(`Error output: ${stderr}`);
          return reject(new Error(stderr));
        }
        resolve(stdout.trim());
      });
    });
  }

  async encryptData(data, key) {
    try {
      const param = `e ${key} "${data}"`;
      const result = await this.execute(param);
      console.log('Encrypted data:', result);
      return result;
    } catch (error) {
      console.error('Encryption failed:', error.message);
      return null;
    }
  }

  async decryptData(data, key) {
    try {
      const param = `d ${key} "${data}"`;
      const result = await this.execute(param);
      console.log('Decrypted data:', result);
      return result;
    } catch (error) {
      console.error('Decryption failed:', error.message);
      return null;
    }
  }
}
module.exports = iPayOabPipe;