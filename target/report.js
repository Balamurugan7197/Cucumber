$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/AddCustomers.feature");
formatter.feature({
  "name": "AddCustomers flow",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should be in the Telecom home page.",
  "keyword": "Given "
});
formatter.match({
  "location": "Sampleframe.user_should_be_in_the_Telecom_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Addtariff plan button",
  "keyword": "And "
});
formatter.match({
  "location": "Sampleframe.user_click_on_Addtariff_plan_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-G1965AM\u0027, ip: \u0027192.168.43.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.75, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Bala\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59672}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e1b153a5cffe16dd602fd500641a505e\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cucumberframe.Sampleframe.user_click_on_Addtariff_plan_button(Sampleframe.java:32)\r\n\tat ✽.User click on Addtariff plan button(src/test/resources/Features/AddCustomers.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters the details in the particular fields",
  "rows": [
    {
      "cells": [
        "5000",
        "500",
        "3000",
        "300",
        "1",
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "2000",
        "400",
        "4000",
        "200",
        "2",
        "2",
        "2"
      ]
    },
    {
      "cells": [
        "6000",
        "300",
        "5000",
        "250",
        "3",
        "3",
        "3"
      ]
    },
    {
      "cells": [
        "3000",
        "600",
        "1000",
        "350",
        "4",
        "4",
        "4"
      ]
    },
    {
      "cells": [
        "4000",
        "200",
        "2000",
        "400",
        "5",
        "5",
        "5"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Sampleframe.user_enters_the_details_in_the_particular_fields(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Sampleframe.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed successfully added tariff plans",
  "keyword": "Then "
});
formatter.match({
  "location": "Sampleframe.user_should_be_displayed_successfully_added_tariff_plans()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should be in the Telecom home page.",
  "keyword": "Given "
});
formatter.match({
  "location": "Sampleframe.user_should_be_in_the_Telecom_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d77.0.3865.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-G1965AM\u0027, ip: \u0027192.168.43.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.75, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Bala\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59688}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e7738db3da29f1f4bbd5d6cc19511682\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.cucumberframe.Sampleframe.user_should_be_in_the_Telecom_home_page(Sampleframe.java:27)\r\n\tat ✽.User should be in the Telecom home page.(src/test/resources/Features/AddCustomers.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Addtariff plan button",
  "keyword": "And "
});
formatter.match({
  "location": "Sampleframe.user_click_on_Addtariff_plan_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the detail in the particular field",
  "rows": [
    {
      "cells": [
        "MonRen",
        "LM",
        "IM",
        "SMS",
        "MC",
        "IC",
        "SC"
      ]
    },
    {
      "cells": [
        "2000",
        "400",
        "4000",
        "200",
        "2",
        "2",
        "2"
      ]
    },
    {
      "cells": [
        "6000",
        "300",
        "5000",
        "250",
        "3",
        "3",
        "3"
      ]
    },
    {
      "cells": [
        "3000",
        "600",
        "1000",
        "350",
        "4",
        "4",
        "4"
      ]
    },
    {
      "cells": [
        "4000",
        "200",
        "2000",
        "400",
        "5",
        "5",
        "5"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Sampleframe.user_enters_the_detail_in_the_particular_field(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Sampleframe.user_clicks_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed successfully added tariff plans",
  "keyword": "Then "
});
formatter.match({
  "location": "Sampleframe.user_should_be_displayed_successfully_added_tariff_plans()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should be in the Telecom home pages.",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on Addtariff plan button",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the details in the particular fields.\"\u003cMonRen\u003e\",\"\u003cLM\u003e\",\"\u003cIM\u003e\",\"\u003cSMS\u003e\",\"\u003cMC\u003e\",\"\u003cIC\u003e\",\"\u003cSC\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the submit button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be displayed successfully added tariff plan",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MonRen",
        "LM",
        "IM",
        "SMS",
        "MC",
        "IC",
        "SC"
      ]
    },
    {
      "cells": [
        "2000",
        "400",
        "4000",
        "200",
        "2",
        "2",
        "2"
      ]
    },
    {
      "cells": [
        "6000",
        "300",
        "5000",
        "250",
        "3",
        "3",
        "3"
      ]
    },
    {
      "cells": [
        "3000",
        "600",
        "1000",
        "350",
        "4",
        "4",
        "4"
      ]
    },
    {
      "cells": [
        "4000",
        "200",
        "2000",
        "400",
        "5",
        "5",
        "5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should be in the Telecom home pages.",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutline.user_should_be_in_the_Telecom_home_pages()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d77.0.3865.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-G1965AM\u0027, ip: \u0027192.168.43.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.75, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Bala\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59704}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: cbc7d1faa1b5b5149c1b5e56a2fa6dd9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.cucumberframe.ScenarioOutline.user_should_be_in_the_Telecom_home_pages(ScenarioOutline.java:23)\r\n\tat ✽.User should be in the Telecom home pages.(src/test/resources/Features/AddCustomers.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on Addtariff plan button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.user_clicks_on_Addtariff_plan_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the details in the particular fields.\"2000\",\"400\",\"4000\",\"200\",\"2\",\"2\",\"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutline.user_enters_the_details_in_the_particular_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.user_clicks_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed successfully added tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline.user_should_be_displayed_successfully_added_tariff_plan()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should be in the Telecom home pages.",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutline.user_should_be_in_the_Telecom_home_pages()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Addtariff plan button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.user_clicks_on_Addtariff_plan_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-G1965AM\u0027, ip: \u0027192.168.43.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.75, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Bala\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59719}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 80085c6f471159688b4d819feb371e35\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cucumberframe.ScenarioOutline.user_clicks_on_Addtariff_plan_button(ScenarioOutline.java:28)\r\n\tat ✽.User clicks on Addtariff plan button(src/test/resources/Features/AddCustomers.feature:37)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters the details in the particular fields.\"6000\",\"300\",\"5000\",\"250\",\"3\",\"3\",\"3\"",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutline.user_enters_the_details_in_the_particular_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.user_clicks_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed successfully added tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline.user_should_be_displayed_successfully_added_tariff_plan()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should be in the Telecom home pages.",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutline.user_should_be_in_the_Telecom_home_pages()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d77.0.3865.75)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-G1965AM\u0027, ip: \u0027192.168.43.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.75, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Bala\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59735}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2cee6efc6796b3834141ab7f4a847c6d\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.cucumberframe.ScenarioOutline.user_should_be_in_the_Telecom_home_pages(ScenarioOutline.java:23)\r\n\tat ✽.User should be in the Telecom home pages.(src/test/resources/Features/AddCustomers.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on Addtariff plan button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.user_clicks_on_Addtariff_plan_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the details in the particular fields.\"3000\",\"600\",\"1000\",\"350\",\"4\",\"4\",\"4\"",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutline.user_enters_the_details_in_the_particular_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.user_clicks_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed successfully added tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline.user_should_be_displayed_successfully_added_tariff_plan()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User should be in the Telecom home pages.",
  "keyword": "Given "
});
formatter.match({
  "location": "ScenarioOutline.user_should_be_in_the_Telecom_home_pages()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Addtariff plan button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.user_clicks_on_Addtariff_plan_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Add Tariff Plan\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.75)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-G1965AM\u0027, ip: \u0027192.168.43.46\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.75, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\Bala\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:59749}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 05529cc1735dd06fbcd820d5a1156b94\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Add Tariff Plan\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.cucumberframe.ScenarioOutline.user_clicks_on_Addtariff_plan_button(ScenarioOutline.java:28)\r\n\tat ✽.User clicks on Addtariff plan button(src/test/resources/Features/AddCustomers.feature:37)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters the details in the particular fields.\"4000\",\"200\",\"2000\",\"400\",\"5\",\"5\",\"5\"",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutline.user_enters_the_details_in_the_particular_fields(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutline.user_clicks_on_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be displayed successfully added tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutline.user_should_be_displayed_successfully_added_tariff_plan()"
});
formatter.result({
  "status": "skipped"
});
});