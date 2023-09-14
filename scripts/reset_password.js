var defaultResponses = {
    200: "OK",
    401: "You are unauthorized to perform this action. Please reach out to hello@stubbenedgelabs.com if the error persists.",
    403: "Your account appears to have been blocked/frozen. Please reach out to hello@stubbenedgelabs.com if the error persists.",
    405: "Method not allowed. Please reach out to hello@stubbenedgelabs.com if the error persists.",
    409: "There is already a user account associated with this email address.",
    415: "Unsupported media type. Please reach out to hello@stubbenedgelabs.com if the error persists.",
    420: "This email has not yet been vefified",
    422: "Your password does not meet the minimum required standards. Please try again.",
    423: "This account has been deleted in the last 7 days and is not yet available.",
    429: "You have made too many requests in a short amount of time. Please wait 10 seconds between requests. Please reach out to hello@stubbenedgelabs.com if the error persists.",
    430: "Unfortunately, our servers are currently overloaded. Please retry your request tomorrow or reach out to hello@stubbenedgelabs.com.",
    500: "We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists.",
    900: "Log in error. Please ensure cross-site tracking is enabled in browser settings",
    999: "We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists."
}
const Md5 = function (d) {
    // https://stackoverflow.com/questions/14733374/how-to-generate-an-md5-file-hash-in-javascript-node-js
    var r = M(V(Y(X(d), 8 * d.length))); return r.toLowerCase()
};
function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } 
function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } 
function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } 
function Y(d, _) { 
    d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) {
    return d << _ | d >>> 32 - _
}

const getCanvasFingerprint = function () {
    // https://github.com/artem0/canvas-fingerprinting/blob/master/fingerprinting/fingerprint.js
    // https://www.browserleaks.com/canvas#how-does-it-work
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var txt = 'CANVAS_FINGERPRINT';
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    return canvas.toDataURL();
};

const generateFingerprint = function () {
    const userAgent = String(navigator.userAgent);
    const language = String(navigator.language);
    const languages = String(navigator.languages);
    const hardWareConcurrency = String(navigator.hardwareConcurrency);
    const deviceMemory = String(navigator.deviceMemory);
    const maxTouchPoints = String(navigator.maxTouchPoints);
    const oscpu = String(navigator.oscpu);
    const platform = String(navigator.platform);
    const vendor = String(navigator.vendor);
    const screenHeight = String(screen.height);
    const screenWidth = String(screen.width);
    const timeZone = String(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const screenColorDepth = String(screen.colorDepth);
    const cpuClass = String(navigator.cpuClass);
    const canvasFingerprint = String(getCanvasFingerprint());
    const combinedElements = userAgent + language + languages + hardWareConcurrency + deviceMemory + maxTouchPoints + oscpu + platform + vendor + screenHeight + screenWidth + timeZone + screenColorDepth + cpuClass + canvasFingerprint;
    const md5Hash = Md5(combinedElements);
    const finalFingerprint = md5Hash.slice(0, 3) + "j" + md5Hash.slice(3, 5) + "o" + md5Hash.slice(5, 9) + "e" + md5Hash.slice(9, 14) + "i" + md5Hash.slice(14, 16) + "s" + md5Hash.slice(16, 17) + "k" + md5Hash.slice(17, 21) + "i" + md5Hash.slice(21, 24) + "n" + md5Hash.slice(24, 28) + "g" + md5Hash.slice(28);

    return finalFingerprint
}

const deviceFingerPrint = generateFingerprint()
async function isUserLoggedIn() {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response)
                } else {
                    resolve(false)
                }
            }
        }
        xhr.withCredentials = true;
        xhr.open('GET', 'https://prospect-gateway-a9jtfdvq.nw.gateway.dev/h00z_l0663d_1nn');
        xhr.setRequestHeader('X-Prospekt', deviceFingerPrint);
        xhr.send();
    })
}
function setDetails (name){
    var expire = new Date();
    expire.setMinutes(expire.getMinutes() + 20); // timestamp
    expire = new Date(expire); // Date object
    
    var prospektSessionObject = {
        expiresAt: expire,
        sessionData: {
            userName: name
        }
    }
    sessionStorage.setItem('prospektSessionObject', JSON.stringify(prospektSessionObject));
}

