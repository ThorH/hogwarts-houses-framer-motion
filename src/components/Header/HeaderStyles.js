import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)`
    text-align: center;
`;

export const Title = styled(motion.h1)`
    font-size: 38px;
    margin: 40px 0;
`;

export const HousesSection = styled(motion.section)`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const House = styled.div`
    transition: 0.4s;
    margin: 10px;

    img {
        width: 200px;
        transition: 0.5s;
    }
    h2 {
        font-size: 28px;
        margin-top: 15px;
        transition: 0.8s;
        opacity: 0;
    }

    &:hover {
        margin-top: -20px;

        img {
            transform: scale(1.1);
        }
        h2 {
            opacity: 1;
        }
    }
`;

export const ScrolldownContainer = styled(motion.div)`
    width: 100%;
    margin-bottom: 25px;
`;
