import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Switcher from "../components/Switcher";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import Socialmedia from "../assets/Social media.svg";
import Icon from "../assets/Icon.svg";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MenuIcon from "@mui/icons-material/Menu";
export default function Layout() {
  const { t, i18n } = useTranslation();
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav data-aos="fade-down" className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="dark:hidden" src={logo} alt="" />
          <img className="dark:block hidden" src={logo2} alt="" />
          <select
            className="ml-[30px] rounded-[10px] sm:hidden w-[50px] h-[40px] text-[17px]"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="ru">ru</option>
            <option value="tj">tj</option>
            <option value="en">en</option>
          </select>
        </div>

        <div className="flex items-center sm:hidden">
          <div className="flex mr-[20px] items-center dark:text-[white] gap-x-[32px]">
            <Link to={"/"}>{t("nav.p1")}</Link>
            <Link to={"/about"}>{t("nav.p2")}</Link>
            <Link to={"/blog"}>{t("nav.p3")}</Link>
            <Link to={"/pricing"}>{t("nav.p4")}</Link>
            <button className="border-b-[1px] border-solid border-[black] dark:border-[white] ml-[36px]">
              {t("nav.b")}
            </button>
          </div>
          <Switcher />
        </div>
        <div className="hidden sm:block">
          <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
              <img className="dark:hidden" src={Icon} alt="" />
              <div className="hidden dark:block">
                <MenuIcon />
              </div>
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <div className="flex mr-[20px] items-center dark:text-[white] gap-x-[32px]">
                    <Link to={"/"}>{t("nav.p1")}</Link>
                    <Link to={"/about"}>{t("nav.p2")}</Link>
                    <Link to={"/blog"}>{t("nav.p3")}</Link>
                    <Link to={"/pricing"}>{t("nav.p4")}</Link>
                  </div>
                  <button className="border-b-[1px] mt-[30px] border-solid border-[black] dark:border-[white]">
                    {t("nav.b")}
                  </button>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <div className="mr-[30px]">
                  <Switcher />
                </div>
                <select
                  className="rounded-[10px] mr-[30px] border-solid border-[1px] border-[black] w-[50px] h-[40px] text-[17px]"
                  onChange={(e) => changeLanguage(e.target.value)}
                >
                  <option value="ru">ru</option>
                  <option value="tj">tj</option>
                  <option value="en">en</option>
                </select>
                <Button onClick={handleClose}>Exit</Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
        </div>
      </nav>
      <Outlet />
      <footer className="bg-[#1D1E25] pt-[112px] sm:pt-[51px] px-[20px]">
        <div className="flex justify-between sm:justify-start sm:items-start items-center sm:flex-col">
          <div>
            <h1 className="text-[64px] sm:text-[24px] font-[600] text-white">{t("footer.h1")}</h1>
            <h1 className="text-[#AFB3BB] sm:w-[292px] sm:text-[16px] text-[18px] w-[523px]">{t("footer.p")}</h1>
          </div>
          <h1 className="p-[16px_32px] sm:mt-[24px] sm:p-[12px_24px] rounded-[100px] font-[700] bg-[white]">{t("footer.b")}</h1>          
        </div>

        <div className="flex justify-between items-center sm:mt-[60px] mt-[130px]">
          <div className="w-[242px]">
            <img src={logo2} alt="" />
            <p className="text-[#7E8492]">{t("footer.div.card1.p")}</p>
          </div>

          <div className="flex sm:hidden w-[764px] justify-between items-center">
            <div className="">
              <p className="text-[#FFFFFF] font-[700]">{t("footer.div.card2.h3")}</p>
              <p className="text-[#7E8492] font-[400] mt-[24px]">{t("footer.div.card2.p1")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card2.p2")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card2.p3")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card2.p4")}</p>
            </div>
            
            <div className="">
              <p className="text-[#FFFFFF] font-[700]">{t("footer.div.card3.h3")}</p>
              <p className="text-[#7E8492] font-[400] mt-[24px]">{t("footer.div.card3.p1")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card3.p2")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card3.p3")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card3.p4")}</p>
            </div>
            
            <div className="">
              <p className="text-[#FFFFFF] font-[700]">{t("footer.div.card4.h3")}</p>
              <p className="text-[#7E8492] font-[400] mt-[24px]">{t("footer.div.card4.p1")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card4.p2")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card4.p3")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card4.p4")}</p>
            </div>
            
            <div className="">
              <p className="text-[#FFFFFF] font-[700]">{t("footer.div.card5.h3")}</p>
              <p className="text-[#7E8492] font-[400] mt-[24px]">{t("footer.div.card5.p1")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card5.p2")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card5.p3")}</p>
              <p className="text-[#7E8492] font-[400] mt-[6px]">{t("footer.div.card5.p4")}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center sm:justify-center sm:flex-wrap sm:gap-y-[24px] text-white text-[14px] pt-[40px] mt-[58px] pb-[58px] border-t-[1px] border-[#606060]">
          <img className="sm:w-[168px]" src={Socialmedia} alt="" />
          <div className="text-white text-[14px] flex justify-between sm:w-[100%]">
            <p className="ml-[72px] sm:ml-[0px]">{t("footer.div2.p1")}</p>
            <p className="ml-[40px] sm:ml-[0px]">{t("footer.div2.p2")}</p>
            <p className="ml-[40px] sm:ml-[0px]">{t("footer.div2.p3")}</p>  
          </div>
          <p className="ml-[352px] sm:ml-[0px]">{t("footer.div2.p4")}</p>
        </div>
      </footer>
    </>
  );
}
