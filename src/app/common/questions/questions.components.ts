import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Answer, Question } from 'src/app/common/questions/questions.typings';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionsComponent implements OnInit {
  @Input() questions: Question[];
  @Output() questionsRunOut: EventEmitter<void> = new EventEmitter();

  public question: Question;
  public questionPointer = 0;
  public selectedAnswer: Answer;
  public isResShown: number = 0;

  public ngOnInit(): void {
    this.question = this.questions[this.questionPointer];
  }

  public showNextQuestion(): void {
    this.selectedAnswer = {} as Answer;
    if (++this.questionPointer < this.questions.length) {
      this.question = this.questions[this.questionPointer];
    } else {
      this.showResult();
    }
  }

  public showPrevQuestion(): void {
    this.selectedAnswer = {} as Answer;
    if (this.questionPointer == 0) {
      alert("this is the first question!!! U can't go back");
    } else {
      this.question = this.questions[--this.questionPointer];
    }
  }

  public setSelectedAnswer(answer: Answer): void {
    console.log('set answer:', answer);
    this.selectedAnswer = answer;
  }

  public confirmQuestion(): void {
    if (!this.selectedAnswer.text) {
      alert('please, select answer before confirm');
    } else {
      if (this.selectedAnswer.isRight) {
        alert('Right answer!!!');
      } else {
        alert('Wrong answer!!!');
      }
    }
  }

  public refreshQuestions() {
    this.questionsRunOut.emit();
    this.questionPointer = 0;
    this.isResShown = 0;
  }

  private showResult(): void {
    this.isResShown = 1;
    alert(
      'questions is over, click "refresh questions" to load new questions"'
    );
  }
}
