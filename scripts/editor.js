var editor = CodeMirror(document.getElementById("editor-holder"), {
    value: "print('Hello World!')",

    theme: "dream",

    mode: "python",

    autoRefresh: true,

    lineNumbers: true,
});

var runCode = document.getElementById("run-code");
runCode.addEventListener("click", function(event){
    run(editor.getValue());
});

