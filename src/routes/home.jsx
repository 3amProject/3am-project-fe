import { useState } from 'react';
import styled from 'styled-components';
import ReactCalendar from '../components/calendar';
import Footer from '../components/footer';
import Header from '../components/header';
import MenuContainer from '../components/menuContainer';
import SideBar from '../components/sideBar';
import TotalPrice from '../components/totalPrice';

const HomeComponent = styled.section`
    height: 100vh;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: yellowgreen;
`;
const MainComponent = styled.main`
height: 100%;
width: 90vw;
max-width: 700px;
padding: 1em;
box-sizing: border-box;
background-color: bisque;
overflow: scroll;
@media screen and (max-width: 64rem) {
    width: 90vw;
}
`;
const DivComponent = styled.div`
    margin-top: 5em;
`;
const CalendarComponent = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3em;
`;

const Home = ({onClick, isOpen}) => {
    const menus = [
        {
        id: 1,
        url: '/img/salad.png',
        name: '음식1111',
        price: 7400,
        qty: 1,

    },
        {
        id: 2,
        url: '/img/salad.png',
        name: '음식2222',
        price: 7400,
        qty: 1,

    },
        {
        id: 3,
        url: '/img/salad.png',
        name: '음식3333',
        price: 7400,
        qty: 1,

    },
        {
        id: 4,
        url: '/img/salad.png',
        name: '음식4444',
        price: 7400,
        qty: 1,

    },
        {
        id: 5,
        url: '/img/salad.png',
        name: '음식5555',
        price: 7400,
        qty: 1,

    },
        {
        id: 6,
        url: '/img/salad.png',
        name: '음식6666',
        price: 7400,
        qty: 1,
    },
    ];

    const [totalPrice, setTotalPrice] = useState(0);
    const [selected, setSelected] = useState([]);

    const handleAdd = (menu) => {
        setTotalPrice((oldPrice) => oldPrice + menu.price);
        setSelected(oldSelected => {
            const updatedSelect = [...oldSelected];
            const targetIdx = updatedSelect.findIndex((v) => v.id === menu.id);
            if(targetIdx === -1){
                updatedSelect.push(menu);
            } else {
                const needUpdate = updatedSelect.splice(targetIdx, 1)[0];
                needUpdate['qty']++;
                updatedSelect.splice(targetIdx,0,needUpdate);
            }
            return updatedSelect;
        });
    }

    const showPrice = (price) => {
        if(price < 1000) return `${price}원`;
        let newPrice = String(price).split('').reverse();
        newPrice.splice(3,0,',');
        return newPrice.reverse().join('') + '원';
    }

    const [date, setDate] = useState(new Date());

    return (
        <HomeComponent>
            <Header></Header>
            <MainComponent>
            <DivComponent>
                <h2>1. 배송 날짜 선택</h2>
                <CalendarComponent>
                    <ReactCalendar
                    date={date}
                    onChange={(date)=>setDate(date)}
                    />
                </CalendarComponent>
            </DivComponent>
            <DivComponent>
                <h2>2. 메뉴 선택</h2>
                <div className="menuList">
                <MenuContainer
                    subTitle="매일 구매한 신선한 재료로 당일 조리"
                    title="새벽다섯시 샐러드"
                    menus={menus}
                    onClick={handleAdd}
                    showPrice={showPrice}
                />
                <MenuContainer
                    subTitle="매일 하나씩만 받기 어려웠던"
                    title="건강 간편식"
                    menus={menus}
                    onClick={handleAdd}
                    showPrice={showPrice}
                />
                </div>
            </DivComponent>
            </MainComponent>
            <TotalPrice
            totalPrice={totalPrice}
            showPrice={showPrice}
            date={date}
            selected={selected}
            />
            <Footer onClick={onClick} isOpen={isOpen}></Footer>
            <SideBar onClick={onClick} isOpen={isOpen}></SideBar>
        </HomeComponent>
    );
};

export default Home;
