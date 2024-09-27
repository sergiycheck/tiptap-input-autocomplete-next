"use client";

import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, mergeAttributes } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Mention } from "@tiptap/extension-mention";
import { suggestion } from "./mention/suggestion";

const extensions = [
  Mention.configure({
    HTMLAttributes: {
      class: "mention",
    },
    suggestion,
  }),

  StarterKit.configure({}),
  Color.configure({ types: [TextStyle.name] }),
];

const content = `
  <p>
    <span data-type="mention" data-id="Jennifer Grey"></span> 
  Share some ideas with <span data-type="mention" data-id="Mickey Rourke"></span>
  </p>
`;

export const TiptapExample3 = () => {
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
