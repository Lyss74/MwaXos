/* SCROLL HOME PAGE START */
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 6835 || document.documentElement.scrollTop > 6835)
    {
        document.getElementById("haut").style.display = "block";
    }
    else
    {
        document.getElementById("haut").style.display = "none";
    }
}
function returnHomeUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/* SCROLL HOME PAGE END */

/*
/!* SCROLL SHOP PAGE START *!/
/!* SCROLL SHOP PAGE END *!/

/!* SCROLL CHOICE-TYPO START *!/
/!* SCROLL CHOICE-TYPO PAGE END *!/

/!* SCROLL CONTACT PAGE START *!/
/!* SCROLL DESCR PAGE END *!/

/!* SCROLL LISTEN PAGE START *!/
/!* SCROLL LISTEN PAGE END *!/

/!* SCROLL PLAYLIST PAGE START *!/
/!* SCROLL PLAYLIST PAGE END *!/

/!* SCROLL PROJECTS PAGE START *!/
/!* SCROLL PROJECTS PAGE END *!/
 */
