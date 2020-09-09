
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
<hr>  
    
## Development 
### Angular Library
Create a component/directive/service
```   
nx g component dark-button --project=angular --export  
nx g directive button --project=angular --export  
nx g service theme-switcher --project=angular --export  
```

### Angular Demo/Test Applications
Create test application (choose SCSS):<br/>
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

## Additional information

We suggest to check files size after the build with the [source-map-explorer](https://www.npmjs.com/package/source-map-explorer). <br/>
Example:<br/>
```source-map-explorer vendor-es2015.c8164fc4f48dbc211ac0.js```
