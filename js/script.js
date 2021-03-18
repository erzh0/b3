var clickNum = 0;

function myReadMoreFunction() {
    var firstElement = document.getElementById("myIdText");
    var secondElement = document.getElementById("myIdButton");
    if (clickNum % 2 == 0) {
        firstElement.classList.remove("less");
        firstElement.classList.add("more");

        secondElement.classList.remove("content__read-more");
    
        secondElement.classList.add("content__read-less");

        clickNum = 1;

    } else {
        firstElement.classList.remove("more");
        firstElement.classList.add("less");
    
        secondElement.classList.remove("content__read-less");

        secondElement.classList.add("content__read-more");

        clickNum = 0;
    }
}