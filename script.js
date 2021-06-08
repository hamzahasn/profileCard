const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const color = e.currentTarget.classList;

        if(color.contains("btn1")){
            theme.style.setProperty("--theme-color", "#755faa");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty("--theme-color", "#14131a");
        }
        else if(color.contains("btn3")){
            theme.style.setProperty("--theme-color", "#C1CDAD");
        }
        else if(color.contains("btn4")){
            theme.style.setProperty("--theme-color", "#D1B857");
        }
        else{
            theme.style.setProperty("--theme-color", "#ff1756");
        }
    });
});