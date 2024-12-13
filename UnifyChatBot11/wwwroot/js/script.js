function LoadsignUpForm() {
}
function openDropUpMenu() {
    let dropdownMenu = document.getElementById("nb-dropdown-menu");
    let howYouHeard = document.getElementById("how-you-heard");
    dropdownMenu.style.visibility = "visible";
    howYouHeard.setAttribute("onclick", "closeDropUpMenu()");
}
function closeDropUpMenu() {
    let dropdownMenu = document.getElementById("nb-dropdown-menu");
    let howYouHeard = document.getElementById("how-you-heard");
    dropdownMenu.style.visibility = "hidden";
    howYouHeard.setAttribute("onclick", "openDropUpMenu()");
}
function generateBotResponse(response) {
    let chat = document.getElementById("chat");
chat.innerHTML += `<section class="message">

        <section class="pfp">
            <img src="https://i.ibb.co/7Vyf0Sk/image.png" alt="image" border="0">
        </section>
<section class="content">
    <h1>Unify Bot</h1>
<p>${response}</p>
</section>`;

}

// function generateBotResponse() {
//     let chat = document.getElementById("chat");
//     let message = document.createElement("section")
//     message.setAttribute("class", "message");
//     chat.appendChild(message)
//     let pfp = document.createElement("section")
//     pfp.setAttribute("class", "pfp");
//     message.appendChild(pfp)
//     let botImage = document.createElement("img")
//     botImage.setAttribute("src", "https://i.ibb.co/7Vyf0Sk/image.png");
//     pfp.appendChild(botImage)
//     let content = document.createElement("section")
//     content.setAttribute("class", "content");
//     message.appendChild(content)
//     let h1 = document.createElement("h1")
//     h1.innerHTML = "Unify Bot";
//     content.appendChild(h1)
//     let p = document.createElement("p")
//     content.appendChild(p)

// }





var checkChangesInEditableDropdown = false;
function foundChanges(action) {
    if (action) {
        document.querySelector(".save-changes").querySelector("span").setAttribute("class", "Clickable")
    }
    else {
        document.querySelector(".save-changes").querySelector("span").setAttribute("class", "Not-Clickable")

    }
}

function profileDropDown(action) {
    if (action) {
        document.querySelector(".accountDetails").style.height = "auto";
        setTimeout(function () {
            document.querySelector(".accountDetails").style.overflow = "visible";
        }, 400)
        document.querySelector(".blur").style.height = "100vh";
        document.querySelector(".blur").style.opacity = "0.2";
        document.querySelector(".close-sidebar").setAttribute("onclick", "profileDropDown(false)")
    }
    else {

        document.querySelector(".accountDetails").style.overflow = "hidden";
        document.querySelector(".accountDetails").style.height = "0";
        document.querySelector(".close-sidebar").setAttribute("onclick", "profileDropDown(true)")
        document.querySelector(".account-editable-details").style.height = "0";
        document.querySelector(".edit-details-btn").innerHTML = ` <i class="fa-regular fa-pen-to-square"></i> Edit`;
        document.querySelector(".edit-details-btn").setAttribute("onclick", "editableAccountDetailsDropdown(true)");
        setTimeout(function () {

            document.querySelector(".blur").style.opacity = "0";
            document.querySelector(".blur").style.height = "0";
        }, 400)

    }
}


