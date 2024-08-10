const prompts = [
  {
    category: "Step:1  Personal details",
    questions: ["Your First Name ", "Your last name", "Age", "Gender"],
  },
  {
    category: " Step 2: Volunteering details",
    questions: [
      "What types of volunteering activities are you interested in this field? ",
      "Do you prefer one-time events or ongoing commitments?",
      "Any previous Volunteering Skills?",
      "Any illness that should be considered while in event ? ",
    ],
  },
  {
    category: "Step :3  Knowledge and Education:",
    questions: [
      "What is your current level of understanding about ocean conservation issues?",
      "Are you interested in learning more about marine biology, ecosystems, or sustainable fishing practices?",
      "Have you taken any courses or workshops related to marine conservation?",
      "Fluent Languages ? ",
    ],
  },
  {
    category: " Step :4 Availability and contact",
    questions: [
      "Would you like to voltuneer as full time or part time or any other option ? ",
      "NIC  Passport No ",
      "Email address",
      "Phone number",
    ],
  },
];

let currentCategoryIndex = 0;
let currentQuestionIndex = 0;
let completionProgress = 0;
let userAnswers = {};
let state=false;
let submit=false;

document.getElementById("start").addEventListener("click", startQuestions);

function startQuestions() {
  document.getElementById("st-con").style.visibility = "hidden"; // Show the question container
  document.getElementById("vid").style.visibility = "hidden";
  document.getElementById("con").style.visibility = "visible"; // Hide the start button
  document.getElementById("userCollectionContainer").style.visibility =
    "visible";
  displayPrompt(); // Display the first question
}

function displayPrompt() {
  const currentCategory = prompts[currentCategoryIndex];
  const currentQuestion = currentCategory.questions[currentQuestionIndex];
  const totalQuestions = currentCategory.questions.length;
  const questionNumber = currentQuestionIndex + 1; // Question number (1-indexed)

  document.getElementById(
    "prompt"
  ).innerHTML = `<label>${currentCategory.category} - Question ${questionNumber} / ${totalQuestions}</p>`; // Print category, question number, and total questions
  document.getElementById("prompt").innerHTML += `<p>${currentQuestion}</label><input type="text" id="userResponse" class="input_box" />`; // Print current question
}
function skipFunc() {
  if (currentCategoryIndex === 0 || (currentCategoryIndex==3 && currentQuestionIndex==3) || (currentCategoryIndex==3 && currentQuestionIndex==2) ) {
    alert("You Can't Skip this Question");
  } else {          
    skipQuestion();
  }
}

function submitResponse() {
  const response = document.getElementById("userResponse").value.trim(); // Trim whitespace
  const currentCategory = prompts[currentCategoryIndex];
  const currentQuestion = currentCategory.questions[currentQuestionIndex];

  // Proceed with submission or skip to the next question
  if (response === "") {
    alert("Please enter a value.");
    return; // Exit function if response is empty
  }

  if (currentCategoryIndex === 0 && currentQuestionIndex === 2) {
    if (isNaN(response)) {
      alert("Please enter a numerical value.");
      return; // Exit function if response is non-numeric
    }
  }

  if (currentCategoryIndex === 3 && currentQuestionIndex === 2) {
    if (response == "") {
      alert("Please enter a value.");
      return; // Exit function if response is non-numeric
    } else {
      if (
        !String(response)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        alert("Please Enter a valid email");
        return;
      }
    }
  }

  //phone number validation
  if (currentCategoryIndex === 3 && currentQuestionIndex === 3) {
    if (isNaN(response)) {
      alert("Please enter a numerical value.");
      return; // Exit function if response is non-numeric
    }else if(response.length!=10){
      alert("Phone Number should have 10 digits.");
      return;
    }else{
      submit=true;
    }
  }

  // Proceed with submission
  userAnswers[currentQuestion] = response;
  updateOutput();
  // Increment current question index
  currentQuestionIndex++;
  if (submit) {
    document.getElementById("con").style.visibility = "hidden"; // Hide the start button
    document.getElementById("userCollectionContainer").style.visibility =
      "hidden";
    document.getElementById("congrats").style.visibility = "visible";
  }

  // Check if all questions in the current category have been answered
  if (currentQuestionIndex >= currentCategory.questions.length) {
    // Display horizontal line after completing all questions in a category within the "User Information Collection" container
    document.getElementById("output").innerHTML += "<hr>";
    // Reset question index for the next category
    currentQuestionIndex = 0;
    // Increment category index

    currentCategoryIndex++;

    // Increment completion progress
    if(!state){
      completionProgress += 25;
      
    }else{
      state=false;
    }
    document.getElementById("pro-bar").style.width = completionProgress + "%";
  }

  // Display progress
  document.getElementById(
    "progressValue"
  ).textContent = `${completionProgress}%`;

  function updateProgressBar(percentage) {
    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = percentage + "%";
  }

  // Display next prompt or finish
  if (currentCategoryIndex < prompts.length) {
    displayPrompt();
  } else {
    // Display completion message
    document.getElementById("prompt").innerHTML = ""; // Clear prompt area
    document.getElementById("previousButton").disabled = true; // Disable previous button
    document.getElementById("skipButton").disabled = true; // Disable skip button
    document.getElementById("submitButton").disabled = true; // Disable submit button
    console.log(userAnswers); // You can also display the userAnswers object in the console
  }

  // Clear input field for the next prompt
  document.getElementById("userResponse").value = "";
}

