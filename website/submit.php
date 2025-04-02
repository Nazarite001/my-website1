<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
 
$to = "samuelonatunde@gmail.com";  // Replace with your actual email
$subject = "New Admission Application";
$message = "Student Name: " . $_POST['studentName'] . "\n";
$message .= "Parent Name: " . $_POST['parentName'] . "\n";
$message .= "Phone Number: " . $_POST['phoneNumber'] . "\n";
$message .= "Email: " . $_POST['email'] . "\n";
$message .= "Home Address: " . $_POST['address'] . "\n";
$message .= "Gender: " . $_POST['gender'] . "\n";
$message .= "Previous School: " . $_POST['previousSchool'] . "\n";

// Handling file uploads
$photo = $_FILES['photo']['tmp_name'];
$birthCertificate = $_FILES['birthCertificate']['tmp_name'];

// You can choose to store the uploaded files on the server or include them in the email
$photoPath = "uploads/" . basename($_FILES['photo']['name']);
$birthCertificatePath = "uploads/" . basename($_FILES['birthCertificate']['name']);

// Move uploaded files to the 'uploads' folder
move_uploaded_file($photo, $photoPath);
move_uploaded_file($birthCertificate, $birthCertificatePath);

// Add file paths to the email message
$message .= "Passport Photo: " . $photoPath . "\n";
$message .= "Birth Certificate: " . $birthCertificatePath . "\n";

$headers = "From: admissions@yourwebsite.com";

if (mail($to, $subject, $message, $headers)) {
    echo "Application submitted successfully!";
} else {
    echo "Error sending email!";
}
?>
