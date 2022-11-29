const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const btns = document.querySelectorAll("input");
const space = document.querySelector("#space")


btns.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        btn.classList.toggle("in")
        setTimeout(()=>{
            btn.classList.remove("in")
        }, 100)
    })
})

    function disp(result){
    form.textarea.value = form.textarea.value + result
        
    };
    space.addEventListener("click", ()=>{
        form.textarea.value += " ";
    })
    textarea.addEventListener("dblclick", ()=>{
        form.textarea.value = " ";
    })