function editableAccountDetailsDropdown(action) {
    if (action) {
        document.querySelector(".account-editable-details").style.height = "auto";
        checkChangesInEditableDropdown = true;

        if (checkChangesInEditableDropdown) {
            function checkChanges() {
                if (document.getElementById("FirstName").value.trim() != "@user.FirstName"
                    || document.getElementById("MiddleName").value.trim() != "@user.MiddleName"
                    || document.getElementById("LastName").value.trim() != "@user.LastName"
                    || pusherElement.clientWidth != (limitForBack)) {
                    foundChanges(true);
                }
                else {
                    foundChanges(false);

                }
                requestAnimationFrame(checkChanges);
            }
            checkChanges();
        }

        document.querySelector(".edit-details-btn").innerHTML = ` <i class="fa-solid fa-xmark"></i> Menu`;
        document.querySelector(".edit-details-btn").setAttribute("onclick", "editableAccountDetailsDropdown(false)");
    }
    else {
        checkChangesInEditableDropdown = false;

        document.querySelector(".account-editable-details").style.height = "0";
        document.querySelector(".edit-details-btn").innerHTML = ` <i class="fa-regular fa-pen-to-square"></i> Edit`;
        document.querySelector(".edit-details-btn").setAttribute("onclick", "editableAccountDetailsDropdown(true)");
    }
}



var pusherElement = document.querySelector(".pusher");
let countOfElementsInPfpSlider = document.querySelectorAll(".pfp-element").length;
let singleWidth = document.querySelector(".pfp-element").clientWidth;
let pfpSliderTotalWidth = singleWidth * countOfElementsInPfpSlider;
let pfpSliderTotalWidthSubtractByElementToShow = pfpSliderTotalWidth - singleWidth;
pusherElement.style.width = pfpSliderTotalWidthSubtractByElementToShow + 'px';
let mainSliderWidth = pusherElement.clientWidth + singleWidth;
document.querySelector(".PFPs-slider").style.width = mainSliderWidth + 'px';
document.querySelector(".PFPs-slider").style.translate = `-${pusherElement.clientWidth}px`;
let limitForBack = pusherElement.clientWidth;

let pfpElement0 = pusherElement.clientWidth;
let pfpElement1 = (pusherElement.clientWidth - singleWidth);
let pfpElement2 = (pusherElement.clientWidth - (singleWidth * 2));
let pfpElement3 = (pusherElement.clientWidth - (singleWidth * 3));
let pfpElement4 = (pusherElement.clientWidth - (singleWidth * 4));
let pfpElement5 = (pusherElement.clientWidth - (singleWidth * 5));
let pfpElement6 = (pusherElement.clientWidth - (singleWidth * 5));
let pfpElement7 = (pusherElement.clientWidth - (singleWidth * 6));

function sliderMove(action) {
    if (action == "next") {
        foundChanges(true)
        if (pusherElement.clientWidth == singleWidth) {
            console.log("STOP")
            let eightCutOff = pusherElement.clientWidth + 8;
            console.log(pusherElement.clientWidth)
            pusherElement.style.width = eightCutOff + 'px';
            console.log(pusherElement.clientWidth)
            document.querySelector(".next").setAttribute("onclick", "sliderMove('0')")
        }
        document.querySelector(".back").setAttribute("onclick", "sliderMove('back')")
        console.log("p" + pfpSliderTotalWidthSubtractByElementToShow)
        pfpSliderTotalWidthSubtractByElementToShow -= (singleWidth);
        pusherElement.style.width = pfpSliderTotalWidthSubtractByElementToShow + 'px';
        console.log("p" + pfpSliderTotalWidth)
    }
    else if (action == "back") {
        let makeChanges = true;
        if (pusherElement.clientWidth == (limitForBack - singleWidth)) {
            foundChanges(false)

        }
        if (pusherElement.clientWidth == limitForBack) {
            document.querySelector(".back").setAttribute("onclick", "sliderMove('0')")
            makeChanges = false;
        }
        if (makeChanges) {

            document.querySelector(".next").setAttribute("onclick", "sliderMove('next')")
            console.log("p" + pfpSliderTotalWidthSubtractByElementToShow)
            pfpSliderTotalWidthSubtractByElementToShow += singleWidth;
            pusherElement.style.width = pfpSliderTotalWidthSubtractByElementToShow + 'px';
            console.log("p" + pfpSliderTotalWidthSubtractByElementToShow)
        }
    }
    else {

    }

}


