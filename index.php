<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Expires" content="Fri, Jan 01 1900 00:00:00 GMT">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Lang" content="no">
<meta name="author" content="">
<meta http-equiv="Reply-to" content="robbestad@gmail.com">
<meta name="description" content="Bondesjakk (Tic tac toe)">
<meta name="keywords" content="Bondesjakk (Tic tac toe)">
<meta name="creation-date" content="17/03/2012">
<meta name="revisit-after" content="15 days">
<title>Tic-Tac-Toe</title>
<link rel="stylesheet" type="text/css" href="css/my.css">
<link rel="stylesheet" type="text/css" href="js/msgbox/jquery.msgbox.css" />
</head>
<body>                                    


<div class="wrapper">
    <div id="debug"></div>
    <h1>Tic-Tac-Toe</h1>
    <div id="grid">
    <?php 
    $squares=130;
    for($i=1; $i<=$squares; $i++){
        print("<div id=\"sq$i\" class=\"squares\"><span class=\"insideSquare\"></span></div>\n");
        
    }
    ?>
        <div class="push"></div>
    </div>
</div>

<div class="footer">
    Tic-Tac-Toe in javascript<br/>
    Sven Anders Robbestad (C) 2012
</div>
</body>
</html>   

<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.ui.min.js"></script>
<script type="text/javascript" src="js/bondesjakk.js" charset="utf-8"></script>
<script type="text/javascript" src="js/msgbox/jquery.msgbox.min.js"></script>                