import React, { CSSProperties } from "react";
import { startCase } from "lodash";
import { Radio } from "antd";

import { trainingType, proficiency as profLevel } from '../types';

export interface WeaponProfProps {
  proficiency: trainingType;
  disable?: boolean;
  setProf?(prof: profLevel): void
}

function WeaponProf({ proficiency, disable=true, setProf }: WeaponProfProps) {
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
        <Radio style={styleProps} value={"U"} disabled={disable && training !== "U"}>
          U
        </Radio>
        <Radio style={styleProps} value={"T"} disabled={disable && training !== "T"}>
          T
        </Radio>
        <Radio style={styleProps} value={"E"} disabled={disable && training !== "E"}>
          E
        </Radio>
        <Radio style={styleProps} value={"M"} disabled={disable && training !== "M"}>
          M
        </Radio>
        <Radio style={styleProps} value={"L"} disabled={disable && training !== "L"}>
          L
        </Radio>
      </Radio.Group>
    </div>
  );
}

export default WeaponProf;
