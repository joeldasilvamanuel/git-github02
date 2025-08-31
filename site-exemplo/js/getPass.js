let currentStep = 1;
let countdownInterval;
let countdownTime = 60;

function updateSteps() {
  // Update step indicators
  for (let i = 1; i <= 3; i++) {
    const step = document.getElementById(`step${i}`);
    if (i < currentStep) {
      step.className = "step completed";
    } else if (i === currentStep) {
      step.className = "step active";
    } else {
      step.className = "step";
    }
  }

  // Update form steps
  document.querySelectorAll(".form-step").forEach((step, index) => {
    step.classList.toggle("active", index + 1 === currentStep);
  });
}

function sendCode() {
  const email = document.getElementById("emailInput").value;

  if (!email || !email.includes("@")) {
    alert("Por favor, insira um endereço de email válido.");
    return;
  }

  // Simulate sending code
  document.getElementById("form-step-1").querySelector(".btn").innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Enviando...';

  setTimeout(() => {
    currentStep = 2;
    updateSteps();
    startCountdown();
    alert(`Código de verificação enviado para ${email}`);
  }, 1500);
}

function startCountdown() {
  countdownTime = 60;
  const countdownElement = document.getElementById("countdown");
  const resendLink = document.getElementById("resendLink");

  resendLink.style.display = "none";
  countdownElement.textContent = `Reenviar código em ${countdownTime}s`;

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    countdownTime--;

    if (countdownTime <= 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "";
      resendLink.style.display = "inline";
    } else {
      countdownElement.textContent = `Reenviar código em ${countdownTime}s`;
    }
  }, 1000);
}

function resendCode() {
  startCountdown();
  alert("Código reenviado com sucesso!");
}

function moveToNext(input, nextIndex) {
  // Move to next input if a digit was entered
  if (input.value.length === 1) {
    if (nextIndex < 6) {
      document.querySelectorAll(".code-inputs input")[nextIndex].focus();
    }
  }

  // Move to previous input if backspace was pressed and field is empty
  if (input.value.length === 0 && nextIndex > 1) {
    document.querySelectorAll(".code-inputs input")[nextIndex - 2].focus();
  }
}

function verifyCode() {
  const inputs = document.querySelectorAll(".code-inputs input");
  let code = "";

  inputs.forEach((input) => {
    code += input.value;
  });

  if (code.length !== 6) {
    alert("Por favor, preencha todos os campos do código.");
    return;
  }

  // Simulate code verification
  document.getElementById("form-step-2").querySelector(".btn").innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Verificando...';

  setTimeout(() => {
    currentStep = 3;
    updateSteps();
    alert("Código verificado com sucesso!");
  }, 1500);
}

function togglePassword(inputId, toggleElement) {
  const input = document.getElementById(inputId);
  const icon = toggleElement.querySelector("i");

  if (input.type === "password") {
    input.type = "text";
    icon.className = "fas fa-eye-slash";
  } else {
    input.type = "password";
    icon.className = "fas fa-eye";
  }
}

function validatePassword() {
  const password = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Check password criteria
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordsMatch = password === confirmPassword;

  // Update criteria indicators
  document
    .getElementById("lengthCriteria")
    .classList.toggle("valid", hasMinLength);
  document
    .getElementById("uppercaseCriteria")
    .classList.toggle("valid", hasUppercase);
  document
    .getElementById("numberCriteria")
    .classList.toggle("valid", hasNumber);

  return hasMinLength && hasUppercase && hasNumber && passwordsMatch;
}

function updatePassword() {
  if (!validatePassword()) {
    alert(
      "Por favor, verifique se sua senha atende a todos os critérios e que as senhas coincidem."
    );
    return;
  }

  // Simulate password update
  document.getElementById("form-step-3").querySelector(".btn").innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Atualizando...';

  setTimeout(() => {
    alert("Senha atualizada com sucesso! Redirecionando para o login...");
    // In a real application, you would redirect to the login page
  }, 1500);
}

// Add real-time password validation
document
  .getElementById("newPassword")
  .addEventListener("input", validatePassword);
document
  .getElementById("confirmPassword")
  .addEventListener("input", validatePassword);
