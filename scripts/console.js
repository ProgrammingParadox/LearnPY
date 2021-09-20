window.onload = function() {
    var csle = document.getElementById('console')
    if (csle.innerHTML != ''){
        csle.innerHTML = '>>> '
    }
    var inp = document.createElement('input')
    inp.value = '>>> '
    inp.className = 'code-input'
    csle.appendChild(inp)
}


function runConsole(e) {
    if (e.keyCode == 'Enter'){
        var inp = document.getElementsByClassName('code-input')[0].value
        var result = run(inp)
        var p = csle.createElement('p')
        p.innerHTML = result
        var i = document.createElement('input')
        i.value = '>>> '
        i.className = 'code-input'
        csle.appendChile(p)
        csle.appendChild(i)
    }
}

console.log(document.getElementsByClassName('code-input'))
var inp = document.getElementsByClassName('code-input')

inp[0].addEventListener('keyup', function(e){
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter'){
        console.log('value')
        // var inp = document.getElementsByClassName('code-input')[-1].innerHTML
        // var result = run(inp)
        // var p = csle.createElement('p')
        // p.innerHTML = result
        // var i = document.createElement('input')
        // i.innerHTML = '>>> '
        // i.classname = 'code-input'
        // csle.appendChile(p)
        // csle.appendChild(i)
    }
  }
)

