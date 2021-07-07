const { spawn } = require('child_process');

const argv = require('minimist')(process.argv.slice(2));

const env = argv._[0];

spawn(
  `node ./node_modules/env-cmd/bin/env-cmd.js -f ./.env.${env} ./node_modules/@rescripts/cli/bin/rescripts.js start`,
  {
    stdio: 'inherit',
    shell: true
  }
);
