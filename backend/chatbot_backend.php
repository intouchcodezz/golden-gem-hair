<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

// ======================
// CONFIG
// ======================
$DB_HOST = 'localhost';
$DB_NAME = 'a1761e23_chatbotgolden_db';
$DB_USER = 'a1761e23_chatbot_db';
$DB_PASS = 'chatbot@25';

// ======================
// CONNECT TO DATABASE
// ======================
try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed: " . $e->getMessage()
    ]);
    exit;
}

// ======================
// READ JSON INPUT
// ======================
$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['name'], $data['mobile'])) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid request. Required fields: name, mobile"
    ]);
    exit;
}

$name   = trim($data['name']);
$mobile = trim($data['mobile']);

// ======================
// VALIDATION
// ======================
if (!preg_match("/^[a-zA-Z\s]{2,50}$/", $name)) {
    echo json_encode(["success" => false, "message" => "Invalid name."]);
    exit;
}
if (!preg_match("/^[6-9]\d{9}$/", $mobile)) {
    echo json_encode(["success" => false, "message" => "Invalid mobile number."]);
    exit;
}

// ======================
// CREATE TABLE IF NOT EXISTS
// ======================
try {
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS enquiries (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            mobile VARCHAR(15) NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    ");

    // ======================
    // INSERT INTO DATABASE
    // ======================
    $stmt = $pdo->prepare("
        INSERT INTO enquiries (name, mobile)
        VALUES (:name, :mobile)
    ");
    $stmt->execute([
        ":name" => $name,
        ":mobile" => $mobile
    ]);

    echo json_encode([
        "success" => true,
        "message" => "Enquiry saved successfully"
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Database error: " . $e->getMessage()
    ]);
}
?>
