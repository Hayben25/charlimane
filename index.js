#!/usr/bin/env node

import { program } from 'commander'

import {exec} from 'child_process'
program
    .version("1.2.0")
    .description("Tools for customizing system")

program.command('update')
    .description('updates charlimane files from the latest github release')
    .action(async () => {
      exec('cd /usr/lib/node_modules/charlimane && nohup ./update.sh &> /dev/null &',(error,stdout,stderr) => {
        if(error) {
          console.error(error);
          return;
        }
        console.log(stdout);
        console.log(stderr);
      })
      });

program.command('config <color> <aspect>')
    .description('changes system colors and aspect ratio')
    .action(async (color, aspect) => {
      exec('cp ~/.config/charlimane/colors/'+ color + ' ~/.Xresources && xrdb -merge ~/.Xresources', (error,stdout,stderr) =>{
        if(error) {
          console.error(error);
          return;
        }
        console.log(stdout);
        console.log(stderr);
      })
      exec('nitrogen --set-auto ~/backgrounds/'+ aspect+'/'+ color+'.png', (error,stdout,stderr) =>{
        if(error) {
          console.error(error);
          return;
        }
        console.log(stdout);
        console.log(stderr);
      })
      exec('charlimane update', (error,stdout,stderr) =>{
        if(error) {
          console.error(error);
          return;
        }
        console.log(stdout);
        console.log(stderr);
      })
    })


program.parse();