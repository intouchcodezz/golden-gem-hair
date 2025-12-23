<?php
header("Content-Type: application/json");

/* Read input */
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

/* Validate JSON */
if (!is_array($data)) {
  http_response_code(400);
  echo json_encode([
    "success" => false,
    "message" => "Invalid JSON"
  ]);
  exit;
}

/* Admin secret check */
if (
  empty($data['admin_secret']) ||
  $data['admin_secret'] !== 'GG_ADMIN_9f3c8e2b7a1d'
) {
  http_response_code(401);
  echo json_encode([
    "success" => false,
    "message" => "Unauthorized"
  ]);
  exit;
}

/* Safe fields */
$title = trim($data['title'] ?? '');
$slug = trim($data['slug'] ?? '');
$excerpt = $data['excerpt'] ?? null;
$content = $data['content'] ?? null;
$meta_title = $data['meta_title'] ?? null;
$meta_description = $data['meta_description'] ?? null;
$cover_image = $data['cover_image'] ?? null;
$status = $data['status'] ?? 'draft';

/* Required check */
if ($title === '' || $slug === '' || !$content) {
  http_response_code(400);
  echo json_encode([
    "success" => false,
    "message" => "Missing required fields"
  ]);
  exit;
}

/* DB insert */
try {
  $pdo = new PDO(
    "mysql:host=localhost;dbname=a1761e23_appointments_db;charset=utf8mb4",
    "a1761e23_goldengemappoinment",
    "goldengem@25",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );

  /* Unique slug check */
  $check = $pdo->prepare("SELECT id FROM blogs WHERE slug = ?");
  $check->execute([$slug]);

  if ($check->fetch()) {
    http_response_code(409);
    echo json_encode([
      "success" => false,
      "message" => "Slug already exists"
    ]);
    exit;
  }

  $stmt = $pdo->prepare(
    "INSERT INTO blogs
     (title, slug, excerpt, content, meta_title, meta_description, cover_image, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  );

  $stmt->execute([
    $title,
    $slug,
    $excerpt,
    $content,
    $meta_title,
    $meta_description,
    $cover_image,
    $status
  ]);

  echo json_encode(["success" => true]);

} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode([
    "success" => false,
    "message" => "Database error"
  ]);
}
