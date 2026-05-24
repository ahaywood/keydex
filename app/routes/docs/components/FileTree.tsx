import { Icon } from "@/components/Icon";
import React, { useState, useMemo } from "react";

interface FileTreeItem {
  name: string;
  type: "file" | "directory";
  children?: FileTreeItem[];
  path: string;
  comment?: string;
}

interface FileTreeProps {
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const getFileIcon = (fileName: string): string | React.ReactNode => {
  const extension = fileName.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "cjs":
    case "mjs":
    case "js":
      return <Icon id="javascript" size={20} className="fill-secondary" />;
    case "jsx":
    case "tsx":
      return <Icon id="react" size={20} className="fill-secondary" />;
    case "cts":
    case "mts":
    case "ts":
      return <Icon id="typescript" size={20} className="fill-secondary" />;
    case "jsonc":
    case "json":
      return <Icon id="json" size={20} className="fill-secondary" />;
    case "md":
      return <Icon id="markdown" size={20} className="fill-secondary" />;
    case "mdx":
      return <Icon id="mdx" size={20} className="fill-secondary" />;
    case "css":
    case "scss":
    case "sass":
      return <Icon id="hashtag" size={20} className="fill-secondary" />;
    case "html":
    case "htm":
      return <Icon id="code" size={20} className="fill-secondary" />;
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
      return <Icon id="image" size={20} className="fill-secondary" />;
    case "yaml":
      return <Icon id="yaml" size={20} className="fill-secondary" />;
    case "env":
      return <Icon id="dollar" size={20} className="fill-secondary" />;
    case "vars":
      return <Icon id="text" size={20} className="fill-secondary" />;
    case "gitignore":
      return <Icon id="git" size={20} className="fill-secondary" />;
    default:
      return <Icon id="text" size={20} className="fill-secondary" />;
  }
};

// Extract text content from React children - handles JSX vs MDX differences
const extractTextContent = (children: React.ReactNode): string => {
  if (typeof children === "string") return children;
  if (typeof children === "number") return children.toString();
  if (!children) return "";

  if (Array.isArray(children)) {
    return children.map(extractTextContent).join("");
  }

  if (React.isValidElement(children)) {
    return extractTextContent(children.props.children);
  }

  return "";
};

const parseFileTree = (children: React.ReactNode): FileTreeItem[] => {
  // Extract string content from JSX children
  const content = extractTextContent(children);

  if (!content) return [];

  const lines = content.split("\n").filter((line) => line.trim());
  const result: FileTreeItem[] = [];
  const stack: { item: FileTreeItem; level: number }[] = [];

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed.startsWith("-")) return;

    const content = trimmed.substring(1).trim();
    const level = (line.length - trimmed.length) / 2; // Assuming 2 spaces per level

    // Parse comment if present
    const commentMatch = content.match(/(.+?)(\s+#\s+(.+))?$/);
    const nameWithComment = commentMatch ? commentMatch[1] : content;
    const comment = commentMatch ? commentMatch[3] : undefined;

    // Determine if it's a directory (ends with / or has no extension)
    const isDirectory =
      nameWithComment.endsWith("/") || !nameWithComment.includes(".");
    const name = isDirectory
      ? nameWithComment.replace(/\/$/, "")
      : nameWithComment;

    // Check if it's an empty directory (ends with / but no children will be added)
    const isEmptyDirectory = nameWithComment.endsWith("/");

    const item: FileTreeItem = {
      name,
      type: isDirectory ? "directory" : "file",
      path: name,
      children: isDirectory && !isEmptyDirectory ? [] : undefined,
      comment,
    };

    // Find the correct parent based on indentation level
    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(item);
    } else {
      const parent = stack[stack.length - 1].item;
      if (parent.children) {
        parent.children.push(item);
      }
    }

    if (isDirectory && !isEmptyDirectory) {
      stack.push({ item, level });
    }
  });

  return result;
};

const FileTreeItem: React.FC<{
  item: FileTreeItem;
  level: number;
  defaultExpanded?: boolean;
}> = ({ item, level, defaultExpanded = true }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const isDirectory = item.type === "directory";
  const hasChildren = item.children && item.children.length > 0;

  const handleToggle = () => {
    if (isDirectory) {
      setIsExpanded(!isExpanded);
    }
  };

  const icon = isDirectory ? (
    <Icon id="folder-closed" size={20} className="fill-secondary" />
  ) : (
    getFileIcon(item.name)
  );
  const indent = level * 16;

  return (
    <div>
      <div
        className={`flex items-center gap-2 py-1 px-2 hover:bg-orange-light/50 cursor-pointer ${
          isDirectory ? "font-bold" : "font-medium"
        } ${level > 0}`}
        onClick={handleToggle}
        style={{ paddingLeft: `${indent}px` }}
      >
        <span className="text-sm">
          {isDirectory && (
            <span>
              {isExpanded ? (
                <Icon id="folder-open" size={20} className="fill-secondary" />
              ) : (
                <Icon id="folder-closed" size={20} className="fill-secondary" />
              )}
            </span>
          )}
          {!isDirectory && icon}
        </span>
        <span className="text-sm text-gray-800">{item.name}</span>
        {item.comment && (
          <span className="text-xs text-gray-500 ml-2 font-normal italic">
            # {item.comment}
          </span>
        )}
      </div>

      {isDirectory && isExpanded && hasChildren && (
        <div>
          {item.children!.map((child, index) => (
            <FileTreeItem
              key={`${child.path}-${index}`}
              item={child}
              level={level + 1}
              defaultExpanded={defaultExpanded}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FileTree: React.FC<FileTreeProps> = ({
  children,
  defaultExpanded = true,
}) => {
  const fileTreeData = useMemo(() => parseFileTree(children), [children]);

  return (
    <div className="bg-white border border-interior-border p-4 font-mono text-xs mb-10">
      {fileTreeData.map((item, index) => (
        <FileTreeItem
          key={`${item.path}-${index}`}
          item={item}
          level={0}
          defaultExpanded={defaultExpanded}
        />
      ))}
    </div>
  );
};

export { FileTree };
export type { FileTreeItem, FileTreeProps };
