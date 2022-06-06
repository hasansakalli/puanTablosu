function Takim(
  oyun,
  galibiyet,
  beraberlik,
  maglubiyet,
  atilan,
  yenilen,
  averaj,
  puan
) {
  this.oyun = oyun;
  this.galibiyet = galibiyet;
  this.beraberlik = beraberlik;
  this.maglubiyet = maglubiyet;
  this.atilan = atilan;
  this.yenilen = yenilen;
  this.averaj = averaj;
  this.puan = puan;
}

const manu = new Takim(6, 3, 2, 1, 11, 8, 3, 11);
const villareal = new Takim(6, 3, 1, 2, 12, 9, 3, 10);
const leipzig = new Takim(6, 1, 3, 2, 12, 13, -1, 6);
const youngBoys = new Takim(6, 1, 2, 3, 7, 12, -5, 5);

function skor() {
  var villarealGol = document.getElementById("villarealGol").value;
  var leipzigGol = document.getElementById("leipzigGol").value;
  var youngBoysGol = document.getElementById("youngBoysGol").value;
  var manuGol = document.querySelector("#manuGol").value;

  if (
    villarealGol !== "" &&
    manuGol !== "" &&
    leipzigGol !== "" &&
    youngBoysGol !== ""
  ) {
    //1.maç manu-villareal
    if (manuGol > villarealGol) {
      manu.galibiyet++;
      manu.puan += 3;
      villareal.maglubiyet++;
      genel();
    } else if (manuGol < villarealGol) {
      villareal.galibiyet++;
      villareal.puan += 3;
      manu.maglubiyet++;
      genel();
    } else if (manuGol == villarealGol) {
      villareal.beraberlik++;
      manu.beraberlik++;
      villareal.puan += 1;
      manu.puan += 1;
      genel();
      oyun1()
    }

    //2.maç leipzig-youngboys
    if (leipzigGol > youngBoysGol) {
      leipzig.galibiyet++;
      leipzig.puan += 3;
      youngBoys.maglubiyet++;
      genel2();
      oyun1()
    } else if (leipzigGol < youngBoysGol) {
      youngBoys.galibiyet++;
      youngBoys.puan += 3;
      leipzig.maglubiyet++;
      genel2();
      oyun1()
    } else if (leipzigGol == youngBoysGol) {
      youngBoys.beraberlik++;
      leipzig.beraberlik++;
      youngBoys.puan += 1;
      leipzig.puan += 1;
      genel2();
      oyun1()
    }

    function oyun1(){
      document.getElementById("mO").innerHTML = manu.oyun= manu.oyun+1;
      document.getElementById("vO").innerHTML = villareal.oyun= villareal.oyun+1;
      document.getElementById("lO").innerHTML = leipzig.oyun=leipzig.oyun+1;
      document.getElementById("yO").innerHTML = youngBoys.oyun=youngBoys.oyun+1;
    }

    function genel() {
      manu.averaj = manu.atilan + +manuGol - (manu.yenilen + +villarealGol);
      villareal.averaj =
        villareal.atilan + +villarealGol - (villareal.yenilen + +manuGol);

      document.getElementById("mA").innerHTML = manu.atilan + +manuGol;
      document.getElementById("mY").innerHTML = manu.yenilen + +villarealGol;
      document.getElementById("mAv").innerHTML = manu.averaj;

      document.getElementById("mG").innerHTML = manu.manuGol;
      document.getElementById("mM").innerHTML = manu.maglubiyet;
      document.getElementById("mP").innerHTML = manu.puan;
      document.getElementById("mB").innerHTML = manu.beraberlik;
      
      document.getElementById("mG").innerHTML = manu.galibiyet;

      document.getElementById("vAv").innerHTML = villareal.averaj;
      document.getElementById("vA").innerHTML =
        villareal.atilan + +villarealGol;
      document.getElementById("vY").innerHTML = villareal.yenilen + +manuGol;
      document.getElementById("vG").innerHTML = villareal.manuGol;
      document.getElementById("vM").innerHTML = villareal.maglubiyet;
      document.getElementById("vP").innerHTML = villareal.puan;
      document.getElementById("vB").innerHTML = villareal.beraberlik;
      document.getElementById("vG").innerHTML = villareal.galibiyet;
    }

    function genel2() {
      leipzig.averaj =
        leipzig.atilan + +leipzigGol - (leipzig.yenilen + +youngBoysGol);
      youngBoys.averaj =
        youngBoys.atilan + +youngBoysGol - (youngBoys.yenilen + +leipzigGol);

      document.getElementById("lA").innerHTML = leipzig.atilan + +leipzigGol;
      document.getElementById("lY").innerHTML = leipzig.yenilen + +youngBoysGol;
      document.getElementById("lAv").innerHTML = leipzig.averaj;

      document.getElementById("lG").innerHTML = leipzig.leipzigGol;
      document.getElementById("lM").innerHTML = leipzig.maglubiyet;
      document.getElementById("lP").innerHTML = leipzig.puan;
      document.getElementById("lB").innerHTML = leipzig.beraberlik;
  
      document.getElementById("lG").innerHTML = leipzig.galibiyet;
      document.getElementById("yAv").innerHTML = youngBoys.averaj;

      document.getElementById("yA").innerHTML =
        youngBoys.atilan + +youngBoysGol;
      document.getElementById("yY").innerHTML = youngBoys.yenilen + +leipzigGol;
      document.getElementById("yG").innerHTML = youngBoys.leipzigGol;
      document.getElementById("yM").innerHTML = youngBoys.maglubiyet;
      document.getElementById("yP").innerHTML = youngBoys.puan;
      document.getElementById("yB").innerHTML = youngBoys.beraberlik;
   
      document.getElementById("yG").innerHTML = youngBoys.galibiyet;
    }
  }
  document.getElementById("villarealGol").value = "";
  document.getElementById("leipzigGol").value = "";
  document.getElementById("youngBoysGol").value = "";
  document.querySelector("#manuGol").value = "";

 
}
