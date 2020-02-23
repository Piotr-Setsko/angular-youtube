import { Component } from '@angular/core';

import { response } from './response';
import { SearchItem } from './models/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public show: boolean = false;
  public itemsResp: SearchItem[] = response.items;
  public arr: [string, string, boolean] = ['', '', false];
  public inputWord: string = '';

  constructor() {
  }

  public onClicked(show: boolean): void {
    this.show = show;
  }

  public onClickedResp(event: SearchItem[]): void {
    this.itemsResp = event;
  }

  public onClickedDate(event: [string, string, boolean]): void {
    this.arr = event;
  }

  public onClickedViews(event: [string, string, boolean]): void {
    this.arr = event;
  }

  public onInputWord(event: string): void {
    this.inputWord = event;
  }
}
