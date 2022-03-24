const newYear="1 Jan 2023";
const days=document.querySelector(".days-c h1");
const hours=document.querySelector(".hours-c h1");
const min=document.querySelector(".min-c h1");
const sec=document.querySelector(".sec-c h1");

function counter(params) {
    const nDate= new Date(newYear);
    const cDate= new Date();
    const diff = new Date(nDate-cDate);
    days.textContent=zeros(Math.floor((diff/(1000*60*60*24))));
    hours.textContent=zeros(23-cDate.getHours());
    min.textContent=zeros(59-cDate.getMinutes());
    sec.textContent=zeros(59-cDate.getSeconds());
    function zeros(i) {
        if (i < 10) {
          return "0" + i;
        } else {
          return i;
        }
      }

}
setInterval(counter,1000);
counter();
