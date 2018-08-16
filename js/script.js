let storybox = document.querySelector('#storybox');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
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
'You come most carefully upon your hour.',
'BERNARDO',
'Tis now struck twelve; get thee to bed, Francisco.',
'FRANCISCO',
'For this relief much thanks: \'tis bitter cold, And I am sick at heart.',
'BERNARDO',
'Have you had quiet guard?',
'FRANCISCO',
'Not a mouse stirring.',
'BERNARDO',
'Well, good night. If you do meet Horatio and Marcellus, The rivals of my watch, bid them make haste.',
'FRANCISCO',
'I think I hear them. Stand, ho! Who\'s there?',
'Enter HORATIO and MARCELLUS',
'HORATIO',
'Friends to this ground.',
'MARCELLUS',
'And liegemen to the Dane.',
'FRANCISCO',
'Give you good night.',
'MARCELLUS',
'O, farewell, honest soldier: Who hath relieved you?',
'FRANCISCO',
'Bernardo has my place. Give you good night.',
'Exit MARCELLUS',
'FRANCISCO',
'Holla! Bernardo!',
'BERNARDO',
'Say, What, is Horatio there?',
'HORATIO',
'A piece of him.',
'BERNARDO',
'Welcome, Horatio: welcome, good Marcellus.',
'MARCELLUS',
'What, has this thing appear\'d again to-night?',
'BERNARDO',
'I have seen nothing.',
'MARCELLUS',
'Horatio says \'tis but our fantasy, And will not let belief take hold of him Touching this dreaded sight, twice seen of us: Therefore I have entreated him along With us to watch the minutes of this night; That if again this apparition come, He may approve our eyes and speak to it.',
'HORATIO',
'Tush, tush, \'twill not appear.',
'BERNARDO',
'Sit down awhile; And let us once again assail your ears, That are so fortified against our story What we have two nights seen. HORATIO Well, sit we down, And let us hear Bernardo speak of this.',
'BERNARDO',
'Last night of all, When yond same star that\'s westward from the pole Had made his course to illume that part of heaven Where now it burns, Marcellus and myself, The bell then beating one,--',
'Enter Ghost',
'MARCELLUS',
'Peace, break thee off; look, where it comes again!',
'BERNARDO',
'In the same figure, like the king that\'s dead.',
'MARCELLUS',
'Thou art a scholar; speak to it, Horatio.',
'BERNARDO',
'Looks it not like the king? mark it, Horatio.',
'HORATIO',
'Most like: it harrows me with fear and wonder.',
'BERNARDO',
'It would be spoke to.',
'MARCELLUS',
'Question it, Horatio.',
'HORATIO',
'What art thou that usurp\'st this time of night, Together with that fair and warlike form In which the majesty of buried Denmark Did sometimes march? by heaven I charge thee, speak!',
'MARCELLUS',
'It is offended.',
'BERNARDO'
,'See, it stalks away!',
'HORATIO',
'Stay! speak, speak! I charge thee, speak!',
'Exit Ghost',
'MARCELLUS',
'\'Tis gone, and will not answer.',
'BERNARDO',
'How now, Horatio! you tremble and look pale: Is not this something more than fantasy? What think you on\'t?',
'HORATIO',
'Before my God, I might not this believe Without the sensible and true avouch Of mine own eyes.',
'MARCELLUS',
'Is it not like the king?',
'HORATIO',
'As thou art to thyself: Such was the very armour he had on When he the ambitious Norway combated; So frown\'d he once, when, in an angry parle, He smote the sledded Polacks on the ice. \'Tis strange.',
'MARCELLUS',
'Thus twice before, and jump at this dead hour, With martial stalk hath he gone by our watch.',
'HORATIO',
'In what particular thought to work I know not; But in the gross and scope of my opinion, This bodes some strange eruption to our state.',
'MARCELLUS',
'Good now, sit down, and tell me, he that knows, Why this same strict and most observant watch So nightly toils the subject of the land, And why such daily cast of brazen cannon, And foreign mart for implements of war; Why such impress of shipwrights, whose sore task Does not divide the Sunday from the week; What might be toward, that this sweaty haste Doth make the night joint-labourer with the day: Who is\'t that can inform me?',
'HORATIO',
'That can I; At least, the whisper goes so. Our last king, Whose image even but now appear\'d to us, Was, as you know, by Fortinbras of Norway, Thereto prick\'d on by a most emulate pride, Dared to the combat; in which our valiant Hamlet-- For so this side of our known world esteem\'d him-- Did slay this Fortinbras; who by a seal\'d compact, Well ratified by law and heraldry, Did forfeit, with his life, all those his lands Which he stood seized of, to the conqueror: Against the which, a moiety competent Was gaged by our king; which had return\'d To the inheritance of Fortinbras, Had he been vanquisher; as, by the same covenant, And carriage of the article design\'d, His fell to Hamlet. Now, sir, young Fortinbras, Of unimproved mettle hot and full, Hath in the skirts of Norway here and there Shark\'d up a list of lawless resolutes, For food and diet, to some enterprise That hath a stomach in\'t; which is no other-- As it doth well appear unto our state-- But to recover of us, by strong hand And terms compulsatory, those foresaid lands So by his father lost: and this, I take it, Is the main motive of our preparations, The source of this our watch and the chief head Of this post-haste and romage in the land.',
'BERNARDO',
'I think it be no other but e\'en so: Well may it sort that this portentous figure Comes armed through our watch; so like the king That was and is the question of these wars.',
'HORATIO',
'A mote it is to trouble the mind\'s eye. In the most high and palmy state of Rome, A little ere the mightiest Julius fell, The graves stood tenantless and the sheeted dead Did squeak and gibber in the Roman streets: As stars with trains of fire and dews of blood, Disasters in the sun; and the moist star Upon whose influence Neptune\'s empire stands Was sick almost to doomsday with eclipse: And even the like precurse of fierce events, As harbingers preceding still the fates And prologue to the omen coming on, Have heaven and earth together demonstrated Unto our climatures and countrymen.-- But soft, behold! lo, where it comes again!',
'Re-enter Ghost',
'HORATIO',
'I\'ll cross it, though it blast me. Stay, illusion! If thou hast any sound, or use of voice, Speak to me: If there be any good thing to be done, That may to thee do ease and grace to me, Speak to me: Cock crows If thou art privy to thy country\'s fate, Which, happily, foreknowing may avoid, O, speak! Or if thou hast uphoarded in thy life Extorted treasure in the womb of earth, For which, they say, you spirits oft walk in death, Speak of it: stay, and speak! Stop it, Marcellus.',
'MARCELLUS',
'Shall I strike at it with my partisan?',
'HORATIO',
'Do, if it will not stand.',
'BERNARDO',
'\'Tis here!',
'HORATIO',
'\'Tis here!',
'MARCELLUS',
'Tis gone!',
'Exit Ghost',
'MARCELLUS',
'We do it wrong, being so majestical, To offer it the show of violence; For it is, as the air, invulnerable, And our vain blows malicious mockery.',
'BERNARDO',
'It was about to speak, when the cock crew.',
'HORATIO',
'And then it started like a guilty thing Upon a fearful summons. I have heard, The cock, that is the trumpet to the morn, Doth with his lofty and shrill-sounding throat Awake the god of day; and, at his warning, Whether in sea or fire, in earth or air, The extravagant and erring spirit hies To his confine: and of the truth herein This present object made probation.',
'MARCELLUS',
'It faded on the crowing of the cock. Some say that ever \'gainst that season comes Wherein our Saviour\'s birth is celebrated, The bird of dawning singeth all night long: And then, they say, no spirit dares stir abroad; The nights are wholesome; then no planets strike, No fairy takes, nor witch hath power to charm, So hallow\'d and so gracious is the time.',
'HORATIO',
'So have I heard and do in part believe it. But, look, the morn, in russet mantle clad, Walks o\'er the dew of yon high eastward hill: Break we our watch up; and by my advice, Let us impart what we have seen to-night Unto young Hamlet; for, upon my life, This spirit, dumb to us, will speak to him. Do you consent we shall acquaint him with it, As needful in our loves, fitting our duty?',
'MARCELLUS',
'Let\'s do\'t, I pray; and I this morning know Where we shall find him most conveniently.',
'Exeunt'];

