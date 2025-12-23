<?php
header("Content-Type: application/json");

/* ===== ADMIN SECRET CHECK ===== */
if (
  !isset($_POST['admin_secret']) ||
  $_POST['admin_secret'] !== 'GG_ADMIN_9f3c8e2b7a1d'
) {
  http_response_code(401);
  echo json_encode(["success" => false, "message" => "Unauthorized"]);
  exit;
}

/* ===== FILE CHECK ===== */
if (!isset($_FILES['image'])) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "No image uploaded"]);
  exit;
}

$file = $_FILES['image'];

/* ===== SIZE LIMIT (2MB) ===== */
if ($file['size'] > 2 * 1024 * 1024) {
  echo json_encode(["success" => false, "message" => "Max 2MB allowed"]);
  exit;
}

/* ===== MIME VALIDATION ===== */
$allowedTypes = ["image/jpeg", "image/png", "image/webp"];
if (!in_array($file['type'], $allowedTypes)) {
  echo json_encode(["success" => false, "message" => "Invalid image type"]);
  exit;
}

/* ===== UPLOAD DIR ===== */
$uploadDir = __DIR__ . "/../uploads/blogs/";
if (!is_dir($uploadDir)) {
  mkdir($uploadDir, 0755, true);
}

/* ===== UNIQUE FILE NAME ===== */
$ext = pathinfo($file['name'], PATHINFO_EXTENSION);
$filename = uniqid("blog_", true) . "." . $ext;
$uploadPath = $uploadDir . $filename;

/* ===== MOVE FILE ===== */
if (!move_uploaded_file($file['tmp_name'], $uploadPath)) {
  echo json_encode(["success" => false, "message" => "Upload failed"]);
  exit;
}

/* ===== SUCCESS ===== */
echo json_encode([
  "success" => true,
  "url" => "/uploads/blogs/" . $filename
]);
