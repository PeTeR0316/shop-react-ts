import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ProductList from '../components/ProductList'
import GlobalMenu from '../components/GlobalMenu';
import BestProduct from '../components/local/main/BestProduct';

import IMAGESRESOURCES from '../commons/images-resources'

const Index = () => {
    const [slideMargin, setSlideMargin] = useState<string>('0')

    const IndexStyled = styled.div`
    .slideShowFlame {
        width: 100%;
        height: auto;
        overflow: hidden;

        .slideImages {
            width: 300%;
            margin-left: ${slideMargin};

            img {
                width: 1400px;
                display: inline-block;
            }
        }
    }
    `
    useEffect(() => {
        setTimeout(() => {
            setSlideMargin('-1400px')
        }, 1500);
    })

    return (
        <IndexStyled>
            <GlobalMenu />
            <div className="slideShowFlame">
                <div className="slideImages">
                    <img src={IMAGESRESOURCES.MAIN_SLIDESHOW_IMAGE_1} />
                    <img src={IMAGESRESOURCES.MAIN_SLIDESHOW_IMAGE_2} />
                    <img src={IMAGESRESOURCES.MAIN_SLIDESHOW_IMAGE_3} />
                </div>
            </div>

            <BestProduct />
            <ProductList />
        </IndexStyled>
    )
}

export default Index;