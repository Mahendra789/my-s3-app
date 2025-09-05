import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileStorageService } from '../../services/file-storage.service';

@Component({
  selector: 'app-file-upload',
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
})
export class FileUploadComponent {
  uploadedPaths = signal<string[]>([]);
  busy = signal(false);

  constructor(private files: FileStorageService) {}

  async onFileSelected(ev: Event) {
    const input = ev.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    this.busy.set(true);
    try {
      for (const file of Array.from(input.files)) {
        const path = await this.files.uploadToProtected(file);
        this.uploadedPaths.update((paths) => [...paths, path]);
      }
    } finally {
      this.busy.set(false);
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
