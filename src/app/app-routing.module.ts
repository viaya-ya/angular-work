import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes =[
    {path:'about', component: AboutComponent},
    {path:'catalog', component: CatalogComponent},
    {path:'contact', component: ContactComponent},

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}