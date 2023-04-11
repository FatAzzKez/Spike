import React from 'react'
import { Avatar, Sidebar, Search, ConversationList, Conversation} from '@chatscope/chat-ui-kit-react';


export default function SpikeSideBar() {
  return (
    <div>
      <Sidebar position="left" scrollable={false}>
        <Search placeholder="Search..." />
        <ConversationList style={{width: "240px"}}>                                                     
            <Conversation name="Obama" lastSenderName="Obama" info="This is Obama. What do you want to talk about?">
                <Avatar src={'./Obama.jpg'} name="Obama" status="available" />
            </Conversation>
            
            <Conversation name="Trump" lastSenderName="Trump" info="MAKE AMERICA GREAT AGAIN!!">
                <Avatar src={'./Trump.jpg'} name="Trump" status="dnd" />
            </Conversation>
                                    
        </ConversationList>
    </Sidebar>
  </div>
  )
}