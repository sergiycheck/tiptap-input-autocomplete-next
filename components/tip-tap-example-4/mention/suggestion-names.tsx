import { ReactRenderer } from "@tiptap/react";
import Suggestion, { SuggestionProps } from "@tiptap/suggestion";
import tippy from "tippy.js";

import { MentionListNames } from "./mention-list-names";
import { AutoCompleteItem, getDataForAutocomplete } from "@/components/tanstack-query-wrapper";

export const suggestionNames = {
  allowSpaces: true,
  char: "/",
  allowedPrefixes: null,
  items: async ({ query }: { query: string }) => {
    const result = await getDataForAutocomplete();

    return result
      .filter(
        (item) =>
          item.name.toLowerCase().startsWith(query.toLowerCase()) ||
          item.category.toLowerCase().startsWith(query.toLowerCase())
      )
      .slice(0, 10);
  },

  render: () => {
    let component: any;
    let popup: any;

    return {
      onStart: (props: SuggestionProps<AutoCompleteItem>) => {
        component = new ReactRenderer(MentionListNames, {
          props,
          editor: props.editor,
        });

        if (!props.clientRect) {
          return;
        }

        popup = tippy("body", {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start",
        });
      },

      onUpdate(props: SuggestionProps<AutoCompleteItem>) {
        component.updateProps(props);

        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      },

      onKeyDown(props: any) {
        if (props.event.key === "Escape") {
          popup[0].hide();

          return true;
        }

        return component.ref?.onKeyDown(props);
      },

      onExit() {
        popup[0].destroy();
        component.destroy();
      },
    };
  },
};
