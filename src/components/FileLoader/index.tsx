import { useState } from "react";
import { StyledActionField } from "./style.ts";
import { H, Select, UploadDragFile, P2 } from "@quark-uilib/components";
import { useTheme } from "styled-components";
import axios from "axios";

export const FileLoader = () => {
  const theme = useTheme();

  // @ts-ignore
  const [files, setFiles] = useState<Files[]>();

  const options = [
    {
      label: "Неделя",
      value: "aweek"
    },
    {
      label: "Две",
      value: "atuweek"
    }
  ];

  // @ts-ignore
  const handleLoadFile = (_files: Files[]) => {
    setFiles(_files);
    axios({
      method: "POST",
      url: "http://158.160.17.242:8011/",
      params: {
        username: "RandomName(22)",
        order_name: "RandomOrder"
      },
      data: files
    });
  };

  console.log(files);

  return (
    <StyledActionField>
      <div
        style={{
          alignItems: "center",
          gap: "25px",
          color: "darkgreen",
          display: "flex",
          flexDirection: "column"
        }}>
        <H color={theme.colors.textColoredJotunheim} size={24}>
          Здесь вы можете загрузить свои файлы
        </H>
        <UploadDragFile accept=".mp3, .wav, .mp4" onChange={handleLoadFile} />
        <P2 type="corvus">{files?.map((file) => file.name)}</P2>
        <Select placeholder="Выберите время отложенной обработки" options={options} />
      </div>
    </StyledActionField>
  );
};
