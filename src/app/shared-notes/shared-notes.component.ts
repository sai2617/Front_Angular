import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Note {
  id: number;
  title: string;
  content: string;
  user: string;
  showContent: boolean;
  editMode: boolean; 
  createdAt: Date;
}

interface Discussion {
  title: string;
  content: string;
  showContent: boolean;
}

@Component({
  selector: 'app-shared-notes',
  templateUrl: './shared-notes.component.html',
  styleUrls: ['./shared-notes.component.css']
})
export class SharedNotesComponent {
  employeename: string = ""; 

  constructor(private router: Router) { }

  filteredNotes: Note[] = [
    { id: 1, title: 'Physics', content: 'Shared Physics note.', user: 'sur', showContent: false, editMode: false, createdAt: new Date() },
    { id: 2, title: 'Chemistry', content: 'Shared Chemistry note.', user: 'Ma', showContent: false, editMode: false, createdAt: new Date() },
    { id: 3, title: 'Physics', content: 'Shared Physics note.', user: 'Sa', showContent: false, editMode: false, createdAt: new Date() },
    { id: 4, title: 'Chemistry', content: 'Shared Chemistry note.', user: 'Sha', showContent: false, editMode: false, createdAt: new Date() },
    // Add more shared notes here...
  ];

  discussions: Discussion[] = [
    { title: 'Physics', content: 'Content of discussions for Physics.', showContent: false },
    { title: 'Mathematics', content: 'Content of discussion for Mathematics.', showContent: false },
    // Add more discussion objects here...
  ];

  filterNotes(event: any): void {
    const searchTerm = event.target.value;
    if (searchTerm.trim() !== '') {
      this.filteredNotes = this.filteredNotes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredNotes = this.filteredNotes.slice();
    }
  }

  toggleNoteContent(note: Note): void {
    note.showContent = !note.showContent;
    note.editMode = true; 
  }

  saveContent(note: Note): void {
    this.router.navigateByUrl('/notes-list');
    note.editMode = true;
  }

  toggleDiscussion(discussion: Discussion): void {
    discussion.showContent = !discussion.showContent;
  }

  logout(): void {
    this.router.navigateByUrl('/login');
  }
}
