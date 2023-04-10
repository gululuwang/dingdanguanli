import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'FYBXDJ', loadChildren:'./fybxdj/fybxdj#FYBXDJModule'},
  { path: 'FYBXDJManagement', loadChildren:'./fybxdjmanagement/fybxdjmanagement#FYBXDJManagementModule'},
  { path: 'FYBXDJQuery', loadChildren:'./fybxdjquery/fybxdjquery#FYBXDJQueryModule'},
  { path: 'FYBXDJCX', loadChildren:'./fybxdjcx/fybxdjcx#FYBXDJCXModule'},
  { path: 'FYBXDJCustomQuery', loadChildren:'./fybxdjcustomquery/fybxdjcustomquery#FYBXDJCustomQueryModule'},
  { path: 'FYBXDJCustomQueryEntry', loadChildren:'./fybxdjcustomqueryentry/fybxdjcustomqueryentry#FYBXDJCustomQueryEntryModule'},
  { path: 'FYBXDJCustomQueryResult', loadChildren:'./fybxdjcustomqueryresult/fybxdjcustomqueryresult#FYBXDJCustomQueryResultModule'},
  { path: 'FYBXDJQueryR', loadChildren:'./fybxdjqueryr/fybxdjqueryr#FYBXDJQueryRModule'},
  { path: 'ROBXDJChenshjForm3', loadChildren:'./robxdjchenshjform3/robxdjchenshjform3#ROBXDJChenshjForm3Module'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }