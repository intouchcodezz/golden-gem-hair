<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$headers = getallheaders();

if (!isset($headers['Authorization'])) {
  http_response_code(401);
  echo json_encode(["success" => false, "message" => "No token"]);
  exit;
}

$token = str_replace("Bearer ", "", $headers['Authorization']);

if (strlen($token) < 20) {
  http_response_code(401);
  echo json_encode(["success" => false, "message" => "Invalid token"]);
  exit;
}
