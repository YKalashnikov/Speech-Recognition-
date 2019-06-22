const text = document.querySelector(".text");
const button = document.querySelector(".btn");

const notInDataBase = [
  "Your English is very bad",
  "Again",
  "you are stupid",
  "Stupid",
  "Take some English lessons",
  "You are a fool",
  "I dont want to hear you",
  "I dont't want to answer because you are not looking good",
  "O God, please kill me",
  "I barely understand you",
  "I need prescription so i can understand you",
  "I quite",
  "When you talk open your mouth widely so i can get what you are saying",
  "Do you need English lessons?",
  "Speak clearly human",
  "Go back to school and study English"
];

const greetingsAnsw = [
  "None of your business boy",
  "None of your business girl",
  "It's a very bad day today",
  "I only know that gas is very expensive in California",
  "I want to die",
  "I only know that taxes are too hight in california"
];
const greetingsInput = [
  "hello",
  "how is your day",
  "how are you",
  "how's your day",
  "how's the weather today",
  "how's the weather",
  "life is good",
  "what's your name",
  "what is you name"
];

const kobeInput = [
  "do you have a dog",
  "doggy",
  "i love dogs",
  "what is your favorite dog",
  "what's your favorite dog",
  "what do you know about Kobe",
  "what do you know about dogs",
  "let's talk about dogs",
  "do you like dogs",
  "do you love dogs",
  "who is Kobe",
  "who's Kobe"
];
const kobeAnsw = [
  "I only love Kobe",
  "I love Kobe",
  "I love to play with Kobe",
  "Kobi is the best Dog ever",
  "I miss Kobe",
  "Kobe is number one and i like feeding him",
  "Kobe Kobe Kobe Kobe Kobe",
  "Kobe lives in California",
  "Kobe loves chicken and eags",
  "Kobe Kobe Kobe loves Gorge"
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
  for (var i = 0; i < greetingsInput.length; i++) {
    for (var i = 0; i < kobeInput.length; i++) {
      if (message.includes(greetingsInput[i])) {
        const greetingsOutput =
          greetingsAnsw[Math.floor(Math.random() * greetingsAnsw.length)];
        msg.text = greetingsOutput;
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
