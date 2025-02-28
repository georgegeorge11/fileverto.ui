import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {ConvertType} from '../../models/convertType.model';

import {CommonModule} from '@angular/common';
import {ConvertCardComponent} from '../../shared/convert-card/convert-card.component';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule, MatGridListModule, ConvertCardComponent, CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public convertTypes: ConvertType[] = [
    {
      convertTypePK: 1,
      name: 'Word to PDF',
      description: 'Convert Word documents to PDF format.',
      icon: 'picture_as_pdf',
      route: '/upload-file',
      source: 'docx',
      destination: 'pdf'
    },
    {
      convertTypePK: 2,
      name: 'PowerPoint to PDF',
      description: 'Convert PowerPoint presentations to PDF format.',
      icon: 'picture_as_pdf',
      route: '/upload-file',
      source: 'pptx',
      destination: 'pdf'
    },
    {
      convertTypePK: 3,
      name: 'Excel to PDF',
      description: 'Convert Excel sheets to PDF format.',
      icon: 'picture_as_pdf',
      route: '/upload-file',
      source: 'xlsx',
      destination: 'pdf'
    },
    {
      convertTypePK: 4,
      name: 'Merge Files',
      description: 'Combine multiple files into one.',
      icon: 'call_merge',
      route: '/merge',
      source: 'multiple',
      destination: 'pdf'
    },
    {
      convertTypePK: 5,
      name: 'PDF to Word',
      description: 'Convert PDF documents to DOCX format.',
      icon: 'picture_as_pdf',
      route: '/upload-file',
      source: 'pdf',
      destination: 'docx'
    },
    {
      convertTypePK: 6,
      name: 'PDF to PowerPoint',
      description: 'Convert PDF files to PPTX format.',
      icon: 'picture_as_pdf',
      route: '/upload-file',
      source: 'pdf',
      destination: 'pptx'
    },
    {
      convertTypePK: 7,
      name: 'PDF to Excel',
      description: 'Convert PDF files to XLSX format.',
      icon: 'picture_as_pdf',
      route: '/upload-file',
      source: 'pdf',
      destination: 'xlsx'
    },
    ]
}


