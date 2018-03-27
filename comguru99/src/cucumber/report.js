$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/regression.feature");
formatter.feature({
  "line": 1,
  "name": "Check Login functionalty",
  "description": "As a user\nI am on Login page\nSo i can login successfully",
  "id": "check-login-functionalty",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Flight Search",
  "description": "",
  "id": "check-login-functionalty;flight-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "as a User I am on Flight Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I select journey type \"\u003ctype\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select passengers \"\u003cpassengers\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i select  Departing From \"\u003cDeparting From\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Arriving In\u003e \"\u003cArriving In\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Service Class \"\u003cService Class\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can view \"Select flight page\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i click continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i should navigate to book flight page to get the ticket",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i enter customer firstname \"\u003cFirst Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "i enter customer lastname \"\u003cLast Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "i enter customer card number \"\u003cNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "i enter customer address \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "i enter customer city \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "i enter customer postal code \"\u003cPostal code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "i select customer country \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "i click on secure purchase",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i should navigate to \"Departing\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "check-login-functionalty;flight-search;",
  "rows": [
    {
      "cells": [
        "type",
        "passengers",
        "Departing From",
        "Arriving In",
        "Service Class",
        "First Name",
        "Last Name",
        "Number",
        "Address",
        "City",
        "Postal code",
        "Country"
      ],
      "line": 38,
      "id": "check-login-functionalty;flight-search;;1"
    },
    {
      "cells": [
        "Round Trip",
        "1",
        "London",
        "New York",
        "Economy class",
        "Rupal",
        "Patel",
        "8765",
        "merseywalk",
        "Northolt",
        "ub5 6th",
        "UNITED KINGDOM"
      ],
      "line": 39,
      "id": "check-login-functionalty;flight-search;;2"
    },
    {
      "cells": [
        "One Way",
        "1",
        "London",
        "Paris",
        "Business class",
        "Sudeep",
        "Patel",
        "1234",
        "southesk",
        "Eastham",
        "e7 8ll",
        "UNITED KINGDOM"
      ],
      "line": 40,
      "id": "check-login-functionalty;flight-search;;3"
    },
    {
      "cells": [
        "One Way",
        "2",
        "London",
        "Paris",
        "Business class",
        "Aakash",
        "Patel",
        "5649",
        "southesk",
        "Eastham",
        "e7 8ll",
        "UNITED KINGDOM"
      ],
      "line": 41,
      "id": "check-login-functionalty;flight-search;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21393520467,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Flight Search",
  "description": "",
  "id": "check-login-functionalty;flight-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "as a User I am on Flight Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I select journey type \"Round Trip\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select passengers \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i select  Departing From \"London\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Arriving In\u003e \"New York\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Service Class \"Economy class\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can view \"Select flight page\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i click continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i should navigate to book flight page to get the ticket",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i enter customer firstname \"Rupal\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "i enter customer lastname \"Patel\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "i enter customer card number \"8765\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "i enter customer address \"merseywalk\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "i enter customer city \"Northolt\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "i enter customer postal code \"ub5 6th\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "i select customer country \"UNITED KINGDOM\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "i click on secure purchase",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i should navigate to \"Departing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.as_a_User_I_am_on_Flight_Search_Page()"
});
formatter.result({
  "duration": 127698719945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Round Trip",
      "offset": 23
    }
  ],
  "location": "StepDef.i_select_journey_type(String)"
});
formatter.result({
  "duration": 4063323697,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.37.543627 (63642262d9fb93fb4ab52398be4286d844092a5e),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4.01 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027RUPAL\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.543627 (63642262d9fb93fb4ab52398be4286d844092a5e), userDataDir\u003dC:\\Users\\RUPALP~1\\AppData\\Local\\Temp\\scoped_dir4808_16623}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 7b9cc4a823a4bb72c2229ad0f18c044b\n*** Element info: {Using\u003dname, value\u003dtripType}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:388)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByName(RemoteWebDriver.java:469)\r\n\tat org.openqa.selenium.By$ByName.findElements(By.java:295)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:351)\r\n\tat StepDef.i_select_journey_type(StepDef.java:96)\r\n\tat ✽.When I select journey type \"Round Trip\"(src/test/resources/regression.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "StepDef.i_select_passengers(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 26
    }
  ],
  "location": "StepDef.i_select_Departing_From(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 23
    }
  ],
  "location": "StepDef.i_select_Arriving_In(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Economy class",
      "offset": 24
    }
  ],
  "location": "StepDef.i_select_Service_Class(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_click_on_CONTINUE()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select flight page",
      "offset": 12
    }
  ],
  "location": "StepDef.i_can_view(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_click_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_should_navigate_to_book_flight_page_to_get_the_ticket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rupal",
      "offset": 28
    }
  ],
  "location": "StepDef.i_enter_customer_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 27
    }
  ],
  "location": "StepDef.i_enter_customer_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "8765",
      "offset": 30
    }
  ],
  "location": "StepDef.i_enter_customer_card_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "merseywalk",
      "offset": 26
    }
  ],
  "location": "StepDef.i_enter_customer_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Northolt",
      "offset": 23
    }
  ],
  "location": "StepDef.i_enter_customer_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ub5 6th",
      "offset": 30
    }
  ],
  "location": "StepDef.i_enter_customer_postal_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UNITED KINGDOM",
      "offset": 27
    }
  ],
  "location": "StepDef.i_select_customer_country(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_click_on_secure_purchase()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Departing",
      "offset": 22
    }
  ],
  "location": "StepDef.i_should_navigate_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1984783018,
  "status": "passed"
});
formatter.before({
  "duration": 6446650473,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Flight Search",
  "description": "",
  "id": "check-login-functionalty;flight-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "as a User I am on Flight Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I select journey type \"One Way\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select passengers \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i select  Departing From \"London\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Arriving In\u003e \"Paris\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Service Class \"Business class\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can view \"Select flight page\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i click continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i should navigate to book flight page to get the ticket",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i enter customer firstname \"Sudeep\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "i enter customer lastname \"Patel\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "i enter customer card number \"1234\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "i enter customer address \"southesk\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "i enter customer city \"Eastham\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "i enter customer postal code \"e7 8ll\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "i select customer country \"UNITED KINGDOM\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "i click on secure purchase",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i should navigate to \"Departing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.as_a_User_I_am_on_Flight_Search_Page()"
});
formatter.result({
  "duration": 3373356027,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.37.543627 (63642262d9fb93fb4ab52398be4286d844092a5e),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3.37 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027RUPAL\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.37.543627 (63642262d9fb93fb4ab52398be4286d844092a5e), userDataDir\u003dC:\\Users\\RUPALP~1\\AppData\\Local\\Temp\\scoped_dir9292_30248}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d65.0.3325.181, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 8f9c90ae4b725f1f093215c1428827d7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:316)\r\n\tat StepDef.as_a_User_I_am_on_Flight_Search_Page(StepDef.java:84)\r\n\tat ✽.Given as a User I am on Flight Search Page(src/test/resources/regression.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "One Way",
      "offset": 23
    }
  ],
  "location": "StepDef.i_select_journey_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "StepDef.i_select_passengers(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 26
    }
  ],
  "location": "StepDef.i_select_Departing_From(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Paris",
      "offset": 23
    }
  ],
  "location": "StepDef.i_select_Arriving_In(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Business class",
      "offset": 24
    }
  ],
  "location": "StepDef.i_select_Service_Class(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_click_on_CONTINUE()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select flight page",
      "offset": 12
    }
  ],
  "location": "StepDef.i_can_view(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_click_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_should_navigate_to_book_flight_page_to_get_the_ticket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sudeep",
      "offset": 28
    }
  ],
  "location": "StepDef.i_enter_customer_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 27
    }
  ],
  "location": "StepDef.i_enter_customer_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 30
    }
  ],
  "location": "StepDef.i_enter_customer_card_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "southesk",
      "offset": 26
    }
  ],
  "location": "StepDef.i_enter_customer_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Eastham",
      "offset": 23
    }
  ],
  "location": "StepDef.i_enter_customer_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "e7 8ll",
      "offset": 30
    }
  ],
  "location": "StepDef.i_enter_customer_postal_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UNITED KINGDOM",
      "offset": 27
    }
  ],
  "location": "StepDef.i_select_customer_country(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_click_on_secure_purchase()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Departing",
      "offset": 22
    }
  ],
  "location": "StepDef.i_should_navigate_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1134767337,
  "status": "passed"
});
formatter.before({
  "duration": 7321543707,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created exception\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d65.0.3325.181)\n  (Driver info: chromedriver\u003d2.37.543627 (63642262d9fb93fb4ab52398be4286d844092a5e),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 5.97 seconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027RUPAL\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat StepDef.startBrowser(StepDef.java:34)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 41,
  "name": "Flight Search",
  "description": "",
  "id": "check-login-functionalty;flight-search;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "as a User I am on Flight Search Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I select journey type \"One Way\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select passengers \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "i select  Departing From \"London\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select Arriving In\u003e \"Paris\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Service Class \"Business class\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on CONTINUE",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can view \"Select flight page\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i click continue",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i should navigate to book flight page to get the ticket",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i enter customer firstname \"Aakash\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "i enter customer lastname \"Patel\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "i enter customer card number \"5649\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "i enter customer address \"southesk\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "i enter customer city \"Eastham\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "i enter customer postal code \"e7 8ll\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "i select customer country \"UNITED KINGDOM\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "i click on secure purchase",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "i should navigate to \"Departing\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.as_a_User_I_am_on_Flight_Search_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "One Way",
      "offset": 23
    }
  ],
  "location": "StepDef.i_select_journey_type(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "StepDef.i_select_passengers(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 26
    }
  ],
  "location": "StepDef.i_select_Departing_From(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Paris",
      "offset": 23
    }
  ],
  "location": "StepDef.i_select_Arriving_In(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Business class",
      "offset": 24
    }
  ],
  "location": "StepDef.i_select_Service_Class(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_click_on_CONTINUE()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Select flight page",
      "offset": 12
    }
  ],
  "location": "StepDef.i_can_view(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_click_continue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_should_navigate_to_book_flight_page_to_get_the_ticket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Aakash",
      "offset": 28
    }
  ],
  "location": "StepDef.i_enter_customer_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 27
    }
  ],
  "location": "StepDef.i_enter_customer_lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5649",
      "offset": 30
    }
  ],
  "location": "StepDef.i_enter_customer_card_number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "southesk",
      "offset": 26
    }
  ],
  "location": "StepDef.i_enter_customer_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Eastham",
      "offset": 23
    }
  ],
  "location": "StepDef.i_enter_customer_city(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "e7 8ll",
      "offset": 30
    }
  ],
  "location": "StepDef.i_enter_customer_postal_code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UNITED KINGDOM",
      "offset": 27
    }
  ],
  "location": "StepDef.i_select_customer_country(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDef.i_click_on_secure_purchase()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Departing",
      "offset": 22
    }
  ],
  "location": "StepDef.i_should_navigate_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 331275,
  "status": "passed"
});
});