function updateDetails() {
    var prospektSessionObjectOld = JSON.parse(sessionStorage.getItem('prospektSessionObject'));
    var name = prospektSessionObjectOld.sessionData.userName
    var expire = new Date();
    expire.setMinutes(expire.getMinutes() + 20); // timestamp
    expire = new Date(expire); // Date object
    
    var prospektSessionObject = {
        expiresAt: expire,
        sessionData: {
            userName: name
        }
    }
    sessionStorage.setItem('prospektSessionObject', JSON.stringify(prospektSessionObject));
}

async function checkDetails (){
    var currentDate = new Date();
    var prospektSessionObject = JSON.parse(sessionStorage.getItem('prospektSessionObject'));
    if (prospektSessionObject == null) {
        console.log('no session');
        await setHeaderElementLogin(0);
    } else {
        console.log('session found');
        var expirationDate = prospektSessionObject.expiresAt;
        if (prospektSessionObject.sessionData.userName == 'Anonymous') {
            //pass
            console.log('session anon')
        }
        else if(Date.parse(currentDate) < Date.parse(expirationDate)) {
            //Session is still valid
            console.log('session valid')
            await setHeaderElementLogin(1);
        } else {
            //Session no longer valid
            sessionStorage.removeItem('prospektSessionObject');
            console.log('session expired');
            await setHeaderElementLogin(0);
        }
    }
};

async function removeDetails (){
    var prospektSessionObject = JSON.parse(sessionStorage.getItem('prospektSessionObject'));
    if (prospektSessionObject != null) {
        sessionStorage.removeItem('prospektSessionObject');
    }
};
async function setHeaderElementLogin(src) {
    //src = 0 - called by generic website pages - given no saved session data
    //src = 1 - called by generic website pages - given valid session data
    //src = 2 - called by the Login pop-up on the Prospekt page
    //src = 3 - called by login page (default)
    //src = 4 - called by login page (confirmation)
    //src = 5 - called by logout page
    //src = 6 - called by manage account
    //src = 7 - called by sign-up page
    //src = 8 - called by reset password

    const divElement = document.createElement('div');
    divElement.classList.add('header-actions-action', 'header-actions-action--cta', 'preFade', 'fadeIn');
    divElement.setAttribute('data-animation-role', 'header-element');
    divElement.style.transitionTimingFunction = 'ease';
    divElement.style.transitionDuration = '1.5s';
    divElement.style.transitionDelay = '0.13125s';

    const buttonElement = document.createElement('a');
    buttonElement.classList.add('btn', 'btn--border', 'theme-btn--primary-inverse', 'sqs-button-element--primary');
    buttonElement.id = "headerLoginButton"
    buttonElement.type = 'button'; 
    buttonElement.href = ''

    const nameElement = document.createElement('span');
    nameElement.style = "padding-right: 5px;"

    if (src == 2) {
        var overlay = document.getElementById('overlay');      
        var popup = document.getElementById('popup');
        var popupContent = document.getElementById('popupContent');
        var closeButton = document.createElement('button');
        closeButton.id = 'closeButton';
        closeButton.className = 'close-button';
        closeButton.textContent = 'x';
        closeButton.addEventListener('click', closePopup);
    }

    //get user name
    if (src == 1) {
        var prospektSessionObject = JSON.parse(sessionStorage.getItem('prospektSessionObject'));
        var userLoginStatus = {
            user_name: prospektSessionObject.sessionData.userName
        }
    } else {
        var userLoginStatus = await isUserLoggedIn()
    }

    //actions
    result = true
    if (userLoginStatus != false) {
        buttonElement.textContent = 'Log out';
        buttonElement.href = '/logout-page'
        nameElement.textContent = "Hello, " + userLoginStatus.user_name + '       '
        if (src != 1) {
            setDetails(userLoginStatus.user_name);
        }
        if (src == 2) {
            closePopup();
        }
        else if (src == 3 || src == 4 || src == 7) {
            populateWelcomePage();
        }
        else if (src == 5) {
            logOutUser();
            removeDetails();
        }
        else if (src == 6) {
            populateAccountPage(userLoginStatus);
        }
        else if (src == 7) {
            redirectManageAccount();
        }
        else if (src == 8) {
            populateForgotPasswordPage(userLoginStatus);
        }
    } else {
        buttonElement.textContent = 'Log in';
        buttonElement.href = '/login-user'
        nameElement.textContent = ''
        setDetails('Anonymous')
        if (src == 2) {
            overlay.style.display = 'block';
            popup.style.display = 'block';
            popupContent.appendChild(closeButton);
            popupContent.innerHTML = 'Log in error. Please ensure cross-site tracking is enabled in browser settings'; 
        }
        else if (src == 3) {
            populateLoginPage();
        }
        else if (src == 4) {
            result = false
        }
        else if (src == 5) {
            populateGoodbyePage();
        }
        else if (src == 6) {
            redirectLoginPage();
        }
        else if (src == 7) {
            populateSignupPage();
        }
        else if (src == 8) {
            populateForgotPasswordPage(userLoginStatus);
        }
    }

    divElement.appendChild(nameElement);
    divElement.appendChild(buttonElement);
    const parentElement = document.querySelector('.header-actions--right');
    parentElement.innerHTML = ''
    parentElement.innerHTML += divElement.outerHTML;
    
    return result
}
function togglePasswordVisibility(inputField) {
    if (inputField.type === 'password') {
        inputField.type = 'text';
    } else {
        inputField.type = 'password';
    }
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (!/\d/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]/.test(password)) {
        return false;
    }
    return true;
}

