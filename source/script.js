var cryptoElement = document.getElementById("crypto-element");

cryptoElement.addEventListener("click", function() {
  alert("Please connect your wallet.");
});

var cryptoElement1 = document.getElementById("crypto-element1");

cryptoElement1.addEventListener("click", function() {
  alert("Please connect your wallet.");
});

document.getElementById("link-history").addEventListener("click", function(event) {
    event.preventDefault(); // جلوگیری از رفتن به لینک اصلی
  
    // انجام عملیات مربوط به وصل نشدن
    document.getElementById("status-message").style.display = "inline";
  });
  