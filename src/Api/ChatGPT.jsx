import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";



const App = () => {
  const location = useLocation();
  const ERROR_DESCRIPTION = new URLSearchParams(location.search).get(
    "description"
  );
  const ERROR_CODE = new URLSearchParams(location.search).get("code");

  useEffect(() => {
    const initialRequest = async () => {
      const initialMessage = {
        message: `Hello, I need your advice in repairing my car. I've read my car with a special tool and I have an error code "${ERROR_CODE}" and description "${ERROR_DESCRIPTION}". Can you provide step-by-step instructions for the repair?`,
        direction: "outgoing",
        sender: "user",
      };

      setMessages((prevMessages) => [...prevMessages, initialMessage]);
      setIsTyping(true);

      try {
        const response = await processMessageToChatGPT([initialMessage]);
        const content = response.choices[0]?.message?.content;
        if (content) {
          const chatGPTResponse = {
            message: content,
            sender: "ChatGPT",
          };
          setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
        }
      } catch (error) {
        console.error("Error processing message:", error);
      } finally {
        setIsTyping(false);
      }
    };

    initialRequest();
  }, []);

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      const content = response.choices[0]?.message?.content;
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo-1106",
      messages: [
        {
          role: "system",
          content:
            "I own a car with some bugs. Give me step-by-step instructions on how to repair the car ",
        },
        ...apiMessages,
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    return response.json();
  }

  return (
    <div className="App">
      <div
        style={{
          position: "relative",
          height: "780px",
          width: "99.8svw",
          top: "9.5%",
          backgroundColor: "#222831",
        }}
      >
        <MainContainer
          style={{ backgroundColor: "#222831", border: "#222831" }}
        >
          <ChatContainer style={{ backgroundColor: "#222831", color: "white" }}>
            <MessageList
              style={{ backgroundColor: "#222831", color: "white" }}
              scrollBehavior="smooth"
              typingIndicator={
                isTyping ? (
                  <TypingIndicator
                    style={{ width: "100%", backgroundColor: "#222831" }}
                    content="ChatGPT is typing"
                  />
                ) : null
              }
            >
              {messages.map((message, i) => {
                console.log(message);
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput
              placeholder="Send a Message"
              onSend={handleSendRequest}
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default App;
