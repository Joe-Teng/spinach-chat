import React, { FC } from "react";
import { AvartarContainer } from "./index.styles";

interface IAvartar {
  source?: string | undefined;
  style?: StyleSheet;
}

const Avartar: FC<IAvartar> = ({ source, style }) => {
  return (
    <AvartarContainer>
      <img
        src={
          source ||
          "https://i3.meishichina.com/attachment/pai/2017/07/08/20170708149951568714610289388.jpg?x-oss-process=style/p800"
        }
        alt=""
      />
    </AvartarContainer>
  );
};

export default Avartar;
