import { writeFile } from 'fs';
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.prod.ts';
// Load node modules
require('dotenv').load();
// `environment.ts` file structure
const envConfigFile = `export const environment = {
  USER_ID: '${process.env['USER_ID']}'
};
`;
console.log(
  'The file `environment.ts` will be written with the following content: \n'
);
console.log(envConfigFile);
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      `Angular environment.ts file generated correctly at ${targetPath} \n`
    );
  }
});
