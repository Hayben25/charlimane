#!/usr/bin/env node

import { program } from 'commander'

import {exec} from 'child_process'

program
    .version("1.0.0")
    .description("Tools for customizing system")

program.command('update')
    .description('updates charlimane files from the latest github release')
    .action(async (options) => {
        const git = simpleGit();
    
        try {
          const branch = 'https://github.com/Hayben25/charlimane.git' || (await git.revparse(['--abbrev-ref', 'HEAD'])).trim();
          const { summary } = await git.pull(options.remote, branch);
    
          console.log('Pull successful:', summary);
        } catch (err) {
          console.error('Error pulling:', err);
        }
        });

program.parse();