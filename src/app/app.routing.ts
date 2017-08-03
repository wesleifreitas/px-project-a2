import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { AuthGuard } from './guards/index';
import { HomeComponent } from './home/index';
import { ExampleComponent } from './example/index';
import { Example2Component } from './example2/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'example', component: ExampleComponent, canActivate: [AuthGuard] },
    { path: 'example2', component: Example2Component },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);