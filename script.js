let main=document.querySelector("main")
let classNameArray = ["img1", "img2", "img3", "img4", "img5"]

let randomIndex = Math.floor(Math.random() * classNameArray.length)

classNameArray.push(classNameArray[randomIndex])
classNameArray.sort(() => Math.random() - 0.5)

let h1 = document.createElement("h1")
h1.innerText = "I'm not a robot"
main.append(h1)

for (let t of classNameArray) {
    let img = document.createElement("img")
    img.className = t
    main.append(img)
    img.addEventListener("click", verifyRobot)
    // innerHeight.addEventListener("click", reset)

}
h3 = document.createElement("h3")
h3.innerText = "Please click on the identical tiles to verify that you are not a robot."
h3.setAttribute("id", "h")
main.append(h3)

function verifyRobot(e) {
    let clickedImage = e.target
    if (clickedImage.getAttribute("data-status") === "clicked") {
        return;
    }
    console.log("hello")
    clickedImage.setAttribute("data-status","clicked")
    clickedImage.classList.add("selected")

    
    if (document.getElementById("reset") == null) {
        let btn = document.createElement("button")
        btn.innerText = "Reset"
        btn.setAttribute("id", "reset")
        btn.addEventListener("click", reset)
        main.append(btn)
    }

    if(document.querySelectorAll(".selected").length === 2){
    
        let btn = document.createElement("button")
        btn.innerText = "verify"
        btn.setAttribute("id", "verify")
        btn.addEventListener("click", verify)
        main.append(btn)  
    }
    if(document.querySelectorAll(".selected").length>2){
        let btn = document.getElementById("verify")
        btn.style.display="none"
        }
      
}
    
function reset() {
    let selectedImage = document.querySelectorAll(".selected")
    for (let t of selectedImage) {
        t.classList.remove("selected")
        t.removeAttribute("data-status")
    }
    let resetBtn = document.getElementById("reset")
    resetBtn.remove()
    let verifyBtn = document.getElementById("verify")
    if (verifyBtn) {
        verifyBtn.remove()
    }
    let para = document.querySelector("p")
    if (para) {
        para.remove()
    }
}
function verify(e) {
    let para = document.createElement("p")
    para.setAttribute("id", "para")
    let selectedImage = document.querySelectorAll(".selected")
    if (selectedImage[0].classList[0] === selectedImage[1].classList[0]) {
        para.innerText ="You are a human. Congratulations!"
    } else {
        para.innerText ="We can't verify you as a human. You selected the non-identical tiles."
    }
    main.append(para)
e.target.remove()



 }
