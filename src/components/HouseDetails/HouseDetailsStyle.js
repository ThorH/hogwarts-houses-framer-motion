import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, borderBottom } from '../../VariablesStyle';

export const HouseDetailsContainer = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: inset 0 10px 20px -10px ${colors.blueGrayLight};
    border-top: ${borderBottom(colors.white)};
`;

export const HouseImageTitle = styled(motion.div)`
    width: 100%;
    margin: 25px 0;
    text-align: center;

    h2 {
        font-size: 32px;
        margin-bottom: 10px;
    }

    img {
        width: 250px;
    }
`;

export const SortingHatContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin-left: 10px;
        font-weight: 600;
        max-width: 300px;
    }

    img {
        margin: 0 10px;
        height: 200px;
    }
`;

export const DescriptionContainer = styled(motion.div)`
    max-width: 600px;
    margin: 10px;
    
    p {
        padding: 10px 0;
    }
`;
export const CharacterImage = styled(motion.img)`
    max-height: 500px;
    margin: 10px;
`;
export const TraitsContainer = styled(motion.div)`
    margin: 20px 10px 10px 10px;
`;

export const HouseTopic = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: ${borderBottom(colors.white)};
    cursor: pointer;

    h3 {
        font-size: 22px;
    }
`;

export const TopicParagraphs = styled(motion.div)`
    p {
        max-width: 750px;
        padding: 10px 0;
    }
`;

export const ExpandIcon = styled(motion.div)`
    display: flex;
    align-items: center;
`;