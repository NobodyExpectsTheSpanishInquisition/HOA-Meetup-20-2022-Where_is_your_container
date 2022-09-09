import {Component} from '@angular/core';
import {AppService} from "./app.service";
import {NonNullableFormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloWorld';
  form = this.fb.group({
      name: ['']
    }
  )

  constructor(private appService: AppService, private fb: NonNullableFormBuilder) {
  }

  onSubmit(): void {
    this.appService.getRequest(this.form.controls.name.value).subscribe(res => {
      console.log(res);
      this.form.controls.name.setValue(res);
    });
  }

}
