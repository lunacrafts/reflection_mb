import "react-cmdk/dist/cmdk.css";
import React, { useState } from "react";
import Palette, { filterItems, getItemIndex } from "react-cmdk";
import useHotkeys from "@reecelucas/react-use-hotkeys";

export const CommandPalette: React.FC = (props) => {
  const [page, setPage] = useState<string>("root");
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState("");

  useHotkeys(['Control+K', 'Meta+K'], () => {
    setOpen((state) => !state);
  });

  return <Palette
    onChangeSearch={setSearch}
    onChangeOpen={setOpen}
    search={search}
    isOpen={open}
    page={page}
  >
    <Palette.Page id="root">
      <Palette.List heading="Mirrorboards">
        <Palette.ListItem index={0}>Create Mirrorboard</Palette.ListItem>
      </Palette.List>
      {/* {filteredItems.length ? (
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
      )} */}
    </Palette.Page>


  </Palette>
}