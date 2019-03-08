import React from "react";
import Icon from "react-geomicons";
import { css } from "@emotion/core";
import { Box } from "@rebass/emotion";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const topIcon = !open ? "chevronRight" : "chevronLeft";

  const renderTopIcon = icon => <Icon name={icon} />;

  const sidebar = css`
    width: auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 2px solid black;
    transition: all 0.2s linear;
    font-size: 11px;
  `;

  const itemList = css`
    width: 100%;
  `;

  const item = css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: capitalize;
    color: black;
    font-size: 1.1rem;
    padding: 1.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.0101);
    border-bottom: 1px solid black;

    &:first-of-type {
      border-top: 1px solid black;
    }
  `;

  const show = open ? "200px" : "0";
  const opacity = open ? "1" : "0";
  const itemText = css`
    width: ${show};
    opacity: ${opacity};
    transition: all 0.1s linear;
  `;

  return (
    <div css={sidebar} onClick={() => setOpen(open => !open)}>
      <Box py={4} px={3}>
        {renderTopIcon(topIcon)}
      </Box>
      <div css={itemList}>
        <div css={item}>
          <Box p={3}>{renderTopIcon("search")}</Box>
          <div css={itemText}>Product Research</div>
        </div>
        <div css={item}>
          <Box p={3}>{renderTopIcon("shoppingCart")}</Box>
          <div css={itemText}>Product Sourcing</div>
        </div>
        <div css={item}>
          <Box p={3}>{renderTopIcon("folder")}</Box>
          <div css={itemText}>Product Finance</div>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };

/* icons list

"bookmark","calendar","camera","chat","check","chevronDown","chevronLeft","chevronRight","chevronUp","clock","close","cloud",
"cog","compose","expand","external","file","folder","geolocation","grid","heart","home","info","link","list","lock","mail","musicNote",
"next","no","pause","picture","pin","play","previous","refresh","repost","search","shoppingCart","skull","speakerVolume","speaker","star",
"tag","trash","triangleDown","triangleLeft","triangleRight","triangleUp","user","video","warning"

*/
