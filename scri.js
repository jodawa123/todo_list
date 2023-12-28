document.addEventListener('DOMContentLoaded', function () {
    const images = ["gliter.jpg", "splash.jpg","many.jpg","nice.jpg","lights.jpg"];
    let currentImageIndex = 0;
    const imageElement = document.body;

    document.getElementById("nextImage").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.style.background = "url('" + images[currentImageIndex] + "') center/cover no-repeat";
    });

    document.getElementById("prevImage").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        imageElement.style.background = "url('" + images[currentImageIndex] + "') center/cover no-repeat";
    });
});

function fun() {
    const add = document.forms["myForm"]["new"].value;

    const tab = document.querySelector('table');
    const newrow = document.createElement('tr');
    newrow.style.backgroundColor = "pink";
    tab.append(newrow);

    const newline = document.createElement('td');
    newrow.append(newline);
    newline.innerText = add;

    const bt = document.createElement('BUTTON');
    newline.append(bt);
    bt.innerText = "Completed";

    const bt1 = document.createElement('BUTTON');
    newline.append(bt1);
    bt1.innerText = "Delete";

    var is = true;
    bt.addEventListener("click", complete);

    function complete() {
        if (is) {
            newrow.style.backgroundColor = "green";
        } else {
            newrow.style.backgroundColor = "pink";
        }
        is = !is;
    }

    bt1.addEventListener("click", deleted);

    function deleted() {
        newrow.remove();
    }
}