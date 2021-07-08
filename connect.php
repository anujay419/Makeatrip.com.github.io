<?php
    $email = $_POST['email'];
    $password = $_POST['psw'];
    $repeatpasword = $_POST['repeatpsw'];


    $conn = new mysqli('localhost','root','Anujay@2003','signup');
    if($conn->connect_error){
        die('connection failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into signup(email,psw,repeatpsw)values(?,?,?)");
        $stmt->bind_param("sss",$email,$psw,$repeatpsw);
        $stmt->execute();
        echo"sign up successfully..";
        $stmt->close();
        $conn->close();
    }





?>