// active click on profile details
document.querySelector(".profile_details").addEventListener("click", function(ele) {
  document.querySelector(".profile_details .info").style.backgroundColor = "var(--bgSecond)";
  document.querySelector(".profile_details .info").style.color = "var(--text_color)";
})

// document.querySelector(".add_new_link").addEventListener("click", () => {
//   document.getElementById("Links_content_controls").style.display = "block";
// })