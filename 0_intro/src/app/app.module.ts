import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { InputComponent } from './Components/header/Components/input/input.component';
import { FilterComponent } from './Components/header/Components/filter/filter.component';
import { UserComponent } from './Components/header/Components/user/user.component';
import { SearchResultComponent } from './Components/search-result/search-result.component';
import { ResultCardComponent } from './Components/search-result/Components/result-card/result-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    FilterComponent,
    UserComponent,
    SearchResultComponent,
    ResultCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
