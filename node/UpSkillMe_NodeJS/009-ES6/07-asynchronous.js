/**
 * Additional notes on the course
 * UpSkillMe_Node.js. JavaScript Basics
 * https://www.linkedin.com/learning/learning-ecmascript-6-plus-es6-plus/building-promises?autoplay=true&resume=false&u=106534538
 * Completed by Arkadii Semenov on 2022.12.21
 * 
 * Promises are working as a simplification for multiple callbacks.
 * Instead of xml requests, we can use fetch fuction.
 * 
 * Stay tuned about the latest features from TC39 comitte
 * 
 * */

const delay = (seconds) =>
  new Promise((resolve, reject) => {
    if(typeof seconds === "Number") {
      setTimeout(resolve, seconds * 1000);
    } else {
      reject(Error("Should be a number"));
    }
  });

delay(1)
  .then(() => console.log("1 second"));

delay(2)
  .then(() => console.log("2 seconds"));

delay("2")
  .then(() => console.log("2 seconds"))
  .catch((err) => console.error(err));

const spacePeople = () => {
  return new Promise((res, rej) => {
    const api = "https://api.open-notify.org/astros.json";
    const req = new XMLHttpRequest();
    req.open("GET", api);
    req.onload = () => {
      if(req.status === 200) {
        res(JSON.parse(req.response));
      } else {
        rej(Error(req.statusText));
      }
    };
    req.onerror = (err) => rej(err);
    req.send();
  });
}

// spacePeople().then(
//   (spacedata) => console.log(spacedata),
//   (err) => console.error(err)
// );


fetch(
  "https://api.open-notify.org/astros.json"
) .then((res) => res.json())
  .then((people) => people.map((p) => p.name))
  .then((names) => names.join(", "))
  .then(console.log) // here we can use a shorthand because we repeat the parameters, so we can just pass a function

const githubRequest = async (login) => { // example of async/await with fetch
  let response = await fetch(
    `https://api.github.com/users/${login}`
  );
  let json = await response.json();
  let summary = `${json.name} ${json.company}`;
  console.log(summary);
}

githubRequest("moontahoe");
