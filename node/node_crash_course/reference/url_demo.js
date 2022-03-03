const url = require('url');

const myUrl = new URL('http://mywebsite.com/helo.html?id=1006&status=active');

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString());
// host (ROOT DOMAIN)
console.log(myUrl.host);
// host (without port)
console.log(myUrl.hostname);
//path name
console.log(myUrl.pathname);
// search query
console.log(myUrl.search);
// params object
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));