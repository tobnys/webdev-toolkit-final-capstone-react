let currentPage = ".landing-page";

function closeMenu() {
    //console.log("CloseMenu");
    let value = $(".main-nav").css("height");
    if ($(window).width() < 1024) {
        if (value === "50px") {
            $(".main-nav").animate({
                height: "300px"
            })
            $(".inline-nav-container a").animate({
                opacity: "1"
            })
            $(".main-nav").css("background-color", "rgba(0, 119, 131, 1)")
            $(".main-nav a").css("display", "block")
        }
        else {
            $(".main-nav").animate({
                height: "50px"
            })
            $(".inline-nav-container a").animate({
                opacity: "0"
            })
            $(".main-nav").css("background-color", "rgba(0, 119, 131, 0.95)")
            $(".main-nav a").css("display", "none")
        }
    }
}

$(window).resize(function(){
    //console.log($(window).width());
    let value = $(".main-nav").css("height");
    if ($(window).width() > 1024) {
        $(".inline-nav-container a").animate({
            opacity: "1"
        })
        $(".main-nav").css("background-color", "rgba(0, 119, 131, 0.95)")
        $(".main-nav a").css("display", "block")
    }
    else if($(window).width() < 1024) {
        if(value === "50px"){
            //console.log("50px");
            $(".inline-nav-container a").css("display", "none")
        }
        else {
            $(".inline-nav-container a").animate({
                opacity: "0"
            })
            $(".main-nav").css("background-color", "rgba(0, 119, 131, 0.95)")
            $(".main-nav a").css("display", "none")
        }
    }
});

// PAGE NAVIGATION 
function switchPage(originalPage, targetPage) {
    $(`${originalPage}`).animate({
        left: "250px",
        opacity: "0"
    }, 200, function () {
        //console.log(originalPage, targetPage);
        $(this).css("display", "none");
        $(`${targetPage}`).css("display", "block");
        $(`${targetPage}`).animate({
            opacity: "1"
        }, 200, function () {
            currentPage = `${targetPage}`;
        });
    });
}

function setActiveButton(button) {
    $(button).css("border-bottom", "3px solid rgb(0, 231, 255)");
    $(button).css("color", "rgb(0, 231, 255)");

    //console.log($("li").children())
    //console.log(button.id)

    $("li").children().not(`#${button.id}`).css("border-bottom", "3px solid rgba(0, 231, 255, 0)");
    $("li").children().not(`#${button.id}`).css("color", "rgba(255, 255, 255, 1)");
}

// COPY TO CLIPBOARD FUNCTIONS
function copyToClipboard(elem) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(elem).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

// FUNCTIONS FOR USER FEEDBACK ON INPUT
let timer;
function showCopyMessage(target) {
    $(".feedback-2").animate({
        opacity: "1",
    })
    $(".feedback-2 p").animate({
        paddingTop: "0"
    });
    timer = setTimeout(hideCopyMessage, 4000);
}

function hideCopyMessage() {
    $(".feedback-2").animate({
        opacity: "0",
    })
    $(".feedback-2 p").animate({
        paddingTop: "20"
    });
    clearTimeout(timer);
}

let timer2;
function showInputMessage(msg) {
    $(".feedback-1").animate({
        opacity: "1",
    })
    $(".feedback-1 p").animate({
        paddingTop: "0"
    });
    $(".feedback-1 p").text(msg);
    timer2 = setTimeout(hideInputMessage, 4000);
}

function hideInputMessage() {
    $(".feedback-1").animate({
        opacity: "0",
    })
    $(".feedback-1 p").animate({
        paddingTop: "20"
    });
    clearTimeout(timer2);
}

// GOOGLE WEB FONTS API
function webFontsReq(target) {
    $.ajax({
        method: "GET",
        url: `https://webdev-toolkit.herokuapp.com/api/functional/fonts/${target}`,
        success: function (res) {
            //console.log("API call success");
            appendHTML(res);
            applyFonts(res);
        },
        error: function (err) {
            //console.log("API call failed")
        },
    })
};

function appendHTML(f) {
    $(".card-1 h2").text(f.items[0].family);
    $(".card-2 h2").text(f.items[1].family);
    $(".card-3 h2").text(f.items[2].family);
    $(".card-4 h2").text(f.items[3].family);
    $(".card-5 h2").text(f.items[4].family);
    $(".card-6 h2").text(f.items[5].family);

    $("#card-1").attr("href", `https://fonts.google.com/specimen/${f.items[0].family}`);
    $("#card-2").attr("href", `https://fonts.google.com/specimen/${f.items[1].family}`);
    $("#card-3").attr("href", `https://fonts.google.com/specimen/${f.items[2].family}`);
    $("#card-4").attr("href", `https://fonts.google.com/specimen/${f.items[3].family}`);
    $("#card-5").attr("href", `https://fonts.google.com/specimen/${f.items[4].family}`);
    $("#card-6").attr("href", `https://fonts.google.com/specimen/${f.items[5].family}`);
};

function applyFonts(f) {
    WebFont.load({
        google: {
            families: [f.items[0].family, f.items[1].family, f.items[2].family, f.items[3].family, f.items[4].family, f.items[5].family]
        }
    });

    $(".card-1").css("font-family", `${f.items[0].family}, ${f.items[0].category}`);
    $(".card-2").css("font-family", `${f.items[1].family}, ${f.items[1].category}`);
    $(".card-3").css("font-family", `${f.items[2].family}, ${f.items[2].category}`);
    $(".card-4").css("font-family", `${f.items[3].family}, ${f.items[3].category}`);
    $(".card-5").css("font-family", `${f.items[4].family}, ${f.items[4].category}`);
    $(".card-6").css("font-family", `${f.items[5].family}, ${f.items[5].category}`);
};

function generationReq(p) {
    $.ajax({
        method: "GET",
        url: `https://webdev-toolkit.herokuapp.com/api/functional/text/`,
        data: {
            p: p,
        },
        success: function (res) {
            //console.log("API call success");
            //console.log(res);
            appendGeneration(res);
        },
        error: function (err) {
            //console.log("API call failed")
        },
    })
}

function appendGeneration(s) {
    $(".output-container").append(s);
}


function registerUser(u, p) {
    $.ajax({
        method: "POST",
        url: `https://webdev-toolkit.herokuapp.com/api/users/register`,
        data: {
            username: u,
            password: p
        },
        success: function (res) {
            //console.log("API call success");
            //console.log(res);
        },
        error: function (err) {
            //console.log("API call failed")
        },
    });
}

function loginUser(u, p) {
    $.ajax({
        method: "POST",
        url: `https://webdev-toolkit.herokuapp.com/api/users/login`,
        data: {
            username: u,
            password: p
        },
        success: function (res) {
            //console.log("API call success");

        },
        error: function (err) {
            //console.log("API call failed");
        }
    });
}

function redirectWelcome() {
    $(currentPage).animate({
        left: "250px",
        opacity: "0"
    }, 200, function () {
        $(this).css("display", "none");
        $(".dashboard-page").css("display", "block");
        $(".dashboard-page").animate({
            opacity: "1"
        }, 200, function () {
            //console.log(currentPage);
            currentPage = ".dashboard-page";
        });
    });
    setActiveButton("#page-dashboard");
    populateDashboard();
};

// POPULATE DASHBOARD
function populateDashboard() {
    $.ajax({
        method: "GET",
        url: `https://webdev-toolkit.herokuapp.com/api/functional/statistics`,
        success: function (res) {
            //console.log("API call success");
            // APPEND TEXT
            $("#num-logins").text(res.successfulLogins);
            $("#num-strings").text(res.stringsGenerated);
            $("#num-fonts").text(res.fontsGenerated);
        },
        error: function (err) {
            //console.log("API call failed");
        }
    });
}


