// Make a button appear on the page when it's first loaded. 
// The button cannot already be in your html. 
// When the button is clicked, you should display an Alert box with any (nice) message.

let button = document.createElement("button");
button.innerHTML = "Button";

let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
    alert("Make it so!");
})

// Make a button and text box (you can just put them in your HTML). 
// When the button is clicked, display an alert with the message 
// that is typed in the text box.

function myFunction() {

    let x = document.createElement("TEXTAREA");
    let t = document.createTextNode("");
    x.appendChild(t);
    document.body.appendChild(x);

    x.id = 'mytext';

    let textbutton = document.createElement("button");
    textbutton.innerHTML = "Text Alert";

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(textbutton);

    textbutton.addEventListener("click", function () {
        let w = document.getElementById("mytext").value;
        alert(w);
    })

}

myFunction();

// Create a div in HTML. Without using CSS :hover, 
// make the div change to a different background color 
// when your mouse hovers over it. The div should return 
// to its original color when the mouse exits the div.

let d = document.createElement("div");
let a = document.createTextNode("div space");
d.appendChild(a);
document.body.appendChild(d);
d.id = "foo";
d.style.margin = "1em";


let myDiv = document.getElementById("foo");

myDiv.onmouseenter = function (event) {
    if (this == event.currentTarget) {
        document.getElementById("foo").style.backgroundColor = "lightblue";
    }
}

myDiv.onmouseleave = function (event) {
    if (this == event.currentTarget) {
        document.getElementById("foo").style.backgroundColor = "white";
    }

}

// Put some text in a paragraph. Make it where when you click on the paragraph, 
// the color of the text switches to red. Once you get that working, 
// try to rewrite your code to make it switch to a random color 
// each click (you don't have to show the code for 
// just red once you get random working).

let p = document.createElement("p");
let z = document.createTextNode("p text");
p.appendChild(z);
document.body.appendChild(p);
d.style.margin = "1em";
p.id = "color"

console.log(z);
p.style.color = "green";
p.style.fontSize = "3em";

p.addEventListener("click", function () {
    let allchar = "0123456789ABCDEF";
    let randcol = "";

    for (let i = 0; i < 6; i++) {
        randcol += allchar[Math.floor(Math.random() * 16)];
    }

    p.style.color = "#" + randcol;

})

// Add a button and an empty div. When the button is clicked, 
// add a span that contains your name to the empty div.

let emptyButton = document.createElement("button");
let emptyButtonText = document.createTextNode("My Name Button");
let emptyDIV = document.createElement("emptyDIV");

document.body.appendChild(emptyDIV);

emptyButton.appendChild(emptyButtonText);
let emptybody = document.getElementsByTagName("body")[0];
document.body.appendChild(emptyButton);

emptyButton.addEventListener("click", function () {
    let span = document.createElement("span");
    let spanText = document.createTextNode("Walt");

    span.appendChild(spanText);
    emptyDIV.appendChild(span);
})

// Create a button and a ul in your HTML. In JavaScript, create an array 
// containing the names of your friends (at least 10. 
// If you don't have that many, include your imaginary ones). 
// When the button is clicked, add each friend's name as an li to the ul on the page.

let friendButton = document.createElement("button");
let friendButtonText = document.createTextNode("Friend Button");
let ul = document.createElement("ul");
let num = 0;

friendButton.appendChild(friendButtonText);
document.body.appendChild(ul);
document.body.appendChild(friendButton);

friendButton.addEventListener("click", function () {
    let friends = ['Black', 'Blue', 'Red', 'Orange', 'Yellow', 'White', 'Green', 'Pink', 'Gold', 'Silver'];
    let li = document.createElement("li");

    if (num < friends.length) {
        let friendName = document.createTextNode(friends[num]);
        li.appendChild(friendName);
        num++;
        ul.appendChild(li);
    }
});