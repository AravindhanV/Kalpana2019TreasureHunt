const username = document.getElementById("username");
const saveNameBtn = document.getElementById("saveNameBtn");

username.addEventListener("keyup", () => {
  saveNameBtn.disabled = !username.value;
});

saveName = e => {
  console.log("clicked the save button!");
  e.preventDefault();
};

//dunno how to store the data though. check for that.