const phrases = [
    { text: "Developer", colorClass: "color-developer" },
    { text: "Data Scientist", colorClass: "color-data-scientist" },
    { text: "Machine Learning Engineer", colorClass: "color-ml-engineer" }
  ];
  
  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;
  
  function loop() {
    const typedText = document.getElementById('typed-text');
    isEnd = false;
    typedText.innerHTML = currentPhrase.join('');
  
    // Set color based on the current phrase
    typedText.className = phrases[i].colorClass;
  
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].text.length) {
            currentPhrase.push(phrases[i].text[j]);
            j++;
            typedText.innerHTML = currentPhrase.join('');
        }
  
        if (isDeleting && j <= phrases[i].text.length) {
            currentPhrase.pop(phrases[i].text[j]);
            j--;
            typedText.innerHTML = currentPhrase.join('');
        }
  
        if (j == phrases[i].text.length) {
            isEnd = true;
            isDeleting = true;
        }
  
        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }
    }
    const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
    setTimeout(loop, speed);
  }
  
  loop();
  