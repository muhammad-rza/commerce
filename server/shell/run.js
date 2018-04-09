#!/usr/bin/env node

var program = require('commander');

var cmd_list = require('./command_action');
program
    .version('0.0.1');


// Object.values(cmd_list).map((item , index)=>{
//     console.log(item['hello'])
// })


program
    .command('createController <controllerName>')
    .action((controllerName) => {
    cmd_list.controller.create(controllerName);
});






program
    .command('*')
    .action(()=>{
        console.log('command not found');
    });



program.parse(process.argv);

//freeze cr controller: HelloController