import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {UploadFileComponent} from './pages/upload-file/upload-file.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'upload-file',
    component: UploadFileComponent,
  }
];
