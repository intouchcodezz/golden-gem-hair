<?php
header("Content-Type: application/json");
require_once __DIR__ . '/config.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "Invalid JSON"]);
  exit;
}

if (
  empty($data['admin_secret']) ||
  $data['admin_secret'] !== ADMIN_SECRET
) {
  http_response_code(401);
  echo json_encode(["success" => false, "message" => "Unauthorized"]);
  exit;
}

$id = intval($data['id'] ?? 0);
if ($id <= 0) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "Invalid ID"]);
  exit;
}

try {
  $pdo = new PDO(
    "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
    DB_USER,
    DB_PASS,
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );

  $q = $pdo->prepare("SELECT cover_image FROM blogs WHERE id = ?");
  $q->execute([$id]);
  $blog = $q->fetch(PDO::FETCH_ASSOC);

  if (!$blog) {
    http_response_code(404);
    echo json_encode(["success" => false, "message" => "Not found"]);
    exit;
  }

  if ($blog['cover_image']) {
    $path = $_SERVER['DOCUMENT_ROOT'] . $blog['cover_image'];
    if (file_exists($path)) unlink($path);
  }

  $pdo->prepare("DELETE FROM blogs WHERE id = ?")->execute([$id]);

  echo json_encode(["success" => true]);

} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode(["success" => false, "message" => "Database error"]);
}
