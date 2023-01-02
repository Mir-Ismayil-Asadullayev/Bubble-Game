let input = document.getElementById("name");
let start = document.getElementById("start");

start.addEventListener("click", () => {
    localStorage.setItem("ad", input.value);
})
