const faker = require('faker');
const moment = require('moment');
const fastcsv = require('fast-csv');
const fs = require('fs');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'locale', type: String, defaultValue: "en_US" },
  { name: 'number', type: String, defaultValue: 100  }
]

const options = commandLineArgs(optionDefinitions);

faker.locale = options.locale;

const records = [];

for (let i = 0; i < options.number; i++) {
  records.push({
    "type": "Application",
    "name": "AP"+faker.random.number(),
    "dc:created": faker.date.past(0.3).toISOString(),
    "applicant:firstname": faker.name.firstName(),
    "applicant:lastname": faker.name.lastName(),
    "applicant:gender": faker.random.arrayElement(["man","woman"]),
    "applicant:birthdate": faker.date.past().toISOString(),
    "applicant:home_address": JSON.stringify({
      postalcode: faker.address.zipCode(),
      city: faker.address.city(),
      prefecture: faker.address.state(),
      line1: faker.address.streetName()
    }),
    "applicant:email": "nuxeo.home.loan@gmail.com",
    "applicant:phone_number": faker.phone.phoneNumber(),
    "applicant:occupation": faker.random.arrayElement(["employee","public_servant","executive","freelancer","other"]),
    "applicant:employment_type": faker.random.arrayElement(["permanent","contract","other"]),
    "applicant:employment_duration": faker.random.number({min:1,max:40,precision:1}),
    "applicant:employer_name": faker.company.companyName(),
    "applicant:employer_address": JSON.stringify({
      postalcode: faker.address.zipCode(),
      city: faker.address.city(),
      prefecture: faker.address.state(),
      line1: faker.address.streetName()
    }),
    "propertyd:additional_costs": faker.random.number({min:1000000,max:1000000000,precision:100}),
    "propertyd:address": JSON.stringify({
      postalcode: faker.address.zipCode(),
      city: faker.address.city(),
      prefecture: faker.address.state(),
      line1: faker.address.streetName()
    }),
    "propertyd:property_type": faker.random.arrayElement(["apartment","detached_house"]),
    "propertyd:purchase_price": faker.random.number({min:1000000,max:1000000000,precision:100}),
    "propertyd:own_funds": faker.random.number({min:1000000,max:1000000000,precision:100}),
    "propertyd:purchase_date": faker.date.future().toISOString(),
    "loan:amount":faker.random.number({min:1000000,max:1000000000,precision:100}),
    "loan:term":faker.random.number({min:10,max:40,precision:1}),
    "loan:borrowing_date": faker.date.future().toISOString(),
    "loan:interest_type": faker.random.arrayElement(["floating","fixed"]),
    "loan:purpose": faker.random.arrayElement(["purchase_new","purchase_used","refinance","construct"]),
    "loan:selling_and_buying": faker.random.boolean(),
    "application:demo":true,
    "application:format": faker.random.arrayElement(["digital","paper"]),
    "application:type": faker.random.arrayElement(["preapproval","regular"])
  })
}

//console.log(records);

const ws = fs.createWriteStream("out.csv");
fastcsv
  .write(records, {
    headers: true,
    quoteColumns: true
  })
  .pipe(ws);
