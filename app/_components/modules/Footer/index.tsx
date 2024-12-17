import InputWithButton from "@/app/_components/elements/Inputs/InputWithButton";
import Logo from "@/app/_components/elements/Logo";

import footerLinks from '@/app/_lib/dummy/navigation/footer.json'
import FooterNavigation from "@/app/_components/elements/Footer/FooterNavigation";
import FooterNavigationList from "@/app/_components/elements/Footer/FooterNavigationList";
import FooterNavigationItem from "@/app/_components/elements/Footer/FooterNavigationItem";
import { TFooterNavItemType } from "@/app/_lib/types/_components/elements/Footer/FooterNavigationTitle";
import FooterNavigationTitle from "@/app/_components/elements/Footer/FooterNavigationTitle";
import FooterDownloadApp from "@/app/_components/elements/Footer/FooterApp";
import Image from "next/image";

const Footer = () => {

  const subscribe = async (formData: FormData) => {
    "use server"
    console.log(formData)
  }
  
  return (
    <footer className="min-h-[440px] bg-button-card">
      <div className='container text-primary-white flex flex-col justify-center items-center gap-y-14 h-full pt-20'>
        <div className="grid grid-cols-5 gap-x-20 justify-between">
          <div className="flex flex-col gap-y-6">
            <Logo classNames="text-primary-white" />
            <FooterNavigationTitle>Subscribe</FooterNavigationTitle>
            <div className="flex flex-col gap-y-4">
              <div>Get 10% off your first order</div>
              <form action={subscribe}>
                <InputWithButton type="submit" />
              </form>
            </div>
          </div>
          {footerLinks.map((group) => {
            return (
              <FooterNavigation key={group.name} name={group.name}>
                <FooterNavigationList>
                  {group.items.map((item) => {
                    return (
                      <FooterNavigationItem
                        key={item.title}
                        path={item.path}
                        title={item.title}
                        type={item.type as TFooterNavItemType}
                      />
                    )
                  })}
                </FooterNavigationList>
              </FooterNavigation>
            )
          })}
          <FooterNavigation name="Download App" classNames="w-[198px]">
            <p className="text-sm text-text-secondary">Save $3 with App New User Only</p>
            <FooterDownloadApp />
            <div className="relative flex items-center gap-x-6">
              <Image src='/icons/facebook.svg' alt="Facebook" width={24} height={24} />
              <Image src='/icons/twitter.svg' alt="Twitter" width={24} height={24} />
              <Image src='/icons/instagram.svg' alt="Instagram" width={24} height={24} />
              <Image src='/icons/linkedin.svg' alt="Linkedin" width={24} height={24} />
            </div>
          </FooterNavigation>
        </div>
        <div className="text-center text-text-secondary">
          &copy; Copyright Rimel {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;