var autoSaveOnAndOff = true;
function toggleOnAndOff(turnOn) {
    if (turnOn) {
        autoSaveOnAndOff = true;
        document.querySelector(".switch-ball").style.translate = "2vw 0";
        document.querySelector(".switch-ball").querySelector("h1").innerHTML = "ON";
        document.querySelector(".toggle-button").setAttribute("onclick", "toggleOnAndOff(false)")
    }
    else {
        autoSaveOnAndOff = false;
        document.querySelector(".switch-ball").style.translate = "0vw 0";
        document.querySelector(".switch-ball").querySelector("h1").innerHTML = "OFF";
        document.querySelector(".toggle-button").setAttribute("onclick", "toggleOnAndOff(true)")

    }
} // have to check this in running mode
// save chat ka function likhna hai start sa and controller bana hai

var messageLimit = (@MessageLimit.Limit / 2);

function deleteHistory(id) {
    console.log("Gen0")
    let chatHistory = document.getElementsByClassName("chat-history");
    let myChat = document.getElementsByClassName("my-chat");
    for (let i = 0; i < myChat.length; i++) {
        myChat[i].style.display = "none";
        if (myChat[i].id == id) {
            console.log("Id 1: " + id);
            console.log("Id 2: " + myChat[i].id);
            // yaha ajax likhna hai or controller banana hai jo history delete karre ga
            let userMessages = Array.from(myChat[i].querySelectorAll("p")).map(msg => msg.innerText)
            console.log(userMessages);
            $.ajax({
                url: `/Home/DeleteHistory`,
                type: "POST",
                data: {
                    talk: userMessages
                },
                success: function (response) {
                    if (response.delete200 == "true") {

                        Array.from(chatHistory).forEach(element => {
                            if (element.id == id) {
                                element.remove();
                            }
                        })
                        myChat[i].remove();
                        document.getElementById("chatsForHistory").style.display = "none";

                    }
                }
            })
        }

    }
}

