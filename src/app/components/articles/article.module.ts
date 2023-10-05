import { NgModule } from "@angular/core";

import { articleEntries } from "./article.entries";
import { ArticleRendererComponent } from "./article.renderer.component";
import { ArticleVideoComponent } from "./video";
import { ArticleNormalComponent } from "./normal";
import { ArticleFeatureComponent } from "./feature";

@NgModule({
    imports: [
        
    ],
    declarations: [
        ArticleRendererComponent,
        ArticleVideoComponent,
        ArticleNormalComponent,
        ArticleFeatureComponent,
    ],
    entryComponents: [
        ...articleEntries
    ],
    exports: [
        ArticleRendererComponent,
        ArticleVideoComponent,
        ArticleNormalComponent,
        ArticleFeatureComponent,
    ]
})
export class ArticleModule { }
