This project contains end-to-end automated tests for the OrangeHRM Demo Site using Cypress. The test suite covers key HR workflows such as authentication, user management, employee management, UI toggles, and file upload functionality.

The goal of this project is to simulate real-world user interactions and validate the stability and functionality of major modules in the application.

Current Automation Coverage : 

1. Login : 
Valid user login to OrangeHRM
Session validation after successful login

2. Admin Management : 
Add new admin users
Assign roles and permissions
Verify admin creation using search functionality

3. Employee Search : 
Search existing employees by name/keyword
Validate search results accuracy

4. Add Employee : 
Create new employee records
Fill in personal details
Validate successful employee creation

5. Toggle / UI Controls : 
Enable and disable system toggles
Validate state changes in UI components

6. File Upload : 
Upload employee profile image using file input
Validate successful file attachment and upload flow