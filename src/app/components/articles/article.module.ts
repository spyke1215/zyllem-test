import { NgModule } from "@angular/core";

import { articleEntries } from "./article.entries";
import { ArticleRendererComponent } from "./article.renderer.component";
import { ArticleVideoComponent } from "./video";
import { ArticleNormalComponent } from "./normal";

@NgModule({
    imports: [
    ],
    declarations: [
        ArticleRendererComponent,
        ArticleVideoComponent,
        ArticleNormalComponent
    ],
    entryComponents: [
        ...articleEntries
    ],
    exports: [
        ArticleRendererComponent,
        ArticleVideoComponent,
        ArticleNormalComponent
    ]
})
export class ArticleModule { }
