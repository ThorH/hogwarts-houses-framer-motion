import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, borderBottom } from '../../VariablesStyle';

export const NewsLetterIcon = styled(motion.div)`
    position: fixed;
    display: flex;
    align-items: center;
    top: 80px;
    right: 15px;
    background-color: ${colors.lilac};
    padding: 10px;
    border-radius: 50%;
    z-index: 1;
    transition: 0.5s;
    cursor: pointer;

    img {
        width: 50px;
    }

    &:hover {
        transform: scale(1.2);
    }
`;

export const ModalContainer = styled(motion.div)`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    background-color: ${colors.blueDeepSpaceTransparent};
`;

export const Modal = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    width: 80%;
    max-width: 480px;
    border-radius: 10px;
    padding: 0px 10px 25px 10px;
    background-color: ${colors.blueGrayDark};
    text-align: center;

    h3 {
        font-size: 26px;
    }
`;

export const CloseModal = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;

    svg {
        cursor: pointer;
        margin-left: auto;
    }
`;

export const FieldContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const FieldEmail = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    border-radius: 4px;
    padding: 10px 5px;
    background-color: ${colors.white};
`;

export const EmailInput = styled(motion.input)`
    margin-left: 5px;
    font-size: 18px;
    width: 70px;
    outline: none;

    &:focus {
        border-bottom: ${borderBottom(colors.blueDeepSpace)};
    }
`;

export const SubscribeButton = styled(motion.button)`
    background-color: ${colors.blueDeepSpace};
    margin: 0 10px;
    padding: 15px;
    font-size: 20px;
    font-weight: 700;
    color: ${colors.white};
    border-radius: 2px;
`;