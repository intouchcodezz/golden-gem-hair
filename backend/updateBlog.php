<?php
header("Content-Type: application/json");
require_once __DIR__ . '/config.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON"]);
    exit;
}

/* Admin secret */
if (
    empty($data['admin_secret']) ||
    $data['admin_secret'] !== ADMIN_SECRET
) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Unauthorized"]);
    exit;
}

/* Fields */
$id = intval($data['id'] ?? 0);
$title = trim($data['title'] ?? '');
$slug = trim($data['slug'] ?? '');
$content = $data['content'] ?? '';
$excerpt = $data['excerpt'] ?? null;
$meta_title = $data['meta_title'] ?? null;
$meta_description = $data['meta_description'] ?? null;
$cover_image = $data['cover_image'] ?? null;
$status = $data['status'] ?? 'draft';

if ($id <= 0 || $title === '' || $slug === '' || $content === '') {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Missing or invalid fields"]);
    exit;
}

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    /* Check blog exists */
    $check = $pdo->prepare("SELECT id FROM blogs WHERE id = ?");
    $check->execute([$id]);
    if (!$check->fetch()) {
        http_response_code(404);
        echo json_encode(["success" => false, "message" => "Blog not found"]);
        exit;
    }

    /* Check slug uniqueness (exclude current blog) */
    $slugCheck = $pdo->prepare("SELECT id FROM blogs WHERE slug = ? AND id != ?");
    $slugCheck->execute([$slug, $id]);
    if ($slugCheck->fetch()) {
        http_response_code(409);
        echo json_encode(["success" => false, "message" => "Slug already exists"]);
        exit;
    }

    /* Update */
    $stmt = $pdo->prepare(
        "UPDATE blogs SET
      title = ?,
      slug = ?,
      excerpt = ?,
      content = ?,
      meta_title = ?,
      meta_description = ?,
      cover_image = ?,
      status = ?
    WHERE id = ?"
    );

    $stmt->execute([
        $title,
        $slug,
        $excerpt,
        $content,
        $meta_title,
        $meta_description,
        $cover_image,
        $status,
        $id
    ]);

    echo json_encode(["success" => true]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Database error"
    ]);
}