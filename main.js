let lists = document.getElementsByClassName("list")
    let card1Box = document.getElementById("card1")
    let card2Box = document.getElementById("card2")
    let card3Box = document.getElementById("card3")

    for (list of lists){
      list.addEventListener("dragstart", function(e){
        let selected = e.target

        card1Box.addEventListener("dragover", function(e){
          e.preventDefault()
        })
        card1Box.addEventListener("drop", function(e){
          card1Box.appendChild(selected)
          selected = null
        })

        card2Box.addEventListener("dragover", function(e){
          e.preventDefault()
        })
        card2Box.addEventListener("drop", function(e){
          card2Box.appendChild(selected)
          selected = null
        })

        card3Box.addEventListener("dragover", function(e){
          e.preventDefault()
        })
        card3Box.addEventListener("drop", function(e){
          card3Box.appendChild(selected)
          selected = null
        })
      })
    }