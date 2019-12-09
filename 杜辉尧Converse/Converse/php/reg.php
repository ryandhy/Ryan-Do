<?php
	header("Content-type:text/html;charset=utf-8");
	
	$tel = $_POST['tel'];
	$pwd = $_POST['pwd'];
	$email = $_POST['email'];
	$sex = $_POST['sex'];
	$birday = $_POST['birday'];
	
	// echo $tel . '-' . $pwd . '-' . $email . '-' . $sex . '-' . $birday;
	
	// 创建连接对象
	$conn = mysql_connect("127.0.0.1", "root", "root");
	if($conn){
		//选取数据库
		mysql_select_db("converse");
	}
	
	// 增加
	// $sqlInsert = "insert into user(tel,pwd,email,sex,birday) values ('$tel', '$pwd', '$email', '$sex', '$birday')";
	// mysql_query("insert into user(tel,pwd,email,sex,birday) values ('$tel', '$pwd', '$email', '$sex', '$birday')", $conn);
	
	$result = mysql_query("select * from user where tel = '$tel'", $conn);
	if(mysql_num_rows($result) == 1){
		echo '1';
	} else {
		echo '0';
		mysql_query("insert into user(tel,pwd,email,sex,birday) values ('$tel', '$pwd', '$email', '$sex', '$birday')", $conn);
	}
	
	// 修改
	// $sqlUpdate = "update student set stuAge = $age where stuId = 2";
	// mysql_query($sqlUpdate, $conn);
	
	// 删除
	// $sqlDel = "delete from student where stuId = '3'";
	// mysql_query($sqlDel, $conn);
	
	//查询
	// $sqlSelect = "select * from student"; // 查询所有数据
	// $result = mysql_query($sqlSelect, $conn); // 返回一个表格
	
	// $row = mysql_num_rows($result); // 获取行数
	// $field = mysql_num_fields($result); // 获取列数
	
	// if($row > 0){
	// 	//将结果集合放到数组中
	// 	while($rows = mysql_fetch_assoc($result)){
	// 		echo $rows["stuId"]." ".$rows["stuName"]." ".$rows["stuAge"]."<br>";
	// 	}
	// }
	
	mysql_close($conn);
?>