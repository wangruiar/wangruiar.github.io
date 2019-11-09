  document.write('<i class="fas fa-cog fa-spin fa-fw"></i> <span id="run_time"></span>');
function run_time() {
  function setzero(i) {
    if (i < 10) { i = "0" + i };
    return i;
  }
  window.setTimeout("run_time()", 1000);
  BirthDay = new Date("10/04/2017 11:03:56");
  today = new Date();
  timeold = (today.getTime() - BirthDay.getTime());
  sectimeold = timeold / 1000
  secondsold = Math.floor(sectimeold);
  msPerDay = 24 * 60 * 60 * 1000
  e_daysold = timeold / msPerDay
  daysold = Math.floor(e_daysold);
  e_hrsold = (e_daysold - daysold) * 24;
  hrsold = setzero(Math.floor(e_hrsold));
  e_minsold = (e_hrsold - hrsold) * 60;
  minsold = setzero(Math.floor((e_hrsold - hrsold) * 60));
  seconds = setzero(Math.floor((e_minsold - minsold) * 60));
  document.getElementById('run_time').innerHTML = daysold + "天" + hrsold + "时" + minsold + "分" + seconds + "秒";
}
run_time();
