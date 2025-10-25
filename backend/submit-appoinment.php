<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers for CORS and JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Update with your domain in production
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Database configuration
$host = 'localhost';
$dbname = 'a1761e23_appointments_db'; // Update with your actual database name
$username = 'goldengemappoinment'; // Update with your actual username
$password = 'goldengemappoinment'; // Update with your actual password

try {
    // Create PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    // Get JSON input
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Validate required fields
    if (empty($data['phone'])) {
        throw new Exception('Phone number is required');
    }
    if (empty($data['date'])) {
        throw new Exception('Appointment date is required');
    }
    if (empty($data['treatment'])) {
        throw new Exception('Treatment is required');
    }

    // Sanitize and validate phone number
    $phone = preg_replace('/[^0-9]/', '', $data['phone']);
    if (strlen($phone) !== 10) {
        throw new Exception('Invalid phone number format');
    }

    // Validate email if provided
    $email = !empty($data['email']) ? trim($data['email']) : null;
    if ($email && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email format');
    }

    // Validate date
    $appointmentDate = $data['date'];
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $appointmentDate)) {
        throw new Exception('Invalid date format');
    }

    // Prepare SQL statement
    $sql = "INSERT INTO appointments (name, email, phone, appointment_date, treatment, status) 
            VALUES (:name, :email, :phone, :appointment_date, :treatment, 'pending')";
    
    $stmt = $pdo->prepare($sql);
    
    // Bind parameters
    $stmt->bindValue(':name', !empty($data['name']) ? trim($data['name']) : null, PDO::PARAM_STR);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->bindValue(':phone', $phone, PDO::PARAM_STR);
    $stmt->bindValue(':appointment_date', $appointmentDate, PDO::PARAM_STR);
    $stmt->bindValue(':treatment', trim($data['treatment']), PDO::PARAM_STR);
    
    // Execute the query
    $stmt->execute();
    
    // Get the inserted ID
    $appointmentId = $pdo->lastInsertId();

    // Send success response
    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Appointment booked successfully!',
        'appointmentId' => $appointmentId
    ]);

} catch (PDOException $e) {
    // Database error
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
} catch (Exception $e) {
    // Validation or other errors
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>