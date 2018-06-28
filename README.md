# @thisisbarney/request

a toolbox of request methods, including request csv file, json file and binary blob.

## Installation

```shell
yarn add @thisisbarney/request
```

## Usage

```javascript
import { requestCSV } from '@thisisbarney/request';

requestCSV(url).then(([err, data]) => {});
```

or use `async/await`

```ecmascript 6
const [err, data] = await requestCSV(url);
```