function gotJson(response) {
    console.log("The json: ")
    console.log(response)

    if (response.repeatedMessages != "true") {
        // have to make scale 0 to 1 animation on history create for suddle effect

        // console.log(response.history[0][5])
        for (let index = 0; index < response.history.length; index++) {
            let chatSection = [];
            let sectionLength = response.history[index].length;
            let headingIndex = sectionLength - 2;
            let heading = response.history[index][headingIndex];
            let datetimeIndex = sectionLength - 1;
            let datetime = response.history[index][datetimeIndex];
            let sidebar = document.getElementById("chatHistoryContainer");
            let chatHistory = document.createElement("section");
            chatHistory.className = "chat-history";
            chatHistory.id = idForHistory;
            idForHistory++
            chatHistory.setAttribute("onclick", "loadChats(this.id)")
            sidebar.appendChild(chatHistory);
            let historyHeading = document.createElement("section");
            historyHeading.className = "history-heading";
            chatHistory.appendChild(historyHeading);
            let h1 = document.createElement("h1");
            h1.innerText = heading;
            historyHeading.appendChild(h1);
            let chatHistoryDatetime = document.createElement("section");
            chatHistoryDatetime.className = "chat-history-datetime";
            chatHistory.appendChild(chatHistoryDatetime);
            let strong = document.createElement("strong");
            strong.innerText = datetime;
            chatHistoryDatetime.appendChild(strong);
            let i = document.createElement("i");
            i.className = "fa-solid fa-trash";
            i.id = chatHistory.id;
            i.setAttribute("onclick", "deleteHistory(this.id)")
            chatHistoryDatetime.appendChild(i);
            let myChat = document.createElement("section");
            myChat.className = "my-chat";
            myChat.id = chatHistory.id;
            document.getElementById("chatsForHistory").appendChild(myChat);
            console.log("Loading chat")
            // base.style.display = "block";
            // base.querySelectorAll("section").forEach(section => section.remove())
            myChat.querySelectorAll("section").forEach((section) => section.remove())

            let continueIndex = 0;
            for (let k = 0; k < (response.history[index].length - 1); k += 1) {

                if (response.history[index][continueIndex] == "@user.UserUniqueId") {
                    break;
                }
                if (response.history[index][continueIndex] === undefined) {
                    continue;
                }

                myChat.innerHTML += `<section class="message userMessage">
            
                                                                                                                                      <section class="pfp">
                                                                                                                                          <img src="https://cdn-icons-png.flaticon.com/512/758/758771.png" alt="image" border="0">
                                                                                                                                          </section>
                                                                                                                                              <section class="content">
                                                                                                                                                  <h1>User</h1>
                                                                                                                                                  <p>${response.history[index][continueIndex]}</p>
                                                                                                                                                  </section>`;
                continueIndex += 1;
                myChat.innerHTML += `<section class="message">
            
                                                                                                                                                  <section class="pfp">
                                                                                                                                                      <img src="https://img.freepik.com/premium-vector/circuit-board-icon_501557-617.jpg" alt="image" border="0">
                                                                                                                                                      </section>
                                                                                                                                                      <section class="content">
                                                                                                                                                          <h1>Unify Bot</h1>
                                                                                                                                                          <p>${response.history[index][continueIndex]}</p>
                                                                                                                                          </section>`;
                continueIndex += 1;
            }
            myChat.style.display = "none";
            chatHistory.style.animation = "historyPopUp 1s";
        }

    }

}
function gotJsonNotNormal(response) {
    console.log("The json: ")
    console.log(response)

    if (response.value.repeatedMessages != "true") {
        // have to make scale 0 to 1 animation on history create for suddle effect

        // console.log(response.value.history[0][5])
        for (let index = 0; index < response.value.history.length; index++) {
            let chatSection = [];
            let sectionLength = response.value.history[index].length;
            let headingIndex = sectionLength - 2;
            let heading = response.value.history[index][headingIndex];
            let datetimeIndex = sectionLength - 1;
            let datetime = response.value.history[index][datetimeIndex];
            let sidebar = document.getElementById("chatHistoryContainer");
            let chatHistory = document.createElement("section");
            chatHistory.className = "chat-history";
            chatHistory.id = idForHistory;
            idForHistory++
            chatHistory.setAttribute("onclick", "loadChats(this.id)")
            sidebar.appendChild(chatHistory);
            let historyHeading = document.createElement("section");
            historyHeading.className = "history-heading";
            chatHistory.appendChild(historyHeading);
            let h1 = document.createElement("h1");
            h1.innerText = heading;
            historyHeading.appendChild(h1);
            let chatHistoryDatetime = document.createElement("section");
            chatHistoryDatetime.className = "chat-history-datetime";
            chatHistory.appendChild(chatHistoryDatetime);
            let strong = document.createElement("strong");
            strong.innerText = datetime;
            chatHistoryDatetime.appendChild(strong);
            let i = document.createElement("i");
            i.className = "fa-solid fa-trash";
            i.id = chatHistory.id;
            i.setAttribute("onclick", "deleteHistory(this.id)")
            chatHistoryDatetime.appendChild(i);
            let myChat = document.createElement("section");
            myChat.className = "my-chat";
            myChat.id = chatHistory.id;
            document.getElementById("chatsForHistory").appendChild(myChat);
            console.log("Loading chat")
            // base.style.display = "block";
            // base.querySelectorAll("section").forEach(section => section.remove())
            myChat.querySelectorAll("section").forEach((section) => section.remove())

            let continueIndex = 0;
            for (let k = 0; k < (response.value.history[index].length - 1); k += 1) {

                if (response.value.history[index][continueIndex] == "@user.UserUniqueId") {
                    break;
                }
                if (response.value.history[index][continueIndex] === undefined) {
                    continue;
                }

                myChat.innerHTML += `<section class="message userMessage">
            
                                                                                                                                      <section class="pfp">
                                                                                                                                          <img src="https://cdn-icons-png.flaticon.com/512/758/758771.png" alt="image" border="0">
                                                                                                                                          </section>
                                                                                                                                              <section class="content">
                                                                                                                                                  <h1>User</h1>
                                                                                                                                                  <p>${response.value.history[index][continueIndex]}</p>
                                                                                                                                                  </section>`;
                continueIndex += 1;
                myChat.innerHTML += `<section class="message">
            
                                                                                                                                                  <section class="pfp">
                                                                                                                                                      <img src="https://img.freepik.com/premium-vector/circuit-board-icon_501557-617.jpg" alt="image" border="0">
                                                                                                                                                      </section>
                                                                                                                                                      <section class="content">
                                                                                                                                                          <h1>Unify Bot</h1>
                                                                                                                                                          <p>${response.value.history[index][continueIndex]}</p>
                                                                                                                                          </section>`;
                continueIndex += 1;
            }
            myChat.style.display = "none";
            chatHistory.style.animation = "historyPopUp 1s";
        }

    }

}

