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
'FLAVIUS',
'Hence! home, you idle creatures get you home; Is this a holiday? what! know you not, Being mechanical, you ought not walk Upon a labouring day without the sign Of your profession? Speak, what trade art thou?',
'First Commoner',
'Why, sir, a carpenter.',
'MARULLUS',
'Where is thy leather apron and thy rule? What dost thou with thy best apparel on? You, sir, what trade are you?',
'Second Commoner',
'Truly, sir, in respect of a fine workman, I am but, as you would say, a cobbler.',
'MARULLUS',
'But what trade art thou? answer me directly.',
'Second Commoner',
'A trade, sir, that, I hope, I may use with a safe conscience; which is, indeed, sir, a mender of bad soles.',
'MARULLUS',
'What trade, thou knave? thou naughty knave, what trade?',
'Second Commoner',
'Nay, I beseech you, sir, be not out with me: yet, if you be out, sir, I can mend you.',
'MARULLUS',
'What meanest thou by that? mend me, thou saucy fellow!',
'Second Commoner',
'Why, sir, cobble you.',
'FLAVIUS',
'Thou art a cobbler, art thou?',
'Second Commoner',
'Truly, sir, all that I live by is with the awl: I meddle with no tradesman\'s matters, nor women\'s matters, but with awl. I am, indeed, sir, a surgeon to old shoes; when they are in great danger, I recover them. As proper men as ever trod upon neat\'s leather have gone upon my handiwork.',
'FLAVIUS',
'But wherefore art not in thy shop today? Why dost thou lead these men about the streets?',
'Second Commoner',
'Truly, sir, to wear out their shoes, to get myself into more work. But, indeed, sir, we make holiday, to see Caesar and to rejoice in his triumph.',
'MARULLUS',
'Wherefore rejoice? What conquest brings he home? What tributaries follow him to Rome, To grace in captive bonds his chariot-wheels? You blocks, you stones, you worse than senseless things! O you hard hearts, you cruel men of Rome, Knew you not Pompey? Many a time and oft Have you climb\'d up to walls and battlements, To towers and windows, yea, to chimney-tops, Your infants in your arms, and there have sat The livelong day, with patient expectation, To see great Pompey pass the streets of Rome: And when you saw his chariot but appear, Have you not made an universal shout, That Tiber trembled underneath her banks, To hear the replication of your sounds Made in her concave shores? And do you now put on your best attire? And do you now cull out a holiday? And do you now strew flowers in his way That comes in triumph over Pompey\'s blood? Be gone! Run to your houses, fall upon your knees, Pray to the gods to intermit the plague That needs must light on this ingratitude.',
'FLAVIUS',
'Go, go, good countrymen, and, for this fault, Assemble all the poor men of your sort; Draw them to Tiber banks, and weep your tears Into the channel, till the lowest stream Do kiss the most exalted shores of all.',
'Exeunt all the Commoners',
'FLAVIUS',
'See whether their basest metal be not moved; They vanish tongue-tied in their guiltiness. Go you down that way towards the Capitol; This way will I disrobe the images, If you do find them deck\'d with ceremonies.',
'MARULLUS',
'May we do so? You know it is the feast of Lupercal.',
'FLAVIUS',
'It is no matter; let no images Be hung with Caesar\'s trophies. I\'ll about, And drive away the vulgar from the streets: So do you too, where you perceive them thick. These growing feathers pluck\'d from Caesar\'s wing Will make him fly an ordinary pitch, Who else would soar above the view of men And keep us all in servile fearfulness.',
'Exeunt']

let ham = ['SCENE I. Elsinore. A platform before the castle.',
'FRANCISCO at his post. Enter to him BERNARDO',
'BERNARDO',
'Who\'s there?',
'FRANCISCO',
'Nay, answer me: stand, and unfold yourself.',
'BERNARDO',
'Long live the King!',
'FRANCISCO',
'Bernardo?',
'BERNARDO',
'He.',
'FRANCISCO',
'You come most carefully upon your hour.'];

chars = ['FLAVIUS','MARULLUS','First Commoner','Second Commoner','FRANCISCO','BERNARDO'];

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
    docInit();
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
        window.location.reload(false);
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

function docInit(){
  elePrint(storybox, '<h2>Select a new Story:</h2>');
  storyBegin = false;
  btn1.textContent = 'Julius Caesar';
  btn2.textContent = 'Hamlet';
  postNum = 1;
}

docInit();
