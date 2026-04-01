<?php
header("Content-Type: application/json");
require_once __DIR__ . '/config.php';

$id = intval($_GET['id'] ?? 0);

if ($id <= 0) {
    http_response_code(400);
    echo json_encode(["success" => false]);
    exit;
}

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    $stmt = $pdo->prepare("SELECT * FROM blogs WHERE id = ?");
    $stmt->execute([$id]);
    $blog = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$blog) {
        http_response_code(404);
        echo json_encode(["success" => false]);
        exit;
    }

    echo json_encode([
        "success" => true,
        "blog" => $blog
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false]);
}