function saveChat() {
    let talk = [];
    let allUserMsg = document.getElementsByClassName("message");

    const messages = document.querySelectorAll(".chat .message:not(.chatsForHistory .message)");
    messages.forEach(msg => {
        talk.push(msg.querySelector("p").innerHTML);
    });



    // Array.from(allUserMsg).forEach(element => {
    //     talk.push(element.querySelector("p").innerText);
    // })
    $.ajax({
        url: `/Home/SaveChatExternal`,
        type: "POST",
        data: {
            saveChats: talk
        },
        success: function (response) {
            gotJson(response)
        }
    })
}
function removeEscapeSequences(str) {
    return str.replace("&quot;", " "); // Remove common escape sequences
}

// Render the model as JSON
// Correctly decode JSON string into JavaScript
// this
//  var convertedJson = @Json.Serialize(jsonData)  // Parse the JSON string

console.log(convertedJson.repeatedMessages);  // Output: "true"

// conversation = (convertedJson == null) ? {} : convertedJson;
// yahe check karna hai
//need to start messges from -1 index
if (convertedJson == null) {
    convertedJson = {
        repeatedMessages: "true"
    }
}
gotJsonNotNormal(convertedJson)

var chats = [];
var base = document.getElementById("chatsForHistory");
var idForHistory = 0;
function loadChats(id) {
    console.log("Gen")
    let chatHistory = document.getElementsByClassName("chat-history");
    let myChat = document.getElementsByClassName("my-chat");
    for (let i = 0; i < myChat.length; i++) {
        myChat[i].style.display = "none";
        if (myChat[i].id == id) {
            console.log("Found ID")
            myChat[i].style.display = "block";
            let continueIndex = 404;
            myChat[i].querySelectorAll(".message").forEach(element => {
                if (element.querySelector("p").innerHTML == "@user.UserUniqueId") {
                    continueIndex = 0;
                }
                if (continueIndex < 3) {
                    element.remove();
                    continueIndex++;
                }
            })
            document.getElementById("chatsForHistory").style.display = "block";
        }
    }



    // console.log("Loading chat")
    // base.style.display = "block";
    // base.querySelectorAll("section").forEach(section => section.remove())
    // let continueIndex = 0;
    // for (let k = 0; k < (response.value.history[index].length - 1); k += 1) {

    //     if (response.value.history[index][continueIndex] == "@user.UserUniqueId") {
    //         break;
    //     }

    //     base.innerHTML += `<section class="message userMessage">

    //     <section class="pfp">
    //         <img src="https://cdn-icons-png.flaticon.com/512/758/758771.png" alt="image" border="0">
    //         </section>
    //             <section class="content">
    //                 <h1>User</h1>
    //                 <p>${response.value.history[index][continueIndex]}</p>
    //                 </section>`;
    //     continueIndex += 1;
    //     base.innerHTML += `<section class="message">

    //                 <section class="pfp">
    //                     <img src="https://img.freepik.com/premium-vector/circuit-board-icon_501557-617.jpg" alt="image" border="0">
    //                     </section>
    //                     <section class="content">
    //                         <h1>Unify Bot</h1>
    //                         <p>${response.value.history[index][continueIndex]}</p>
    //         </section>`;
    //     continueIndex += 1;
    // }
}
function removeChats() {

    document.getElementById("chatsForHistory").style.display = "none";
}
var conversation = [];

