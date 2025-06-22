
# Filesystem Operations in Node.js

This project demonstrates various asynchronous file system operations in Node.js. It includes tasks such as reading, writing, copying, appending, listing directories, and creating/deleting files and directories. All tasks are implemented using `async/await` for asynchronous handling.

## Features:
- **Task 1**: Read and display file contents
- **Task 2**: Write content to a file
- **Task 3**: Copy file from source to destination
- **Task 4**: Append content to an existing file
- **Task 5**: List contents of a directory
- **Task 6**: Create and delete directories and files

## Prerequisites:
- [Node.js](https://nodejs.org/) (version 14.x or higher)

## Setup:

1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd fs-task
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the script:
   ```bash
   node filesystem-operations.js
   ```

## Directory Structure:
- `filesystem-operations.js`: The main script for performing file operations.
- `test-files/`: Contains test files used for the operations, including:
  - `read-file.txt` (for Task 1)
  - `write-file.txt` (for Task 2)
  - `copy-file.txt` (for Task 3)
  - `append-file.txt` (for Task 4)
  - `backup/read-file-backup.txt` (for Task 3)
  - `create-and-delete-operations/` (for Task 6)

## License:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
