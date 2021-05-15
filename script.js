function translateFun(){

    // Rules:
    // X = unetos
    // N = 72
    // A = akka
    // O = ula

    let inputText = document.getElementById("inputText").value

    console.log(inputText)

    if (getValueById("radioSpanish")) {
        
        if(getValueById("box72")){
            inputText = inputText.replace(/[nN]/g,"72")
        }

        if(getValueById("boxAkka")){
            inputText = inputText.replace(/a/g,"akka")
            inputText = inputText.replace(/A/g,"Akka")
        }

        if(getValueById("boxUla")){
            inputText = inputText.replace(/o/g,"ula")
            inputText = inputText.replace(/O/g,"Ula")
        }

        if(getValueById("boxUentos")){
            inputText = inputText.replace(/x/g,"uentos")
            inputText = inputText.replace(/X/g,"Uentos")
        }

    } else if (getValueById("radioOinecs")) {
        
        
        if(getValueById("box72")){
            inputText = inputText.replace(/72/g,"n")
        }

        if(getValueById("boxAkka")){
            inputText = inputText.replace(/akka/g,"a")
            inputText = inputText.replace(/Akka/g,"A")
        }

        if(getValueById("boxUla")){
            inputText = inputText.replace(/ula/g,"o")
            inputText = inputText.replace(/Ula/g,"O")
        }

        if(getValueById("boxUentos")){
            inputText = inputText.replace(/uentos/g,"x")
            inputText = inputText.replace(/Uentos/g,"X")
        }
    }

    document.getElementById("outputText").innerHTML = inputText
}


function getValueById (Id) {
    return document.getElementById(Id).checked
}