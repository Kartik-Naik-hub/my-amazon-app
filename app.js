const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn= document.querySelector("#btn");
const getFacts = async() => {
    console.log ("fetching data");
    let response= await fetch(URL);
    console.log(response);
    let data= await response.json();
    factPara.innerText=data.fact;
};
btn.addEventListener("click", getFacts);