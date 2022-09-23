import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  title = 'Soul Tune';
  //String interpolation

//Property binding
  public logo = "assets/images/music4.jpg" ;

// Event binding
  // search()
  // {
  //   alert("Hello");
  // }

//Two-way binding
  // name="Ujwala";
 //Laptop

    isVisble:boolean =false;
    hide()
    {
      this.isVisble= !this.isVisble
    }

    songs:any[ ]=[
      {
        popular_songname1:"Melody songs "
      },
      {
        popular_songname1:"Dance songs "
      },
      {
        popular_songname1:"Classical songs"
      },
    ]

    song_details : any[] =[
     
      {
        tracks:"Melody songs",
        sname: "Kesariya",
        siname: "Pallavi",
        sid: 3
      },
     
      {
        tracks:"Melody songs",
        sname: "Jai shri ram",
        siname: "Shankar",
        sid: 5
      },
    
   
  
      {
        tracks:"Dance songs",
        sname: "Pagal iravai",
        siname: "Pranav",
        sid: 9
      },
     
      {
        tracks:"Melody songs",
        sname: "Sojugada",
        siname: "Ananya",
        sid: 2
      },
  
    
      {
        tracks:"Classical songs",
        sname: "Zara Zara",
        siname: "Driithi",
        sid: 13
      },
    
      {
        tracks:"Classical songs",
        sname: "Munjane Manjalli",
        siname: "Raghu Dixit",
        sid: 14
      },
    
     
     
    ]
    


songentered: string =' '

search_song(song_name1:string): void{
  if (!song_name1) {
    this.songentered=' '
     alert('Please enter the song')
  }
  this.songentered=song_name1;
  // alert(song_name1)
}
ngOnInit(): void {
}

}
