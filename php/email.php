<?php
$to = "baranova127@tut.by";//Почтовый ящик на который будет отправленно сообщение
  $subject = "Тема сообщения";//Тема сообщения
//   $message = "Message, сообщение!";//Сообщение, письмо
  $headers = "Content-type: text/plain; charset=utf-8 \r\n";//Шапка сообщения, содержит определение типа письма, от кого, и кому отправить ответ на письмо
// Проверяем или метод запроса POST
if($_SERVER["REQUEST_METHOD"] == "POST"){
		// Поочередно проверяем или были переданные параметры формы, или они не пустые
		if(isset($_POST["name"]){
			//Если параметр есть, присваеваем ему переданое значение
			$name 		=trim(strip_tags($_POST["name"]));
		}
		if(isset($_POST["tel"]))
		{
			$number 	= trim(strip_tags($_POST["tel"]));
		}
			// Формируем письмо
			$message  = "<html>";
				$message  .= "<body>";
				$message  .= "Телефон: ".$number;
				$message  .= "<br />";
				$message  .= "Имя: ".$name;
				$message  .= "</body>";
			$message  .= "</html>";
			// Окончание формирования тела письма
			// Посылаем письмо
			mail ($to, $subject,  $headers);
}
else
{
	exit;
} 
?>