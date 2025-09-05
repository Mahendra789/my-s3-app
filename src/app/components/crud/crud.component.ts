import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from '../../services/crud.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  items: any[] = [];
  newName = '';
  newDesc = '';
  editingItem: any = null;
  editName = '';
  editDesc = '';

  constructor(private crud: CrudService) {}

  async ngOnInit() {
    await this.load();
  }

  async load() {
    debugger;
    const res = await this.crud.list();
    this.items = res.data.listItems.items;
  }

  async add() {
    await this.crud.create(this.newName, this.newDesc);
    this.newName = '';
    this.newDesc = '';
    await this.load();
  }

  async remove(id: string) {
    await this.crud.delete(id);
    await this.load();
  }

  startEdit(item: any) {
    this.editingItem = item;
    this.editName = item.name;
    this.editDesc = item.description || '';
  }

  cancelEdit() {
    this.editingItem = null;
    this.editName = '';
    this.editDesc = '';
  }

  async saveEdit() {
    if (this.editingItem) {
      await this.crud.update(this.editingItem.id, this.editName, this.editDesc);
      this.cancelEdit();
      await this.load();
    }
  }

  isEditing(item: any): boolean {
    return this.editingItem && this.editingItem.id === item.id;
  }
}
