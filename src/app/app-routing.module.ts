import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditorWangComponent } from './editor-wang/editor-wang.component';

const routes: Routes = [
  { path: 'editor', component: EditorWangComponent },
  {path:"",redirectTo:'/editor',pathMatch:"full"}
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
