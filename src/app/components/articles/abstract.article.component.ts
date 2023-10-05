import { NormalArticle, VideoArticle, FeaturedArticle, Article} from "src/app/model/article";

export abstract class AbstractArticleComponent {

    abstract NormalArticle: NormalArticle;
    abstract VideoArticle: VideoArticle;
    abstract FeaturedArticle: FeaturedArticle;
    abstract Article: Article;
    
}
