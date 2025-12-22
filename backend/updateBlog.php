<?php
session_start();

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if (!isset($_SESSION['admin'])) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Unauthorized"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || empty($data['id'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid payload"]);
    exit;
}

try {
    $pdo = new PDO(
        "mysql:host=localhost;dbname=a1761e23_appointments_db;charset=utf8mb4",
        "a1761e23_goldengemappoinment",
        "goldengem@25",
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

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
        $data['title'],
        $data['slug'],
        $data['excerpt'] ?? '',
        $data['content'] ?? '',
        $data['meta_title'] ?? '',
        $data['meta_description'] ?? '',
        $data['cover_image'] ?? '',
        $data['status'] ?? 'draft',
        $data['id']
    ]);

    echo json_encode(["success" => true]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Database error"]);
}
