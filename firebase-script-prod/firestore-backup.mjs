async function main() {
  const inquirer = await import('inquirer').then(module => module.default);
  const { exec } = await import('child_process');

  // Firebase project ID and predefined Cloud Storage bucket
  const projectID = 'prettyofsystem';
  const bucketPath = 'gs://prettyofsystem.appspot.com';

  // Generate the current date in the specified format
  const now = new Date();
  const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;

  // Ask for the export folder name with the predefined format as the default answer
  const fileNameAnswer = await inquirer.prompt([
    {
      type: 'input',
      name: 'fileName',
      message: 'Enter the name for the export folder:',
      default: formattedDate,
    },
  ]);

  // Construct the full path for the export within the Cloud Storage bucket
  const exportPath = `${bucketPath}/back-up/${fileNameAnswer.fileName}`;

  // Form the gcloud command for exporting Firestore data to the specified Cloud Storage bucket
  const gcloudCommand = `gcloud firestore export ${exportPath} --project=${projectID}`;

  // Execute the gcloud CLI command for Firestore
  exec(gcloudCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error.message}`);
      return;
    }
    if (stdout) console.log(`Export operation successful. Output: ${stdout}`);
    if (stderr) console.error(`stderr: ${stderr}`);
  });
}

main();