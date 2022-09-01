var col = ["red", "green", "blue", "yellow", "orange"];

let onChangeColor = () =>{
    
    document.body.style.backgroundColor=col[Math.floor(Math.random() * 5)];

}