chars = ['FLAVIUS','MARULLUS','First Commoner','Second Commoner','FRANCISCO','BERNARDO','HORATIO','MARCELLUS'];

backgrounds = ['71.jpg','77-rge.jpg','17.webp','74.jpg'];

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
      if (chapter[postNum-1].toLowerCase().includes("exeunt") || (chapter[postNum-1].toLowerCase().includes("exit ")) || (chapter[postNum-1].toLowerCase().includes("enter "))) {
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
    refreshStory();
  }
}

function refreshStory(){
  window.location.replace(window.location.protocol + "//" + window.location.host);
}

function randomBackground(){
  document.body.style.backgroundImage = `url('/css/${backgrounds[getRandomIntInclusive(0,backgrounds.length-1)]}')`;
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.forEach((item,index,array) => {
  item.addEventListener('click',function(){
    if (item.textContent == 'Julius Caesar') {
      current_scene = jc;
    }
    else if (item.textContent == 'Hamlet') {
      current_scene = ham;
    }
    else if (item.textContent == 'Return') {
      refreshStory();
    }
    else if (item.textContent == 'Continue') {
      randomBackground();
      advStory(current_scene);
    }
    if (storyBegin === false) {
      btn.forEach((item,index,array) => {
        if (index === 0) {
          item.textContent = 'Return';
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
  elePrint(storybox, '<h2>Select a Story:</h2>');
  storyBegin = false;
  btn1.textContent = 'Julius Caesar';
  btn2.textContent = 'Hamlet';
  postNum = 1;
}

docInit();
