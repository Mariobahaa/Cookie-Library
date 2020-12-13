(function () {
    var Ck = function () {
        Object.defineProperty(this, 'allCookieList', {
            value: function () {
                var cookieList = [];
                var splt = decodeURI(document.cookie);
                splt = splt.split(";");

                for (var i = 0; i < splt.length; i++) {
                    cookieList[splt[i].split("=")[0].trim()] = splt[i].split("=")[1].trim();
                }
                
                return cookieList;
            },
            writable: false,
            enumerable: false,
            configurable: false,
        });
    };


    Ck.prototype.setCookie = function (cookieName, cookieVal, expDate) {
        if (arguments[2]) {
            document.cookie = cookieName + "=" + cookieVal + ";" + "expires=" + expDate.toUTCString();
        } else {
            document.cookie = cookieName + "=" + cookieVal;
        }
    };

    Ck.prototype.getCookie = function (cookieName) {

        console.log(this);
        var clst = this.allCookieList();
        return clst[cookieName];
    };

    Ck.prototype.deleteCookie = function (cookieName) {
        var newDate = new Date();
        newDate.setTime(newDate.getTime() - 86400000);
        document.cookie = cookieName + "=;expires=" + newDate.toUTCString();

    };


    Ck.prototype.hasCookie = function (cookieName) {
        //console.log(this);
        var cklst = this.allCookieList();
        for (var c in cklst) {
            if (c == cookieName) return true;
        }

        return false;
    };

    window.cki = new Ck; //new
})();
