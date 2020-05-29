<?php
	header("Content-type:text/html;charset=utf-8");
	
	$tel = $_POST['tel'];
	$pwd = $_POST['pwd'];
	
	$conn = mysql_connect("127.0.0.1", "root", "root");
	
	if($conn){
		mysql_select_db("converse");
	}
	
	$result = mysql_query("select * from user where tel = '$tel' and pwd = '$pwd'", $conn);
	$row = mysql_num_rows($result); // 获取行数
	
	if(mysql_num_rows($result) == 1){
		while($rows = mysql_fetch_assoc($result)){
			echo '1' . $rows["tel"];
		}
	} else {
		echo '0';
	}
	
	mysql_close($conn);
?>