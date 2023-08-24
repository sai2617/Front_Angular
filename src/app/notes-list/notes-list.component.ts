import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];
  filteredNotes: Note[] = [];

  constructor(private noteService: NoteService, private router: Router, private authService: AuthService) { }

  

  ngOnInit(): void {
    this.loadAllNotes();
  }

  loadAllNotes(): void {
    // For demonstration purposes, let's add some sample notes
    this.notes = [
      { id: 1, title: 'Physics', content: 'This is the content of Physics note.', createdAt: new Date(), user:"user1" },
      { id: 2, title: 'Chemistry', content: 'This is the content of Chemistry note.', createdAt: new Date(), user:"user1" },
      { id: 3, title: 'Mathematics', content: 'This is the content of Mathematics note.', createdAt: new Date(), user:"user1" },
      { id: 4, title: 'History', content: 'This is the content of History note.', createdAt: new Date(), user:"user1" },
    ];

    // Initialize filteredNotes with all notes
    this.filteredNotes = this.notes.slice();
  }

  logout(): void {
    this.router.navigateByUrl('/login');
    this.authService.logout();
    
  }

  filterTopics(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    if (searchTerm.trim() !== '') {
      this.filteredNotes = this.notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredNotes = this.notes.slice();
    }
  }

  displayNoteContent(note: Note): void {
    // Toggle the showContent property to display/hide content
    note.showContent = !note.showContent;
  }
  addNotes(): void {
    this.router.navigateByUrl('/notes');
  }

  toggleContent(note: Note): void {
    note.showContent = !note.showContent;
  }
  
  shareNotes(): void {
    this.router.navigateByUrl('/shared-notes');
  
  }

  viewSharedNotes(): void {
    
    this.router.navigateByUrl('/shared-notes');
  }



}
