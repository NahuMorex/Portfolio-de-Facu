import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  contactos = [
    {
      titulo: "GitHub",
      img:"assets/svgs/github-142-svgrepo-com.svg ",
      link:"https://github.com/Facundo177"
    },
    {
      titulo: "LinkedIn",
      img:"assets/svgs/linkedin-1-svgrepo-com.svg",
      link:"https://linkedin.com/in/facundo-gabriel-gaitán-segura-16bb75264"
    },
    {
      titulo: "Gmail",
      img:"assets/svgs/gmail-svgrepo-com.svg",
      link:"mailto:facundogaitansegura@gmail.com"
    },
    {
      titulo: "LeetCode",
      img:"assets/svgs/leetcode-svgrepo-com.svg ",
      link:"https://leetcode.com/u/Facundo177/"
    },
    {
      titulo: "Itch.io",
      img:"assets/svgs/itch-io-svgrepo-com.svg",
      link:"https://facundo177.itch.io/"
    },
    {
      titulo: "Codepen",
      img:"assets/svgs/codepen-color-svgrepo-com.svg",
      link:"https://codepen.io/Facundo177"
    },
  ]



}
