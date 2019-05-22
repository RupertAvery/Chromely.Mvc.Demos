import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';

export const AppRoutes: any = [
  { path: "", component: HomeComponent },
  { path: "demo", component: DemoComponent },
  { path: "**", redirectTo: "", pathMatch: 'full' }
];

export const AppRoutedComponents: any = [
    HomeComponent,
     DemoComponent
];
