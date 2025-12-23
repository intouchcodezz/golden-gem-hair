<?php
header("Content-Type: application/json");

/* Read JSON */
$data = json_decode(file_get_contents("php://input"), true);

/* Validate JSON */
if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "Invalid JSON"]);
  exit;
}

/* Admin secret */
if (
  empty($data['admin_secret']) ||
  $data['admin_secret'] !== 'GG_ADMIN_9f3c8e2b7a1d'
) {
  http_response_code(401);
  echo json_encode(["success" => false, "message" => "Unauthorized"]);
  exit;
}

/* Blog ID */
$id = intval($data['id'] ?? 0);
if ($id <= 0) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "Invalid blog id"]);
  exit;
}

try {
  $pdo = new PDO(
    "mysql:host=localhost;dbname=a1761e23_appointments_db;charset=utf8mb4",
    "a1761e23_goldengemappoinment",
    "goldengem@25",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
  );

  /* Fetch blog */
  $stmt = $pdo->prepare("SELECT cover_image FROM blogs WHERE id = ?");
  $stmt->execute([$id]);
  $blog = $stmt->fetch(PDO::FETCH_ASSOC);

  if (!$blog) {
    http_response_code(404);
    echo json_encode(["success" => false, "message" => "Blog not found"]);
    exit;
  }

  /* Delete image file */
  if (!empty($blog['cover_image'])) {
    $imagePath = $_SERVER['DOCUMENT_ROOT'] . $blog['cover_image'];
    if (file_exists($imagePath)) {
      unlink($imagePath);
    }
  }

  /* Delete blog row */
  $del = $pdo->prepare("DELETE FROM blogs WHERE id = ?");
  $del->execute([$id]);

  echo json_encode(["success" => true]);

} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode(["success" => false, "message" => "Database error"]);
}