function previousQuestion() {
  if(!(currentCategoryIndex==0 && currentQuestionIndex==0)){

  
  // Decrement current question index
  currentQuestionIndex--;

  // Check if index goes below 0 and adjust it accordingly
  if (currentQuestionIndex < 0) {
    // Decrement category index if we're at the first question of the current category
    currentCategoryIndex--;
    if (currentCategoryIndex < 0) {
      currentCategoryIndex = 0;
    }
    // Set currentQuestionIndex to the last question of the previous category
    currentQuestionIndex = prompts[currentCategoryIndex].questions.length - 1;
  }

  state=true;
  // Update prompt
  displayPrompt();
}
}

function skipQuestion() {
  // Skip the question
  userAnswers[prompts[currentCategoryIndex].questions[currentQuestionIndex]] =
    "Skipped";
  // Increment current question index
  currentQuestionIndex++;
  // Check if all questions in the current category have been answered
  if (currentQuestionIndex >= prompts[currentCategoryIndex].questions.length) {
    // Display horizontal line after completing all questions in a category within the "User Information Collection" container
    document.getElementById("output").innerHTML += "<hr>";
    // Reset question index for the next category
    currentQuestionIndex = 0;
    // Increment category index
    currentCategoryIndex++;
    // Increment completion progress
    if(!state){
      completionProgress += 25;

    }else{
      state=false;
    }
    document.getElementById("pro-bar").style.width = completionProgress + "%";
  }

  // Display progress
  document.getElementById(
    "progressValue"
  ).textContent = `${completionProgress}%`;

  // Display output
  updateOutput();

  // Display next prompt or finish
  if (currentCategoryIndex < prompts.length) {
    displayPrompt();
  } else {
    // Display completion message
    document.getElementById("prompt").innerHTML = ""; // Clear prompt area
    document.getElementById("previousButton").disabled = true; // Disable previous button
    document.getElementById("skipButton").disabled = true; // Disable skip button
    document.getElementById("submitButton").disabled = true; // Disable submit button
    console.log(userAnswers); // You can also display the userAnswers object in the console
  }

  // Clear input field for the next prompt
  document.getElementById("userResponse").value = "";
}

function updateOutput() {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  let i = 0;
  let x = 0;
  // Iterate over user Answers to update output
  for (const [question, answer] of Object.entries(userAnswers)) {
    if (x == 0) {
      outputDiv.innerHTML += "<hr>";
      outputDiv.innerHTML += `<p>${prompts[i].category}</p>`;
      i++;
    }
    outputDiv.innerHTML += `<p>${question}: ${answer}</p>`;
    if (x == 3) {
      x = 0;
    } else {
      x++;
    }
  }
}

// Display initial prompt
displayPrompt();
