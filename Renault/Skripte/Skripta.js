// JavaScript source code
function crveniScenic()
{
    var slika = document.getElementById("slikaAutomobila");
    slika.src = "http://www.bn.dk/images/biler/Renault/FRAVP_XFA_1_MO_TENPF_EA2_A3M6R_RALU20.jpg.ximg.l_12_m.smart.jpg.ximg.l_12_m.smart.jpg";
    slika.width = 570;
    slika.height = 300;
}

function plaviScenic()
{
    var slika = document.getElementById("slikaAutomobila");
    slika.src = "http://images.parkers.bauercdn.com/pagefiles/191680/cut-out/420x280/renault_2010_scenic.jpg";
    slika.width = 500;
    slika.height = 300;
}

function zeleniScenic()
{
    var slika = document.getElementById("slikaAutomobila");
    slika.src = "http://images.parkers.bauercdn.com/pagefiles/191701/cut-out/420x280/renault_1999_scenic.jpg";
    slika.width = 500;
    slika.height = 300;
}

function sivaTalija()
{
    var slika = document.getElementById("slikaAutomobila");
    slika.src = "http://en.renault-club.cz/graphics/gallery/full/765_renault-symbol-2013-01.jpg";
    slika.width = 500;
    slika.height = 300;
}

function crvenaTalija()
{
    var slika = document.getElementById("slikaAutomobila");
    slika.src = "http://www.index.hr/images2/R_Thalia_bokG.jpg";
    slika.width = 550;
    slika.height = 300;
}

function plavaTalija()
{
    var slika = document.getElementById("slikaAutomobila");
    slika.src = "http://www.gochecks.net/data/media/30/Renault%20Thalia%202002%20001.jpg";
    slika.width = 500;
    slika.height = 300;
}

function enableDisableButton()
{
    var user = document.getElementById("commentUser");
    var email = document.getElementById("commentMail");
    var textArea = document.getElementById("commentTextarea");
    var button = document.getElementById("commentSend");

    if (user.value != "" && email.value != "" && textArea.value != "")
    {
        button.className = "btn btn-warning enabled";
        button.disabled = false;
    }
    else
    {
        button.className = "btn btn-warning disabled";
        button.disabled = true;
    }
}
