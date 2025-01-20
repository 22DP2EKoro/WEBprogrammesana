<template>

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ExploreRiga</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet">

  </head>

  <body>
      <div class="container">
          <nav>
              <div class="nav-links" id="navLinks">
                  <i class="fa fa-times" onclick="hideMenu()"></i>
                  <ul>
                      <li><a href="Home.vue">HOME</a></li>
                      <li><a href="Museums.vue">MUSEUMS</a></li>
                      <li><a href="#">CONTACTS</a></li>
                      <!----------- Dark mode ------------->
                      <button class="dark-mode-o" onclick="myFunction()">Dark mode</button>

                  </ul>
              </div>
              <i class="fa fa-bars" onclick="showMenu()"></i>
          </nav>

          <div class="row">
              <div class="col">
                  <h1>Restaurants</h1>
                  <p>Restaurants provide a space to enjoy delicious food, experience different cuisines</p>
              </div>
              <div class="col"></div>
          </div>
      </div>

      


      <footer>
          <div class="footer-content">
              <p>&copy; 2024 ExploreRiga. Visas tiesības aizsargātas.</p>
              <div class="social-links">
                  <a href="https://www.facebook.com" target="_blank">Facebook</a> |
                  <a href="https://www.twitter.com" target="_blank">Twitter</a> |
                  <a href="https://www.instagram.com" target="_blank">Instagram</a>
              </div>
          </div>
      </footer>
  </body>
</template>


<script>
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
</script>

<style scoped>
  * {
  margin: 0;
  padding: 0; 
  font-family: 'Merriweather', serif;
  box-sizing: border-box;
}

/* Dark mode*/
body.dark-mode {
  background-color: #121212;
  color: #ffffff;
}


body.dark-mode .museums {
  background-color: #000000;
}

body.dark-mode footer {
  background-color: #1c1c1c;
}

body.dark-mode .text-box h3 {
  color: #ffffff;
}

body.dark-mode .text-box p {
  color: #ffffff;
}

body.dark-mode .places-col {
  background-color: #000000;
}

body.dark-mode .flex-container {
  background-color: #333;
}

.dark-mode-o {
  background-color: #3b053d;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.dark-mode-o:hover {
  background-color: #7b8186;
  transform: translateY(-1px);
}

.container {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("https://th.bing.com/th/id/R.d25f5421697c2fd1c4fcdd5ff0e650c5?rik=6VxmyHlyxl8btw&pid=ImgRaw&r=0");
  background-position: center;
  background-size: cover;
  padding-left: 8%;
  padding-right: 8%;
}

nav {
  display: flex;
  padding: 2% 6%;
  justify-content: space-between;
  align-items: center;


}

.nav-links {
  flex: 1;
  text-align: right;
}


.nav-links ul li {
  list-style: none;
  display: inline-block;
  padding: 10px 15px;
  position: relative;
}

.nav-links ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
}

.nav-links ul li::after {
  content: '';
  width: 0%;
  height: 2px;
  background: #991499;
  display: block;
  margin: auto;
  transition: 0.5s;
}

.nav-links ul li:hover::after {
  width: 100%;
}

nav .fa {
  display: none;
}



.row {
  display: flex;
  height: calc(100% - 80px);
  align-items: center;
}

.col {
  flex-basis: 50%;
  padding: 20px;
}

h1 {
  color: #fff;
  font-size: 80px;
  margin-bottom: 20px;
}

p {
  color: #fff;
  font-size: 22px;
  line-height: 1.5;
  max-width: 600px;
}

img {
  max-width: 320px;
}



/*------footer----*/
footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content p {
  margin: auto;
  font-size: 14px;
  padding: 10px;
  
}

.social-links a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #00aced;
}

@media(max-width: 700px) {
  .flex-container {
      flex-direction: column;
      align-items: center;
  }

  .places-col,
  .text-box {
      flex-basis: 90%;
      margin: 10px 0;
  }

  .text-box h1 {
      font-size: 20px;
  }

  .nav-links ul li {
      display: block;
  }

  .nav-links {
      position: absolute;
      background: #991499;
      height: 100vh;
      width: 200px;
      top: 0;
      right: -200px;
      text-align: left;
      z-index: 2;
      transition: 0.5s;
  }

  nav .fa {
      display: block;
      color: #fff;
      margin: 10px;
      font-size: 22px;
      cursor: pointer;
  }

  .nav-links ul {
      padding: 30px;
  }
}
</style>