// TRIGGERS
$(document).ready(function () {
    // HAMBURGER MENU FUNCTIONS
    $(".toggle-container").on("click", function (e) {
        let value = $(".main-nav").css("height");
        if (value === "50px") {
            $(".main-nav").animate({
                height: "300px"
            })
            $(".inline-nav-container a").animate({
                opacity: "1"
            })
            $(".main-nav").css("background-color", "rgba(0, 119, 131, 1)")
            $(".main-nav a").css("display", "block")
        }
        else {
            $(".main-nav").animate({
                height: "50px"
            })
            $(".inline-nav-container a").animate({
                opacity: "0"
            })
            $(".main-nav").css("background-color", "rgba(0, 119, 131, 0.2)")
            $(".main-nav a").css("display", "none")
        }
    });

    $("#page-generations").click(function (e) {
        e.preventDefault();
        closeMenu();
        switchPage(currentPage, ".generation-page");
        setActiveButton(this);
    });

    $("#page-categories").click(function (e) {
        e.preventDefault();
        closeMenu();
        switchPage(currentPage, ".category-page");
        setActiveButton(this);
    });

    // CATEGORY SUB-PAGES
    $("#c-html, #c-css, #c-js, #c-jquery, #c-node, #c-react").click(function (e) {
        switchPage(currentPage, ".category-sub-page");
        appendCategoryHTML(e.currentTarget.id);
    });

    function appendCategoryHTML(t){
        let cHref = "";
        let mHref = "";
        let title = "Title";

        if(t === "c-html"){
            cHref = "https://cdn.makeawebsitehub.com/wp-content/uploads/2015/06/HTML5-Mega-Cheat-Sheet-A4-Print-ready.pdf";
            mHref = "https://developer.mozilla.org/en-US/docs/Web/HTML";
            title = "HTML5";
        }
        else if(t === "c-css"){
            cHref = "https://www.smashingmagazine.com/wp-content/uploads/images/css3-cheat-sheet/css3-cheat-sheet.pdf";
            mHref = "https://developer.mozilla.org/en-US/docs/Web/CSS";
            title = "CSS3";
        }
        else if(t === "c-js"){
            cHref = "http://www.cheat-sheets.org/saved-copy/jsquick.pdf";
            mHref = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
            title = "JavaScript";
        }
        else if(t === "c-jquery"){
            cHref = "https://oscarotero.com/jquery/";
            mHref = "https://api.jquery.com/";
            title = "jQuery";
        }
        else if(t === "c-node"){
            cHref = "https://gist.github.com/LeCoupa/985b82968d8285987dc3";
            mHref = "https://nodejs.org/en/docs/";
            title = "Node.JS";
        }
        else if(t === "c-react"){
            cHref = "https://reactcheatsheet.com/";
            mHref = "https://reactjs.org/docs/hello-world.html";
            title = "React";
        }

        setHref(cHref, mHref, title)
    }
    
    function setHref(one, two, three){
        $("#cHref").attr("href", one);
        $("#mHref").attr("href", two);
        $("#c-sub-title").text(three);
    }

    // CATEGORY PAGE BACK ARROW
    $("#back-arrow").click(function (e) {
        e.preventDefault();
        switchPage(currentPage, ".category-page");
    });

    $("#page-fonts").click(function (e) {
        e.preventDefault();
        closeMenu();
        switchPage(currentPage, ".font-page");
        setActiveButton(this);
    });

    // FONT PAGE BUTTONS
    $(".sort-container button").click(function (e) {
        webFontsReq(e.target.id);
    });

    // RIGHT NAV
    $("#pageLogin").click(function (e) {
        e.preventDefault();
        closeMenu();
        switchPage(currentPage, ".login-page");
        setActiveButton(this);
    });

    $("#page-signup").click(function (e) {
        e.preventDefault();
        closeMenu();
        switchPage(currentPage, ".register-page");
        setActiveButton(this);
    });

    $("#copy-btn").click(function (e) {
        copyToClipboard(".output-container");
        showCopyMessage();
    });

    // GENERATION API
    $("#generate-btn").click(function (e) {
        e.preventDefault();
        var pValue = $("#num-p-value").val();
        if (pValue === "") {
            showInputMessage("Please enter some settings above!");
        }
        else if (pValue > 5 || pValue <= 0) {
            showInputMessage("Please correct the paragraph setting!");
        }
        else {
            generationReq(pValue);
        }
    });

    // LOGIN / REGISTER FUNCTIONALITY
    $("#register-btn").click(function (e) {
        e.preventDefault();
        var usernameVal = $("#register-username").val();
        var passwordVal = $("#register-password").val();
        //registerUser(usernameVal, passwordVal);
    });

    $("#loginBtn").on("click", function (e) {
        e.preventDefault();
        //var usernameVal = $("#login-username").val();
        //var passwordVal = $("#login-password").val();
        redirectWelcome();
        //loginUser(usernameVal, passwordVal);
    });

    $("#redirect-text").click(function (e) {
        switchPage(".dashboard-page", ".generation-page");
    });

    $("#redirect-cheat").click(function (e) {
        switchPage(".dashboard-page", ".category-page");
    });

    $("#redirect-font").click(function (e) {
        switchPage(".dashboard-page", ".font-page");
    });

});

$(document).on("click", "#page-dashboard", function (e) {
    e.preventDefault();
    closeMenu();
    switchPage(currentPage, ".dashboard-page");
    setActiveButton(this);
});