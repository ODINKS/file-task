const fs = require("fs").promises;
const path = require("path");

// Task 1: Read and Display File Contents
async function readFileAsync(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    console.log(`Contents of ${filename}:`);
    console.log(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`File not found: ${filename}`);
    } else {
      console.log(`Error reading file ${filename}:`, error);
    }
  }
}

// Task 2: Write Content to File
async function writeFileAsync(filename, content) {
  try {
    await fs.writeFile(filename, content, "utf8");
    console.log(`Successfully written to ${filename}`);
  } catch (error) {
    console.log(`Error writing to file ${filename}:`, error);
  }
}

// Task 3: Copy File from Source to Destination
async function copyFileAsync(source, destination) {
  try {
    const sourcePath = path.join(__dirname, "test-files", source);
    const destinationPath = path.join(__dirname, "test-files", destination);

    await fs.copyFile(sourcePath, destinationPath);
    console.log(`File copied from ${sourcePath} to ${destinationPath}`);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log(`Source file not found: ${source}`);
    } else {
      console.log(`Error copying file:`, error);
    }
  }
}

// Task 4: Append Content to Existing File
async function appendFileAsync(filename, content) {
  try {
    let existingContent = "";
    try {
      existingContent = await fs.readFile(filename, "utf8");
    } catch (error) {
      // File does not exist, will create new one
      if (error.code !== "ENOENT") {
        throw error;
      }
    }

    console.log("Before appending:");
    console.log(existingContent);

    await fs.appendFile(filename, content, "utf8");
    const updatedContent = await fs.readFile(filename, "utf8");

    console.log("After appending:");
    console.log(updatedContent);
  } catch (error) {
    console.log(`Error appending to file ${filename}:`, error);
  }
}

// Task 5: List Directory Contents
async function listDirectoryAsync(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    const details = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(dirPath, file);
        const stats = await fs.stat(filePath);
        return {
          name: file,
          type: stats.isDirectory() ? "directory" : "file",
          size: stats.size,
        };
      })
    );

    details.sort((a, b) => a.name.localeCompare(b.name));

    console.log(`Contents of ${dirPath}:`);
    details.forEach((item) => {
      console.log(`${item.name} (${item.type}, ${item.size} bytes)`);
    });
  } catch (error) {
    console.log(`Error listing directory ${dirPath}:`, error);
  }
}

// Task 6: Create and Delete Operations
async function createDirectoryAsync(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    console.log(`Directory created: ${dirPath}`);
  } catch (error) {
    console.log(`Error creating directory ${dirPath}:`, error);
  }
}

async function createFileAsync(filename, content) {
  try {
    await fs.writeFile(filename, content, "utf8");
    console.log(`File created: ${filename}`);
  } catch (error) {
    console.log(`Error creating file ${filename}:`, error);
  }
}

async function deleteFileAsync(filename) {
  try {
    await fs.unlink(filename);
    console.log(`File deleted: ${filename}`);
  } catch (error) {
    console.log(`Error deleting file ${filename}:`, error);
  }
}

async function deleteDirectoryAsync(dirPath) {
  try {
    await fs.rmdir(dirPath);
    console.log(`Directory deleted: ${dirPath}`);
  } catch (error) {
    console.log(`Error deleting directory ${dirPath}:`, error);
  }
}

// Testing all tasks
async function runTests() {
  console.log("--- Task 1 ---");
  await readFileAsync("test-files/read-file.txt");

  console.log("--- Task 2 ---");
  await writeFileAsync(
    "test-files/write-file.txt",
    "This is my task submission"
  );

  console.log("--- Task 3 ---");
  await copyFileAsync("read-file.txt", "backup/read-file-backup.txt");

  console.log("--- Task 4 ---");
  await appendFileAsync(
    "test-files/append-file.txt",
    "\nAppended line 1\nAppended line 2"
  );

  console.log("--- Task 5 ---");
  await listDirectoryAsync("test-files");

  console.log("--- Task 6 ---");
  await createDirectoryAsync("test-files/create-and-delete-operations");
  await createFileAsync(
    "test-files/create-and-delete-operations/test.txt",
    "temporary file"
  );
  await deleteFileAsync("test-files/create-and-delete-operations/test.txt");
  await deleteDirectoryAsync("test-files/create-and-delete-operations");
}

// Run tests
runTests();
