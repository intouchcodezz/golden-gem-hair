<?php
// /api/admin_login.php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

session_start();

/* ===== DB CONFIG ===== */
$DB_HOST = "localhost";
$DB_NAME = "a1761e23_appointments_db";
$DB_USER = "a1761e23_goldengemappoinment";
$DB_PASS = "goldengem@25";

/* ===== READ INPUT ===== */
$input = json_decode(file_get_contents("php://input"), true);

$username = trim($input["username"] ?? "");
$password = $input["password"] ?? "";

if ($username === "" || $password === "") {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Username and password required"
    ]);
    exit;
}

try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    /* ===== FETCH ADMIN USER ===== */
    $stmt = $pdo->prepare(
        "SELECT id, username, password_hash
         FROM admin_users
         WHERE username = ?
         LIMIT 1"
    );
    $stmt->execute([$username]);
    $admin = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$admin || !password_verify($password, $admin["password_hash"])) {
        http_response_code(401);
        echo json_encode([
            "success" => false,
            "message" => "Invalid credentials"
        ]);
        exit;
    }

    /* ===== AUTH SUCCESS ===== */
    session_regenerate_id(true);

    $_SESSION["admin_logged_in"] = true;
    $_SESSION["admin_id"] = $admin["id"];
    $_SESSION["admin_username"] = $admin["username"];

    echo json_encode([
        "success" => true,
        "message" => "Login successful"
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Server error"
    ]);
}
