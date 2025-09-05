import { Component, signal } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { CrudComponent } from './components/crud/crud.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AmplifyAuthenticatorModule, FileUploadComponent, CrudComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('my-s3-app');
  activeComponent = signal<'file-upload' | 'crud'>('file-upload');

  constructor() {}

  setActiveComponent(component: 'file-upload' | 'crud') {
    this.activeComponent.set(component);
  }
}