const Md5 = function (d) {
    // https://stackoverflow.com/questions/14733374/how-to-generate-an-md5-file-hash-in-javascript-node-js
    var r = M(V(Y(X(d), 8 * d.length))); return r.toLowerCase()
}; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) {
    return d << _ | d >>> 32 - _
}

const getCanvasFingerprint = function () {
    // https://github.com/artem0/canvas-fingerprinting/blob/master/fingerprinting/fingerprint.js
    // https://www.browserleaks.com/canvas#how-does-it-work
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var txt = 'CANVAS_FINGERPRINT';
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText(txt, 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText(txt, 4, 17);
    return canvas.toDataURL();
};

const generateFingerprint = function () {
    const userAgent = String(navigator.userAgent);
    const language = String(navigator.language);
    const languages = String(navigator.languages);
    const hardWareConcurrency = String(navigator.hardwareConcurrency);
    const deviceMemory = String(navigator.deviceMemory);
    const maxTouchPoints = String(navigator.maxTouchPoints);
    const oscpu = String(navigator.oscpu);
    const platform = String(navigator.platform);
    const vendor = String(navigator.vendor);
    const screenHeight = String(screen.height);
    const screenWidth = String(screen.width);
    const timeZone = String(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const screenColorDepth = String(screen.colorDepth);
    const cpuClass = String(navigator.cpuClass);
    const canvasFingerprint = String(getCanvasFingerprint());
    const combinedElements = userAgent + language + languages + hardWareConcurrency + deviceMemory + maxTouchPoints + oscpu + platform + vendor + screenHeight + screenWidth + timeZone + screenColorDepth + cpuClass + canvasFingerprint;
    const md5Hash = Md5(combinedElements);
    const finalFingerprint = md5Hash.slice(0, 3) + "j" + md5Hash.slice(3, 5) + "o" + md5Hash.slice(5, 9) + "e" + md5Hash.slice(9, 14) + "i" + md5Hash.slice(14, 16) + "s" + md5Hash.slice(16, 17) + "k" + md5Hash.slice(17, 21) + "i" + md5Hash.slice(21, 24) + "n" + md5Hash.slice(24, 28) + "g" + md5Hash.slice(28);

    return finalFingerprint
}

const deviceFingerPrint = generateFingerprint()
    
async function getUserDetails() {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response)
                } else {
                    resolve(false)
                }
            }
        }
        xhr.withCredentials = true;
        xhr.open('GET', 'https://prospect-gateway-a9jtfdvq.nw.gateway.dev/h00z_l0663d_1nn');
        //xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
    })
}

async function isUserLoggedIn() {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response)
                } else {
                    resolve(false)
                }
            }
        }
        xhr.withCredentials = true;
        xhr.open('GET', 'https://prospect-gateway-a9jtfdvq.nw.gateway.dev/h00z_l0663d_1nn');
        xhr.setRequestHeader('X-Prospekt', deviceFingerPrint);
        xhr.send();
    })
}

