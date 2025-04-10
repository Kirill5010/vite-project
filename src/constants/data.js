const info = {
  photo:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequuntur culpa impedit aliquam quidem sapiente temporibus eveniet obcaecati excepturi vitae repellendus veniam soluta sit magnam, accusantium quia totam ad similique!",
  news: "Lorem ipsum dolor impedit aliquam quidem sapiente temporibus eveniet obcaecati excepturi vitae repellendus veniam soluta sit magnam, accusantium quia totam ad similique!",
  art: "Lorem ipsum dolor similique!",
};

const statuses = {
  fresh: "Свежий",
  expires: "Истекает",
  expired: "Истек",
};


function getTwoNumder(date) {
   return Number(date.substring(0,2))
}


const dateTestArr = [
  { date: "13.01.2024", end: 0 },
  { date: "29.03.2001", end: 10 },
  { date: "18.10.2007", end: 5 },
  { date: "23.01.1989", end: 10 },
  { date: "27.05.1983", end: 5 },
  { date: "15.10.2009", end: 10 },
  { date: "17.01.1989", end: 5 },
  { date: "31.03.2021", end: 10 },
  { date: "14.03.1994", end: 5 },
  { date: "15.08.1997", end: 10 },
];

export { info, statuses, dateTestArr, getTwoNumder };
