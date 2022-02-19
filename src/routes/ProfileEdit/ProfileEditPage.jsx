import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBar';
import EditProfile from './EditProfile';
import styled from 'styled-components';

const Section = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: white;
`;
const Main = styled.main`
    width: 90vw;
    padding: 0 5vw;
    max-width: 500px;
    overflow: scroll;
    @media screen and (max-width: 64rem) {
        box-sizing: border-box;
    }
`;

const ProfileEditPage = ({onClick, isOpen}) => {
    return (
        <Section>
            <Header />
            <Main>
                <EditProfile />
            </Main>
            <Footer onClick={onClick} isOpen={isOpen} />
        <SideBar onClick={onClick} isOpen={isOpen} />
        </Section>
    );
}

export default ProfileEditPage;