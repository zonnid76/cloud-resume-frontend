function visitorCounter(){
    fetch("https://p1kjih5cp3.execute-api.us-east-1.amazonaws.com/visitorCounter")
        .then(response => response.text())
        .then((body) => {
            document.getElementById("visitor-counter").innerHTML=body
        })
}