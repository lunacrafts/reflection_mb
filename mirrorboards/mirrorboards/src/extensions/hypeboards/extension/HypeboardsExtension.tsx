import { ActivityBarItem, useActivityBarItem } from "@reflection-layouts/reflection";
import { FontAwesomeIcon } from "@reflection/icons";
import { useNavigate, useParams } from "@tanstack/react-router";

export const HypeboardsExtension = () => {
  const { mirrorboardId } = useParams();

  const navigate = useNavigate();

  useActivityBarItem(
    {
      namespace: "hypeboards.sources",
      render: () => (
        <ActivityBarItem tooltip={"Hypeboard"} onClick={() => {
          navigate({
            to: '/shell/mirrorboard/$mirrorboardId/hypeboards',
            params: {
              mirrorboardId: mirrorboardId!
            }
          });
        }}>
          <FontAwesomeIcon icon={"square-h"} color={"white"} fontSize={20} />
        </ActivityBarItem>
      ),
      meta: {
        placement: "top",
        order: 10,
      },
    },
    []
  );

  return null;
}
