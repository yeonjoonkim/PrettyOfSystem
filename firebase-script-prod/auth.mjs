async function main() {
  const inquirer = await import('inquirer').then(module => module.default);
  const { exec } = await import('child_process');
  const { homedir } = await import('os');
  const { join } = await import('path');
  const { existsSync, mkdirSync } = await import('fs');

  // Firebase project ID
  const projectID = 'prettyofsystem';

  // Ask user for action type (Import or Export)
  const actionAnswer = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Do you want to import or export Firebase Auth data?',
      choices: ['Import', 'Export'],
    },
  ]);

  let filePath;
  if (actionAnswer.action === 'Import') {
    // Prompt for file path for importing
    const filePathAnswer = await inquirer.prompt([
      {
        type: 'input',
        name: 'filePath',
        message: 'Enter the full path to the file for importing:',
      }
    ]);
    filePath = filePathAnswer.filePath;
  } else {
    // Prompt for location to save the export file
    const locationAnswer = await inquirer.prompt([
      {
        type: 'list',
        name: 'location',
        message: 'Select the location to save the exported data:',
        choices: ['Download folder', 'Desktop'],
      },
    ]);

    const basePath = locationAnswer.location === 'Download folder' ? join(homedir(), 'Downloads') : join(homedir(), 'Desktop');
    let finalPath = join(basePath, 'Firebase-Auth-Export');

    let counter = 1;
    while (existsSync(finalPath)) {
      finalPath = join(basePath, `Firebase-Auth-Export-${counter}`);
      counter++;
    }

    // Ensure the export directory exists
    if (!existsSync(finalPath)) {
      mkdirSync(finalPath);
    }

    // Generate file path for the export file within the finalPath
    filePath = join(finalPath, 'exported-auth-data.json'); // Assuming JSON format for simplicity
  }

  let command;
  if (actionAnswer.action === 'Import') {
    command = `firebase auth:import ${filePath} --project ${projectID}`;
  } else {
    command = `firebase auth:export ${filePath} --project ${projectID}`;
  }

  // Execute the Firebase CLI command
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error.message}`);
      return;
    }
    if (stdout) console.log(`${actionAnswer.action} operation successful. Output: ${stdout}`);
    if (stderr) console.error(`stderr: ${stderr}`);
  });
}

main();