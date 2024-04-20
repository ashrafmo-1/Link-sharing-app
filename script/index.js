// active click on profile details
document.querySelector(".profile_details").addEventListener("click", function (ele) {
    const infoElement = document.querySelector(".profile_details .info");
    const isActive = infoElement.style.backgroundColor === "var(--bgSecond)";
    infoElement.style.backgroundColor = isActive ? "" : "var(--bgSecond)";
    infoElement.style.color = isActive ? "" : "var(--text_color)";
  });

  const githubInput = document.querySelector(".input_social_link .github_input");
  const youtubeInput = document.querySelector(".input_social_link .youtube_input");
  const linkedinInput = document.querySelector(".input_social_link .linkedin_input");
  const githubLink = document.querySelector(".github_account");
  const youtubeLink = document.querySelector(".youtube_account");
  const linkedinLink = document.querySelector(".linedin_account");
  /* on click btn save */
  document.querySelector(".save .submit_btn").addEventListener("click", (e) => {
  e.preventDefault();

  if (!githubInput.value.trim()) {
      alert("GitHub link is required.");
    githubInput.style.borderColor = "red";
  } else {
    localStorage.setItem("githubLinkStorage", githubInput.value);
    githubInput.style.borderColor = "#777";
  }

  if (!youtubeInput.value.trim()) {
      alert("YouTube link is required.");
    youtubeInput.style.borderColor = "red";
  } else {
    localStorage.setItem("youtubeLinkStorage", youtubeInput.value);
    youtubeInput.style.borderColor = "#777";
  }

  if (!linkedinInput.value.trim()) {
      alert("LinkedIn link is required.");
    linkedinInput.style.borderColor = "red";
  } else {
    localStorage.setItem("linkedinLinkStorage", linkedinInput.value);
    linkedinInput.style.borderColor = "#777";
  }
  window.location.reload();
});

document.querySelector(".imageBox input[type='file']").addEventListener("change", function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageUrl = e.target.result;
      localStorage.setItem("profileImage", imageUrl);
      const imageElement = document.querySelector(".ProfileDetails .image");
      imageElement.style.backgroundImage = `url(${imageUrl})`;
      imageElement.style.backgroundSize = "cover";
      imageElement.style.width = "100px";
      imageElement.style.height = "100px";
    };
    reader.readAsDataURL(file);
  }
});

// ProfileDetails Fname Lname email address
// location types variables
const Fname = document.querySelector(".ProfileDetails .name .F_Name");
const Lname = document.querySelector(".ProfileDetails .name .L_Name");
const Email = document.querySelector(".email");
// input variables
const fName_input = document.querySelector(".fName input");
const lName_input = document.querySelector(".lName input");
const email_input = document.querySelector(".email input");
const saveBtn = document.querySelector(".saveInfo");
saveBtn.addEventListener("click", (ele) => {
  ele.preventDefault();
  localStorage.setItem("Fname", fName_input.value);
  localStorage.setItem("Lname", lName_input.value);
  localStorage.setItem("Email", email_input.value);
  window.location.reload();
})

// add emage from input to localStorage
function dataStoring() {
  const storedImageUrl = localStorage.getItem("profileImage");
  if (storedImageUrl) {
    const imageElement = document.querySelector(".ProfileDetails .image");
    imageElement.style.backgroundImage = `url(${storedImageUrl})`;
    imageElement.style.backgroundSize = "cover";
    imageElement.style.width = "100px";
    imageElement.style.height = "100px";
  }
  // github link
  const githubLinkStorage = localStorage.getItem("githubLinkStorage");
  if(githubLinkStorage) {
    console.log(true, "github link storage");
    githubLink.href = githubLinkStorage; // Update link instead of removing
  }
  // github link
  const youtubeLinkStorage = localStorage.getItem("youtubeLinkStorage");
  if(youtubeLinkStorage) {
    console.log(true, "youtube Link Storage");
    youtubeLink.href = youtubeLinkStorage;
  }
  // github link
  const linkedinLinkStorage = localStorage.getItem("linkedinLinkStorage");
  if(linkedinLinkStorage) {
    console.log(true);
    linkedinLink.href = linkedinLinkStorage;
  }

  // information text
  const FnameStorage = localStorage.getItem("Fname");
  if (FnameStorage) {
    Fname.innerHTML = FnameStorage;
  }
  const LnameStorage = localStorage.getItem("Lname");
  if (LnameStorage) {
    Lname.innerHTML = LnameStorage;
  }
  const EmailStorage = localStorage.getItem("Email");
  if (EmailStorage) {
    Email.innerHTML = EmailStorage;
  }
};

dataStoring()

// routing
document.querySelector(".profile_details").addEventListener("click", () => {
  document.querySelector(".control_screen").style.display = "none";
  document.querySelector(".control_screen_profile_Detaile").style.display = "flex";
});

// media screens;
document.querySelector(".toggle_barse").addEventListener("click", () => {
  console.log("hello btn");
  document.querySelector(".top_controls .links_control").style.display = "flex";
})