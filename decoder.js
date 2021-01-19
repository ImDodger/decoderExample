let letterRip = [
    {hex:"20", plain:" "},
    {hex:"21", plain:"!"},
    {hex:"22", plain:"\""},
    {hex:"23", plain:"#"},
    {hex:"24", plain:"$"},
    {hex:"25", plain:"%"},
    {hex:"26", plain:"&"},
    {hex:"27", plain:"\'"},
    {hex:"28", plain:"("},
    {hex:"29", plain:")"},
    {hex:"2A", plain:"*"},
    {hex:"2B", plain:"+"},
    {hex:"2C", plain:","},
    {hex:"2D", plain:"-"},
    {hex:"2E", plain:"."},
    {hex:"30", plain:"0"},
    {hex:"31", plain:"1"},
    {hex:"32", plain:"2"},
    {hex:"33", plain:"3"},
    {hex:"34", plain:"4"},
    {hex:"35", plain:"5"},
    {hex:"36", plain:'6'},
    {hex:"37", plain:"7"},
    {hex:"38", plain:"8"},
    {hex:"39", plain:"9"},
    {hex:"3F", plain:"?"},
    {hex:"41", plain:"A"},
    {hex:"42", plain:"B"},
    {hex:"43", plain:"C"},
    {hex:"44", plain:"D"},
    {hex:"45", plain:"E"},
    {hex:"46", plain:"F"},
    {hex:"47", plain:"G"},
    {hex:"48", plain:"H"},
    {hex:"49", plain:"I"},
    {hex:"4A", plain:"J"},
    {hex:"4B", plain:"K"},
    {hex:"4C", plain:"L"},
    {hex:"4D", plain:"M"},
    {hex:"4E", plain:"N"},
    {hex:"4F", plain:"O"},
    {hex:"50", plain:"P"},
    {hex:"51", plain:"Q"},
    {hex:"52", plain:"R"},
    {hex:"53", plain:"S"},
    {hex:"54", plain:"T"},
    {hex:"55", plain:"U"},
    {hex:"56", plain:"V"},
    {hex:"57", plain:"W"},
    {hex:"58", plain:"X"},
    {hex:"59", plain:"Y"},
    {hex:"5A", plain:"Z"},
    {hex:"61", plain:"a"},
    {hex:"62", plain:"b"},
    {hex:"63", plain:"c"},
    {hex:"64", plain:"d"},
    {hex:"65", plain:"e"},
    {hex:"66", plain:"f"},
    {hex:"67", plain:"g"},
    {hex:"68", plain:"h"},
    {hex:"69", plain:"i"},
    {hex:"6A", plain:"j"},
    {hex:"6B", plain:"k"},
    {hex:"6C", plain:"l"},
    {hex:"6D", plain:"m"},
    {hex:"6E", plain:"n"},
    {hex:"6F", plain:"o"},
    {hex:"70", plain:"p"},
    {hex:"71", plain:"q"},
    {hex:"72", plain:"r"},
    {hex:"73", plain:"s"},
    {hex:"74", plain:"t"},
    {hex:"75", plain:"u"},
    {hex:"76", plain:"v"},
    {hex:"77", plain:"w"},
    {hex:"78", plain:"x"},
    {hex:"79", plain:"y"},
    {hex:"7A", plain:"z"}
]

function charToHex(msg){
    let myMsg = msg.join("");
    return `${msg} is the message`;
};

function initActions(){
    let encoderBtn = document.querySelector("#encoderBtn");
    let encoderInput = document.querySelector("#encoderEntry");
    let encoderDisplay = document.querySelector("#encoderOutput");

    encoderBtn.addEventListener("click", e =>{
        // Split every character from our input window
        let msg = encoderInput.value.split("");
        console.log(msg);
        // Set the display of the encode to the output of charToHex
        encoderDisplay.innerText = charToHex(msg);
    });
};
initActions();