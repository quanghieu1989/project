
  function addWord() {
        let chatword = document.querySelector(".chat-word");
        let chat = document.querySelector(".icon");
        let word = chatword.value;
        console.log(word);
        let hword = document.createElement("h1");
        hword.textContent = word;
        console.log(hword)
        chat.appendChild(hword)
        chatword.value = ""
      }