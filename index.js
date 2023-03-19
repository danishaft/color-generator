const colorSeed = document.getElementById('color-wheel')
const colorSelect = document.getElementById('color-select')
const colorBtn = document.getElementById('color-btn')
const colorBoxContainer = document.getElementById('color-palletes')
const colorCode = document.getElementById('color-code')
let colorArr = []

document.getElementById("color-form").addEventListener('submit', getColor)

function getColor(e) {
    e.preventDefault()
    let modeSelected = colorSelect.options[colorSelect.selectedIndex].text.toLowerCase()
    let colorHex = colorSeed.value.substring(1).toUpperCase()
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${modeSelected}&count=5`)
    .then((res) => res.json())
    .then((data)=>{
        //console.log(data.colors[0].hex.value)
        colorArr = data.colors.map((obj)=>{
            return obj.hex.value
        })
            console.log(colorArr)
         //getting the box colors
        let boxes = colorArr.map((color)=>{
        return `<div class="pallete col-lg" style="background: ${color};"></div>`
        }).join('')
        colorBoxContainer.innerHTML = boxes

        // getting hex code text
        let hex = colorArr.map((color)=>{
         return `
            <span class="hex col-lg"><p class="text-center">${color}</p></span>`
        }).join('')
        colorCode.innerHTML = hex
    })
}

