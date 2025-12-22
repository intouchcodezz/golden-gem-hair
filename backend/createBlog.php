<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$DB_HOST = 'localhost';
$DB_NAME = 'a1761e23_appointments_db';
$DB_USER = 'a1761e23_goldengemappoinment';
$DB_PASS = 'goldengem@25';

$data = json_decode(file_get_contents("php://input"), true);

try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare(
        "INSERT INTO blogs
        (title, slug, excerpt, content, meta_title, meta_description, cover_image, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    );

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

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Database error: " . $e->getMessage()
    ]);
}
