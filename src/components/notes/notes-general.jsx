import React, { useState } from "react";
import { cloneDeep, debounce, isNull } from "lodash";
import { Card, Button, Input } from "antd";
import { EditFilled, CheckOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const GeneralNotes = ({ state, dispatch }) => {
  const [editing, setEditing] = useState(false);

  const changeGeneral = (newText = null) => {
    let newGeneralNote = cloneDeep(state.notes.general);

    if (!isNull(newText)) {
      newGeneralNote.text = newText;
    }

    dispatch({
      type: "NOTES",
      payload: {
        general: true,
        value: newGeneralNote,
      },
    });
  };

  const debouncedUpdate = debounce(changeGeneral, 300);

  const toggleEditing = () => {
    if (editing) {
      debouncedUpdate.flush();
      setEditing(false);
    } else {
      setEditing(true);
    }
  };

  return (
    <div className={"general-notes"}>
      <Card
        title={
          <div className={"card-header"}>
            {state.notes.general.title}
            <Button
              type={"primary"}
              className={editing ? "green-button" : "blue-button"}
              icon={editing ? <CheckOutlined /> : <EditFilled />}
              onClick={toggleEditing}
            />
          </div>
        }
      >
        {editing ? (
          <TextArea
            className={"general-notes-edit"}
            defaultValue={state.notes.general.text}
            autoSize={{ minRows: 10, maxRows: 35 }}
            onChange={(e) => {
              e.persist();
              debouncedUpdate(e.target.value);
            }}
          />
        ) : (
          <p className={"note-body"}>{state.notes.general.text}</p>
        )}
      </Card>
    </div>
  );
};

export default GeneralNotes;
