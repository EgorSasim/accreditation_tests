import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OOTPISP } from 'src/app/common/questions/OOTPISP';
import { OSISP } from 'src/app/common/questions/OSISP';
import { Question } from 'src/app/common/questions/questions.typings';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamPageComponent {
  public title: string = '';
  public questionAnswerData: Question[] = [];
  public questionsPull: Question[] = [];

  constructor(private router: Router) {
    console.log('router url: ', this.router.url);
    this.title = this.router.url.substring(1).toLowerCase();
    switch (router.url.substring(1)) {
      case 'ootpisp':
        this.questionAnswerData = OOTPISP;
        break;
      case 'osisp':
        this.questionAnswerData = OSISP;
        break;
      default:
        break;
    }
  }

  public createQuestionsPull(questionsCnt: number): Question[] {
    const arr: Question[] = [];
    for (let i = 0; i < questionsCnt; ++i) {
      arr.push(this.getRandomQuestion(this.questionAnswerData));
    }

    return arr;
  }

  public getRandomQuestion(dataArr: Question[]): Question {
    const index: number = Math.floor(Math.random() * dataArr.length);
    return dataArr[index];
  }

  public startTesting(): void {
    this.questionsPull = this.createQuestionsPull(20);
  }
}
