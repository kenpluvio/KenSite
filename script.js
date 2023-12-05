const endOfED = document.querySelector("#main-content");
const connectBtn = document.querySelector("#ConnectMe");

class textArea {
    constructor(
        name,
        id,
        rows,
        cols,
        placeholder,
        hidden,
        exist
    ) {
        this.name = name;
        this.id = id;
        this.rows = rows;
        this.cols = cols;
        this.placeholder=placeholder;
        this.hidden = hidden;
        this.exist = exist;
    }
}

const newCMArea = new textArea("textArea", "textArea", 4, 50, "Working on it!", true, false);

const commentArea = document.createElement("div");
commentArea.setAttribute("id", "commentArea");
commentArea.setAttribute("style", "display: none");
commentArea.innerHTML= `
    <label for=${newCMArea.name}>Enter Text:</label>
    <textarea id=${newCMArea.id} name=${newCMArea.name} rows=${newCMArea.rows} cols=${newCMArea.cols} placeholder="${newCMArea.placeholder}"></textarea>
`;

connectBtn.addEventListener("click",()=>{
    // let newCMAreaObject = document.querySelector(newCMArea.id)
    if (newCMArea.exist === false) {
        endOfED.append(commentArea);
        newCMArea.exist = true;
    }
    if (newCMArea.hidden === true) {
        commentArea.style.display = "block";
        //move to the window of commentArea
        commentArea.scrollIntoView({ behavior: "smooth" });
        newCMArea.hidden = false;
    } else {
        commentArea.style.display = "none";
        newCMArea.hidden = true;
    }
},false);
