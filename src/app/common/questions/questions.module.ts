import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuestionsComponent } from 'src/app/common/questions/questions.components';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule],
  exports: [QuestionsComponent],
})
export class QuestionsModule {}
