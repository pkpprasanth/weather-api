const btn = document.querySelector('#btnGet');
const msg = document.querySelector('#message');
btn.onclick = function () {
const promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
  
    request.open('GET', 'https://api.icndb.com/jokes/random');
    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response); // we got data here, so resolve the Promise
      } else {
        reject(Error(request.statusText)); // status is not 200 OK, so reject
      }
    };
  
    request.onerror = () => {
      reject(Error('Error fetching data.')); // error occurred, reject the  Promise
    };
  
    request.send(); // send the request
  });
  
  console.log('Asynchronous request made.');
  
  promise.then((data) => {
    console.log('Got data! Promise fulfilled.');
    const result = JSON.parse(data).value.joke;
    msg.innerHTML = result;
  }, (error) => {
    console.log('Promise rejected.');
    console.log(error.message);
  });
}