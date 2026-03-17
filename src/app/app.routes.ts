import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [

    {
        path: "",
        component: Home,
    },

    {
        path: "task-manager",
        loadComponent: () => import('./components/tm-component/tm-component').then((m) => m.TmComponent),
    },

];
