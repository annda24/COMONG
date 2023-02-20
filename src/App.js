// npm
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// routes
import Home from './routes/Home';
import Moim from './routes/Moim';
import Chats from './routes/Chats';
import Search from './routes/Search';
import Profile from './routes/Profile';
import Chatting from './routes/Chatting';

// style
import './style/App.scss';

// function
function App() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes> {/* Route에 path와 element 확인 */}
          <Route path="/" element={<Home />} />             {/* 00.Home, 사용자/모임 소식 */}
          <Route path="/moim" element={<Moim />} />         {/* 01.Moim, 가입한 모임 리스트 */}
          <Route path="/chats" element={<Chats />} />       {/* 02.Chats, 채팅방 리스트 */}
          <Route path="/search" element={<Search />} />     {/* 03.Search, 모임/사용자/소식 찾기 */}
          <Route path="/profile" element={<Profile />} />   {/* 01-1. 프로필 */}
          <Route path="/chatting" element={<Chatting />} /> {/* 02-1. chatting, 채팅방 */}
        </Routes>
      </BrowserRouter>
    );
  }
  
export default App;