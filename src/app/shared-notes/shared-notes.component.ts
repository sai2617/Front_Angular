import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Note {
  id: number;
  title: string;
  content: string;
  user: string;
  showContent: boolean;
  editMode: boolean; // Add this property
  createdAt: Date;
}

@Component({
  selector: 'app-shared-notes',
  templateUrl: './shared-notes.component.html',
  styleUrls: ['./shared-notes.component.css']
})
export class SharedNotesComponent {

  constructor( private router: Router) { }

  filteredNotes: Note[] = [
    { id: 1, title: 'Physics', content: 'Shared Physics note.', user: 'sur', showContent: false, editMode: false, createdAt: new Date() },
    { id: 2, title: 'Chemistry', content: 'Shared Chemistry note.', user: 'Ma', showContent: false, editMode: false, createdAt: new Date() },
    { id: 3, title: 'Physics', content: 'Shared Physics note.', user: 'Sa', showContent: false, editMode: false, createdAt: new Date() },
    { id: 4, title: 'Chemistry', content: 'Shared Chemistry note.', user: 'Sha', showContent: false, editMode: false, createdAt: new Date() },
    
    // Add more shared notes here...
  ];
  sharedNotes: Note[] = [
    { id: 1, title: 'Physics', content: 'Shared Physics note.', user: 'sur', showContent: false, editMode: false, createdAt: new Date() },
    { id: 2, title: 'Chemistry', content: 'Shared Chemistry note.', user: 'Ma', showContent: false, editMode: false, createdAt: new Date() },
    { id: 3, title: 'Physics', content: 'Shared Physics note.', user: 'Sa', showContent: false, editMode: false, createdAt: new Date() },
    { id: 4, title: 'Chemistry', content: 'Shared Chemistry note.', user: 'Sha', showContent: false, editMode: false, createdAt: new Date() },
    
    // Add more shared notes here...
  ];

  filterNotes(event: any): void {
    const searchTerm = event.target.value;
    if (searchTerm.trim() !== '') {
      this.filteredNotes = this.sharedNotes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredNotes = this.sharedNotes.slice(); 
    }
  }

  toggleNoteContent(note: Note): void {
    note.showContent = !note.showContent;
    note.editMode = true; // Disable edit mode when toggling content
  }

  saveContent(note: Note): void {
    this.router.navigateByUrl('/notes-list');
    note.editMode = true; 
  }

  logout(): void {
    this.router.navigateByUrl('/login');
  }

}
