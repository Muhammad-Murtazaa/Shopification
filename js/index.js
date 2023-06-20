var typed = new Typed('#element', {
    strings: ['Unleash the Joy of Online Shopping!'],
    typeSpeed: 50,
});

// MenuToggle
var MenuItems=document.getElementById("MenuItems");
MenuItems.style.maxHeight="0px";

function menutoggle(){
    if(MenuItems.style.maxHeight=="0px")
    {
        MenuItems.style.maxHeight="200px";
    }
    else{
        MenuItems.style.maxHeight="0px";
    }
}