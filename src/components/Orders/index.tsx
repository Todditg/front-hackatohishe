import { ReactElement, useMemo } from "react";
import { StyledActionField } from "./style.ts";
import { Table } from "@quark-uilib/table";
import { ORDER_MOCK_SEGMENTS } from "../../mock/Order1.ts";

export const ActionField = (): ReactElement => {
  const columns = useMemo(
    () => [
      { field: "speaker" },
      { field: "text" },
      { field: "start" },
      { field: "end" }
    ],
    []
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  return (
    <StyledActionField>
      <Table
        columns={columns}
        rowData={ORDER_MOCK_SEGMENTS}
        title="Тема совещания"
        description="fusion-проволистик-модулс, основные принципы, о которых они построены, примеры"
      />
    </StyledActionField>
  );
};
