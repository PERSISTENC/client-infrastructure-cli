/**
 * @description 创建项目模板
 */
const exists = require('fs').existsSync
const chalk = require('chalk')
const inquirer = require('inquirer')
const ora = require('ora')
const path = require('path')
const fs = require('fs-extra')
const util = require('util')
const downloadGitRepo = require('download-git-repo')
const templatePath = require(`${__dirname}/../template/path.json`)
/**
 * 判断是否存在该目录
 * 新建项目
 * 选择模板
 * 下载模板
 */
async function create (projectName){
    const cwd = process.cwd()
    let userInput = {}
    // 判断是否存在该目录
    if (exists(projectName)){
        // 询问是否要强制覆盖目录
        const coverData = await inquirer.prompt([
            {
                type:'list',
                name:'isCover',
                message:'Target directory already exists Pick an action:',
                choices:['Overwrite','Cancel']
            }
        ])
        const { isCover } = coverData
        if ( isCover === 'Cancel' ) return 
        // 强制覆盖
        const targetAir  = path.join(cwd, projectName)
        fs.remove(targetAir)
    }
    // 选择模板
    userInput.projectName = projectName
    const data = await inquirer.prompt([
        {
            type:'list',
            name:'templateName',
            message:' Select the template',
            choices:['PC']
        }
    ])
    // 新建项目
    const { templateName } = data
    const templateUrl = templatePath[templateName]
    const spinner = ora("Downloading...").start()
    // 下载新项目
    downloadGitRepo(
        templateUrl,
        projectName,
        err =>{
            console.log(err,'err')
          if (err){
            spinner.fail()
            console.log(chalk.red(`Generation failed. ${err}`))
            return
          }
      
          // 结束加载图标
          spinner.succeed()
            console.log(chalk.green('Generation completed!'))
            console.log('To get started')
            console.log(`cd ${projectName}`)
        }
    )
}


module.exports = (...args) =>{
    return create(...args).catch(err=>{
        
    })
}