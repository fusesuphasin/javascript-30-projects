const click = document.querySelector('#click');
const dbclick = document.querySelector('#dbclick');
const contextmenu = document.querySelector('#contextmenu');
const mouseover = document.querySelector('#mouseover');
const mouseleave = document.querySelector('#mouseleave');
const wheel = document.querySelector('#wheel');
const select = document.querySelector('#select');
const reset = document.querySelector('#reset');
const clickCode = document.querySelector('#click-code');
const mouseoverCode = document.querySelector('#mouseover-code');
const dbclickCode = document.querySelector('#dbclick-code');
const contextmenuCode = document.querySelector('#contextmenu-code');
const mouseleaveCode = document.querySelector('#mouseleave-code');
const wheelCode = document.querySelector('#wheel-code');
const selectCode = document.querySelector('#select-code');

function resetPage() {
    const buttons = document.querySelectorAll('button');
    const codes = document.querySelectorAll('code');
    const textarea = document.querySelector('textarea');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = "";
        codes[i].style.display = "none";
    }
    window.getSelection().removeAllRanges();
    textarea.className = "";
}

function displayCode(code, button) {
    code.style.display = "block";
    button.className = "clicked";
}

click.addEventListener("click", function() {
    displayCode(clickCode, click);
});

dbclick.addEventListener("dblclick", function() {
    displayCode(dbclickCode, dbclick);
});

contextmenu.addEventListener("contextmenu", function(e) {
    displayCode(contextmenuCode, contextmenu);
    e.preventDefault();
});

mouseover.addEventListener("mouseover", function() {
    displayCode(mouseoverCode, mouseover);
});

mouseleave.addEventListener("mouseleave", function() {
    displayCode(mouseleaveCode, mouseleave);
});

wheel.addEventListener("wheel", function() {
    displayCode(wheelCode, wheel);
});

select.addEventListener("select", function() {
    displayCode(selectCode, select);
});

reset.addEventListener("click", resetPage);