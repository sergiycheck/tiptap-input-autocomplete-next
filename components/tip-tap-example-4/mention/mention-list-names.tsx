import React, { ReactNode, forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { SuggestionProps } from "@tiptap/suggestion";
import { AutoCompleteItem } from "@/components/tanstack-query-wrapper";

export const MentionListNames = forwardRef<any, SuggestionProps<AutoCompleteItem>>((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index: number) => {
    const item = props.items[index];

    if (item) {
      props.command({ id: item.name });
    }
  };

  const upHandler = () => {
    setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length);
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: { event: React.KeyboardEvent<Element> }) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <div className="dropdown-menu">
      {props.items.length ? (
        props.items.map((item, index) => (
          <button
            className={index === selectedIndex ? "is-selected" : ""}
            key={index}
            onClick={() => selectItem(index)}
          >
            {item.name}
          </button>
        ))
      ) : (
        <div className="item">No result</div>
      )}
    </div>
  );
});

MentionListNames.displayName = "MentionListNames";
