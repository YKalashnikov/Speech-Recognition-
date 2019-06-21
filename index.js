const text = document.querySelector(".text");
const button = document.querySelector(".btn");

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = () => {
  console.log("Just Started");
};

recognition.onresult = e => {
  const current = e.resultIndex;
  const transcript = e.results[current][0].transcript;
  text.textContent = transcript;
  speaking(transcript);
};


button.addEventListener("click", () => {
  recognition.start();
});
const speaking = (message) => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = message;
    window.speechSynthesis.speak(msg);
    msg.volume = 1;
    msg.pitch = 1;
    msg.rate = 1;

  };
