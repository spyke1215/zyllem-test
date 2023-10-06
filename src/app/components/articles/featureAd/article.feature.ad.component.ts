import { Component, Input } from "@angular/core";

import { FeaturedAdArticle } from "src/app/model/article";
import { AbstractArticleComponent } from "../abstract.article.component";

@Component({
    selector: 'article-feature-ad-component',
    templateUrl: './article.feature.ad.component.html'
})
export class ArticleFeatureAdComponent extends AbstractArticleComponent {

    @Input() article: FeaturedAdArticle;
}
