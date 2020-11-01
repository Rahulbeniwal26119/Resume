//Moment animation 
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//
const title = document.querySelector(".title");
console.log(title)
const sneaker = document.querySelector('.sneaker img');
console.log(sneaker)
const link = document.querySelector(".link button");
console.log(link)
const description = document.querySelector('.info h3');
const skills = document.querySelector(".skills")
console.log(skills)

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});
//Animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    description.style.transform = "translateZ(-19px)";
    link.style.transform = "translateZ(60px)";
    sneaker.style.transform = "translateZ(20px) rotateZ(-360deg)";
    title.style.transform = "translateZ(40px)";

    console.log(title.style.transform)

})
//Animate out 
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    sneaker.style.transition = "all 1.5s ease-out";
    link.style.transition = "all 0.5s ease-in";
    link.style.transform = "translateZ(0px)";
});
