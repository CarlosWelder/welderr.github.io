


const ChatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;
let chatBlocked = false;
let confirmButtonClicked = false
const API_KEY = "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"; // Corrigi a constante API_KEY

const createChatLi = (message, className) => {
    const chatLI = document.createElement("li");
    chatLI.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<p>${message}</p>`;
    chatLI.innerHTML = chatContent;
    return chatLI;
};


const handleChat = () => {
    
    if (chatBlocked) return; // Verifica se o chat está bloqueado

    userMessage = ChatInput.value.trim();
    if (!userMessage) return;

    chatBlocked = true;


    userMessage = ChatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    const incomingMessage = "Digitando.....";
    const isMaterialSymbol = false; // Não é necessário verificar o símbolo no caso de boas-vindas
    
    const incomingChatLi = createChatLi(incomingMessage, "incoming");
    chatbox.appendChild(incomingChatLi);
    
    setTimeout(() => {
        chatbox.removeChild(incomingChatLi);
    }, 2000); // R

    
    setTimeout(() => {
        
        const incomingMessage = "Blz, muito prazer, Agora olha essa jogada onde eu ganhei R$11.000 de uma vez só 😂👇🏻";
        const isMaterialSymbol = incomingMessage.includes("material-symbols-outlined");

        const incomingChatLi = createChatLi(incomingMessage, "incoming");
        chatbox.appendChild(incomingChatLi);

        if (isMaterialSymbol) {
            const robotIcon = document.createElement("span");
            robotIcon.classList.add("material-icons", "robot-icon");
            robotIcon.textContent = "android"; // Nome do ícone Material Icons

            incomingChatLi.appendChild(robotIcon);
        }

        const videoMessage = document.createElement("p");

        const videoEmbed = document.createElement("iframe");
        videoEmbed.src = "https://www.youtube.com/embed/7pAK60ckbRY"; // Substitua pelo URL do primeiro vídeo
        videoEmbed.width = "320"; // Largura do vídeo
        videoEmbed.height = "215"; // Altura do vídeo
        videoEmbed.frameborder = "0";
        videoEmbed.allowfullscreen = true;

        videoMessage.appendChild(videoEmbed);
        chatbox.appendChild(videoMessage);

        setTimeout(() => {
            // Mensagem após 5 segundos
            const welcomeMessage = "Agora olha essa jogada onde eu ganhei R$11.000 de uma vez só 😂👇🏻";
            const welcomeChatLi = createChatLi(welcomeMessage, "incoming");
            chatbox.appendChild(welcomeChatLi);

            // Segundo vídeo após a mensagem
            setTimeout(() => {
                const secondVideoMessage = document.createElement("p");
                const secondVideoEmbed = document.createElement("iframe");
                secondVideoEmbed.src = "https://www.youtube.com/embed/-4jGj8GZ52M"; // URL do segundo vídeo
                secondVideoEmbed.width = "320";
                secondVideoEmbed.height = "215";
                secondVideoEmbed.frameborder = "0";
                secondVideoEmbed.allowfullscreen = true;
                secondVideoMessage.appendChild(secondVideoEmbed);
                chatbox.appendChild(secondVideoMessage);

                // Três mensagens adicionais após o segundo vídeo
                setTimeout(() => {
                    const additionalMessages = [
                        "Esse app abençoou a minha vida e a vida da minha família.",
                        "Você vai ver que é bem facinho de entender. O aplicativo analisa qual casa está pagando mais no momento e avisa o momento certo de fazer cada jogada!",
                        "Olha a renda extra que consegui fazer nos últimos 7 dias, praticamente R$20.000 reais no meu bolso kkkk.",
                        "____________________________"
                    ];

                    additionalMessages.forEach((message, index) => {
                        setTimeout(() => {
                            const additionalMessageLi = createChatLi(message, "incoming");
                            chatbox.appendChild(additionalMessageLi);
                    
                            if (index === additionalMessages.length - 1) {
                                const confirmButton = document.createElement("button");
                                confirmButton.textContent = "CONTINUAR EXPLICAÇÃO! 💰";
                                confirmButton.classList.add("confirm-button"); // Adicione uma classe CSS para estilizar o botão
                    
                                confirmButton.addEventListener("click", () => {

                                    const incomingMessage = "Digitando.....";
                                    const isMaterialSymbol = false; // Não é necessário verificar o símbolo no caso de boas-vindas
                                    
                                    const incomingChatLi = createChatLi(incomingMessage, "incoming");
                                    chatbox.appendChild(incomingChatLi);
                                    
                                    setTimeout(() => {
                                        chatbox.removeChild(incomingChatLi);
                                    }, 2000); // R

                                    const thankYouMessage = "Certo!";
                                    const thankYouChatLi = createChatLi(thankYouMessage, "incoming");
                                    chatbox.appendChild(thankYouChatLi);

                                    // Quatro mensagens adicionais após o botão de confirmação
                                    const newMessages = [
                                        " vou seguir em frente então.",
                                        "Vc vai ver que é bem facinho de entender, o aplicativo analisa qual casa está pagando mais no momento e avisa o momento certo de fazer cada jogada!.",
                                        "Olha a renda extra que consegui fazer nos últimos 7 dias, praticamente R$20.000 reais no meu bolso kkkk",
                                    ];

                                    newMessages.forEach((newMessage, newIndex) => {
                                        setTimeout(() => {
                                            const newMessageLi = createChatLi(newMessage, "incoming");
                                            chatbox.appendChild(newMessageLi);
                                        }, newIndex * 2200); // 1000 milissegundos = 1 segundo
                                    });
                                });
                    
                                const confirmButtonLi = document.createElement("li");
                                confirmButtonLi.appendChild(confirmButton);
                                chatbox.appendChild(confirmButtonLi);
                            }

                            

                            
                        }, index * 2200); // 1000 milissegundos = 1 segundo
                    });
                
                }, 2600); // 3000 milissegundos = 3 segundos
            }, 2300); // 1000 milissegundos = 1 segundo
        }, 2100); // 2000 milissegundos = 2 segundos

        generateResponse(incomingChatLi);
    }, 600);
};






// Função para verificar se a tecla pressionada é "Enter" e, em seguida, chamar a função de manipulação do chat
const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); // Evita a quebra de linha no textarea
        handleChat(); // Chama a função que envia a mensagem
    }
};

// Adiciona o ouvinte de evento ao pressionar uma tecla
ChatInput.addEventListener("keydown", handleKeyDown);

// Adiciona o ouvinte de evento ao clique no botão de envio
sendChatBtn.addEventListener("click", handleChat);
