const fs = require('fs');
const program = require('commander');
program
   .command('exec <cmd>')
   .description('run the given remote command')
   .action(function(cmd) {
     console.log('exec "%s"', cmd);
   });
