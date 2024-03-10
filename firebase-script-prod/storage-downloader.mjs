// storage-downloader.mjs
import inquirer from 'inquirer';
import { exec } from 'child_process';
import { homedir } from 'os';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'location',
      message: 'Select the location to download:',
      choices: ['Download folder', 'Desktop'],
    },
  ]);

  const basePath = answers.location === 'Download folder' ? join(homedir(), 'Downloads') : join(homedir(), 'Desktop');
  let finalPath = join(basePath, 'Firebase-Storage');

  let counter = 1;
  while (existsSync(finalPath)) {
    finalPath = join(basePath, `Firebase-Storage-${counter}`);
    counter++;
  }

  mkdirSync(finalPath);

  const command = `gsutil -m cp -r gs://prettyofsystem.appspot.com/* "${finalPath}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error.message}`);
      return;
    }
    if (stdout) console.log(`Download successful to: ${finalPath}`);
    if (stderr) console.error(`stderr: ${stderr}`);
  });
}

main();