console.log(window.innerWidth);
console.log(window.innerHeight);

var leftB = document.getElementById('left');
var rightB = document.getElementById('right');

const imageNames = ["dims.jpg", "Incineroar.png", "smashChars.png", "SmashScreen.jpg", "SmashScreen2.jpg", "SmashScreen3.jpg", "classicSmash.jpg", "delet this.jpg"];
const tumbs = document.getElementById('tumbs');
const display = document.getElementById('display');
var current = 0;
selectImage(Math.floor(Math.random() * imageNames.length));


for (let i = 0, max = imageNames.length; i < max; i++)
{
    let tumb = new Image();
    tumb.src = "afb/small/" + imageNames[i];
    tumb.id = i;
    tumbs.appendChild(tumb);
    tumb.addEventListener("click", function (e)
    {
        selectImage(e.target.id);
    });
}

function selectImage(id)
{
    display.src = "afb/big/" + imageNames[id];
}

leftB.addEventListener('click',()=>
  {
    current--;
    if (current < 0)
    {
        current = imageNames.length - 1;
    }
    selectImage(current);
  });
rightB.addEventListener('click',()=>
  {
    current++;
    if (current >= imageNames.length)
    {
        current = 0;
    }
    selectImage(current);
  });
