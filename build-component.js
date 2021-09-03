const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/angular-web-component/runtime.js',
        './dist/angular-web-component/polyfills.js',
        './dist/angular-web-component/main.js'
      ];
    
      await fs.ensureDir('widget/users-table');
      await concat(files, 'widget/users-table/dist.js');

      fs.copyFileSync('./dist/angular-web-component/styles.css', 'widget/users-table/styles.css');
      fs.copyFileSync('./dist/angular-web-component/primeicons.eot', 'widget/users-table/primeicons.eot');
      fs.copyFileSync('./dist/angular-web-component/primeicons.svg', 'widget/users-table/primeicons.svg');
      fs.copyFileSync('./dist/angular-web-component/primeicons.ttf', 'widget/users-table/primeicons.ttf');
      fs.copyFileSync('./dist/angular-web-component/primeicons.woff', 'widget/users-table/primeicons.woff');
}
build();