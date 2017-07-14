import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue.component';
import { IssueService } from './issue.service';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueInputComponent } from './issue-input/issue-input.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueUpdateComponent } from './issue-update/issue-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [IssueComponent],
  declarations: [IssueComponent, IssueDetailComponent, IssueInputComponent, IssueListComponent, IssueUpdateComponent],
  providers: [IssueService]
})
export class IssueModule {
}
