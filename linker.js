function showIndex(which) {
  var index_url = "http://reddit.com/r/hockeyquestionmark";
  switch(which){
    case 1: index_url = "http://reddit.com/r/hockeyquestionmark"; break;
    case 2: index_url = "http://legendshockeyleague.com";         break;
    case 3: index_url = "http://twitch.tv/hqmnetwork";            break;
    case 4: index_url = "https://docs.google.com/spreadsheets/d/19eVof0YuNIPEESL0qRuJE7G8x7wGUVv--1AUNeEEPrk/edit"; break;
    case 5: index_url = "https://docs.google.com/spreadsheets/d/15nLk15LlQLMWPwj_KAV8zdYM5ylogfuJuPV-hOPJGrY/edit"; break;
    case 6: index_url = "https://docs.google.com/spreadsheets/d/1hwOCsdhdtvTfG87VG97CrY3-uNvRqVYhfbIcWq0EnNk/edit"; break;
  }

  chrome.tabs.create({
    url: index_url
  });
}

function goToHQM(){
  showIndex(1);
}

function goToLHL(){
  showIndex(2);
}

function goToStream(){
  showIndex(3);
}

function goToLHLSchedule(){
  showIndex(4);
}

function goToRSLSchedule(){
  showIndex(5);
}

function goToJSLSchedule(){
  showIndex(6);
}

document.getElementById('hqmSub').addEventListener("click", goToHQM);
document.getElementById('lhlSite').addEventListener("click", goToLHL);
document.getElementById('hqmStream').addEventListener("click", goToStream);
document.getElementById('lhlSchedule').addEventListener("click", goToLHLSchedule);
document.getElementById('rslSchedule').addEventListener("click", goToRSLSchedule);
document.getElementById('jslSchedule').addEventListener("click", goToJSLSchedule);
