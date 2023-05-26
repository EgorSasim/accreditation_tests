import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseExamPageComponent } from 'src/app/choose-exam-page/choose-exam-page.component';
import { ChooseExamPageModule } from 'src/app/choose-exam-page/choose-exam-page.module';
import { ExamPageComponent } from 'src/app/common/exam-page/exam-page.component';
import { ExamPageModule } from 'src/app/common/exam-page/exam-page.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'choose-exam',
    pathMatch: 'full',
  },
  {
    path: 'choose-exam',
    component: ChooseExamPageComponent,
  },
  {
    path: 'ootpisp',
    component: ExamPageComponent,
  },
  {
    path: 'osisp',
    component: ExamPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ChooseExamPageModule, ExamPageModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
