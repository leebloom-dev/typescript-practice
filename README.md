GETTING STARTED WITH TYPESCRIPT
===============================

Video shows prerequisite steps for installing TypeScript
https://www.youtube.com/watch?v=HHepJoXEYCM

Uses terminal commands on Mac

1. Install TypeScript
sudo npm install -g typescript
    -> terminal will request you to enter your password

1.1. Changing TypeScript Versions
    - In terminal:
        sudo npm uninstall -g typescript
        sudo npm install -g typescript@3.3.3 or @difference version

2. Initial Setup
    - create a Typescript file: 
        main.ts
    - In terminal: 
        tsc --init

3. Compile TypeScript File
    - In terminal: 
        tsc
    - Finds all TypeScript files in folder and compiles them.

4. Run the compiled TypsScript file (main.js) in terminal
    node main.js
    - runs js file that has compiled TypeScript syntax.