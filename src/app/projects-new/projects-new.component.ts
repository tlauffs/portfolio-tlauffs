import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-new',
  templateUrl: './projects-new.component.html',
  styleUrls: ['./projects-new.component.scss']
})
export class ProjectsNewComponent implements OnInit {

  constructor() { }
  
  projectList= [
    {
      imgThumb:"url('../../assets/payapi-thumb.png')",
      title: "PayApi",
      description: "A 4-page responsive demo marketing site. Complete with custom form validation."
    },
    {
      imgThumb: "url('../../assets/threejs-thumb.png')",
      title: "ThreeJS App",
      description: "A small ThreeJS app with user adjustable lighting. Models were made in Blender. "
    },
    {
      imgThumb: "url('../../assets/planets-thumb-2.png')",
      title: "The Planets",
      description: "A website showing facts about the planets. Built using Vue, Typescript and Sass."
    },
    {
      imgThumb:"url('../../assets/nanotip-thumb.png')",
      title: "NanoTip",
      description: "An older app i built. Allows streamers to enable Twitch or Youtube donations with nano. Uses the nano API."
    },
    {
      imgThumb:"url('../../assets/codepen-thumb.png')",
      title: "Codepen",
      description: "Check out my Codepen profile for more small web creations."
    }
  ]

  ngOnInit(): void {
  }

}
