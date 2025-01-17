const $ = document;

// give active or err to loading box
function showMessage(flag, msg, box, title, text) {
  if (flag === "loading") {
    box.classList.add("active");
    setTimeout(() => {
      box.classList.remove("active");
    }, 4000);
  } else if (flag === "error") {
    box.classList.add("error");
    title.textContent = "Error!";
    text.textContent = msg;
    setTimeout(() => {
      box.classList.remove("error");
      title.textContent = "Please Wait...";
      text.textContent = "Your registration is in progress";
    }, 6000);
  } else if (flag === "successful") {
    box.classList.add("active");
    title.textContent = "Transferring";
    text.textContent = msg;
    setTimeout(() => {
      box.classList.remove("active");
    }, 4000);
  }
}

// give active to alert
function showAlert(alert) {
  if (!alert.classList.contains("active")) {
    alert.classList.add("active");
    setTimeout(() => {
      alert.classList.remove("active");
    }, 5000);
  }
}

// reset inputs
function reset() {
  for (arg of arguments) {
    arg.value = "";
  }
  labelList.forEach((label) => {
    label.classList.remove("active");
  });
}

// search for our cookie
function foundCookie(cookieName) {
  let allCookies = document.cookie;
  let cookiesArray = allCookies.split(";");
  let cookiesList = [];
  let mainCookie;

  cookiesArray.forEach((cookie) => {
    let mainCookie = cookie.split("=");
    cookiesList.push(mainCookie);
  });

  cookiesList.some((cookie) => {
    if (cookie[0] === cookieName) {
      mainCookie = cookie;
      return true;
    }
  });

  return mainCookie;
}

// set class 'problem' for inputs
function inputProblem(inputList) {
  inputList.forEach((input) => {
    input.classList.remove("problem");
  });
  let inputsArray = [arguments[1], arguments[2]];

  inputsArray.forEach((input) => {
    input.classList.add("problem");
  });
}

export { $, showMessage, showAlert, reset, foundCookie, inputProblem };
