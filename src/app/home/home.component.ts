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
        popular_songname1:"Popular songs "
      },
      {
        popular_songname1:"Trending songs "
      },
      {
        popular_songname1:"My top tracks"
      },
    ]

    song_details : any[] =[
     
      {
        tracks:"Popular songs",
        sname: "Kesariya",
        siname: "Pallavi",
        sid: 3
      },
     
      {
        tracks:"Popular songs",
        sname: "Jai shri ram",
        siname: "Shankar",
        sid: 5
      },
    
   
  
      {
        tracks:"Trending songs",
        sname: "Pagal iravai",
        siname: "Pranav",
        sid: 9
      },
     
      {
        tracks:"Popular songs",
        sname: "Sojugada",
        siname: "Ananya",
        sid: 2
      },
  
    
      {
        tracks:"My top tracks",
        sname: "Zara Zara",
        siname: "Driithi",
        sid: 13
      },
    
      {
        tracks:"My top tracks",
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
