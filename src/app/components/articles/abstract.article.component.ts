import { Article, FeaturedAdArticle, FeaturedArticle, NormalArticle, VideoArticle } from "src/app/model/article";

export abstract class AbstractArticleComponent {

    abstract article: Article;
    
}