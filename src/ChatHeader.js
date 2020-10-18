import { EditLocationRounded, HelpRounded, Notifications, PeopleRounded, Search, SendRounded } from '@material-ui/icons'
import React from 'react'
import './ChatHeader.css';

function ChatHeader({channelName}) {

 
   
    return (
        <div className="chatHeader">
           <div className="chatHeader__left">
             <h3>
             <span className="chatHeader__hash">
                #
             </span>
              {channelName}
             </h3>
           </div>

           <div className="chatHeader__right">
             <Notifications/>
             <EditLocationRounded/>
             <PeopleRounded/>

             <div className="chatHeader__search">
               <input placeholder='Search'/>
               <Search/>
             </div>
             <SendRounded/>
             <HelpRounded/>
           </div>
        </div>
    )
}

export default ChatHeader
