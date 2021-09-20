function read(x){
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined){
        throw "File not found: '" + x + "'";
    }
    
    return Sk.builtinFiles["files"][x];
}

function run(code) {
    var o = document.getElementById('editor-output');
    var t = document.createElement("p");

    Sk.configure({
        output: function(x){ 
            t.textContent = ">>> " + x;

            o.appendChild(t);
        },
        read: read
    });
    
    try {
        Sk.importMainWithBody("<stdin>", false, code);
    } catch (e) {
        console.error(e.toString());
    }
}