async function setHeaderElementLogin() {
    const userLoginStatus = await isUserLoggedIn()
    const mobileDiv = document.createElement('div')
    mobileDiv.className = 'showOnMobile';
    const desktopDiv = document.createElement('div')
    desktopDiv.className = 'showOnDesktop';

    const divElement = document.createElement('div');
    divElement.classList.add('header-actions-action', 'header-actions-action--cta', 'preFade', 'fadeIn');
    divElement.setAttribute('data-animation-role', 'header-element');
    divElement.style.transitionTimingFunction = 'ease';
    divElement.style.transitionDuration = '1.5s';
    divElement.style.transitionDelay = '0.13125s';

    const buttonElement = document.createElement('a');
    buttonElement.classList.add('btn', 'btn--border', 'theme-btn--primary-inverse', 'sqs-button-element--primary');
    buttonElement.id = "headerLoginButton"
    buttonElement.type = 'button'; 
    buttonElement.href = ''

    const nameElement = document.createElement('span');
    nameElement.style = "padding-right: 5px;"

    if (userLoginStatus != false) {
        buttonElement.textContent = 'Log out';
        buttonElement.href = '/logout-page'
        nameElement.textContent = "Hello, " + userLoginStatus.user_name + '       '
    } else {
        buttonElement.textContent = 'Log in';
        buttonElement.href = '/login-user'
    }

    divElement.appendChild(nameElement);
    divElement.appendChild(buttonElement);

    const parentElement = document.querySelector('.header-actions--right');
    parentElement.innerHTML = ''
    parentElement.innerHTML += divElement.outerHTML;
}

setHeaderElementLogin()
populateForgotPasswordPage()

function resetPassword(email, resend=false) {
    const popupContent = document.getElementById('loginPlaceholder');
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    //overlay.style.display = 'block';
    //popup.style.display = 'block';
    //popupContent.innerHTML = '<div class="loader" ></div>' 

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                popupContent.innerHTML = ''; //Clear any previous content
                populateOTP(email, resend=resend);  
            } else if (xhr.status == 401) {
                popupContent.innerHTML = '' //Clear any previous content
                //popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'There is no account associated with this email or you are not authorised to perform this action. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else if (xhr.status == 403) {
                popupContent.innerHTML = '' //Clear any previous content
                //popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'Your account appears to have been blocked/frozen. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else if (xhr.status == 405) {
                popupContent.innerHTML = '' //Clear any previous content
                //popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'Method not allowed. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else if (xhr.status == 415) {
                popupContent.innerHTML = '' //Clear any previous content
                //popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'Unsupported media type. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else if (xhr.status == 430) {
                popupContent.innerHTML = '' //Clear any previous content
                //popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'Unfortunately, our servers are currently overloaded. Please retry your request tomorrow or reach out to hello@stubbenedgelabs.com.';                 
            } else if (xhr.status >= 500) {
                popupContent.innerHTML = '' //Clear any previous content
                //popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else {
                popupContent.innerHTML = '';  //Clear any previous content
                //popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            }
        }
    }
    xhr.open("POST", "https://prospect-gateway-a9jtfdvq.nw.gateway.dev/r3qV357_n3u_p455w0rd", false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader('X-Prospekt', deviceFingerPrint);
    xhr.send(JSON.stringify({"email_address": email.toLowerCase()}));       
}

