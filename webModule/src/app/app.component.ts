import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from '../bookService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formdata = Object.create({});

  bookInfoForm: FormGroup;
  title = 'app';

  constructor(
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.bookInfoForm = new FormGroup ({
      'title': new FormControl(null, [
        Validators.required
      ]),
      'author': new FormControl(null, [
        Validators.required
      ])
    });
  }

  saveBook() {
    this.formdata.title = this.bookInfoForm.get('title').value,
    this.formdata.author = this.bookInfoForm.get('author').value
    console.log('------------------------'+this.formdata.title)

    this.bookService.saveBooks(this.formdata);
  }
}
