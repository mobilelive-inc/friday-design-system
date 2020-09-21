# Friday - The Design System

Friday is MobileLIVE's open-source design system for products and digital experiences. With the MobileLIVE Design System as its foundation, the system consists of a working code for multiple frameworks and examples with it.

To combine the code for multiple implementations in the one project we use the monorepos technology [NX](https://github.com/nrwl/nx).

There are several sub-projects with implementations, you can find details by the links below:

* [HTML+CSS](libs/static/README.md)
* [React](README_REACT.md)
* [Angular](README_ANGULAR.md)


## Components

   &nbsp;     | UX/UI     | HTML+CSS |   React   |  Angular  
:-------------| :-------: | :-----:  | :-------: | :-------:
 Spacing units|   ✅      |   ✅      |  ✅      |   ✅  
 Iconography|   ✅      |   ✅      |  ✅      |  ✅  
 Theming|   ✅      |   ✅      |  ✅      |   ✅  
 Heading|   ✅      |   ✅      |  ✅      |    ✅   
 Typography Colors |   ✅      |   ✅      |  ✅      |   ✅    
 Layout & Grid System |   ✅      |   ✅      |  ✅      |   ✅  
 Buttons |   ✅      |   ✅      |  ✅      |   ✅
 Input  |   ✅      |   ✅      |  ✅      |  🏗
 Textarea  |   ✅      |   ✅      |  ✅      |  
 Select  |   ✅      |   ✅      |  ✅      |  
 Checkbox |   ✅      |   ✅      |  ✅      | 
 Radio Buttons  |  ✅      |   ✅      |  ✅      |
 Toggle Buttons  |  ✅      |   ✅      |  ✅      |
 Form        |  ✅      |   ✅      |  ✅      |   ✅  
 Tooltips |   ✅      |   ✅      |  ✅      |  
 Popovers |   ✅      |   ✅      |  ✅      |  
 Modal |   ✅      |   🏗     |  🏗     |  
 Date Picker |   🎨      |         |        |  
 Media|   ✅      |   ✅      |  ✅      |  
 Social Icons |   ✅      |         |        |  
 Card Box |   🎨     |         |        |  
  
Legend:
 ✅ - Done
 🏗 - Development in progress
 🎨 - Specification in progress

## Requirements
The MobileLIVE Friday Design System team aims to support browsers and screen reader combinations across all internal team segments. 
This support list gets updated on an occasional basis.

### Browsers support 
**Desktop browsers (Windows, macOS)**
* Chrome latest
* Firefox latest and extended support release (ESR)
* Safari 2 most recent major versions
* Microsoft Edge 2 most recent major versions
* Internet Explorer 11

**Mobile (Android, iOS)**
* Chrome (Android)  X (10.0), Pie (9.0), Oreo (8.0), Nougat (7.0)
* Safari (iOS) 2 most recent major versions

### Accessibility support

**Screen readers combinations**
* Windows + IE11 + JAWS
* Windows + Firefox + NVDA
* macOS + Safari + VoiceOver
* Android + Chrome + Talkback
* iOS + Safari + VoiceOver
