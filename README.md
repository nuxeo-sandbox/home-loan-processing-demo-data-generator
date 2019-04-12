## Description
This repository contains a node scripts to generate data for the home loan application processing demo built.

Random data are generated with [faker.js](https://github.com/marak/Faker.js/).

## Important Note

**These features are not part of the Nuxeo Production platform.**

These solutions are provided for inspiration and we encourage customers to use them as code samples and learning resources.

This is a moving project (no API maintenance, no deprecation process, etc.) If any of these solutions are found to be useful for the Nuxeo Platform in general, they will be integrated directly into platform, not maintained here.

## How to build
Building requires the following software:
- git
- node
- npm

```
git clone https://github.com/nuxeo-sandbox/home-loan-processing-demo-data-generator
cd home-loan-processing-demo-data-generator
```

## Run
```
node index.js --locale="ja" --number=1000
```

## Import
Use The Nuxeo Platform CSV importer with the file out.csv generated by the node script. You must be logged with an administrator account in order to set the dublincore properties


## Known limitations
This plugin is a work in progress.

## About Nuxeo
Nuxeo dramatically improves how content-based applications are built, managed and deployed, making customers more agile, innovative and successful. Nuxeo provides a next generation, enterprise ready platform for building traditional and cutting-edge content oriented applications. Combining a powerful application development environment with SaaS-based tools and a modular architecture, the Nuxeo Platform and Products provide clear business value to some of the most recognizable brands. More information is available at [www.nuxeo.com](http://www.nuxeo.com).