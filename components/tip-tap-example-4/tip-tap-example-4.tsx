"use client";

import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Mention } from "@tiptap/extension-mention";
import { suggestionNames } from "./mention/suggestion-names";
import { suggestion } from "../tip-tap-example-3/mention/suggestion";

const extensions = [
  Mention.configure({
    HTMLAttributes: {
      class: "mention",
    },
    suggestion: suggestionNames,
  }),

  Mention.configure({
    HTMLAttributes: {
      class: "mention-2",
    },
    suggestion: suggestion,
  }),

  StarterKit.configure({}),
  Color.configure({ types: [TextStyle.name] }),
];

const content = `
  <p>
  </p>
`;

export const TiptapExample4 = () => {
  return (
    <div className="p-4">
      <EditorProvider
        extensions={extensions}
        content={content}
        editorProps={{
          attributes: {
            class:
              "border-2 p-2 border-black rounded-md prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
          },
        }}
      ></EditorProvider>
    </div>
  );
};
