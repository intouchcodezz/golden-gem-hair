<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$DB_HOST = 'localhost';
$DB_NAME = 'a1761e23_appointments_db';
$DB_USER = 'a1761e23_goldengemappoinment';
$DB_PASS = 'goldengem@25';

$slug = $_GET['slug'] ?? '';

try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare(
        "SELECT * FROM blogs WHERE slug = ? LIMIT 1"
    );
    $stmt->execute([$slug]);
    $blog = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($blog) {
        echo json_encode($blog);
    } else {
        http_response_code(404);
        echo json_encode(null);
    }

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Database error: " . $e->getMessage()
    ]);
}
