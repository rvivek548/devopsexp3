document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  // Clear old errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  function setError(id, msg) {
    document.querySelector("[data-error-for='" + id + "']").textContent = msg;
    valid = false;
  }

  // Validate text fields
  const name = document.getElementById("name");
  if (name.value.trim().length < 3) setError("name", "Enter at least 3 characters");

  const fatherName = document.getElementById("fatherName");
  if (fatherName.value.trim().length < 3) setError("fatherName", "Enter a valid name");

  const motherName = document.getElementById("motherName");
  if (motherName.value.trim().length < 3) setError("motherName", "Enter a valid name");

  const email = document.getElementById("email");
  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) setError("email", "Invalid email");

  const phone = document.getElementById("phone");
  if (!/^[6-9]\d{9}$/.test(phone.value)) setError("phone", "Invalid mobile number");

  const dob = document.getElementById("dob");
  if (!dob.value) setError("dob", "Enter your DOB");

  const gender = document.getElementById("gender");
  if (!gender.value) setError("gender", "Select gender");

  const center = document.getElementById("center");
  if (!center.value) setError("center", "Select center");

  const qualification = document.getElementById("qualification");
  if (!qualification.value) setError("qualification", "Select qualification");

  // Validate file uploads
  const photo = document.getElementById("photo");
  if (!photo.files.length) setError("photo", "Upload your photo");

  const signature = document.getElementById("signature");
  if (!signature.files.length) setError("signature", "Upload your signature");

  if (valid) {
    alert("✅ Registration Successful!");
    this.reset();
  }
});
