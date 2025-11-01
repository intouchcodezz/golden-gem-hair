<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");

$DB_HOST = 'localhost';
$DB_NAME = 'a1761e23_chatbotgolden_db';
$DB_USER = 'a1761e23_chatbot_db';
$DB_PASS = 'chatbot@25';

try {
    $pdo = new PDO("mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4", $DB_USER, $DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Use enquiries table and add a default response
    $stmt = $pdo->query("
        SELECT 
            id, 
            name, 
            mobile, 
            query, 
            'Thank you for your enquiry. Our team will contact you soon.' as response,
            created_at as timestamp 
        FROM enquiries 
        ORDER BY created_at DESC
    ");
    
    $logs = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "success" => true,
        "data" => $logs
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Database error: " . $e->getMessage()
    ]);
}
?>