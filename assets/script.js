var topics = ["HTML", "CSS","GIT", "Java Script" ];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];


function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
} 
  }

function selectTopic() {

if (randomTopic === 'HTML') {
    console.log("Let's Study HTML!");
} else if (randomTopic === 'CSS') {
    console.log("Let/s Study CSS!");
} else if (randomTopic === 'GIT') {
    console.log("Let's Study GIT!");
} else if (randomTopic === 'Java Script') {
    console.log("Let's Study Java Script!");
} else {
    console.log('Please Try Again');
}
  }
console.log("Here are the topics we studied during prework!");
listTopics();
console.log("Which topic should we study first?");
selectTopic();















