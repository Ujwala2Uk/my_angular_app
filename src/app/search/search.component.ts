import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  
  song_name :any[ ] | undefined;
@Input('songname')
set soname(soname:any)
{
  this.song_name = soname || "song not found"
  // alert(soname)
}
 
get soname( )
{
  return this.song_name;
}

song_details : any[] =[
  {
    tracks:"Melody songs",
    sname: "Ohm shivam",
    siname: "SPB",
    sid: 1
  },
  {
    tracks:"Melody songs",
    sname: "Sojugada",
    siname: "Ananya",
    sid: 2
  },
  {
    tracks:"Melody songs",
    sname: "Kesariya",
    siname: "Pallavi",
    sid: 3
  },
  {
    tracks:"Melody songs",
    sname: "Calmdown",
    siname: "Shyam",
    sid: 4
  },
  {
    tracks:"Melody songs",
    sname: "Jai shri ram",
    siname: "Shankar",
    sid: 5
  },
  {
    tracks:"Dance songs",
    sname: "Mehabooba",
    siname: "Ravi",
    sid: 1
  },
  {
    tracks:"Dance songs",
    sname: "Fitoor",
    siname: "Arijith",
    sid: 2
  },
  {
    tracks:"Dance songs",
    sname: "Ninne thanaka",
    siname: "Sanjith",
    sid: 3
  },
  {
    tracks:"Dance songs",
    sname: "Pagal iravai",
    siname: "Pranav",
    sid: 4
  },
  {
    tracks:"Dance songs",
    sname: "Jagave neenu",
    siname: "Arijith",
    sid: 5
  },
  {
    tracks:"Classical songs",
    sname: "Arabic kuthu",
    siname: "Anirudh",
    sid: 1
  },
  {
    tracks:"Classical songs",
    sname: "Darshana",
    siname: "Hesham",
    sid: 2
  },

  {
    tracks:"Classical songs",
    sname: "Zara Zara",
    siname: "Driithi",
    sid: 3
  },

  {
    tracks:"Classical songs",
    sname: "Munjane Manjalli",
    siname: "Raghu Dixit",
    sid: 4
  },

  {
    tracks:"Classical songs",
    sname: "Patashala",
    siname: "Vijay",
    sid: 5
  },
]

  ngOnInit(): void {
  }

}
