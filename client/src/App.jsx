import { ProSidebarProvider } from "react-pro-sidebar";
import { ProfileProvider } from "pages/MyProfile/profileContext";
import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <ProSidebarProvider>
      <ProfileProvider>
        <Routes />
      </ProfileProvider>
    </ProSidebarProvider>
  );
}

export default App;
