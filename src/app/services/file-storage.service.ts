import { Injectable } from '@angular/core';
import { uploadData, getUrl } from 'aws-amplify/storage';
import { fetchAuthSession } from 'aws-amplify/auth';

@Injectable({ providedIn: 'root' })
export class FileStorageService {
  /**
   * Upload to the caller's protected folder: protected/<identityId>/<timestamp>-<name>
   * Requires the user to be signed in because our backend rules
   * grant write only to the owner's protected/* prefix.
   */
  async uploadToProtected(file: File): Promise<string> {
    const { identityId } = await fetchAuthSession();
    if (!identityId) throw new Error('Not authenticated');

    const key = `${Date.now()}-${file.name}`;
    const path = `protected/${identityId}/${key}`;

    const { result } = await uploadData({
      path,
      data: file,
      options: {
        contentType: file.type,
        onProgress: ({ transferredBytes, totalBytes }) => {
          if (totalBytes) {
            const pct = Math.round((transferredBytes / totalBytes) * 100);
            console.log(`Uploading ${file.name}: ${pct}%`);
          }
        },
      },
    });

    // Wait for the server to confirm completion
    await result;
    return path; // return the S3 “path” you can store in your app
  }

  /**
   * (Optional) Upload to public/ (readable by anyone)
   */
  async uploadToPublic(file: File): Promise<string> {
    const path = `public/${file.name}`;
    const { result } = await uploadData({
      path,
      data: file,
      options: { contentType: file.type },
    });
    await result;
    return path;
  }

  /**
   * Get a short-lived download URL for any allowed path.
   * Default expiry: 10 minutes (600s)
   */
  async getDownloadUrl(path: string, expiresInSeconds = 600): Promise<URL> {
    const { url } = await getUrl({ path, options: { expiresIn: expiresInSeconds } });
    return url;
  }
}
