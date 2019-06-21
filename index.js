const text = document.querySelector(".text");
const button = document.querySelector(".btn");

const notInDataBase = [
  "Your English is very bad",
  "Again",
  "you are stupid",
  "Stupid",
  "Take some English lessons",
  "You are a fool",
  "I dont want to hear you"
];

const variations = ["None of your business boy", "None of your business boy"];
const helloInput = ["hello", "day", "how are you"];

const kobeInput = [
  "do you have a dog",
  "doggy",
  "i love dogs",
  "what is your favorite dog", 
  "what's your favorite dog",
  "what do you know about Kobe",
  "let's talk about dogs",
  "do you like dogs"
];
const kobeAnsw = [
  "I love Kobe",
  "I love to play with Kobe",
  "Kobi is the best Dog ever",
  "I miss Kobe",
  "Kobe is number one and i like feeding him"
];

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = () => {
  console.log("Just Started");
};

recognition.onresult = e => {
  const current = e.resultIndex;
  const transcript = e.results[current][0].transcript;
  text.textContent = transcript.charAt(0).toUpperCase() + transcript.slice(1);
  speaking(transcript);
};

button.addEventListener("click", () => {
  recognition.start();
});
const speaking = message => {
  var msg = new SpeechSynthesisUtterance();
  msg.text = notInDataBase[Math.floor(Math.random() * notInDataBase.length)];
  for (var i = 0; i < helloInput.length; i++) {
    for (var i = 0; i < kobeInput.length; i++) {
      if (message.includes(helloInput[i])) {
        const helloOutput =
          variations[Math.floor(Math.random() * variations.length)];
        msg.text = helloOutput;
      } else if (message.includes([kobeInput[i]])) {
        const kobeText = kobeAnsw[Math.floor(Math.random() * kobeAnsw.length)];
        msg.text = kobeText;
      }
    }
  }
  window.speechSynthesis.speak(msg);
  msg.volume = 1;
  msg.pitch = 1;
  msg.rate = 1;
};
