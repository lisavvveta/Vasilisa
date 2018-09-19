<?php
	function db ($host, $user, $pass, $database) {
		$db mysql_connect($host, $user, $pass);
		
		if (!$db) {
			exit (mysql_error());
		}
		if (!mysql_select_db($database, $db)) {
			exit (mysql_error());
		}
		mysql_query ("SET NAMES UTF8")
	}
		function get_cat () {
			$sql = "select id, name from block";
			$result = mysql_query($sql);
			if (!$result) {
				return NULL;
			}
		$arr_cat = array();
		if (mysql_nom_rows ($result) !=0){
			
			for($i = 0; $i < mysql_nom_rows ($result); $i++) {
				$row = mysql_fetch_array($result, MYSQL_ASSOC);
				$arr_cat [] = $row;
			}
		}
		return $arr_cat;	
	}