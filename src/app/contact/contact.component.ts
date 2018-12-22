import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  sendMessage(email: string, message: string){
    var destinationEmail = "info@schooneraurelia.com";
    var form = document.createElement('form');
    form.setAttribute("action", "https://formspree.io/" + destinationEmail)
    form.setAttribute("method", "POST")

    // Subject for your email
    var field = document.createElement("input");
    field.setAttribute("type", "hidden");
    field.setAttribute("name", "message");
    field.setAttribute("value", message);
    form.appendChild(field);

    // Contact email address        
    field = document.createElement("input");
    field.setAttribute("type", "hidden");
    field.setAttribute("name", "email");
    field.setAttribute("value", email);
    form.appendChild(field);

    document.body.appendChild(form);    
    form.submit();
}
  // AJAX Post request requires Gold formspring plan

  // sendMessage(email: string, message: string) {
  //   const data = {"email" : email, "message" : message}
  //   this.http.post('https://formspree.io/joeladamsdesign@gmail.com', data ).toPromise().catch((err) => {
  //     console.log(err);
  //   });
  //   ;
  // }

}
