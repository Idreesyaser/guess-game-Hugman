let lettiers = "abcdefghijklmnopqrstuvwxyz+";
let arrlitter = Array.from(lettiers);
let litters = document.querySelector(".litters");

arrlitter.forEach((el) => {
  let span = document.createElement("span");
  span.textContent = el;
  span.className = "litter";
  litters.appendChild(span);
});

let abj = {
  prgramming: ["js", "html", "css", "java", "python", "php", "c++"],
  city: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
  country: ["finland", "india", "us", "uk"],
  language: ["arabic", "chinese", "english", "french", "german", "italian"],
};

let abjkey = Object.keys(abj);
let randomKey = Math.floor(Math.random() * abjkey.length);
let randomAyyName = abjkey[randomKey];
let getAyyName = abj[randomAyyName];
let randomValue = Math.floor(Math.random() * getAyyName.length);
let random = getAyyName[randomValue];
let spanName = document.querySelector(".group");
spanName.textContent = randomAyyName;
let namecount = Array.from(random);

//console.log(namecount);
namecount.forEach((el) => {
  let span = document.createElement("span");
  span.className = `letter-box`;
  // span.textContent = el;
  if (el === " ") {
    el.classlist.add("space");
  }
  let letterbox = document.querySelector(".result");
  letterbox.appendChild(span);
});

let guss = Array.from(document.querySelectorAll(".letter-box"));
let drow = document.querySelector(".row");
let wrong = 0;

document.addEventListener("click", (e) => {
  let thestatus = false;
  if (e.target.classList.contains("litter")) {
    e.target.classList.add("clicked");
    //e.target.style.display = "none";
    let clickedletter = e.target.textContent.toLowerCase();

    namecount.forEach((el, ind) => {
      if (el === clickedletter) {
        thestatus = true;
        guss.forEach((els, spanInd) => {
          if (ind === spanInd) {
            els.innerHTML = `${clickedletter}`;
          }
        });
      }
    });

    if (thestatus !== true) {
      wrong++;
      drow.classList.add(`wrong-${wrong}`);
    }
    if (wrong === 6) {
      litters.classList.add("clicked");
      let final = document.querySelector(".final");
      final.innerHTML = `<h1>You Lost! the word is ${random}</h1>`;
      final.style.display = "block";
    }
  }
});
