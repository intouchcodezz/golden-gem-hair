<?php
header("Content-Type: application/json");
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(["success" => false, "message" => "Method not allowed"]);
  exit;
}

if (
  empty($_POST['admin_secret']) ||
  $_POST['admin_secret'] !== ADMIN_SECRET
) {
  http_response_code(401);
  echo json_encode(["success" => false, "message" => "Unauthorized"]);
  exit;
}

if (empty($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "No image uploaded"]);
  exit;
}

$allowed = ['image/jpeg', 'image/png', 'image/webp'];
if (!in_array($_FILES['image']['type'], $allowed)) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "Invalid image type"]);
  exit;
}

$dir = $_SERVER['DOCUMENT_ROOT'] . "/uploads/blogs/";
if (!is_dir($dir)) mkdir($dir, 0755, true);

$ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
$name = "blog_" . time() . "_" . rand(1000, 9999) . "." . $ext;
$path = $dir . $name;

if (!move_uploaded_file($_FILES['image']['tmp_name'], $path)) {
  http_response_code(500);
  echo json_encode(["success" => false, "message" => "Upload failed"]);
  exit;
}

echo json_encode([
  "success" => true,
  "url" => "/uploads/blogs/" . $name
]);
