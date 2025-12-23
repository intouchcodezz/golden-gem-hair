<?php
header("Content-Type: application/json");

ini_set('session.cookie_secure', '1');
ini_set('session.cookie_samesite', 'Lax');
ini_set('session.cookie_httponly', '1');

session_start();
require __DIR__ . '/config.php';

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

$_SESSION['admin_logged_in'] = true;
$_SESSION['admin_id'] = $user['id'];

echo json_encode(["success" => true]);
