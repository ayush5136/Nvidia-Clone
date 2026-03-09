let selectTheme = document.querySelector(`#theme`)

selectTheme.addEventListener(`change`,function(){
    if(this.value ===`Dark`){
        document.body.style.backgroundColor=`black`;
        document.body.style.color=`white`;
    }
    else if(this.value ===`Light`){
        document.body.style.backgroundColor=`white`;
        document.body.style.color=`black`;
    }   
    
    
    
});
