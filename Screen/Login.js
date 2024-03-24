
  function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("forgotPasswordForm").style.display = "none";
  }

  function showForgotPasswordForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("forgotPasswordForm").style.display = "block";
  }
  function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("forgotPasswordForm").style.display = "none";
  }

  function HomeScreen(event) {
    // Ngăn chặn hành động mặc định của form
    event.preventDefault();

    // Thực hiện kiểm tra thông tin đăng nhập ở đây
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Giả sử thông tin đăng nhập hợp lệ
    if (username === "admin" && password === "admin") {
        // Chuyển hướng đến trang homeScreen.html
        window.location.href = "HomeScreen.html";
    } else {
        alert("Invalid username or password!");
    }
}
function Login(event){
  event.preventDefault();
    window.location.href = "Login.html";
}



