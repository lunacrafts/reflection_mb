import "react-cmdk/dist/cmdk.css";
import React, { useState } from "react";
import Palette, { filterItems, getItemIndex } from "react-cmdk";
import useHotkeys from "@reecelucas/react-use-hotkeys";

export const CommandPalette: React.FC = (props) => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  useHotkeys(['Control+K', 'Meta+K'], () => {
    setOpen((state) => !state);
  });

  const filteredItems = filterItems(
    [
      {
        heading: "Home",
        id: "home",
        items: [
          {
            id: "home",
            children: "Home",
            icon: "HomeIcon",
            href: "#",
          },
          {
            id: "settings",
            children: "Settings",
            icon: "CogIcon",
            href: "#",
          },
          {
            id: "projects",
            children: "Projects",
            icon: "RectangleStackIcon",
            closeOnSelect: false,
            onClick: () => {
              setPage("projects");
            },
          },
        ],
      },
      {
        heading: "Other",
        id: "advanced",
        items: [
          {
            id: "developer-settings",
            children: "Developer settings",
            icon: "CodeBracketIcon",
            href: "#",
          },
          {
            id: "privacy-policy",
            children: "Privacy policy",
            icon: "LifebuoyIcon",
            href: "#",
          },
          {
            id: "log-out",
            children: "Log out",
            onClick: () => {
              alert("Logging out...");
            },
          },
        ],
      },
    ],
    search
  );

  return <Palette
    onChangeSearch={setSearch}
    onChangeOpen={setOpen}
    search={search}
    isOpen={open}
    page={page}
  >
    <Palette.Page id="root">
      {filteredItems.length ? (
        filteredItems.map((list) => (
          <Palette.List key={list.id} heading={list.heading}>
            {list.items.map(({ id, ...rest }) => (
              <Palette.ListItem
                key={id}
                index={getItemIndex(filteredItems, id)}
                {...rest}
              />
            ))}
          </Palette.List>
        ))
      ) : (
        <Palette.FreeSearchAction />
      )}
    </Palette.Page>

    <Palette.Page id="projects">
      {/* Projects page */}
      projects XD
    </Palette.Page>
  </Palette>
}
