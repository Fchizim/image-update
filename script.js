let profilePic = document.getElementById("profile-pic");
let inpuutFile = document.getElementById("input-file");

inpuutFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFiles.files[0]);

}