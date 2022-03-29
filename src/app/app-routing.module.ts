import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteInstructionsComponent } from './components/delete-instructions/delete-instructions.component';
import { HomeComponent } from './components/home/home.component';
import { LatestComponent } from './components/latest/latest.component';
import { LoginComponent } from './components/login/login.component';
import { LoreComponent } from './components/lore/lore.component';
import { PaV1Component } from './components/pa-v1/pa-v1.component';
import { PartnersComponent } from './components/partners/partners.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { UserComponent } from './components/user/user.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'latest', component: LatestComponent},
  { path: 'lore', component: LoreComponent},
  { path: 'roadmap', component: RoadmapComponent},
  { path: 'utilities', component: UtilitiesComponent},
  { path: 'partners', component: PartnersComponent},
  { path: 'my-aliens', component: PaV1Component },
  { path: 'user', component: UserComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent },
  { path: 'delete-instructions', component: DeleteInstructionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
