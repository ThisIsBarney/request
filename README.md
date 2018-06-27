# @thisisbarney/request

a toolbox of request methods, including request csv file, json file and binary blob.

```javascript
import { requestCSV } from '@thisisbarney/request';

requestCSV(url).then(data => {});
```

or use `async/await`

```javascript
const data = await requestCSV(url);
```

