import { csv as d3CSV, json as d3JSON } from 'd3-request';

export const requestCSV = url => new Promise((resolve, reject) => {
  d3CSV(url, (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

export const requestJson = url => new Promise((resolve, reject) => {
  d3JSON(url, (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

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
