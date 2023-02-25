let Steps = document.querySelectorAll(".form-step"),
  FieldGroups = document.querySelectorAll(".step-container"),
  CurrentAria = 0,
  mainAria = document.querySelector("main"),
  nextBtn = document.querySelector("#nextBtn"),
  backBtn = document.querySelector("#backBtn"),
  confirmBtn = document.querySelector("#confirmBtn");

function ChangeAria(n) {
  mainAria.setAttribute("aria-current", n);
}

function navigateToCurrentAria(array) {
  for (i = 0; i < array.length; i++) {
    if (i == CurrentAria) {
      array[i].classList.add("active");
    } else {
      array[i].classList.remove("active");
    }
  }
}

function orderBtns() {
  if (CurrentAria == 0) {
    backBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    confirmBtn.style.display = "none";
  } else if (CurrentAria == 3) {
    backBtn.style.display = "inline-block";
    nextBtn.style.display = "none";
    confirmBtn.style.display = "inline-block";
  } else {
    backBtn.style.display = "inline-block";
    nextBtn.style.display = "inline-block";
    confirmBtn.style.display = "none";
  }
}

function lastStepDisplay() {
  signUpForm.style.display = "none";
  backMsg.classList.add("active");
}

function Increase() {
  if (CurrentAria < 4) CurrentAria++;
  if (CurrentAria == 3) displaySummary();
  OrderLayout();
}

function Decrease() {
  if (CurrentAria > 0) CurrentAria--;
  OrderLayout();
}

function OrderLayout() {
  ChangeAria(CurrentAria);
  navigateToCurrentAria(Steps);
  navigateToCurrentAria(FieldGroups);
  orderBtns();
}

window.onload = OrderLayout();

nextBtn.addEventListener("click", Increase);
backBtn.addEventListener("click", Decrease);
confirmBtn.addEventListener("click", lastStepDisplay);

///////////////////////////////////////////////////////

let planCards = document.querySelectorAll("input[name=plan-type]"),
  serviceCards = document.querySelectorAll("input[name=service-card]"),
  period = document.getElementById("plan-period"),
  summaryContainer = document.querySelector(".summary-container");

function getMont(m){
  if(period.checked) return +m * 10; else return +m;
}

function displaySummary() {
  let cost = 0, per = "mo", fullPer = "Monthly";

  if(period.checked){
    per = "yr";
    fullPer = "Yearly"
  };

  planCards.forEach((e) => {
    if (e.checked) {
      cost += getMont(e.getAttribute("data-price"));
      summaryContainer.innerHTML = `<li><div>
        <h4>${e.value} (${fullPer})</h4>
        <a href="">Change</a> </div>
        <strong>+$${cost}/${per}</strong></li>`;
    }
  });

  serviceCards.forEach((e) => {
    if (e.checked) {
      summaryContainer.innerHTML +=
        `<li>${e.value} <strong>+$${getMont(e.getAttribute("data-price"))}/${per}</strong></li>`;
      cost += getMont(e.getAttribute("data-price"));
    }
  });
  
  summaryPeriod.innerText = ` ${fullPer.slice(0,-2)}`;
  totalCost.innerText = `+$${cost}/${per}`;
}
