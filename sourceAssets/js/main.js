body {
  font-family: 'PT Sans', cursive;
  background-color: red;
  color: #fff;
    background-image: url('http://i1079.photobucket.com/albums/w503/retrotemporecords/livingPetsLaptopNewish_zpsm503rthx.png~original');
  background-repeat: no-repeat; 
    background-size: cover;
}

/* Hover Effects */ 
.hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
    transform: scale(1.1);
}

.hvr-float {
  display: inline-block;
  vertical-align: middle;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  transition-duration: 0.3s;
  transition-property: transform;
  transition-timing-function: ease-out;
}
.hvr-float:hover,
.hvr-float:focus,
.hvr-float:active {
  transform: translateY(-8px);
}
/* End Hover Effects */ 

ul {
  font-size: 20px; 
  position:relative;
  left: 8em;
  margin-top: 3em; 
  li {
    font-size: 18px;
    .icon {
      height: 40px;
      width: 40px; 
      border-radius: 0.2em; 
    }
  }
  a {
    color: #fff; 
  }
  a:hover {
    text-decoration: none; 
    color: #fff;
  }
}

.hero {
  width: 100%;
  .contactButton {
    background-color: white; 
    color: #d2402d;
    padding:0.5em; 
      border-radius: 0.2em; 
    font-weight: 700; 
    font-size: 20px;
    margin-right: 2em; 
  }
  .contactButton:hover {
    text-decoration: none; 
  }
.heroImageText {
  margin-top: 6em; 
  padding: 0 10em 0 10em;
    text-shadow: 1px 1px black; 
  position: relative; 
    left: 20px; 
    h1 {
    font-weight: 900;
      font-size: 44px;
  }
  h3 {
    font-weight: 700; 
  }
  p {
    margin-top: 2em;
    font-size: 20px; 
    font-weight: 400; 
    padding: 0 12em 0 0; 
      letter-spacing: 0.1em;
  }
  }
}