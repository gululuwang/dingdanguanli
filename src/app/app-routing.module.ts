import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RootComponent } from "./fybxdj/components/root-component/rootcomponent";
const routes: Routes = [
  // { path: "FYBXDJ", loadChildren: "./fybxdj/fybxdj.module#FYBXDJModule" },
  { path: "FYBXDJ", component: RootComponent },
  {
    path: "FYBXDJManagement",
    loadChildren:
      "./fybxdjmanagement/fybxdjmanagemen.modulet#FYBXDJManagementModule"
  },
  {
    path: "FYBXDJQuery",
    loadChildren: "./fybxdjquery/fybxdjquery.module#FYBXDJQueryModule"
  },
  {
    path: "FYBXDJCX",
    loadChildren: "./fybxdjcx/fybxdjcx.module#FYBXDJCXModule"
  },
  {
    path: "FYBXDJCustomQuery",
    loadChildren:
      "./fybxdjcustomquery/fybxdjcustomquery.module#FYBXDJCustomQueryModule"
  },
  {
    path: "FYBXDJCustomQueryEntry",
    loadChildren:
      "./fybxdjcustomqueryentry/fybxdjcustomqueryentry.module#FYBXDJCustomQueryEntryModule"
  },
  {
    path: "FYBXDJCustomQueryResult",
    loadChildren:
      "./fybxdjcustomqueryresult/fybxdjcustomqueryresult.module#FYBXDJCustomQueryResultModule"
  },
  {
    path: "FYBXDJQueryR",
    loadChildren: "./fybxdjqueryr/fybxdjqueryr.module#FYBXDJQueryRModule"
  },
  {
    path: "ROBXDJChenshjForm3",
    loadChildren:
      "./robxdjchenshjform3/robxdjchenshjform3.module#ROBXDJChenshjForm3Module"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
