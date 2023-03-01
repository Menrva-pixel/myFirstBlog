function openTab(evt, projName) {

    var i, isiTab, tablink;
  

    isiTab = document.getElementsByClassName("isiTab");
    for (i = 0; i < isiTab.length; i++) {
      isiTab[i].style.display = "none";
    }
  
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace(" active", "");
    }
  
    document.getElementById(projName).style.display = "block";
    evt.currentTarget.className += " active";

    document.getElementById("active").click();
  } 


