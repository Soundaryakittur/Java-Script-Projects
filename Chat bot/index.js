let chatbotMsgList = {
    "Hi": "Hello!",
    "Hey": "Hi there!",
    "Good Morning": "Good morning! How can I assist you?",
    "Good Evening": "Good evening! How can I help?",
    "How can I help you?": "I'm here to assist you. Please let me know your query.",
    "Thank You": "You're welcome!"
};

let sendMsgBtn = document.getElementById("sendMsgBtn");
let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
sendMsgBtn.addEventListener("click", function() {
    let user_In = userInput.value.trim();
    if (user_In !== "") {
        let userMessageContainer = document.createElement("div");
        userMessageContainer.className = "msg-to-chatbot-container";
        let userMessageElement = document.createElement("p");
        userMessageElement.className = "msg-to-chatbot";
        userMessageElement.textContent = user_In;
        userMessageContainer.appendChild(userMessageElement);
        chatContainer.appendChild(userMessageContainer);

        let chatbotReply = chatbotMsgList[user_In];

        let chatbotReplyContainer = document.createElement("div");
        chatbotReplyContainer.className = "msg-from-chatbot-container";
        let chatbotReplyElement = document.createElement("p");
        chatbotReplyElement.className = "msg-from-chatbot";
        chatbotReplyElement.textContent = chatbotReply;
        chatbotReplyContainer.appendChild(chatbotReplyElement);
        chatContainer.appendChild(chatbotReplyContainer);

        userInput.value = "";

    }
});