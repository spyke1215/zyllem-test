import { Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { FeaturedArticle, NormalArticle, VideoArticle, Article } from "src/app/model/article";
import { AbstractArticleComponent } from "../abstract.article.component";

@Component({
    selector: 'article-video-component',
    templateUrl: './article.video.component.html',
    styleUrls: ['./article.video.component.scss']
})
export class ArticleVideoComponent extends AbstractArticleComponent {

    FeaturedArticle: FeaturedArticle;
    NormalArticle: NormalArticle;
    Article: Article;
    @Input() VideoArticle: VideoArticle;

    get safeVideoUrl() {
        return this.domSanitize.bypassSecurityTrustResourceUrl(this.VideoArticle.videoUrl);
    }

    constructor(
        private readonly domSanitize: DomSanitizer
    ) {
        super();
    }
}
