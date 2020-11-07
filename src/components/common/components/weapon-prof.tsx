import React, { CSSProperties } from "react";
import { startCase } from "lodash";
import { Radio } from "antd";

import { trainingType } from "../types";

export interface WeaponProfProps {
  proficiency: trainingType;
}

function WeaponProf({ proficiency }: WeaponProfProps) {
  const { name, training } = proficiency;
  const styleProps: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 0,
    maxWidth: "25px",
    width: "25px",
    fontSize: "10px",
  };

  return (
    <div
      style={{
        marginRight: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ paddingBottom: "3px", fontSize: "13px" }}>
        {startCase(name)}
      </div>
      <Radio.Group
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        name={name}
        value={training}
        size={"small"}
      >
        <Radio style={styleProps} value={"U"} disabled={training !== "U"}>
          U
        </Radio>
        <Radio style={styleProps} value={"T"} disabled={training !== "T"}>
          T
        </Radio>
        <Radio style={styleProps} value={"E"} disabled={training !== "E"}>
          E
        </Radio>
        <Radio style={styleProps} value={"M"} disabled={training !== "M"}>
          M
        </Radio>
        <Radio style={styleProps} value={"L"} disabled={training !== "L"}>
          L
        </Radio>
      </Radio.Group>
    </div>
  );
}

export default WeaponProf;
