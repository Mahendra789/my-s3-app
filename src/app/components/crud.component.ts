import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  imports: [CommonModule],
  template: `
    <div
      style="
        max-width: 720px;
        margin: 2rem auto;
        padding: 1rem;
        border: 1px solid #eee;
        border-radius: 12px;
      "
    >
      <h2>CRUD Operations</h2>
      <p>This is the CRUD component. Add your CRUD functionality here.</p>
    </div>
  `,
  styleUrl: './crud.component.scss'
})
export class CrudComponent {
  constructor() {}
}
