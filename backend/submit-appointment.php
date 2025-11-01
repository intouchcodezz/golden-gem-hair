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

// Database config
$host = '127.0.0.1';
$dbname = 'a1761e23_appointments_db';
$username = 'a1761e23_goldengemappoinment';
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
    if (empty($data['appointment_date'])) throw new Exception('Appointment date is required');

    $phone = preg_replace('/[^0-9]/', '', $data['phone']);
    if (strlen($phone) !== 10) throw new Exception('Phone must be 10 digits');

    $email = !empty($data['email']) ? trim($data['email']) : null;
    if ($email && !filter_var($email, FILTER_VALIDATE_EMAIL)) throw new Exception('Invalid email format');

    $appointmentDate = $data['appointment_date'];
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $appointmentDate)) throw new Exception('Invalid date format');

    $treatment = !empty($data['treatment']) ? trim($data['treatment']) : null;

    $sql = "INSERT INTO appointments (name, email, phone, appointment_date, treatment)
            VALUES (:name, :email, :phone, :appointment_date, :treatment)";
    $stmt = $pdo->prepare($sql);

    $stmt->bindValue(':name', trim($data['name']), PDO::PARAM_STR);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->bindValue(':phone', $phone, PDO::PARAM_STR);
    $stmt->bindValue(':appointment_date', $appointmentDate, PDO::PARAM_STR);
    $stmt->bindValue(':treatment', $treatment, PDO::PARAM_STR);

    $stmt->execute();
    $appointmentId = $pdo->lastInsertId();

    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Appointment booked successfully!',
        'appointmentId' => $appointmentId
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>
