// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const nameField = document.querySelector('.name_field');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertX = ["Willy the Goblin","Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen","Disneyland", "the White House"];
const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    const itemX = randomValueFromArray(insertX);
    const itemY = randomValueFromArray(insertY);
    const itemZ = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", itemX);
    newStory = newStory.replaceAll(":inserty:", itemY);
    newStory = newStory.replaceAll(":insertz:", itemZ);
  

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }
   let weight ;
   let temperature
  if(document.getElementById("uk").checked) {
     weight = Math.round(300/14) + ' stone';
     temperature =  Math.round((94-32) * 0.5556) + ' centigrade';

  }
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);


  story.textContent = newStory ;
  story.style.visibility = 'visible';
  story.style.backgroundColor = "#093145";
  nameField.style.textalign = "center";
}
