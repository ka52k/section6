import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/Searchinput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "KK",
  image: "https://source.unsplash.com/OzAeZPNsLXk",
  email: "kk123@kk.com",
  phone: "090-1184-7382",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
    <DefaultLayout>
      <PrimaryButton>テスト</PrimaryButton>
      {/* <PrimaryButton>検索</PrimaryButton> */}
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </DefaultLayout>
    </BrowserRouter>
  );
}
