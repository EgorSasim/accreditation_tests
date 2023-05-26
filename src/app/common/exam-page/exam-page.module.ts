import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamPageComponent } from 'src/app/common/exam-page/exam-page.component';
import { QuestionsModule } from 'src/app/common/questions/questions.module';

@NgModule({
  declarations: [ExamPageComponent],
  imports: [CommonModule, ReactiveFormsModule, QuestionsModule],
  exports: [ExamPageComponent],
})
export class ExamPageModule {}
