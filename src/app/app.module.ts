import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MessagesContainerComponent } from './components/messages-container/messages-container.component';
import { InputSectionComponent } from './components/input-section/input-section.component';
import {ChatService} from './services/chat.service';
import {FakeApiService} from './services/fake-api.service';
import {UserService} from './services/user.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessagesContainerComponent,
    InputSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatService, FakeApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
