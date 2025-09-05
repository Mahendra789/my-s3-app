import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileStorageService } from './services/file-storage.service';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, AmplifyAuthenticatorModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('my-s3-app');
  uploadedPaths: string[] = [];
  busy = false;

  constructor(private files: FileStorageService) {}

  async onFileSelected(ev: Event) {
    const input = ev.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    debugger;
    this.busy = true;
    try {
      for (const file of Array.from(input.files)) {
        const path = await this.files.uploadToProtected(file);
        this.uploadedPaths.push(path);
      }
    } finally {
      this.busy = false;
      input.value = '';
    }
  }

  async download(path: string) {
    const url = await this.files.getDownloadUrl(path, 300); // 5 min
    // Programmatically trigger browser download
    const a = document.createElement('a');
    a.href = url.toString();
    a.target = '_blank';
    a.rel = 'noopener';
    a.download = path.split('/').pop() ?? 'download';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}
