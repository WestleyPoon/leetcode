const run = function(num){
    var script = document.createElement("script");
    script.src = `./problems/${num}.js`;
    document.head.appendChild(script);
    return `running ${num}`;
};