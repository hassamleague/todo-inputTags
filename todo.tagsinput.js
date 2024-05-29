
let main = document.getElementById("main")
let text = document.getElementById("text")
let submit = document.getElementById("submit")

submit.addEventListener("click",()=>{
  if(text.value==""){
alert('please enter something')
  }

  else{
    let footer = document.createElement('footer')
    footer.innerHTML=text.value
    main.appendChild(footer)
    let span = document.createElement('span')
    span.innerHTML="\u00d7"
    footer.appendChild(span)
    text.value=""
    span.addEventListener('click',()=>{
      footer.style.display="none"
    })

  }
})