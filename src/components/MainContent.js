import React from "react";
import TopMenu from "./TopMenu";
import GenrePicker from "./GenrePicker";
import AlbumList from "./AlbumList";
import AlbumCard from "./AlbumCard";

function MainContent() {
  return <main>{/* What components go here? */}
           <TopMenu />
            <GenrePicker />
            <AlbumList />
              
         </main>;
}

export default MainContent;
