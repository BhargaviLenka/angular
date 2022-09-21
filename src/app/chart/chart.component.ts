// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.scss']
// })
// export class ChartComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js'
import { BookserviceService } from '../services/bookservice.service';


@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
   })
export class ChartComponent implements OnInit {

  constructor(private bss:BookserviceService) { }
  chart:any;
  values!:any;
  datay!:any;
  user_name!:any;
  user!:any;
  ngOnInit(): void {
    this.chart = document.getElementById('myChart'),
    Chart.register(...registerables)
    this.user = window.localStorage.getItem('token')
    console.log("hi",this.user)
var xValues = ["bookissued","students","books"];



this.bss.analyt(this.user,xValues).subscribe({
  next : (data) =>{
  this.datay = data
  this.values = this.datay.b
  console.log('hi',this.values)

  console.log(this.values)
  var yValues = this.values

  var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",

  ]

const myChart=new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    maintainAspectRatio:false,
      responsive: true,
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }

}
)
}})
}}
