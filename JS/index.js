console.log("Fake API Fetching");
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(result => {
        for (let x of result) {
            console.log(x.title);
        }
        console.log(result)
    })
    .catch(err => console.log(err))

