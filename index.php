  <!DOCTYPE html>
<html lang="en">
<head>
<title>Green Beil</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="plugins/animatecss/animate.css">
<link rel="stylesheet" href="https://bootstrap/3.3.6/css/bootstrap.min.css">
<script src="https://jquery-1.12.4.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>

</head>
<style type="text/css">
  .jumbotron {
   
	background-color: #50C878;
	color: white;
  } 
  .carousel-inner img {
    
    /* make all photos black and white */ 
    width: 100%; /* Set width to 100% */
    margin: auto;
  }

  .carousel-caption h3 {
    color: #fff !important;
  }

  @media (max-width: 600px) {
    .carousel-caption {
        display: none; /* Hide the carousel text when the screen is less than 600 pixels wide */
    }
  }
 /* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar{
      margin-bottom: 0;
      border-radius: 0;
      margin-bottom: 0px;
    }

    .navbar-inverse {
    background-color: #c4c0bf;;
    border-color: #b5b7ad;
    } 
    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */
    .row.content {height: 450px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      padding-top: 20px;
      background-color: #f1f1f1;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height:auto;} 
    }
    footer {
      background-color: #0a0a0a;
      color: white;
      padding: 20px;
    }
    a {
      color: #fcf8e3;
      text-decoration: none;
    }
 
</style>

<body>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand " href="#"><img src="logo.png" alt="GreenBelt" style="width: 70%; height: 130%"></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">infographics</a></li>
        <li><a href="#">forum</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" data-toggle="tooltip" title="sing up!"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
</nav>

<div id="myCarousel" class="carousel slide" data-ride="carousel" style="width:100%; height: 100%">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox" >
    <div class="item active">
      <img src="img/img1.png"   alt="Six Sigma" ">
      <div class="carousel-caption">
        <h3>You can by the best</h3>
        <p>try again & changes your life.</p>
      </div> 
    </div>

    <div class="item">
      <img src="img/img22.jpg"alt="ABInBev">
      <div class="carousel-caption">
        <h3>You can by come a bussines master</h3>
        <p>Only need ambition of success.</p>
      </div> 
    </div>

    <div class="item">
      <img src="img/img3.png" alt="GreenBelt">
      <div class="carousel-caption">
        <h3>Is the most important certification around the world</h3>
        <p>Do you wanna by the best? come by the best!.</p>
      </div> 
    </div>
    <div class="item">
      <img src="img/img4.jpg" alt="GreenBelt">
      <div class="carousel-caption">
        <h3>Go! be Diferent</h3>
        <p>Can you change the enterpriess? Yes you can! .</p>
      </div> 
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
   <footer class="container-fluid text-center">
	   <div class="row">
          <div class="col-sm-4 text-center"><a href="#">privace polices</a></div>
          <div class="col-sm-4 text-center"><a href="#">Who is a sig sigma</a></div>
          <div class="col-sm-4 text-center"><a href="#">FAqs</a></div>
        </div>
    </footer>
</body>
</html>