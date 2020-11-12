
# Friday - The Design System - Angular
  
## Projects

**Angular Demo Application** ```--project=angular-demos```  
Demo application with examples of components and different states.<br/>
src: */apps/angular-demo*<br/>
run: ```nx serve angular-demo```<br/>
build: ```nx build --prod angular-demos```<br/>
<hr>

**Angular Library** ```--project=angular```  
There is an Angular library of high-quality components and directives implemented principles of the MobileLIVE Friday Design System.  <br/>
src:  */libs/angular*  <br/>
build: ```npm run build:libs```  <br/>
storybook: ```nx run angular:storybook-with-docs```  <br/>
storybook build: ```nx run angular:build-storybook-with-docs```  <br/>
<hr>  
    
## Development 
### Angular Library
Create a component/directive/service
```   
nx g component dark-button --project=angular --export  
nx g directive button --project=angular --export  
nx g service theme-switcher --project=angular --export  
```
### Angular Demos Application
Create a new example component (with inline-template, without tests and without styles):
```   
nx g component examples/button/button-outline -s -t --skipTests --project=angular-demos
nx g service theme-switcher --skipTests --project=angular-demos  
```
### Angular Test Applications
Create test application (choose SCSS during installation):<br/>
```
nx g @nrwl/angular:app angular-portal
```

Run test application (can use specific port):<br/>
```
nx serve angular-portal --port 4201
```

Build test application:<br/>
```
nx serve angular-portal
```

Remove test application:<br/>
```
nx g @nrwl/workspace:remove angular-portal
```

Create a component/directive/service
```   
nx g component dark-button --project=angular-portal 
nx g service theme-switcher --project=angular-portal  
nx g module sign-in --route=sign-in --module=app --project=angular-portal
nx g module shared --module=app --project=angular-portal
nx g component shared/components/footer --module=shared --prefix=xyz --project=angular-portal 
nx g component shared/components/header --module=shared --prefix=xyz --project=angular-portal 
```

## Additional information

1. We suggest to check files size of the build app with [source-map-explorer](https://www.npmjs.com/package/source-map-explorer). <br/>
Example:<br/>
```source-map-explorer vendor-es2015.c8164fc4f48dbc211ac0.js```
2. To run build we suggest to use [serve package](https://www.npmjs.com/package/serve). 
It compresses files (**gzip**) on the fly and gives almost the same results as a real web-server.
Use browser -> network tools for checking the final application size delivered over the network to clients.
