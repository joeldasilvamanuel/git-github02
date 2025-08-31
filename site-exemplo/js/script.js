document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulação de login bem-sucedido
  const btn = this.querySelector(".btn");
  btn.textContent = "Entrando...";
  btn.style.opacity = "0.8";

  setTimeout(() => {
    alert("Login realizado com sucesso!");
    btn.textContent = "Entrar";
    btn.style.opacity = "1";
    this.reset();
  }, 1500);
});

// Adicionando interatividade aos botões sociais
document.querySelectorAll(".social-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 200);

    const type = this.querySelector("i").classList[1];
    let provider;

    if (type.includes("facebook")) provider = "Facebook";
    else if (type.includes("google")) provider = "Google";
    else if (type.includes("twitter")) provider = "Twitter";

    alert(`Login com ${provider} selecionado!`);
  });
});
