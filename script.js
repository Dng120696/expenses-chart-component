'use strict';

const data =[
  {
    day: "mon",
    amount: 17.45
  },
  {
    day: "tue",
    amount: 34.91
  },
  {
    day: "wed",
    amount: 52.36
  },
  {
    day: "thu",
    amount: 31.07
  },
  {
    day: "fri",
    amount: 23.39
  },
  {
    day: "sat",
    amount: 43.28
  },
  {
    day: "sun",
    amount: 25.48
  }
];

const getData = (datas,sort = false)=>{
  const chartBox = document.querySelector('.chart-box');
  chartBox.innerHTML = ''
  const max =Math.max(...datas.map(({amount}) => amount));
  const dataSort = sort ? data.slice().sort((a,b)=> a.amount - b.amount) : datas;

  // console.log(dataSort,data);
  dataSort.forEach(({amount,day}) => {
    const height = (amount / max) * 100;
    const html = `
    <div class = 'flex'>
      <div class = "bar ${max === amount ? 'max' :''}" style= 'height:${height}%' data-set = '$${amount}'>
      </div>
      <p class = "days"> ${day}</p>
    </div>
    `;
    chartBox.insertAdjacentHTML('beforeend',html)

  });
}
getData(data)

const btnSort = document.querySelector('.btn-sort')
let sorted = false;
btnSort.addEventListener('click',()=>{

  sorted =!sorted;
  getData(data,sorted)
})


                                        