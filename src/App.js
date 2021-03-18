import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/Searchinput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { DefaultLayout } from "./components/templates/DefaultLayout";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";
import { Router } from "./router/Router";
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
// <BrowserRouter>
//     <DefaultLayout>
//       <PrimaryButton>テスト</PrimaryButton>
//       {/* <PrimaryButton>検索</PrimaryButton> */}
//       <SecondaryButton>検索</SecondaryButton>
//       <br />
//       <SearchInput />
//       <UserCard user={user} />
//     </DefaultLayout>
// </BrowserRouter>
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
