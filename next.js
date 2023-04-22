var a =document.querySelectorAll(".main-content");

for(var i=0;i<a.length;i++){
    a[i].addEventListener("click",function(){
        this.classList.toggle("active");

    })
}