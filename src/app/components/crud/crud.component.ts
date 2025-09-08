import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from '../../services/crud.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent implements OnDestroy {
  items: any[] = [];
  newName = '';
  newDesc = '';
  editingItem: any = null;
  editName = '';
  editDesc = '';

  isProcessing = false;

  private subscriptions: any[] = [];

  constructor(private crud: CrudService) {}

  async ngOnInit() {
    await this.load();
    this.setupSubscriptions();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  async load() {
    debugger;
    const res = await this.crud.list();
    this.items = res.data.listItems.items;
  }

  setupSubscriptions() {
    // Subscribe to create events
    const createSub = this.crud.subscribeToCreate().subscribe({
      next: (data: any) => {
        if (data.data?.onCreateItem) {
          this.items.push(data.data.onCreateItem);
        }
      },
    });

    // Subscribe to update events
    const updateSub = this.crud.subscribeToUpdate().subscribe({
      next: (data: any) => {
        if (data.data?.onUpdateItem) {
          const updatedItem = data.data.onUpdateItem;
          const index = this.items.findIndex((item) => item.id === updatedItem.id);
          if (index !== -1) {
            this.items[index] = updatedItem;
          }
        }
      },
    });

    // Subscribe to delete events
    const deleteSub = this.crud.subscribeToDelete().subscribe({
      next: (data: any) => {
        if (data.data?.onDeleteItem) {
          const deletedItem = data.data.onDeleteItem;
          this.items = this.items.filter((item) => item.id !== deletedItem.id);
        }
      },
    });

    this.subscriptions.push(createSub, updateSub, deleteSub);
  }

  async add() {
    await this.crud.create(this.newName, this.newDesc);
    this.newName = '';
    this.newDesc = '';
    // No need to reload - subscription will handle the update
  }

  async remove(id: string) {
    await this.crud.delete(id);
    // No need to reload - subscription will handle the update
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
      // No need to reload - subscription will handle the update
    }
  }

  isEditing(item: any): boolean {
    return this.editingItem && this.editingItem.id === item.id;
  }
}
