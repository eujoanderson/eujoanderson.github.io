const text = document.querySelector('.typewriter h4');
const words = ['Desenvolvedor Web', 'Suporte Técnico'];
let currentWord = 0;
const wordPause = 4000;

function typeWords() {
  const word = words[currentWord];
  let letterIndex = 0;
  const typeInterval = setInterval(() => {

    text.textContent += word[letterIndex];
    letterIndex++;
    if (letterIndex === word.length) {
      clearInterval(typeInterval);
      setTimeout(() => {
        const deleteInterval = setInterval(() => {
          text.textContent = text.textContent.slice(0, -1);
          if (text.textContent === '') {
            clearInterval(deleteInterval);

            currentWord++;
            if (currentWord === words.length) {
              currentWord = 0;
            }
            setTimeout(typeWords, 0);
          }
        }, 100);
      }, wordPause);
    }
  }, 100);
}

typeWords();