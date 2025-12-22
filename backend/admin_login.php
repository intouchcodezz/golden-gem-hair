<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST");

$DB_HOST = 'localhost';
$DB_NAME = 'a1761e23_appointments_db';
$DB_USER = 'a1761e23_goldengemappoinment';
$DB_PASS = 'goldengem@25';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['username'], $data['password'])) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "Missing credentials"]);
  exit;
}

$pdo = new PDO(
  "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
  $DB_USER,
  $DB_PASS,
  [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

$stmt = $pdo->prepare("SELECT * FROM admin_users WHERE username = ?");
$stmt->execute([$data['username']]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$user || $user['password'] !== $data['password']) {
  http_response_code(401);
  echo json_encode(["success" => false, "message" => "Invalid login"]);
  exit;
}

/**
 * SIMPLE TOKEN (HMAC)
 */
$token = hash_hmac(
  'sha256',
  $user['id'] . '|' . time(),
  'SECRET_ADMIN_KEY'
);

echo json_encode([
  "success" => true,
  "token" => $token
]);
