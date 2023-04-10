import React, {useState} from 'react'
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator, MessageSeparator, Avatar, Sidebar, Search, ConversationList, Conversation, ConversationHeader, VoiceCallButton, VideoCallButton, EllipsisButton} from '@chatscope/chat-ui-kit-react';

function Gui() {
    const [messageInputValue, setMessageInputValue] = useState("");
    const [messages, setMessages] = useState([]);

    /**
     * Handles the acts of sending a message. Deletes chat bar message and prints to console. Also creates a new message in chat
     * Question: Here, message is an input, but when i call sendMessage, I don't have to specify an input (message). How does it know how to add it?
     */
    let sendMessage = message => {
      setMessages([...messages, {
        message,
        direction: 'outgoing'
      }]);
      setMessageInputValue("")
      console.log(messages) // why the delay in showing messages?
    }

  return (

    // Set initial message input value to an empty string                                                                     

    <div style={{
      height: "600px",
      position: "relative"
    }}>
      <MainContainer responsive>                
        <Sidebar position="left" scrollable={false}>
          <Search placeholder="Search..." />
          <ConversationList>                                                     
            <Conversation name="Obama" lastSenderName="Obama" info="Want to ask me something?">
              <Avatar src={'./Obama.jpg'} name="Obama" status="available" />
            </Conversation>
            
            <Conversation name="Trump" lastSenderName="Trump" info="MAKE AMERICA GREAT AGAIN!!">
              <Avatar src={'./Trump.jpg'} name="Trump" status="dnd" />
            </Conversation>
                                        
          </ConversationList>
        </Sidebar>
        
        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar src={'./Obama.jpg'} name="Obama" />
            <ConversationHeader.Content userName="Obama" info="Active now" />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <EllipsisButton orientation="vertical" />
            </ConversationHeader.Actions>          
          </ConversationHeader>

          <MessageList typingIndicator={<TypingIndicator content="Obama is typing" />}>
            <MessageSeparator content="Saturday, 30 November 2019" />
            {messages.map((m, i) => <Message key={i} model={m} />)}
          </MessageList>

          {/*below line works by updating chat box on new character (onChange), then by calling the sendMessage function when the send button is pressed. */}
          <MessageInput attachButton = {false} placeholder="Type message here" value={messageInputValue} onChange={val => setMessageInputValue(val)} onSend={val => sendMessage(val)} />
        </ChatContainer>                         
      </MainContainer>
    </div>
      
  )
}

export default Gui