function generateHistory(response) {
    for (let index = 0; index < response.value.history.length; index++) {

        let sidebar = document.getElementById("chatHistoryContainer");
        let chatHistory = document.createElement("section");
        chatHistory.className = "chat-history";
        sidebar.appendChild(chatHistory);
        let historyHeading = document.createElement("section");
        historyHeading.className = "history-heading";
        chatHistory.appendChild(historyHeading);
        let h1 = document.createElement("h1");
        let heading = (response.value.history[index].length - 1) - 1;

        console.log("Headiing: " + heading.value)
        h1.innerText = heading;
        historyHeading.appendChild(h1);
        let chatHistoryDatetime = document.createElement("section");
        chatHistoryDatetime.className = "chat-history-datetime";
        chatHistory.appendChild(chatHistoryDatetime);
        let strong = document.createElement("strong");
        strong.innerText = "11/14/2024 12:21";
        chatHistoryDatetime.appendChild(strong);
        let i = document.createElement("i");
        i.className = "fa-solid fa-trash";
        chatHistoryDatetime.appendChild(i);
    }





} // function end

// original code
// window.addEventListener("load", function checkSection() {
//     let userMessage = document.getElementsByClassName("message")
//     let botMessage = document.getElementsByClassName("message")
//     setTimeout(function () {
//         for (let i = 0; i < userMessage.length; i++) {
//             console.log("....")
//             if (userMessage[i].className === "message userMessage") {
//                 conversation.push(userMessage[i].querySelector("p").innerText)
//                 conversation.push(botMessage[i + 1].querySelector("p").innerText)
//             }

//         }
//         $.ajax({
//             url: `/Home/GetJavaScriptArray`,
//             type: "POST",
//             data: {
//                 conversation: conversation
//             },
//             success: function(response) {

//             }
//         });

//     }, 10000)
// });
function checkSection() {
    console.log("CHECKING")
    let userMessage = document.getElementsByClassName("message")
    let botMessage = document.getElementsByClassName("message")
    setTimeout(function () {
        for (let i = 0; i < userMessage.length; i++) {
            console.log("....")
            if (userMessage[i].className === "message userMessage") {
                console.log("pushing")
                conversation.push(userMessage[i].querySelector("p").innerText)
                conversation.push(botMessage[i + 1].querySelector("p").innerText)
            }

        }
        $.ajax({
            url: `/Home/GetJavaScriptArray`,
            type: "POST",
            data: {
                conversation: conversation
            },
            success: function (response) {
                gotJson(response)
            }
        });

    }, 0)
};
function printArray() {
    for (let i = 0; i < chats.length; i++) {
        console.log(chats[i])
    }
}

var blurBG = document.getElementById("blur");
var accountDetails = document.getElementById("account-details");
function accountInfo() {
    blurBG.style.opacity = "0.1";
    blurBG.style.display = "block";
    accountDetails.style.scale = "1";
    accountDetails.style.opacity = "1";

}
function closeAccountInfo() {
    blurBG.style.opacity = "0";
    blurBG.style.display = "none";
    accountDetails.style.scale = "0";
    accountDetails.style.opacity = "0";

}
// corrector side project
//     var stop = false;

//        userInputValue.addEventListener("input" , function () {
//         setTimeout(function() {

