import React, { useState, useEffect } from "react";
import { map, debounce, cloneDeep, findIndex, without } from "lodash";
import { Card, Button, Input } from "antd";
import { EditFilled, PlusOutlined, CloseOutlined } from "@ant-design/icons";

import { baseNote } from "../common/base-types";

const { TextArea } = Input;

const OtherNotes = ({ state, dispatch }) => {
  const [editing, setEditing] = useState(0);

  useEffect(() => {
    if (state.notes.other.length === 0) {
      addOther();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const addOther = () => {
    let newOtherNotes = [...state.notes.other];
    let newNote = {
      ...cloneDeep(baseNote),
      id: newOtherNotes.length + 1,
      title: "New Note",
      text: "Write here!",
    };

    newOtherNotes.push(newNote);

    dispatch({
      type: "NOTES",
      payload: {
        general: false,
        value: newOtherNotes,
      },
    });
  };

  const updateOtherTitle = (id, title) => {
    let newOtherNotes = [...state.notes.other];
    let updateIndex = findIndex(newOtherNotes, ["id", id]);
    let updatedNote = cloneDeep(newOtherNotes[updateIndex]);

    updatedNote.title = title;

    newOtherNotes[updateIndex] = updatedNote;

    dispatch({
      type: "NOTES",
      payload: {
        general: false,
        value: newOtherNotes,
      },
    });
  };

  const updateOtherText = (id, text) => {
    let newOtherNotes = [...state.notes.other];
    let updateIndex = findIndex(newOtherNotes, ["id", id]);
    let updatedNote = cloneDeep(newOtherNotes[updateIndex]);

    updatedNote.text = text;

    newOtherNotes[updateIndex] = updatedNote;

    dispatch({
      type: "NOTES",
      payload: {
        general: false,
        value: newOtherNotes,
      },
    });
  };

  const removeOther = (note) => {
    dispatch({
      type: "NOTES",
      payload: {
        general: false,
        value: without(state.notes.other, note),
      },
    });
  };

  const debouncedUpdateTitle = debounce(updateOtherTitle, 300);
  const debouncedUpdateText = debounce(updateOtherText, 300);

  const toggleEditing = (id) => {
    if (editing !== 0) {
      debouncedUpdateTitle.flush();
      debouncedUpdateText.flush();
      setEditing(0);
    } else {
      setEditing(id);
    }
  };

  return (
    <div className={"other-notes"}>
      <Card
        title={
          <div className={"card-header"}>
            Other Notes
            <Button
              type={"primary"}
              className={"green-button"}
              icon={<PlusOutlined />}
              onClick={addOther}
            />
          </div>
        }
      >
        {map(state.notes.other, (note) => {
          return (
            <Card
              key={`other-note-${note.id}`}
              title={
                <div className={"card-header"}>
                  {editing === note.id ? (
                    <Input
                      className={"other-notes-edit-title"}
                      defaultValue={note.title}
                      onPressEnter={() => toggleEditing(note.id)}
                      onChange={(e) => {
                        e.persist();
                        debouncedUpdateTitle(note.id, e.target.value);
                      }}
                    />
                  ) : (
                    note.title
                  )}
                  <div className={"card-header-actions"}>
                    <Button
                      type={"primary"}
                      // size={"small"}
                      className={"blue-button"}
                      icon={<EditFilled />}
                      onClick={() => toggleEditing(note.id)}
                    />
                    <Button
                      type={"primary"}
                      // size={"small"}
                      className={"red-button"}
                      icon={<CloseOutlined />}
                      onClick={() => removeOther(note)}
                    />
                  </div>
                </div>
              }
            >
              {editing === note.id ? (
                <TextArea
                  className={"other-notes-edit-text"}
                  defaultValue={note.text}
                  autoSize={{ minRows: 4 }}
                  onChange={(e) => {
                    e.persist();
                    debouncedUpdateText(note.id, e.target.value);
                  }}
                />
              ) : (
                <p>{note.text}</p>
              )}
            </Card>
          );
        })}
      </Card>
    </div>
  );
};

export default OtherNotes;
