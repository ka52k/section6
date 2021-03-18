import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { useLocation } from "react-router-dom";

import { SearchInput } from "../molecules/Searchinput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
  return {
    id: val,
    name: `KK${val}`,
    image: "https://source.unsplash.com/OzAeZPNsLXk",
    email: "kk123@kk.com",
    phone: "090-1184-7382",
    company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
  }
}))

export const Users = () => {
  // const { state } = useLocation();
  // const {isAdmin} = state ? state.isAdmin : false;
  const { userInfo, setUserInfo } = useContext(UserContext);

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;