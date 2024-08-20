import { useAtom } from "jotai";
import { useState } from "react";
import * as FileSaver from "file-saver"; // To handle file saving
import { contentAtom } from "@/providers/content";

function ContentEditor() {
  const [content, setContent] = useAtom(contentAtom);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = () => {
    if (password === "Admin123@") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect Password");
    }
  };

  const handleChange = (e: any, index: number, key: any) => {};

  const saveContent = () => {
    const jsonContent = JSON.stringify(content, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });
    FileSaver.saveAs(blob, "content.json");
  };

  if (!isAuthenticated) {
    return (
      <div>
        <h2>Password Protected</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <button onClick={handleAuth}>Submit</button>
      </div>
    );
  }

  return (
    <div>
      {content.home.faq.items.map((item, index) => (
        <div key={index} className="border-t border-sky-900 py-3">
          <div className="flex cursor-pointer flex-row items-center justify-between">
            <h3
              className="body md:text-24 pt-2 font-bold md:w-1/2 md:font-normal"
              contentEditable
              onBlur={(e) => handleChange(e, index, "question")}
            >
              {item.question}
            </h3>
          </div>
          <p
            className="py-2"
            contentEditable
            onBlur={(e) => handleChange(e, index, "answer")}
          >
            {item.answer}
          </p>
        </div>
      ))}
      <button
        className="fixed bottom-5 right-5 rounded bg-blue-500 p-4 text-white"
        onClick={saveContent}
      >
        Save
      </button>
    </div>
  );
}

export default ContentEditor;
