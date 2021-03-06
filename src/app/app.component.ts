import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   

	constructor(private global: GlobalService){
			
	   global.onWindowChange.subscribe((w)=>{
		console.log("On window change global observable in index");
		console.log(w);
            });

	}
	@HostListener('window:resize', ['$event'])
	 onResize(event) {
  		this.global.updateWindowDimensions()
	 }

}
