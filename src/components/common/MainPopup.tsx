import { useEffect, useMemo, useState } from "react";
import styled from "@emotion/styled";
import Popup1 from "../../assets/image/팝업1.jpeg";
import Popup2 from "../../assets/image/팝업2.jpeg";
import Popup3 from "../../assets/image/팝업3.jpeg";

const bannerItems = [
  {
    id: "popup1",
    src: Popup1,
    alt: "팝업 배너 1",
    href: "",
    storageKey: "popup_1_hidden_until",
  },
  {
    id: "popup2",
    src: Popup2,
    alt: "팝업 배너 2",
    href: "",
    storageKey: "popup_2_hidden_until",
  },
  {
    id: "popup3",
    src: Popup3,
    alt: "팝업 배너 3",
    href: "",
    storageKey: "popup_3_hidden_until",
  },
];

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 30;
  display: ${(props) => (props.$open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const PopupGrid = styled.div`
  display: flex;
  gap: 12px;
  align-items: stretch;
  justify-content: center;
  max-width: 100%;

  @media screen and (max-width: 840px) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
`;

const PopupCard = styled.section`
  width: 290px;
  max-width: 90vw;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

const BannerLink = styled.a`
  width: 100%;
  height: 100%;
  display: block;
`;

const BannerArea = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 8px;
`;

const BannerButtonRow = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #bfbfbf;
  background: #ffffff;
  font-size: 11px;
  color: #2f2f2f;
`;

const BannerActionButton = styled.button`
  flex: 1;
  background: transparent;
  font-size: 11px;
  color: inherit;
  cursor: pointer;
  height: 100%;
  text-align: left;
  padding-left: 12px;
`;

const BannerCloseButton = styled.button`
  width: 80px;
  height: 100%;
  background: transparent;
  font-size: 11px;
  color: #2f2f2f;
  cursor: pointer;
  border-left: 1px solid #bfbfbf;
`;

type BannerState = {
  hidden: boolean;
  hiddenUntil: number | null;
  showButtons: boolean;
};

const MainPopup = () => {
  const [open, setOpen] = useState(false);
  const [bannerState, setBannerState] = useState<Record<string, BannerState>>(
    {}
  );
  const banners = useMemo(() => bannerItems, []);
  const visibleBanners = useMemo(
    () =>
      banners.filter((banner) => {
        const state = bannerState[banner.id];
        return state ? !state.hidden : true;
      }),
    [banners, bannerState]
  );

  useEffect(() => {
    const nextState: Record<string, BannerState> = {};
    banners.forEach((banner) => {
      const expiresAt = Number(localStorage.getItem(banner.storageKey) || "0");
      const hidden = !Number.isNaN(expiresAt) && Date.now() < expiresAt;
      nextState[banner.id] = {
        hidden,
        hiddenUntil: hidden ? expiresAt : null,
        showButtons: !hidden,
      };
    });
    setBannerState(nextState);
    setOpen(banners.some((banner) => !nextState[banner.id].hidden));
  }, [banners]);

  const handleCloseBanner = (id: string) => {
    setBannerState((prev) => {
      const current = prev[id];
      if (!current || current.hidden) return prev;
      return {
        ...prev,
        [id]: {
          ...current,
          hidden: true,
          showButtons: false,
        },
      };
    });
  };

  const handleHideForDay = (id: string, storageKey: string) => {
    const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem(storageKey, String(expiresAt));
    setBannerState((prev) => ({
      ...prev,
      [id]: {
        hidden: true,
        hiddenUntil: expiresAt,
        showButtons: false,
      },
    }));
  };

  useEffect(() => {
    if (open && visibleBanners.length === 0) {
      setOpen(false);
    }
  }, [open, visibleBanners.length]);

  if (!open) return null;

  return (
    <Overlay $open={open}>
      <PopupGrid>
        {visibleBanners.map((banner) => {
          const state = bannerState[banner.id];
          const showButtons = state ? state.showButtons : true;
          return (
            <PopupCard key={banner.id}>
              <BannerArea>
                {banner.href ? (
                  <BannerLink href={banner.href}>
                    <BannerImage src={banner.src} alt={banner.alt} />
                  </BannerLink>
                ) : (
                  <BannerImage src={banner.src} alt={banner.alt} />
                )}
              </BannerArea>
              {showButtons && (
                <BannerButtonRow>
                  <BannerActionButton
                    onClick={() => handleHideForDay(banner.id, banner.storageKey)}
                  >
                    24시간 동안 다시 열람하지 않습니다
                  </BannerActionButton>
                  <BannerCloseButton onClick={() => handleCloseBanner(banner.id)}>
                    닫기
                  </BannerCloseButton>
                </BannerButtonRow>
              )}
            </PopupCard>
          );
        })}
      </PopupGrid>
    </Overlay>
  );
};

export default MainPopup;
