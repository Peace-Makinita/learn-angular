import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() btnColor: string;
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
