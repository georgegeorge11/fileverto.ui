import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-upload-file',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, MatListModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss'
})
export class UploadFileComponent  implements OnInit{
  @ViewChild('fileInput') fileInput!: ElementRef;
  route = inject(ActivatedRoute)
  snackBar = inject(MatSnackBar);

  public source!: string;
  public destination!: string;
  public selectedFiles: File[] = [];
  public acceptedExtensions: string = '';
  convertedFiles: { name: string, url: string }[] = [];


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.source = params['source'];
      this.destination = params['destination'];
      this.acceptedExtensions = `.${this.source}`;
    });
  }
  openFileDialog() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.addFile(files[i]);
    }
    event.target.value = '';
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        this.addFile(event.dataTransfer.files[i]);
      }
    }
  }

  addFile(file: File) {
    if (this.isValidFileType(file)) {
      this.selectedFiles.push(file);
      this.snackBar.open(`File added: ${file.name}`, 'Close', { duration: 3000 , horizontalPosition: 'right', verticalPosition: 'top', politeness: 'polite' });
    } else {
      this.snackBar.open(`Invalid file type. Please upload a .${this.source} file.`, 'Close', { duration: 3000 });
    }
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  isValidFileType(file: File): boolean {
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    return fileExtension === this.source.toLowerCase();
  }

  onUpload() {
    if (this.selectedFiles.length > 0) {
      console.log(`Uploading files for conversion to ${this.destination}`);
      this.snackBar.open('Files uploaded successfully!', 'Close', { duration: 3000 });
      // TODO: Implement actual upload logic (API integration)
      setTimeout(() => {
        this.convertedFiles = this.selectedFiles.map(file => ({
          name: `converted_${file.name}`,
          url: URL.createObjectURL(file) // Replace with real converted file URL
        }));
        this.selectedFiles = [];
      }, 2000);
    } else {
      this.snackBar.open('Please select or drop files first.', 'Close', { duration: 3000 });
    }
  }

  downloadFile() {

  }
}
