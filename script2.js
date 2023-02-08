// callbacks

function loadScript(src , callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload= () => {
        console.log(`Loaded Script ${src}`)
        callback(null,src)
    }
    script.onerror= () => {
        console.log(`Loaded Script ${src}`)
        callback(error,src)
    }
    document.body.appendChild(script);
}

function hello(error , src) {
    console.log("Hello World" + src);
    if(error){
        console.log("gh");
        return
    }
}
function bye() {
    console.log("Bye World");
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" , hello)