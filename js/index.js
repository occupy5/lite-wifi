var clipboard = new Clipboard(".action-button",{
  text: function() {
    return 'fan58shen?'
  }
});
var successText = document.querySelector(".action-button");
clipboard.on("success",function() {
  successText.innerHTML="好了(^〇^)"
  // console.log("success")
});
clipboard.on("error",function() {
  console.log("failed")
})