function populateNewPasswordPage(email, otp) {
    const popupContainer = document.getElementById('loginPlaceholder')
    popupContainer.innerHTML = '';

    //const closeButton = document.createElement('button');
    //closeButton.id = 'closeButton';
    //closeButton.className = 'close-button';
    //closeButton.textContent = 'x';
    //closeButton.addEventListener('click', closePopup);

    const headlineSummary = document.createElement('h4');
    headlineSummary.textContent = 'Reset Password';

    const subtitle = document.createElement('p');
    subtitle.innerHTML = 'Thank you for providing the OTP. Please create your new password below.';

    const resetForm = document.createElement('form');
    resetForm.className = "popup-form"

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.style.width = '95%';
    passwordInput.placeholder = 'Password';
    passwordInput.required = true;

    const passwordFeedback = document.createElement('small')
    passwordFeedback.display = 'None';
    passwordFeedback.innerHTML = 'Should be least 8 characters long, at least 1 number, at least 1 lowercase, at least 1 uppercase, and at least 1 special character.'

    const confirmPasswordInput = document.createElement('input');
    confirmPasswordInput.type = 'password';
    confirmPasswordInput.style.width = '95%';
    confirmPasswordInput.placeholder = 'Confirm Password';
    confirmPasswordInput.required = true;
    // Add event listener to the confirmPasswordInput

    passwordInput.addEventListener('input', function() {
        const passwordValue = passwordInput.value;
        if (passwordValue === '') {
            passwordInput.style.outline = '2px solid red';
        } else if (validatePassword(passwordValue) === false) {
            passwordInput.style.outline = '2px solid red';
        }
        else {
            passwordInput.style.outline = '2px solid green';
        }
    });

    confirmPasswordInput.addEventListener('input', function() {
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;

        if (confirmPasswordValue === '') {
            confirmPasswordInput.style.outline = ''; // Reset outline if input is empty
        } else if (passwordValue === confirmPasswordValue & validatePassword(passwordValue) === true) {
            confirmPasswordInput.style.outline = '2px solid green';
        } else {
            confirmPasswordInput.style.outline = '2px solid red';
        }
    });

    // Toggle button for showing/hiding password
    const togglePasswordButton1 = document.createElement('button');
    const eyeIcon1 = document.createElement('i');
    eyeIcon1.classList.add('fas', 'fa-eye'); // Font Awesome classes for the eye icon
    togglePasswordButton1.appendChild(eyeIcon1); // Add the icon to the button
    togglePasswordButton1.style = "margin-left: -40px; cursor: pointer; border: none; background-color: transparent;"
    togglePasswordButton1.className = 'password-toggle-button';
    togglePasswordButton1.type = 'button';
    togglePasswordButton1.addEventListener('click', function() {
        togglePasswordVisibility(passwordInput);
        togglePasswordVisibility(confirmPasswordInput);
    });

    // Toggle button for showing/hiding password
    const togglePasswordButton2 = document.createElement('button');
    const eyeIcon2 = document.createElement('i');
    eyeIcon2.classList.add('fas', 'fa-eye'); // Font Awesome classes for the eye icon
    togglePasswordButton2.appendChild(eyeIcon2); // Add the icon to the button
    togglePasswordButton2.style = "margin-left: -40px; cursor: pointer; border: none; background-color: transparent;"
    togglePasswordButton2.className = 'password-toggle-button';
    togglePasswordButton2.type = 'button';
    togglePasswordButton2.addEventListener('click', function() {
        togglePasswordVisibility(passwordInput);
        togglePasswordVisibility(confirmPasswordInput);
    });

    const newPasswordButton = document.createElement('button');
    newPasswordButton.type = 'button';
    newPasswordButton.className = 'sqs-button-element--primary';
    newPasswordButton.style = "margin-top: 10px; margin-bottom: 10px; display: block; width: 100%"
    newPasswordButton.textContent = 'Submit new password';

    const returnMessage = document.createElement('div');
    returnMessage.id = 'returnMessage';
    returnMessage.style.color = '#FF6961';

    // cant click till populated and matched
    newPasswordButton.addEventListener('click', function() {
        let password = passwordInput.value;
        let confirmPassword = confirmPasswordInput.value;

        // Check if the email, password, and confirm password are provided
        const isPasswordValid = validatePassword(password)
        const isConfirmPasswordValid = confirmPassword === password;

        if (isPasswordValid && isConfirmPasswordValid) {
            // If all conditions are met, proceed to create the user
            submitNewPassword(email,otp,password);
        } else {
            returnMessage.innerHTML = "Please provide valid inputs";
        }
    });    

    const passwordContainer = document.createElement('div');
    passwordContainer.style.width = '100%'
    passwordContainer.appendChild(passwordInput);
    passwordContainer.appendChild(togglePasswordButton1); // Add toggle button
    passwordContainer.appendChild(passwordFeedback)
    passwordContainer.appendChild(document.createElement('br'));
    passwordContainer.appendChild(confirmPasswordInput);
    passwordContainer.appendChild(togglePasswordButton2); // Add toggle button
   

    resetForm.appendChild(passwordContainer);
    resetForm.appendChild(newPasswordButton);

    // Append elements to the popup container
    //popupContainer.appendChild(closeButton);
    popupContainer.appendChild(headlineSummary);
    popupContainer.appendChild(subtitle);
    popupContainer.appendChild(resetForm);
    popupContainer.append(returnMessage)
}

