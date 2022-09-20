for (i = 0; i < document.querySelectorAll(".small-box").length; i++) {
  document
    .querySelectorAll(".small-box")
    [i].addEventListener("click", function () {
      let input = window.getComputedStyle(this).backgroundColor;
      document.querySelector(".main-box").style.backgroundColor = input;
      document.getElementById("col-inp").value = input;
      document.getElementById("copy-btn").innerHTML = "Copy";
    });
}

function copy_col_value() {
  copyText = document.getElementById("col-inp");

  // for mobile device
  copyText.setSelectionRange(0, 99999);

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  document.getElementById("copy-btn").innerHTML = "Copied";
}
