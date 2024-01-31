import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudHttpProxyComponent } from './cloud-http-proxy.component';
import { ViewContext, hookRoute, hookTab } from '@c8y/ngx-components';
import { CloudHttpProxyTabFactory } from './cloud-http-proxy-tab.factory';

@NgModule({
  imports: [CommonModule, CloudHttpProxyComponent],
  providers: [
    hookRoute([
      {
        path: 'cloud-http-proxy/:cloudProxyConfigId',
        tabs: [],
        label: 'dummy',
        component: CloudHttpProxyComponent,
        context: ViewContext.Device,
      },
    ]),
    hookTab(CloudHttpProxyTabFactory),
  ],
})
export class CloudHttpProxyModule {}
