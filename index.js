#!/usr/bin/env node

import { program } from 'commander'

import {exec} from 'child_process'

program
    .version("1.0.0")
    .description("Tools for customizing system")

program.command('update')
    .description('updates charlimane files from the latest github release')
    .action (() =>{
        console.log("Checking pacman for updates::")
        exec('sudo pacman -Syu', (error,stdout,stderr)=>{
            if(error){
                console.error('exec error:${error}');
                return;
            }
            console.log('stdout: ${stdout}');
            console.log('stderr: ${stderr}');
        });
    });

program.parse();