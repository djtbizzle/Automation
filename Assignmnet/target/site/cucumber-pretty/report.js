$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("home.feature");
formatter.feature({
  "line": 1,
  "name": "homeFeature",
  "description": "This feature deals with Home page related tests",
  "id": "homefeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 21409980100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "1 Sign up",
  "description": "",
  "id": "homefeature;1-sign-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I Navigate to the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am redirected to the register page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStepdef.iNavigateToTheHomePage()"
});
formatter.result({
  "duration": 4341100000,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepdef.iClickOnSignUpButton()"
});
formatter.result({
  "duration": 1456282900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"react-root\"]/div/div/div/main/div/div/div/div[1]/div/a[1]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-1DQBO4A\u0027, ip: \u002710.6.3.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HPUSER~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49890}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b53fcba65a9256c946f14660206dcecd\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"react-root\"]/div/div/div/main/div/div/div/div[1]/div/a[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat Pages.HomePage.ClickSignUp(HomePage.java:19)\r\n\tat Steps.HomeStepdef.iClickOnSignUpButton(HomeStepdef.java:23)\r\n\tat ✽.When I click on Sign up button(home.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomeStepdef.iAmRedirectedToTheRegisterPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2433162000,
  "status": "passed"
});
formatter.before({
  "duration": 5809872300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "2 Login",
  "description": "",
  "id": "homefeature;2-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I Navigate to the Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on the Login button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am redirected to the Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeStepdef.iNavigateToTheHomePage()"
});
formatter.result({
  "duration": 2550052200,
  "status": "passed"
});
formatter.match({
  "location": "HomeStepdef.iClickOnTheLoginButton()"
});
formatter.result({
  "duration": 29964200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"react-root\"]/div/div/div/main/div/div/div/div[1]/div/a[2]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-1DQBO4A\u0027, ip: \u002710.6.3.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HPUSER~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49932}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6e4d79e3cdab637ac60c9120e2000092\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"react-root\"]/div/div/div/main/div/div/div/div[1]/div/a[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat Pages.HomePage.ClickHomeLogin(HomePage.java:21)\r\n\tat Steps.HomeStepdef.iClickOnTheLoginButton(HomeStepdef.java:38)\r\n\tat ✽.When I click on the Login button(home.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomeStepdef.iAmRedirectedToTheLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 891328300,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "loginFeature",
  "description": "This feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6053627300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "1- login with correct username and password",
  "description": "",
  "id": "loginfeature;1--login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the username as \"toluchud@gmail.com\" and password as \"Wednesday_05G\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click login button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the user page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2363414000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "toluchud@gmail.com",
      "offset": 25
    },
    {
      "val": "Wednesday_05G",
      "offset": 62
    }
  ],
  "location": "LoginStepdefs.iEnterTheUsernameAsAndPasswordAs(String,String)"
});
formatter.result({
  "duration": 58983600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"react-root\"]/div/div/div[2]/main/div/div/div[1]/form/div/div[1]/label/div/div[2]/div/input\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-1DQBO4A\u0027, ip: \u002710.6.3.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HPUSER~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49966}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a24fda986db2b3c3a52ce696fac3ba3a\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"react-root\"]/div/div/div[2]/main/div/div/div[1]/form/div/div[1]/label/div/div[2]/div/input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat Pages.LoginPage.InputEmail(LoginPage.java:34)\r\n\tat Steps.LoginStepdefs.iEnterTheUsernameAsAndPasswordAs(LoginStepdefs.java:34)\r\n\tat ✽.And I enter the username as \"toluchud@gmail.com\" and password as \"Wednesday_05G\"(login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepdefs.iClickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdefs.iShouldSeeTheUserPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 825284100,
  "status": "passed"
});
formatter.before({
  "duration": 6156879100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "2- Register Via Login Page",
  "description": "",
  "id": "loginfeature;2--register-via-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on sign up button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I am redirected to Sign up page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepdefs.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2270494000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnSignUpButton()"
});
formatter.result({
  "duration": 53297300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"react-root\"]/div/div/div/main/div/div/div[1]/div[1]/div[2]/a[1]/div/span\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-1DQBO4A\u0027, ip: \u002710.6.3.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HPUSER~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:49999}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 323e15e4ab260072f5c038056ac4b82f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"react-root\"]/div/div/div/main/div/div/div[1]/div[1]/div[2]/a[1]/div/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat Pages.LoginPage.ClickSignUp(LoginPage.java:40)\r\n\tat Steps.LoginStepdefs.iClickOnSignUpButton(LoginStepdefs.java:59)\r\n\tat ✽.And I click on sign up button(login.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepdefs.iAmRedirectedToSignUpPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 798514000,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "registerFeature",
  "description": "This feature deals with user registration",
  "id": "registerfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5725621700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "1- Register a new user with email",
  "description": "",
  "id": "registerfeature;1--register-a-new-user-with-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the sign up page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter name as \"Tims1\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on use email",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter email as  \"djtbizzle@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select month as \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select day as \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select year as \"5\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on button Next",
  "keyword": "And "
});
formatter.match({
  "location": "RegStepdefs.iNavigateToTheSignUpPage()"
});
formatter.result({
  "duration": 3122456200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tims1",
      "offset": 17
    }
  ],
  "location": "RegStepdefs.iEnterNameAs(String)"
});
formatter.result({
  "duration": 39901500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"layers\"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[2]/label/div/div[2]/div/input\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-1DQBO4A\u0027, ip: \u002710.6.3.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HPUSER~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50034}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8bff7824f8e1e68933bf1b8cbd20839d\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"layers\"]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div[2]/label/div/div[2]/div/input}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat Pages.RegisterPage.InputName(RegisterPage.java:40)\r\n\tat Steps.RegStepdefs.iEnterNameAs(RegStepdefs.java:29)\r\n\tat ✽.When I enter name as \"Tims1\"(register.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RegStepdefs.iClickOnUseEmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "djtbizzle@gmail.com",
      "offset": 19
    }
  ],
  "location": "RegStepdefs.iEnterEmailAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "RegStepdefs.iSelectMonthAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "RegStepdefs.iSelectDayAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "RegStepdefs.iSelectYearAs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegStepdefs.iClickOnButtonNext()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 525130200,
  "status": "passed"
});
});