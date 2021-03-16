import styled from "styled-components";
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
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
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