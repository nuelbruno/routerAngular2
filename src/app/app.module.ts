
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';


import { RouterModule } from '@angular/router';
import { routeConfig } from './route-config';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    RouterModule.forRoot(routeConfig)

  ],

  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql'}),
      cache: new InMemoryCache()
    });
  }
}
