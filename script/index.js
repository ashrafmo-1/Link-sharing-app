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
const btnSave = document.querySelector(".save .submit_btn")
/* on click btn save */
btnSave.addEventListener("click", (e) => {
  e.preventDefault();
  
  // check if GitHub unput not empty
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

// handle portfolio image
document.querySelector(".imageBox input[type='file']").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
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
});

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
  if (githubLinkStorage) {
    console.log(true, "github link storage");
    githubLink.href = githubLinkStorage; // Update link instead of removing
  }
  // github link
  const youtubeLinkStorage = localStorage.getItem("youtubeLinkStorage");
  if (youtubeLinkStorage) {
    console.log(true, "youtube Link Storage");
    youtubeLink.href = youtubeLinkStorage;
  }
  // github link
  const linkedinLinkStorage = localStorage.getItem("linkedinLinkStorage");
  if (linkedinLinkStorage) {
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
}

const linksControlDiv = document.querySelector(".control_screen");
const profileDetailsDiv = document.querySelector(
  ".control_screen_profile_Detaile"
);
const showLinksControlBtn = document.querySelector(".add_new_link");
const showProfileDetailsBtn = document.querySelector(".profile_details");
function Rouring() {
  profileDetailsDiv.style.display = "none";

  showLinksControlBtn.addEventListener("click", function () {
    linksControlDiv.style.display = "block";
    profileDetailsDiv.style.display = "none";
  });

  showProfileDetailsBtn.addEventListener("click", function () {
    linksControlDiv.style.display = "none";
    profileDetailsDiv.style.display = "block";
  });
}

const previewButton = document.querySelector(".perview_btn");
const mobileView = document.querySelector(".mobile_viwe");
const Links_content_controls = document.querySelector(
  "#Links_content_controls"
);
function show_end_Info() {
  // Initially hide the mobile view
  mobileView.style.display = "flex";

  previewButton.addEventListener("click", function () {
    if (mobileView.style.display === "flex") {
      linksControlDiv.style.display = "none";
      profileDetailsDiv.style.display = "none";
      Links_content_controls.style.display = "flex";
      Links_content_controls.style.justifyContent = "center";
      Links_content_controls.style.alignItems = "center";
    } else {
      linksControlDiv.style.display = "flex";
      profileDetailsDiv.style.display = "flex";
    }
  });
}

dataStoring();
Rouring();
show_end_Info();
DragAndDrop();

function DragAndDrop() {
  let draggedItem = null;
  let draggedItemId = null;

  const dragStart = function(e) {
    draggedItem = this;
    draggedItemId = this.id;
    e.dataTransfer.setData('text/html', this.innerHTML);
  };

  const dragOver = function(e) {
    e.preventDefault();
  };

  const drop = function(e) {
    e.preventDefault();
    if (draggedItem) {
      this.appendChild(draggedItem);
      // Save the new order in local storage
      saveOrderInLocalStorage(draggedItemId, this.id);
      draggedItem = null;
    }
  };

  const saveOrderInLocalStorage = (draggedItemId, targetId) => {
    let order = localStorage.getItem('dragOrder') ? JSON.parse(localStorage.getItem('dragOrder')) : {};
    order[draggedItemId] = targetId;
    localStorage.setItem('dragOrder', JSON.stringify(order));
  };

  document.querySelectorAll('[draggable="true"]').forEach(item => {
    item.addEventListener('dragstart', dragStart);
  });

  document.querySelectorAll('.social').forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', drop);
  });
};