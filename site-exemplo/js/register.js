let currentStep = 1;
const totalSteps = 3;

function updateProgress() {
  const progress = document.getElementById("progress");
  const percentage = (currentStep / totalSteps) * 100;
  progress.style.width = `${percentage}%`;

  // Update step indicators
  for (let i = 1; i <= totalSteps; i++) {
    document
      .getElementById(`step${i}`)
      .classList.toggle("active", i === currentStep);
  }
}

function nextStep(step) {
  if (step < totalSteps) {
    document.getElementById(`form-step-${step}`).classList.remove("active");
    document.getElementById(`form-step-${step + 1}`).classList.add("active");
    currentStep = step + 1;
    updateProgress();
  }
}

function prevStep(step) {
  if (step > 1) {
    document.getElementById(`form-step-${step}`).classList.remove("active");
    document.getElementById(`form-step-${step - 1}`).classList.add("active");
    currentStep = step - 1;
    updateProgress();
  }
}

function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  const strengthMeter = document.getElementById("strength-meter");
  let strength = 0;

  if (password.length >= 8) strength += 25;
  if (/[A-Z]/.test(password)) strength += 25;
  if (/[0-9]/.test(password)) strength += 25;
  if (/[^A-Za-z0-9]/.test(password)) strength += 25;

  strengthMeter.style.width = `${strength}%`;

  if (strength < 50) {
    strengthMeter.style.background = "#ff4d4d";
  } else if (strength < 75) {
    strengthMeter.style.background = "#ffa64d";
  } else {
    strengthMeter.style.background = "#2eb82e";
  }
}

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = this.querySelector(".btn-submit");
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Criando Conta...';
    btn.disabled = true;

    // Simulação de registro bem-sucedido
    setTimeout(() => {
      alert("Conta criada com sucesso! Redirecionando para o login...");
      btn.innerHTML = "Criar Conta";
      btn.disabled = false;
      this.reset();

      // Reset to first step
      document.querySelectorAll(".form-step").forEach((step, index) => {
        step.classList.toggle("active", index === 0);
      });
      currentStep = 1;
      updateProgress();
    }, 2000);
  });
