import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  employeename: string = "";
  notes: Note[] = [];
  selectedNote: Note | undefined;
  newNote: Note = {
    id: 0,
    title: '',
    content: '',
    createdAt: new Date(),
    user: ''
  };

  constructor(private router: Router, private noteService: NoteService) { }

  ngOnInit(): void {
    // Assume you have already set the employeename in LoginComponent and shared through SharedDataService.
    // For demonstration, I am setting it manually here.
    this.employeename = this.employeename;
    this.loadAllNotes();
  }


  // This is not working so I dont want to move from here to notes-list if it works it should be in notes-list component
  // This is the intitial plan of my project to keep everything in notes component and without notes-list component

  loadAllNotes(): void {
    this.noteService.getAllNotes().subscribe(
      (notes: Note[]) => {
        this.notes = notes;
      },
      (error: any) => {
        console.error('Error fetching notes:', error);
      }
    );
  }

  selectNote(note: Note): void {
    this.selectedNote = note;
  }

  saveNote(): void {
    this.router.navigate(['/notes-list']);
    if (this.selectedNote) {
      this.noteService.updateNote(this.selectedNote.id, this.selectedNote).subscribe(
        (updatedNote: Note) => {
          console.log('Note updated successfully!', updatedNote);
          this.navigateToNotesList(); // Redirect to NotesListComponent after saving the note
        },
        (error: any) => {
          console.error('Error updating note:', error);
        }
      );
    } else {
      this.noteService.createNote(this.newNote).subscribe(
        (note: Note) => {
          this.notes.push(note);
          console.log('Note created successfully!', note);
          this.navigateToNotesList(); // Redirect to NotesListComponent after saving the note
        },
        (error: any) => {
          console.error('Error creating note:', error);
        }
      );
    }
  }

  deleteNote(): void {
    if (this.selectedNote) {
      this.noteService.deleteNoteById(this.selectedNote.id).subscribe(
        () => {
          console.log('Note deleted successfully!');
          this.navigateToNotesList(); // Redirect to NotesListComponent after deleting the note
        },
        (error: any) => {
          console.error('Error deleting note:', error);
        }
      );
    }
  }

  navigateToNotesList(): void {
    this.router.navigate(['/notes-list']);
  }
}
