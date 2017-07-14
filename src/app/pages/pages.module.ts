import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { TopComponent } from './top/top.component';
import { WikiComponent } from './wiki/wiki.component';
import { MarkdownPipe } from './wiki/markdown.pipe';
import { FormsModule } from '@angular/forms';
import { IssueModule } from './issue/issue.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    IssueModule
  ],
  providers: [],
  declarations: [PagesComponent, TopComponent, WikiComponent, MarkdownPipe]
})
export class PagesModule {
}
