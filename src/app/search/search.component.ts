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
    tracks:"Popular songs",
    sname: "Ohm shivam",
    siname: "SPB",
    sid: 1
  },
  {
    tracks:"Popular songs",
    sname: "Sojugada",
    siname: "Ananya",
    sid: 2
  },
  {
    tracks:"Popular songs",
    sname: "Kesariya",
    siname: "Pallavi",
    sid: 3
  },
  {
    tracks:"Popular songs",
    sname: "Calmdown",
    siname: "Shyam",
    sid: 4
  },
  {
    tracks:"Popular songs",
    sname: "Jai shri ram",
    siname: "Shankar",
    sid: 5
  },
  {
    tracks:"Trending songs",
    sname: "Mehabooba",
    siname: "Ravi",
    sid: 1
  },
  {
    tracks:"Trending songs",
    sname: "Fitoor",
    siname: "Arijith",
    sid: 2
  },
  {
    tracks:"Trending songs",
    sname: "Ninne thanaka",
    siname: "Sanjith",
    sid: 3
  },
  {
    tracks:"Trending songs",
    sname: "Pagal iravai",
    siname: "Pranav",
    sid: 4
  },
  {
    tracks:"Trending songs",
    sname: "Jagave neenu",
    siname: "Arijith",
    sid: 5
  },
  {
    tracks:"My top tracks",
    sname: "Arabic kuthu",
    siname: "Anirudh",
    sid: 1
  },
  {
    tracks:"My top tracks",
    sname: "Darshana",
    siname: "Hesham",
    sid: 2
  },

  {
    tracks:"My top tracks",
    sname: "Zara Zara",
    siname: "Driithi",
    sid: 3
  },

  {
    tracks:"My top tracks",
    sname: "Munjane Manjalli",
    siname: "Raghu Dixit",
    sid: 4
  },

  {
    tracks:"My top tracks",
    sname: "Patashala",
    siname: "Vijay",
    sid: 5
  },
]

  ngOnInit(): void {
  }

}
