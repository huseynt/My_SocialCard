// const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 

// document.body.style.setProperty('background', randomColor);



timer = setInterval( function() {
    
    var randomColor = 'rgb(' + 256 + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    
    document.body.style.setProperty('background', randomColor);
    
}, 2500);