function submitOTP(email, otp) {
    const popupContent = document.getElementById('loginPlaceholder');
   //const popup = document.getElementById('popup');
    //const overlay = document.getElementById('overlay');
    const returnMessage = document.getElementById('returnMessage')
    var xhr = new XMLHttpRequest();

    //overlay.style.display = 'block';
    //popup.style.display = 'block';
    //popupContent.innerHTML = '<div class="loader" ></div>' 

    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // Handle the response from the server
            if (xhr.status == 200) {
                populateNewPasswordPage(email, otp);
                //populateNewPasswordPage(email, otp);
            } else if (xhr.status == 401) {
                returnMessage.innerHTML = 'Incorrect OTP'
                //popupContent.innerHTML = 'Incorrect OTP'
            } else if (xhr.status == 403) {
                //populateNewPasswordPage(email, otp);
                returnMessage.innerHTML = 'Your account has been blocked. Please reach out to hello@stubbenedgelabs.com to resolve this.';
                //popupContent.innerHTML = 'Your account has been blocked. Please reach out to hello@stubbenedgelabs.com to resolve this.';
            } else if (xhr.status >= 500) {
                returnMessage.innerHTML = 'We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
                //popupContent.innerHTML = 'We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            }
            else {
                returnMessage.innerHTML = 'We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
                //popupContent.innerHTML = 'We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            }
        } 
    }
    xhr.open("POST", "https://prospect-gateway-a9jtfdvq.nw.gateway.dev/15_m16h_07p_V4l1d", false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader('X-Prospekt', deviceFingerPrint);
    xhr.send(JSON.stringify({"email_address": email.toLowerCase(), "one_time_pin": otp, "pin_purpose": "password_reset"}));    
}


function logOutUser() {
    const xhr = new XMLHttpRequest();
    const popupContent = document.getElementById('loginPlaceholder');

    xhr.withCredentials = true;
    xhr.open('POST', 'https://prospect-gateway-a9jtfdvq.nw.gateway.dev/l06_y00z3r_0u7');
    xhr.setRequestHeader('X-Prospekt', deviceFingerPrint);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                window.location.href = "/login-user"               
            } else if (xhr.status == 401) {
                popupContent.innerHTML = '' //Clear any previous content
                popupContent.innerHTML = 'You are not authorised to perform this action.'; 
            } else if (xhr.status == 403) {
                popupContent.innerHTML = '' //Clear any previous content
                popupContent.innerHTML = 'Your account appears to have been blocked/frozen. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else if (xhr.status == 405) {
                popupContent.innerHTML = '' //Clear any previous content
                popupContent.innerHTML = 'Method not allowed. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else if (xhr.status == 415) {
                popupContent.innerHTML = '' //Clear any previous content
                popupContent.innerHTML = 'Unsupported media type. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else if (xhr.status >= 500) {
                popupContent.innerHTML = '' //Clear any previous content
                popupContent.innerHTML = 'We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else {
                popupContent.innerHTML = '';  //Clear any previous content
                popupContent.innerHTML = 'We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            }
        }  
    };
    xhr.send();
} 

function submitNewPassword(email, otp, password) {
    const popupContent = document.getElementById('loginPlaceholder');
    var xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // Handle the response from the server
            if (xhr.status == 200) {
                logOutUser()
                popupContent.innerHTML = ''; // Clear any previous content
                const redirectSignin = document.createElement('p');
                redirectSignin.innerHTML = "You have successfully reset your password. Please <a id='signupLink' href='/login-user' class='link-style'>Log in</a> here";
                popupContent.appendChild(redirectSignin)
            } else if (xhr.status == 401) {
                popupContent.innerHTML = '' //Clear any previous content
                popupContent.innerHTML = 'You are not authorised to perform this action.'; 
            } else if (xhr.status == 403) {
                popupContent.innerHTML = '' //Clear any previous content
                //popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'Your account appears to have been blocked/frozen. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else if (xhr.status == 405) {
                popupContent.innerHTML = '' //Clear any previous content
                //popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'Method not allowed. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else if (xhr.status == 415) {
                popupContent.innerHTML = '' //Clear any previous content
                //popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'Unsupported media type. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else if (xhr.status >= 500) {
                popupContent.innerHTML = '' //Clear any previous content
                //popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            } else {
                popupContent.innerHTML = '';  //Clear any previous content
                popupContent.appendChild(closeButton)
                popupContent.innerHTML = 'We have encountered an unexpected error. Please reach out to hello@stubbenedgelabs.com if the error persists.'; 
            }
        }
    }
    xhr.open("POST", "https://prospect-gateway-a9jtfdvq.nw.gateway.dev/ch4n63_3uz4_p455w0rd", false);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader('X-Prospekt', deviceFingerPrint);
    xhr.send(JSON.stringify({"one_time_pin":otp, "email_address":email.toLowerCase(),"new_password":password}));    
}

