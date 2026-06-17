// ==UserScript==
// @name        File Approval + Report Queue Buttons
// @namespace   Why is this an option?
// @icon
// @version     1.1
//
// @match       https://soyjak.st/*
// @grant       none
//
// @author      Glisterald/Wow
// @description Adds quick and easy ways to get to File Approval/Report Queue on the boardlist. Also adds a /j/ button.
// ==/UserScript==
const approvalButton = // use const when (You) know the value won't be changed, good for functions
      document.createElement("a") // needs to be a because the "a" tag in html creates links that connects pages to other shit
      approvalButton.innerText = "approval" // name of your button, only modifies visible text instead of full HTML markup and thus poses less of a security risk
      approvalButton.setAttribute("href", location.origin + "/mod.php?/file_approval") // sets attribute, "href" makes it a link, "location.origin" is the base url (in this case, soyjak.st), and the plus adds on whatever (You) want it to

const queueButton =
      document.createElement("a")
      queueButton.innerText = "reports"
      queueButton.setAttribute("href", location.origin + "/mod.php?/reports")

const jannyButton =
      document.createElement("a")
      jannyButton.innerText = "j"
      jannyButton.setAttribute("href", location.origin + "/mod.php?/j/index.html")


const span =
      document.querySelector("div.boardlist:nth-child(1) > span:nth-child(1)") // finds first element that matches this selector (in this case the first span element when div is the parent)
      span.insertBefore(approvalButton, span.lastChild) // inserts the button before spans last child
      span.insertBefore(new Text(" / "), approvalButton) // inserts divider before button
      // reddit space for readability
      span.insertBefore(queueButton, span.lastChild)
      span.insertBefore(new Text(" / "), queueButton)
      // reddit space for readability
      span.insertBefore(jannyButton, span.lastChild)
      span.insertBefore(new Text(" / "), jannyButton)

//JS is a "gay language" apparently, but I'll learn it anyway.