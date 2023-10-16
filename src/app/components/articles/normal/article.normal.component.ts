import { Component, Input } from "@angular/core";

import { NormalArticle } from "src/app/model/article";
import { AbstractArticleComponent } from "../abstract.article.component";

@Component({
    selector: 'article-normal-component',
    templateUrl: './article.normal.component.html',
    styleUrls: ['./article.title.component.scss']
})
export class ArticleNormalComponent extends AbstractArticleComponent {

    @Input() article: NormalArticle;

}
