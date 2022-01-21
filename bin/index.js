#! /usr/bin/env node
const program = require('commander')
const minimist = require('minimist')

program
    .version(require('../package').version)
    .usage('<command> [options]')

    //  This is create project name
program
    .command('create <project-name>')
    .description('create a new project')
    .action((name, cmd) => {
        if (minimist(process.argv.slice(3))._.length > 1) {
          console.log(chalk.yellow('\n Info: You provided more than one argument. The first one will be used as the app\'s name, the rest are ignored.'))
        }
        require('../lib/create')(name)
      })

// 解析命令行参数
program.parse(process.argv)


