<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (
  !isset($data['admin_key']) ||
  $data['admin_key'] !== 'GG_ADMIN_9f3c8e2b'
) {
  http_response_code(401);
  echo json_encode([
    "success" => false,
    "message" => "Unauthorized"
  ]);
  exit;
}
