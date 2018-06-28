import {
  csv as d3CSV,
  json as d3JSON,
  tsv as d3TSV,
  text as d3TEXT,
  xml as d3XML,
  html as d3HTML,
} from 'd3-request';

const requestTemplate = callback => url => new Promise((resolve, reject) => {
  callback(url, (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

export const requestCSV = requestTemplate(d3CSV);
export const requestTSV = requestTemplate(d3TSV);
export const requestJson = requestTemplate(d3JSON);
export const requestText = requestTemplate(d3TEXT);
export const requestXml = requestTemplate(d3XML);
export const requestHtml = requestTemplate(d3HTML);

export const requestBlob = url => new Promise((resolve, reject) => {
  fetch(url)
    .then(res => res.arrayBuffer())
    .then(blob => {
      resolve(blob);
    })
    .catch(reason => {
      reject(reason);
    });
});
