import { UpperCasePipe } from "@angular/common";
import { Component, computed, Signal, signal, WritableSignal } from "@angular/core";


@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  imports:[UpperCasePipe]
  // styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent {
  name: WritableSignal<string> = signal('Ironman');
  age: WritableSignal<number> = signal(45);

  heroDescription: Signal<string> = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizedName: Signal<string> = computed(() => this.name().toUpperCase());

  // getHeroDescription(): string{
  //   return `${this.name()} - ${this.age()}`;
  // }

  changeHero():void{
    this.name.set("Spiderman");
    this.age.set(22);
  }

  resetForm():void{
    this.name.set("Ironman");
    this.age.set(45);
  }

  changeAge():void{
    this.age.set(60);
  }
}
