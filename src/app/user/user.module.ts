import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterLink, RouterModule, Routes} from '@angular/router';
import { SingleUserComponent } from './components/single-user/single-user.component';


const routes: Routes = [
  {path: '', component: UserComponent},
  {path: ':id', component: SingleUserComponent}
];

@NgModule({
  declarations: [UserComponent, SingleUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
