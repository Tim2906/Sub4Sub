// Method 1

(function() {
    'use strict';

    if (window.location.href.indexOf("members-area/activate") != -1){
        var xpath = '/html/body/div[1]/section/div/div/div/div/div/div[2]/div[1]/h2/span/div';
        var checkForRemainingVideos = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;

        if (checkForRemainingVideos > 0){
            setTimeout(function(){check();}, 2000);
            setTimeout(function(){location.reload();}, 3000);
        }

        if (checkForRemainingVideos < 1){
            var confirmButton = document.evaluate('/html/body/div[1]/section/div/div/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[3]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            var ytButton = document.evaluate('/html/body/div[1]/section/div/div/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[1]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            ytButton.click();
            startSub();

            setTimeout(function(){confirmButton.click();}, 17000);

        }
    }

    if (window.location.href.indexOf("free-activation-success") != -1){

        var activateButton = doucment.evaluate('/html/body/div[1]/section/div/div[1]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        location.href = "https://www.ytpals.com/members-area/";

        setTimeout(function(){activateButton.click();}, 4,32e+7)

        setTimeout(function(){location.href="https://www.ytpals.com/members-area/activate"}, 4.3236e+9);

    }

})();


// Method 2
(function() {
    'use strict';

    var palsID = " ";
    var palsPW = " ";

    if (window.location.href.indexOf("login") && (document.location.href.indexOf("final") === -1) && (document.location.href.indexOf("activate") === -1))
    {
        var ytString = document.evaluate('/html/body/div[1]/section/div/div/div/div/div/form/div/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        ytString.value = palsID;

        if (ytString.value != null)
        {
            var captchaCheck = document.evaluate('//*[@id="core-wrapper"]/section/div/div/div/div/div/form/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            if (captchaCheck === null){
                var loginButton1 = document.evaluate('/html/body/div[1]/section/div/div/div/div/div/form/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                setTimeout(function(){ loginButton1.click(); }, 3000);
            }else{
                alert("captcha!");
            }
        }
    }

    if (window.location.href.indexOf("final") != -1)
    {
        var password = document.evaluate('/html/body/div[1]/section/div/div/div/div/div/form/div[2]/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        password.value = palsPW;
        var loginButton2 = document.evaluate('/html/body/div[1]/section/div/div/div/div/div/form/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        setTimeout(function(){ loginButton2.click(); }, 3000);
    }

    if (window.location.href.indexOf("members-area") && (document.location.href.indexOf("activate") === -1))
    {
        var freeStarter = document.evaluate('/html/body/div[1]/section/div/div[1]/div[2]/div/div/div[2]/div[2]/div[1]/div/div[2]/div[2]/form/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (freeStarter != null){
            setTimeout(function() { freeStarter.click(); }, 3000);
        }
    }

    if (window.location.href.indexOf("activate") != -1)
    {
        var xpath = '/html/body/div[1]/section/div/div/div/div/div/div[2]/div[1]/h2/span/div';
        var checkForRemainingVideos = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;

        var confirmButton = document.evaluate('/html/body/div[1]/section/div/div/div/div/div/div[2]/div[2]/div[2]/div/div[2]/div[3]/a', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        function fakeSubscribe(){
            setTimeout(function(){ startSub(); }, 5000);
            setTimeout(function(){ confirmButton.click(); }, 25000);
            setTimeout(function(){ location.reload(); }, 45000);
        }

        if (checkForRemainingVideos < 1 || -1 > checkForRemainingVideos){
            setTimeout(function(){location.reload();},5000);
        }

        var called = false;
        if (!called)
        {
            called = true;
            fakeSubscribe();
        }
    }

})();
