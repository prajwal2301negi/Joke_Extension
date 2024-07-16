const getJokes = async()=>{
    try{
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        const myJoke = document.querySelector("#myJoke");
        myJoke.innerHTML = data.value;
    }
    catch(error){
        console.log(error)
    }
}
window.addEventListener("load",()=>{
    getJokes();
})