//             let word = userInputValue.value.trim();
// console.log(`Input: ${word}`)
//             if (word.includes("Hell")) {
//  if (!stop) {
//     stop = true;
//  for(let i = 0; i < userInputValue.value.trim().includes("Hell").length; i++)
// {

// }
// }
// }

//         } , 1000);
//  stop = false;
//     })
// false = loading
// true = loaded
function loadingResponse() {
    let sendMessage = document.getElementById("send-message");
    let blockAnotherResponse = document.createElement("span");
    blockAnotherResponse.id = "block";
    sendMessage.appendChild(blockAnotherResponse);
    document.getElementById("send-icon").setAttribute("class", "fa-solid fa-ban")
}
function loadedResponse() {
    document.getElementById("block").remove();
    document.getElementById("send-icon").setAttribute("class", "fa-solid fa-caret-right")

}
function generateBotResponse(response, userDetails, notWrote = false, lastMessage) {
    loadedResponse();
    if (lastMessage != undefined) {
    }
    let chat = document.getElementById("chat");
    chat.innerHTML += `<section class="message userMessage">
            
                                                                                                                                                                      <section class="pfp">
                                                                                                                                                                              <img src="@Model.User.ProfileImages.ImageLink" alt="image" border="0">
                                                                                                                                                                      </section>
                                                                                                                                                              <section class="content">
                                                                                                                                                                  <h1>${userDetails.firstName}</h1>
                                                                                                                                                                  <p>${(notWrote == true ? lastMessage : document.getElementById("userInput").value.trim())}</p>
                                                                                                                                                              </section>`;
    chat.innerHTML += `<section class="message">
            
                                                                                                                                                                      <section class="pfp">
                                                                                                                                                                              <img src="https://img.freepik.com/premium-vector/circuit-board-icon_501557-617.jpg" alt="image" border="0">
                                                                                                                                                                      </section>
                                                                                                                                                              <section class="content">
                                                                                                                                                                  <h1>Unify Bot</h1>
                                                                                                                                                              <p>${response}</p>
                                                                                                                                                              </section>`;


    let numberOfPreviousMessage = 0;
    console.log("0 :    " + numberOfPreviousMessage)
    let userMsg = document.getElementsByClassName("message userMessage");
    Array.from(userMsg).forEach(element => {

        numberOfPreviousMessage++;
        console.log(numberOfPreviousMessage)
    })
    if (numberOfPreviousMessage % messageLimit === 0) {
        if (autoSaveOnAndOff) {
            checkSection();
        }
    }


    document.getElementById("userInput").value = "";
}

document.getElementById("sendMessageButton").addEventListener("click", function () {
    let userInput = document.getElementById("userInput").value.trim();
    loadingResponse();

    $.ajax({
        url: `/Home/GenerateResponse`,
        type: "POST",
        data: {
            userInput: userInput,

        },
        success: function (response) {
            console.log(response);
            generateBotResponse(response.message, response.userDetails);

        }
    });
});
function resendMessage() {
    loadingResponse();
    let messages = [];
    let allMsg = document.getElementsByClassName("message userMessage");
    Array.from(allMsg).forEach(element => {
        messages.push(element.querySelector("p").innerText)
    })
    $.ajax({
        url: `/Home/ResponseWithHigerToken`,
        type: "POST",
        data: {
            lastMessage: messages[messages.length - 1]
        },
        success: function (response) {
            console.log(response);
            generateBotResponse(response.message, response.userDetails, true, messages[messages.length - 1])
        }
    })
}

let allPfps = document.querySelectorAll(".pfp-element");
let defaultPfps = @Html.Raw(Json.Serialize(Model.ProfileLinks));
let defaultPfpIds = @Html.Raw(Json.Serialize(Model.ProfileLinkIds));
let profileImagesWithId = [];
defaultPfps.forEach((element, index) => {
    let linkWithId = [];
    linkWithId.push((index + 1), element)
    profileImagesWithId.push(linkWithId);
})

