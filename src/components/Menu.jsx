import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './About';
import Books from './book/Books';
import Cart from './book/Cart';
import Login from './user/Login';
import Locals from './local/Locals';
import Favorite from './local/Favorite';
import Join from './user/Join';
import Mypage from './user/Mypage';
import ListPage from './bbs/ListPage';
import InsertPage from './bbs/InsertPage';
import ReadPage from './bbs/ReadPage';
import UpdatePage from './bbs/UpdatePage';


const Menu = () => {
    const navi = useNavigate()
    const onLogout = (e) => {
        e.preventDefault();
        if(window.confirm("정말로 로그아웃을 하시겠습니까?")){
            sessionStorage.clear();
            navi('/');
        }
    }
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Container fluid>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Nav.Link href="/books">도서검색</Nav.Link>
                        <Nav.Link href="/local">지역검색</Nav.Link>
                        <Nav.Link href="/bbs/list">게시판</Nav.Link>
                        {sessionStorage.getItem('uid') && 
                            <>
                            <Nav.Link href="/cart">장바구니</Nav.Link>
                            <Nav.Link href="/favorite">즐겨찾기</Nav.Link>
                            </>
                        }
                    </Nav>
                    {sessionStorage.getItem('email')? 
                    
                        <Nav>
                            <Nav.Link href="/mypage">{sessionStorage.getItem("email")}</Nav.Link>
                            <Nav.Link href="#" onClick={onLogout}>로그아웃</Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link href="/login">로그인</Nav.Link>
                        </Nav>
                    }
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<About/>}/>
                <Route path='/books' element={<Books/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/local' element={<Locals/>}/>
                <Route path='/favorite' element={<Favorite/>}/>
                <Route path='/join' element={<Join/>}/>
                <Route path="/mypage" element={<Mypage/>}/>
                <Route path="/bbs/list" element={<ListPage/>}/>
                <Route path="/bbs/insert" element={<InsertPage/>}/>
                <Route path="/bbs/read/:id" element={<ReadPage/>}/>
                <Route path="/bbs/update/:id" element={<UpdatePage/>}/>
            </Routes>
        </>
    );
}

export default Menu