// #! /usr/bin/env node
// // Node CLI 应用入口文件必须要有这样的文件头
// // 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// // 具体就是通过 chmod 755 cli.js 实现修改

// const chalk = require('chalk')
// const ora  = require('ora')
// const fs  = require('fs')
// const inquirer = require('inquirer') 
// const program = require('commander')
// const exists = require('fs').existsSync

// /**
//  * 1 创建项目
//  * 2 询问使用得模板
//  * 3 拉取对应得模板
//  */
// let userInput = {}
// program.version('0.1.0')
// .command('create <name>')
// .description('create a new project')
// .action(projectName =>   { 
//     if (!projectName){
//         console.log(chalk.blue('projectName should not be empty!'))
//         return
//     }
//     const cwdUrl = process.cwd();     // 对应控制台所在目录
//     // 判断当前是否有这个名字
//     if (exists(projectName)) {
//         console.log(chalk.blue(`\n This directory already exists in the current directory ${cwdUrl}`))
//         return
//     }
//     userInput.projectName = projectName

//     // 询问拉取哪个模板
//     inquirer.prompt([
//         {
//             type:'list',
//             name:'templateName',
//             choices:['Pc'], // 'H5','小程序'
//             message:'Select the template'
//         }
//     ]).then(data=>{
//         userInput.templateName = data.templateName
//         console.log(userInput,'用户输入信息')
//     })
//     // 拉取框架模板

// })
// program.parse()

// // inquirer.prompt ([
// //     {
// //         type:'input',
// //         name:'projectName',
// //         message:'请输入项目名称',
// //         default:''
// //     }
// // ]).then(projectName=>{
// //    
// //     const templatesPath = path.join(__dirname,'templates')
// //     // process.cwd() 对应控制台所在目录
// //     const cwdUrl = process.cwd();
// //     fs.readdir(templatesPath,(err,files)=>{
// //         if (err) throw err
// //         files.forEach((file) => {
// //             ejs.renderFile(path.join(templatesPath, file), projectName).then(data => {
// //                 // 生成 ejs 处理后的模版文件
// //                 fs.writeFileSync(path.join(cwdUrl, file) , data)
// //             })
// //         })
// //     })
// // })