let presentElementsLinksInDOM = [];

allPfps.forEach(element => {
    let imgSrc = element.querySelector("img").src;
    if (presentElementsLinksInDOM.includes(imgSrc)) {
        element.id = "Marked";
    } else {
        presentElementsLinksInDOM.push(imgSrc);
    }
});

let elementThatImgNeedToBeReplaced = document.getElementById("Marked");

let newImgSrc = defaultPfps.find(src => !presentElementsLinksInDOM.includes(src));

if (newImgSrc && elementThatImgNeedToBeReplaced) {
    elementThatImgNeedToBeReplaced.querySelector("img").src = newImgSrc;
}
allPfps.forEach(element => {
    let imgSrc = element.querySelector("img").src;
    let id = profileImagesWithId.find(profile => profile[1] == imgSrc)?.[0];
    element.querySelector("span").innerHTML = `${id}`
})




//   allPfps.forEach(element => {
//     let imgSrc = element.querySelector("img").src;
//     profileImagesWithId.forEach(element0 => {

//     })
//   })






function somethingChanged(string, id) {
    if (id == "FirstName") {

        if (string != "@user.FirstName" && string != "") {
            foundChanges(true);
        }
        else {
            foundChanges(false);

        }

    }
}


function saveChangesToDatabase(elementClassName) {
    if (elementClassName != "Not-Clickable") {

        let allChangesInInputTag = [];
        document.querySelector(".account-editable-details").querySelectorAll("input").forEach(element => {
            allChangesInInputTag.push(element.value.trim());
        })

        let currentPusherWidth = pusherElement.clientWidth;
        let whichPfpIsSelectedId;
        if (currentPusherWidth == pfpElement0)
            whichPfpIsSelectedId = document.querySelectorAll(".pfp-element")[0].querySelector("span").innerHTML;
        else if (currentPusherWidth == pfpElement1)
            whichPfpIsSelectedId = document.querySelectorAll(".pfp-element")[1].querySelector("span").innerHTML;
        else if (currentPusherWidth == pfpElement2)
            whichPfpIsSelectedId = document.querySelectorAll(".pfp-element")[2].querySelector("span").innerHTML;
        else if (currentPusherWidth == pfpElement3)
            whichPfpIsSelectedId = document.querySelectorAll(".pfp-element")[3].querySelector("span").innerHTML;
        else if (currentPusherWidth == pfpElement4)
            whichPfpIsSelectedId = document.querySelectorAll(".pfp-element")[4].querySelector("span").innerHTML;
        else if (currentPusherWidth == pfpElement5)
            whichPfpIsSelectedId = document.querySelectorAll(".pfp-element")[5].querySelector("span").innerHTML;
        else if (currentPusherWidth == pfpElement6)
            whichPfpIsSelectedId = document.querySelectorAll(".pfp-element")[6].querySelector("span").innerHTML;
        else if (currentPusherWidth == pfpElement7)
            whichPfpIsSelectedId = document.querySelectorAll(".pfp-element")[7].querySelector("span").innerHTML;
        else
            whichPfpIsSelectedId = document.querySelectorAll(".pfp-element")[7].querySelector("span").innerHTML;
        console.log("++++++++++++++++++++++++++++++")
        console.log(allChangesInInputTag)
        console.log("++++++++++++++++++++++++++++++")
        console.log(whichPfpIsSelectedId);
        $.ajax({
            url: `@Url.Action("EditProfileChanges", "Home")`,
            type: "POST",
            data: {
                names: allChangesInInputTag,
                profileImageId: whichPfpIsSelectedId
            },
            success: function (response) {
                if (response.success == "200") {
                    window.location.reload();
                }
            }
        })
    }
}
// kaal history ka frontend bana na hai fir logic lagana hai fir side bar close karna hai
