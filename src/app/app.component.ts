import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component,
  OnInit
} from '@angular/core';

import { ZyllemApiService } from "./app.service";
import { Article, VideoArticle, ArticleType } from './model/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {

  constructor(
    private readonly apiService: ZyllemApiService,
    private readonly cdr: ChangeDetectorRef
  ) { }

  private results: Article[];
  private filteredResults: Article[];
  readonly articleType: ArticleType[] = [ArticleType.FEATURED, ArticleType.NORMAL, ArticleType.FEATURED_AD, ArticleType.VIDEO];
  videoArticleHighlight: VideoArticle;

  get articles() {
    return this.filteredResults;
  }

  ngOnInit(): void {
    this.apiService.getArticles()
      .subscribe(results => {
        this.results = results;
        const videoIndex = this.results.findIndex(result => result.type === ArticleType.VIDEO);
        if (videoIndex !== -1) {
          this.videoArticleHighlight = <VideoArticle>this.results[videoIndex];
          this.results.splice(videoIndex, 1);
        }
        this.cdr.markForCheck();
        this.filteredResults = this.results;
      });
  } 

  filter(type: ArticleType) {
    this.filteredResults = this.results.filter(result => result.type === type);
    console.log(this.filteredResults);
  }
}
