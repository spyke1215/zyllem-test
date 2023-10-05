import { Component, Input } from "@angular/core";

import { FeaturedArticle, NormalArticle, VideoArticle, Article } from "src/app/model/article";
import { AbstractArticleComponent } from "../abstract.article.component";

@Component({
    selector: 'article-normal-component',
    templateUrl: './article.normal.component.html'
})
export class ArticleNormalComponent extends AbstractArticleComponent {

    VideoArticle: VideoArticle;
    FeaturedArticle: FeaturedArticle;
    Article: Article;
    @Input() NormalArticle: NormalArticle;

}
