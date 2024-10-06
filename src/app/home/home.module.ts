import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MalagaDescriptionComponent } from '../components/malaga-description/malaga-description.component';
import { MalagaImageComponent } from '../components/malaga-image/malaga-image.component';
import { MalagaInformationComponent } from '../components/malaga-information/malaga-information.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage,
    MalagaDescriptionComponent,
    MalagaImageComponent,
    MalagaInformationComponent
  ]
})
export class HomePageModule {}
