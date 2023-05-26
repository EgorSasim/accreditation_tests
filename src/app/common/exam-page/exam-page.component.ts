import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Howl } from 'howler';
import { KSIS } from 'src/app/common/questions/KSIS';
import { OOTPISP } from 'src/app/common/questions/OOTPISP';
import { OSISP } from 'src/app/common/questions/OSISP';
import { YAP } from 'src/app/common/questions/YAP';
import { Question } from 'src/app/common/questions/questions.typings';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamPageComponent implements OnDestroy {
  public title: string = '';
  public questionAnswerData: Question[] = [];
  public questionsPull: Question[] = [];

  public song = new Audio('assets/music/amazingSong.mp3');

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
      case 'ksis':
        this.questionAnswerData = KSIS;
        break;
      case 'yap':
        this.questionAnswerData = YAP;
        break;
      default:
        break;
    }
  }

  public ngOnDestroy(): void {
    this.song.pause();
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
    if (!(this.song.paused && this.song.currentTime > 0 && !this.song.ended)) {
      this.song.play();
    }
  }
}
