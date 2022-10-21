import React, { useState } from 'react';
import {
    HeaderContainer,
    Title,
    HousesSection,
    House,
    ScrolldownContainer
} from './HeaderStyles';
import { houses } from '../../db/housesDb';
import { useViewportScroll, useTransform } from 'framer-motion';
import { BsChevronCompactDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const variantsScrolldown = {
    animate: {
        opacity: [1, 0.1, 1],
        scale: [1, 0.5, 1],
        y: [0, 10, 0]
    },

    static: {
        opacity: 1,
        scale: 1,
        y: 0
    }
}

function Header() {
    const { scrollY } = useViewportScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 0.6])
    const [isScrolldown, setIsScrolldown] = useState(false)

    const scrolldownEvent = () => {
        setIsScrolldown(true);
        setTimeout(() => setIsScrolldown(false), 1000);
    }

    return (
        <HeaderContainer style={{ scale }}>
            <Title initial={{ y: -30, opacity: -0.5 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Link to="/">
                    Hogwarts Houses
                </Link>
            </Title>
            <HousesSection initial={{ x: -1300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2, delay: 1 }} >
                {
                    houses.map((house) =>
                        <House key={house.name}>
                            <Link onClick={() => scrolldownEvent()} to={`houses/${house.route}`}>
                                <img src={house.image} alt={`${house.name} icon`} />
                            </Link>
                            <h2>{house.name}</h2>
                        </House>
                    )}

                <ScrolldownContainer
                    animate={isScrolldown ? "animate" : "static"}
                    transition={{ duration: 1 }}
                    variants={variantsScrolldown}>
                    <BsChevronCompactDown size={60} color={"white"} />
                </ScrolldownContainer>
            </HousesSection>
        </HeaderContainer>
    )
}

export default Header