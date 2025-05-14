fetch(`https://jsonplaceholder.typicode.com/photos`)
.then(response => response.json())
.then(user => console.log(user))