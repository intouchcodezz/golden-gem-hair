<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

$host = '127.0.0.1';
$dbname = 'a1761e23_jobs';
$username = 'a1761e23_jobs';
$password = 'goldengem@25';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Validate required fields
    if (empty($data['name'])) throw new Exception('Name is required');
    if (empty($data['phone'])) throw new Exception('Phone is required');
    if (empty($data['jobTitle'])) throw new Exception('Job title is required');

    $phone = preg_replace('/[^0-9]/', '', $data['phone']);
    if (strlen($phone) < 8 || strlen($phone) > 15) throw new Exception('Invalid phone number');

    $email = !empty($data['email']) ? trim($data['email']) : null;
    if ($email && !filter_var($email, FILTER_VALIDATE_EMAIL)) throw new Exception('Invalid email format');

    $experience = !empty($data['experience']) ? trim($data['experience']) : null;
    $message = !empty($data['message']) ? trim($data['message']) : null;
    $jobTitle = trim($data['jobTitle']);

    // Insert data
    $sql = "INSERT INTO career_applications (name, email, phone, experience, message, job_title)
            VALUES (:name, :email, :phone, :experience, :message, :job_title)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':name', $data['name'], PDO::PARAM_STR);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->bindValue(':phone', $phone, PDO::PARAM_STR);
    $stmt->bindValue(':experience', $experience, PDO::PARAM_STR);
    $stmt->bindValue(':message', $message, PDO::PARAM_STR);
    $stmt->bindValue(':job_title', $jobTitle, PDO::PARAM_STR);
    $stmt->execute();

    $applicationId = $pdo->lastInsertId();

    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Application submitted successfully!',
        'applicationId' => $applicationId
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>