function populateOTP(email, resend=false) {
    const popupContainer = document.getElementById('loginPlaceholder')
    popupContainer.innerHTML='';

    const headlineSummary = document.createElement('h4');
    headlineSummary.textContent = "Provide OTP" 

    const subtitle = document.createElement('div');
    subtitle.style.display = 'block';
    if (resend==false) {
        subtitle.innerHTML = "Please enter the one-time pin sent to your email. This may take a moment to arrive."
    } else {
        subtitle.innerHTML = "We have sent you a new OTP. This may take a moment to arrive."
    }

     // User login form
    const otpForm = document.createElement('form');
    otpForm.className = "popup-form"

    const otpInput = document.createElement('input');
    otpInput.type = 'text';
    otpInput.style.width = '100%';
    otpInput.placeholder = 'OTP';
    otpInput.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.className = 'sqs-button-element--primary';
    submitButton.style.display = 'block';
    submitButton.style.width = '100%';
    submitButton.style.margin = '10px';
    submitButton.textContent = 'Submit';
    // cant click till populated and matched
    submitButton.addEventListener('click', function() {
        let otp = otpInput.value;
        submitOTP(email, otp);
    });

    const resendOTP = document.createElement('button');
    resendOTP.type = 'button';
    resendOTP.className = 'sqs-button-element--primary';
    resendOTP.style.display = 'block';
    resendOTP.style.width = '100%';
    resendOTP.style.margin = '10px';
    resendOTP.textContent = 'Resend OTP';
    // cant click till populated and matched
    resendOTP.addEventListener('click', async function() {
        popupContainer.innerHTML = '<div class="loader" ></div>' 
        await new Promise(r => setTimeout(r, 1000));
        resetPassword(email, resend=true);
    });

    otpForm.appendChild(otpInput);
    const buttonDiv = document.createElement('div')
    buttonDiv.appendChild(submitButton);
    buttonDiv.appendChild(resendOTP);

    const returnMessage = document.createElement('div');
    returnMessage.id = 'returnMessage';
    returnMessage.style.color = "#FF6961";
    
    otpForm.appendChild(buttonDiv);

    // Append elements to the popup container
    //popupContainer.appendChild(closeButton);
    popupContainer.appendChild(headlineSummary);
    popupContainer.appendChild(subtitle);
    popupContainer.appendChild(document.createElement('br'))
    popupContainer.appendChild(otpForm);
    popupContainer.appendChild(returnMessage)
}

function populateForgotPasswordPage() {
    const popupContainer = document.getElementById('loginPlaceholder')
    popupContainer.innerHTML=''

    const headlineSummary = document.createElement('h4');
    headlineSummary.textContent = "Reset password" 
    popupContainer.appendChild(headlineSummary);

    const subtitle = document.createElement('p');
    subtitle.innerHTML = 'If you have forgotten your password or would like to change it, you can reset it here.';
    popupContainer.appendChild(subtitle)

    const forgotForm = document.createElement('form');
    forgotForm.className = "popup-form"

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.style.width = '100%';
    emailInput.placeholder = 'Email';
    emailInput.required = true;

    const resetPasswordButton = document.createElement('button');
    resetPasswordButton.type = 'button';
    resetPasswordButton.className = 'sqs-button-element--secondary';
    resetPasswordButton.style.display = 'block';
    resetPasswordButton.style.width = '100%';
    resetPasswordButton.style.margin = '10px';
    resetPasswordButton.textContent = 'Reset password';
    resetPasswordButton.addEventListener('click', function() {
        let email = emailInput.value;
        resetPassword(email, resend=false);
    });
    
    forgotForm.appendChild(emailInput);
    popupContainer.appendChild(forgotForm)
    popupContainer.appendChild(resetPasswordButton);
}


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (!/\d/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]/.test(password)) {
        return false;
    }
    return true;
}