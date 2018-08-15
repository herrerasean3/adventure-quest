let storybox = document.querySelector('#storybox');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn = document.querySelectorAll('.btn');
let postNum = 1;
let sceneEnd = false;
let storyBegin = false;
let current_scene;
let process = 0;

let jc = ['SCENE I. Rome. A Street.', 'Enter FLAVIUS, MARULLUS, and certain Commoners',
'FLAVIUS','Hence! home, you idle creatures get you home; <br>Is this a holiday? what! know you not, <br>Being mechanical, you ought not walk <br>Upon a labouring day without the sign <br>Of your profession? Speak, what trade art thou?','First Commoner','Why, sir, a carpenter.','MARULLUS','Where is thy leather apron and thy rule? <br>What dost thou with thy best apparel on?<br> You, sir, what trade are you?','First Commoner', 'Why, sir, a carpenter.','MARULLUS','Where is thy leather apron and thy rule? <br>What dost thou with thy best apparel on? <br>You, sir, what trade are you?','Second Commoner','Truly, sir, in respect of a fine workman, I am but, <br>as you would say, a cobbler.']
let ham = [];
chars = ['FLAVIUS','MARULLUS','First Commoner','Second Commoner'];

//Clears any text or elements inside the target, allowing us to maintain a clean worspace
function eleWipe(target){
  target.innerHTML='';
}

//Sets the contents of the target element to the string provided in content.
function elePrint(target,content){
  console.log(postNum)
  target.innerHTML+=content;
}

function advStory(chapter){
  eleWipe(storybox);
  if (sceneEnd===false) {
    while (process < 2) {
      if (chapter[postNum-1].toLowerCase().includes("exeunt")) {
        elePrint(storybox, `<i>${chapter[postNum-1]}</i>`)
        postNum++;
        break
      }
      else if (chapter[postNum-1].includes("SCENE")) {
        elePrint(storybox, `<h3>${chapter[postNum-1]}</h3>`);
        postNum++;
      }
      else if (chars.indexOf(chapter[postNum-1]) !== -1) {
        elePrint(storybox, `<h3>${chapter[postNum-1]}</h3>`);
        postNum++;
      }
      else {
        elePrint(storybox, `<p>${chapter[postNum-1]}</p>`);
        postNum++;
      }
      process++;
      if (postNum === chapter.length) {
        sceneEnd = true;
      }
    }
    process = 0;
  }
  else {

  }
}

function backStory(chapter){
  eleWipe(storybox);
  if (sceneEnd===false) {
    while (process < 2) {
      if (process === 0) {
        postNum--;
      }
      if (chapter[postNum-1].toLowerCase().includes("exeunt")) {
        elePrint(storybox, `<i>${chapter[postNum-1]}</i>`)
        postNum--;
        break
      }
      else if (chapter[postNum-1].includes("SCENE")) {
        elePrint(storybox, `<h3>${chapter[postNum-1]}</h3>`);
        postNum--;
      }
      else if (chars.indexOf(chapter[postNum-1]) !== -1) {
        elePrint(storybox, `<h3>${chapter[postNum-1]}</h3>`);
        postNum--;
      }
      else {
        elePrint(storybox, `<p>${chapter[postNum-1]}</p>`);
        console.log(chapter[postNum-1])
        postNum--;
      }
      process++;
      if (postNum === chapter.length) {
        sceneEnd = true;
        break
      }
    }
    process = 0;
  }
  else {

  }
}

btn.forEach((item,index,array) => {
  item.addEventListener('click',function(){
    if (item.textContent == 'Julius Caesar') {
      current_scene = jc;
    }
    else if (item.textContent == 'Hamlet') {
      current_scene = ham;
    }
    else if (item.textContent == 'Back') {
      backStory(current_scene);
    }
    else if (item.textContent == 'Continue') {
      advStory(current_scene);
    }
    if (storyBegin === false) {
      btn.forEach((item,index,array) => {
        if (index === 0) {
          item.textContent = 'Back';
        }
        else if (index === 1) {
          item.textContent = 'Continue';
        }
      })
      storyBegin = true;
      advStory(current_scene);
    }
  })
})


btn1.textContent = 'Julius Caesar';
btn2.textContent = 'Hamlet'
