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
    <>
    <Footer>
        <Row className="">
            <div className='row'>

        <FooterGroup title={'Категория 1'}>
            <FooterLink href={'#'}>
                Блок 1
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 2
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 3
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 4
            </FooterLink>
        </FooterGroup>
        
        <FooterGroup title={'Категория 2'}>
            <FooterLink href={'#'}>
                Блок 1
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 2
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 3
            </FooterLink>
        </FooterGroup>
        <FooterGroup title={'Категория 3'}>
            <FooterLink href={'#'}>
                Блок 1
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 2
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 3
            </FooterLink>
        </FooterGroup>
        <FooterGroup title={'Категория 4'}>
            <FooterLink href={'#'}>
                Блок 1
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 2
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 3
            </FooterLink>
        </FooterGroup>
        </div>

        </Row>
        <div className="line">
            <div className="line-in">

            </div>
        </div>

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
    <div className='pad'></div>
    <Footer size='small'>
        <Row className="">
            <div className='row'>

        <FooterGroup title={'Категория 1'}>
            <FooterLink href={'#'}>
                Блок 1
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 2
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 3
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 4
            </FooterLink>
        </FooterGroup>
        <FooterGroup  title={'Категория 2'}>
            <FooterLink href={'#'}>
                Блок 1
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 2
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 3
            </FooterLink>
        </FooterGroup>
        <FooterGroup title={'Категория 3'}>
            <FooterLink href={'#'}>
                Блок 1
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 2
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 3
            </FooterLink>
        </FooterGroup>
        <FooterGroup title={'Категория 4'}>
            <FooterLink href={'#'}>
                Блок 1
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 2
            </FooterLink>
            <FooterLink href={'#'}>
                Блок 3
            </FooterLink>
        </FooterGroup>
        </div>

        </Row>
        <div className="line">
        <div className="line-in">
                
                </div>
        </div>
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
    </>
    
  )
}