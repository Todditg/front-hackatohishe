import React, { ReactElement, useEffect, useState } from "react";
import { SidebarContainer, UserEntry } from "./style.ts";
import { Button, ModalWindow, openSnackBar } from "@quark-uilib/components";
import { useNavigate } from "react-router-dom";
import { commonApi } from "../../shared/api/Common";
import { TUserCreate } from "../../shared/api/Common/types.ts";

export const SideBar = (): ReactElement => {
  const navigate = useNavigate();

  const [isOpenAuthWindow, setIsOpenAuthWindow] = useState(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const userData: TUserCreate = {
    username: "RandomName(24)",
    hashed_password: "RandomName(24)"
  };

  const handleSendUser = (): void => {
    commonApi
      .createUser(userData)
      .then(() => console.log("User created"))
      .finally(() => console.log("User created again"));
    setIsOpenAuthWindow(false);
    setIsAuth(true);
  };

  useEffect(() => {
    commonApi
      .getToken(userData)
      .then((res) => console.log(res.data))
      .catch(() => openSnackBar({ message: "Ошибка при аутентификации" }));
  });

  return (
    <SidebarContainer>
      <Button
        size="m"
        viewType="secondary"
        onClick={() => navigate("/action1")}>
        Заказы
      </Button>
      <Button
        size="m"
        viewType="secondary"
        onClick={() => navigate("/action2")}>
        Формирование заказа
      </Button>
      <Button onClick={() => setIsOpenAuthWindow(true)}>
        {isAuth ? "Вы уже вошли" : "Войти"}
      </Button>
      <ModalWindow
        isOpen={isOpenAuthWindow}
        onClose={() => setIsOpenAuthWindow(false)}
        isOutsideClickClose={true}
        title="Пожалуйста, введите свои данные"
        footerContent={
          <>{!isAuth && <Button onClick={handleSendUser}>Войти</Button>}</>
        }
      />
    </SidebarContainer>
  );
};
