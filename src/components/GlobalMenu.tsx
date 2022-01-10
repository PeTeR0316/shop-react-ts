import React from 'react';
import styled from 'styled-components';

const GlobalMenu = () => {
    const GlobalMenuStyled = styled.div`
    display : flex;
    justify-content: space-around;
    
    .mainMenu {
        display: inline-block;
        .mainMenuList {
            display: inline-block;
            padding : 5px;
            cursor : pointer;
        }
    }

    .userMenu {
        display: inline-block;
        .userMenuList {
            display: inline-block;
            padding : 5px;
            cursor : pointer;
        }
    }
    `
    return (
        <GlobalMenuStyled>
            <img src="" alt="logo" />

            <ul className="mainMenu">
                <li className="mainMenuList">베스트</li>
                <li className="mainMenuList">아우터</li>
                <li className="mainMenuList">상의</li>
                <li className="mainMenuList">하의</li>
                <li className="mainMenuList">악세사리</li>
            </ul>

            <ul className="userMenu">
                <li className="userMenuList">로그인</li>
                <li className="userMenuList">회원가입</li>
                <li className="userMenuList">마이페이지</li>
                <li className="userMenuList">QnA</li>
                <li className="userMenuList">공지사항</li>
            </ul>
        </GlobalMenuStyled>
    )
}

export default GlobalMenu;