const { expect } = require('chai');
const request = require('request');
const { urlUnderTest } = require('../config.json');

describe(`Test run for ${urlUnderTest}`, () => {
  it('Asserts the total from 10-12-2017 for 20 days is $2.45', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '10-12-2017' + '&numberOfDays=' + 20,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$2.45'); //2*0.1(10/12,10/13)+5*0.15(10/16-10/20)+5*0.2(10/23-10/27)+2*0.25(10/30,10/31)
        done();
      }
    );
  });
  it('Asserts the total from 01-01-2018 for 1 day is $0.05', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '01-01-2018' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.05');
        done();
      }
    );
  });
  it('Asserts the total from 01-08-2018 for 1 day is $0.10', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '01-08-2018' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.10');
        done();
      }
    );
  });
  it('Asserts the total from 01-08-2018 for 1 day is $0.15', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '01-15-2018' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.15');
        done();
      }
    );
  });
  it('Asserts the total from 01-22-2018 for 1 day is $0.20', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '01-22-2018' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.20');
        done();
      }
    );
  });
  it('Asserts the total from 01-29-2018 for 1 day is $0.25', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '01-29-2018' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.25');
        done();
      }
    );
  });
  it('Asserts the total from 01-31-2018 for 1 day is $0.25', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '01-31-2018' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.25');
        done();
      }
    );
  });
  it('Asserts the total from 01-01-2017 for 365 days is $35.25', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '01-01-2018' + '&numberOfDays=' + 365,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$35.25');
        done();
      }
    );
  });
  it('Asserts the total from 10-02-2017 for 1 day (a monday) is $0.05', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '10-02-2017' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.05');
        done();
      }
    );
  });
  it('Asserts the total from 10-03-2017 for 1 day (a tuesday) is $0.05', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '10-03-2017' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.05');
        done();
      }
    );
  });
  it('Asserts the total from 10-04-2017 for 1 day (a wednesday) is $0.05', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '10-04-2017' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.05');
        done();
      }
    );
  });
  it('Asserts the total from 10-05-2017 for 1 day (a thursday) is $0.05', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '10-05-2017' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.05');
        done();
      }
    );
  });
  it('Asserts the total from 10-06-2017 for 1 day (a friday) is $0.05', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '10-06-2017' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.05');
        done();
      }
    );
  });
  it('Asserts the total from 10-14-2017 for 1 day (a saturday) is $0.00', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '10-14-2017' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.00');
        done();
      }
    );
  });
  it('Asserts the total from 10-14-2017 for 1 day (a sunday) is $0.00', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '10-15-2017' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.00');
        done();
      }
    );
  });
  it('Asserts the total from 10-14-2017 for 2 days (a weekend) is $0.00', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest + '/?startDate=' + '10-14-2017' + '&numberOfDays=' + 1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body.totalCost).to.equal('$0.00');
        done();
      }
    );
  });
  it('Asserts the return of a 400 when missing the date', done => {
    request.get(
      { json: true, url: urlUnderTest + '/?startDate=' + '&numberOfDays=' + 1 },
      (error, response, body) => {
        expect(response.statusCode).to.equal(400);
        done();
      }
    );
  });
  it('Asserts the return of a 400 when missing the days', done => {
    request.get(
      {
        json: true,
        url: urlUnderTest + '/?startDate=' + '01-01-2018' + '&numberOfDays=',
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(400);
        done();
      }
    );
  });
  it('Asserts the return of a 400 when missing the date and days', done => {
    request.get(
      { json: true, url: urlUnderTest + '/?startDate=' + '&numberOfDays=' },
      (error, response, body) => {
        expect(response.statusCode).to.equal(400);
        done();
      }
    );
  });
  it('Asserts the return of a 400 when the start date is an invalid string', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest +
          '/?startDate=' +
          'lkjsdlkjfsldk' +
          '&numberOfDays=' +
          1,
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(400);
        done();
      }
    );
  });
  it('Asserts the return of a 400 when the days string is an invalid string', done => {
    request.get(
      {
        json: true,
        url:
          urlUnderTest +
          '/?startDate=' +
          '01-01-2018' +
          '&numberOfDays=' +
          'sdlkfjsdl',
      },
      (error, response, body) => {
        expect(response.statusCode).to.equal(400);
        done();
      }
    );
  });
});
