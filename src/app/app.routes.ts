import { Routes } from '@angular/router';
import { MinuteComponent } from './minute/minute.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { ProductsComponent } from './products/products.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./products/products.component').then((m)=>m.ProductsComponent)},
    { path: 'product/:id', component: SingleproductComponent },
    { path: 'todo', component: TodoComponent},
];