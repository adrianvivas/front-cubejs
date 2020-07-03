import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubejsClientModule } from '@cubejs-client/ngx'; 
import { ChartsModule } from 'ng2-charts';

const cubejsOptions = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.K9PiJkjegbhnw4Ca5pPlkTmZihoOm42w8bja9Qs2qJg",
  options: {
    apiUrl: "https://react-query-builder.herokuapp.com/cubejs-api/v1"
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    CubejsClientModule.forRoot(cubejsOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
