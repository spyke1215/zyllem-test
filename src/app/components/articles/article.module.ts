import { NgModule } from "@angular/core";

import { articleEntries } from "./article.entries";
import { ArticleRendererComponent } from "./article.renderer.component";
import { ArticleVideoComponent } from "./video";
import { ArticleNormalComponent } from "./normal";
import { ArticleFeatureComponent } from "./feature";
import { ArticleFeatureAdComponent } from "./featureAd";

@NgModule({
    imports: [
        
    ],
    declarations: [
        ArticleRendererComponent,
        ArticleVideoComponent,
        ArticleNormalComponent,
        ArticleFeatureComponent,
        ArticleFeatureAdComponent
    ],
    entryComponents: [
        ...articleEntries
    ],
    exports: [
        ArticleRendererComponent,
        ArticleVideoComponent,
        ArticleNormalComponent,
        ArticleFeatureComponent,
        ArticleFeatureAdComponent
    ]
})
export class ArticleModule { }
