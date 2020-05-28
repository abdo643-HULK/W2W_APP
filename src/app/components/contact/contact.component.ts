import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    name: string;
    email: string;
    message: string;
    constructor(private title: Title, private meta: Meta) {}

    ngOnInit() {
        this.title.setTitle('Login');
        this.meta.updateTag({ name: 'title', content: '' });
        this.meta.updateTag({
            name: 'description',
            content: 'Lorem',
        });
        this.meta.updateTag({
            name: 'image',
            content: './assets/blog-image.jpg',
        });
        this.meta.updateTag({ name: 'site', content: 'My Site' });
    }
    /**
     * Process the form we have. Send to whatever backend
     * Only alerting for now
     */
    processForm() {
        const allInfo = `Thanks for you time ${this.name}, your will receive an E-mail from us in the next 48 hours`;
        /*`My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;*/
        alert(allInfo);
    }
}
