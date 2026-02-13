function checkPass() {
  var password = document.getElementById("pass").value;
  if(password === "11112010") {
    alert("I Love You ❤️");
    window.location.href = "intro.html";
  } else {
    alert("Wrong Password 💔");
  }
}

function createHearts() {
  const container = document.querySelector(".hearts");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

function typingEffect() {
  const text = "Rishu ❤️ Sara — Long Distance But Forever Together 💕";
  let i = 0;
  function type() {
    if (i < text.length) {
      document.getElementById("typing").innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();
}

function showProposal() {
  document.getElementById("proposalBox").style.display = "block";
}

function yesLove() {
  alert("Forever Together ❤️💍");
}

function noLove() {
  alert("No option 😜 You are mine!");
}

function playMusic() {
  document.getElementById("bg-music").play();
}
