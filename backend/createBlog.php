<?php
require __DIR__ . '/auth_guard.php';
require __DIR__ . '/config.php';

$data = json_decode(file_get_contents("php://input"), true);

$pdo = new PDO(
  "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
  $DB_USER,
  $DB_PASS,
  [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

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
