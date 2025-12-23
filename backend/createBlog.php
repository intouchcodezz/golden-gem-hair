<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

/* ===== ADMIN SECRET ===== */
if (
  !isset($data['admin_secret']) ||
  $data['admin_secret'] !== 'GG_ADMIN_9f3c8e2b7a1d'
) {
  http_response_code(401);
  echo json_encode(["success" => false, "message" => "Unauthorized"]);
  exit;
}

/* ===== DB CONNECTION ===== */
$pdo = new PDO(
  "mysql:host=localhost;dbname=a1761e23_appointments_db;charset=utf8mb4",
  "a1761e23_goldengemappoinment",
  "goldengem",
  [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

/* ===== INSERT ===== */
$stmt = $pdo->prepare("
  INSERT INTO blogs
  (title, slug, excerpt, content, meta_title, meta_description, cover_image, status)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
");

$stmt->execute([
  $data['title'],
  $data['slug'],
  $data['excerpt'],
  $data['content'],
  $data['meta_title'],
  $data['meta_description'],
  $data['cover_image'],
  $data['status']
]);

echo json_encode(["success" => true]);
