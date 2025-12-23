<?php
header("Content-Type: application/json");

ini_set('session.cookie_secure', '1');
ini_set('session.cookie_samesite', 'Lax');
ini_set('session.cookie_httponly', '1');

session_start();

if (empty($_SESSION['admin_logged_in'])) {
  http_response_code(401);
  echo json_encode(["success" => false, "message" => "Unauthorized"]);
  exit;
}
