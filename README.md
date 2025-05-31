# NewSExchange

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

echo "# angular-20-NewSMX" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/FSD-JatinderKumar/angular-20-NewSMX.git
git push -u origin main

##
Steps to create and use new Angular app for angular 20

#1 npm i @angular/cli@latest --save-dev
OR npm install @angular/cli@20 --save-dev
#2 npx ng new new-app-name
 follow the steps 
 ==> npx ng new new-sExchange
√ Do you want to create a 'zoneless' application without zone.js (Developer Preview)? Yes
√ Which stylesheet format would you like to use? Sass (SCSS) [ https://sass-lang.com/documentation/syntax#scss]
√ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? Yes
CREATE new-sExchange/angular.json (2677 bytes)
CREATE new-sExchange/package.json (1178 bytes)
CREATE new-sExchange/README.md (1534 bytes)
CREATE new-sExchange/tsconfig.json (1026 bytes)
CREATE new-sExchange/.editorconfig (331 bytes)
CREATE new-sExchange/.gitignore (629 bytes)
CREATE new-sExchange/tsconfig.app.json (464 bytes)
CREATE new-sExchange/tsconfig.spec.json (422 bytes)
CREATE new-sExchange/.vscode/extensions.json (134 bytes)
CREATE new-sExchange/.vscode/launch.json (490 bytes)
CREATE new-sExchange/.vscode/tasks.json (980 bytes)
CREATE new-sExchange/src/main.ts (228 bytes)
CREATE new-sExchange/src/index.html (311 bytes)
CREATE new-sExchange/src/styles.scss (81 bytes)
CREATE new-sExchange/src/main.server.ts (243 bytes)
CREATE new-sExchange/src/server.ts (1631 bytes)
CREATE new-sExchange/src/app/app.spec.ts (812 bytes)
CREATE new-sExchange/src/app/app.ts (283 bytes)
CREATE new-sExchange/src/app/app.scss (0 bytes)
CREATE new-sExchange/src/app/app.html (20239 bytes)
CREATE new-sExchange/src/app/app.config.ts (524 bytes)
CREATE new-sExchange/src/app/app.routes.ts (80 bytes)
CREATE new-sExchange/src/app/app.config.server.ts (438 bytes)
CREATE new-sExchange/src/app/app.routes.server.ts (174 bytes)
CREATE new-sExchange/public/favicon.ico (15086 bytes)
√ Packages installed successfully.
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
    Successfully initialized git.
##

Step 1: Create a New Page (Component)
Run this command inside your project folder (e.g., app-new):

 
npx ng generate component pages/about
This will:

Create a new component called AboutComponent inside src/app/pages/about/.

Generate four files (about.component.ts, .html, .scss, .spec.ts).

Automatically declare this component in AppModule.

Step 2: Configure Routing for the New Page
Open src/app/app.routes.ts or src/app/app-routing.module.ts

Since Angular 20 tends to promote standalone components and file structures can vary, check if you have:

app.routes.ts (a common pattern in Angular 20+ standalone apps), or

app-routing.module.ts (classic Angular routing module).

If you don’t have either, you can create a routing module manually.

Example: Using app.routes.ts
Add your route here like this:

 
import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./app.ts').then(m => m.AppComponent) }, // or your home component
  { path: 'about', component: AboutComponent },
  // add other routes here
];
Step 3: Add <router-outlet> in your AppComponent Template
Make sure your main app component's HTML contains <router-outlet></router-outlet>, which acts as the placeholder for routed components.

Open src/app/app.html and verify/add:

 
<nav>
  <a routerLink="/home">Home</a> |
  <a routerLink="/about">About</a>
</nav>
<router-outlet></router-outlet>
Step 4: Ensure RouterModule is Imported (If using classic NgModules)
If you are using AppModule in app.module.ts, make sure you import the router:

 
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // other imports
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
Step 5: Run Your Angular App
Start the Angular development server:
 
npx ng serve
Then open your browser at
 
http://localhost:4200/about
to see your new About page.

Bonus: Angular 20 Standalone Components and Routing (Optional)
If you want to create a standalone component (Angular 20 promotes this), you can generate it like this:
 
npx ng generate component pages/contact --standalone
Then your routing entry looks like:
 
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent) },
];
Standalone components do not need to be declared in NgModule.