import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  SidebarProvider,
} from "./context/SidebarContext";

import {
  AuthProvider,
} from "./context/AuthContext";

import {
  ChatProvider,
} from "./context/ChatContext";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Workspace from "./pages/Workspace";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <SidebarProvider>
      <AuthProvider>
        <ChatProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Landing />}
              />

              <Route
                path="/workspace"
                element={
                  <ProtectedRoute>
                    <Workspace />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/settings"
                element={<Settings />}
              />
            </Routes>
          </BrowserRouter>
        </ChatProvider>
      </AuthProvider>
    </SidebarProvider>
  );
}

export default App;