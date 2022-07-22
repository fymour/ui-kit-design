import React from 'react'
import { Footer } from 'ui-kit/Footer/Footer'
import { FooterGroup } from 'ui-kit/Footer/FooterGroup'
import { FooterLink } from 'ui-kit/Footer/FooterLink'
import { Row } from 'ui-kit/Footer/Row'
import facebook from '../../../ui-kit/Assets/icons/facebook.svg'
import instagram from '../../../ui-kit/Assets/icons/instagram.svg'
import vk from '../../../ui-kit/Assets/icons/vk.svg'
import vimeo from '../../../ui-kit/Assets/icons/vimeo.svg'
import youtube from '../../../ui-kit/Assets/icons/youtube.svg'


export const FooterPage = () => {
  return (
    <Footer>
        <Row className="">
            <div className='row'>

        <FooterGroup title={'Salam'}>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
        </FooterGroup>
        <FooterGroup title={'Salam'}>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
        </FooterGroup>
        <FooterGroup title={'Salam'}>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
        </FooterGroup>
        <FooterGroup title={'Salam'}>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
            <FooterLink href={'#'}>
                snljnljndsln
            </FooterLink>
        </FooterGroup>
        </div>

        </Row>

        <Row className={''}>
            <div className="second">
                <div className="second-p">
                    <div className="second-p-inside">
                        <p>
                        Кыргызская Республика, 2022
                        </p>

                    </div>
                </div>
                <div className="second-icons">
                    <div className="second-icons-inside">
                        <FooterLink href={''}>
                            <img src={facebook} alt="" />
                        </FooterLink>
                        <FooterLink href={''}>
                            <img src={instagram} alt="" />
                        </FooterLink>
                        <FooterLink href={''}>
                            <img src={vk} alt="" />
                        </FooterLink>
                        <FooterLink href={''}>
                            <img src={vimeo} alt="" />
                        </FooterLink>
                        <FooterLink href={''}>
                            <img src={youtube} alt="" />
                        </FooterLink>
                    </div>
                </div>
            </div>
        </Row> 

    </Footer>
  )
}
