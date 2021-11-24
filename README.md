# angulartodo

## 必裝環境
###### ng cli:
  **npm install -g @angular/cli**

###### json server install:
  **npm i json-server**

###### lite-server install:
  **npm install -g lite-server**

######  node_modules cli:
  **npm install**

## 專案產出順序
  **1.Ng output bundle dist : npm run build**   
  **2.Json server run : npm run server**  
  **3.Local server run :  i.cd dist/angulartodo  ii.lite-server**  
  
---

# Ng 說明
## 構成方式

1.起始點為index.html ，頁面功能app.component  
2.app.module為Module設定  
3.angular.json 為angular專案配置設定  
4.Angular 撰寫方式typescript，藉由build時使用webpack bundle轉換為純 javascript file，供瀏覽器能夠理解

# json server 說明
## package.json

設定 `"scripts": {"server":"json-server --watch db.json --port 5000"}` 能夠設定json的db與portocal  

# local server 說明
## lite-server

angular build dist無法直接點擊index.html開啟，index需要dist資料夾其餘資料配合才能使用  
因應dist整包需要被包含需求，配置一個local 小型server 去包含整個dist資料夾，並啟動即可使用  

# Ng Cli:  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
