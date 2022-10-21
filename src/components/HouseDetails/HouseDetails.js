import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { houses } from '../../db/housesDb';
import {
    HouseDetailsContainer,
    HouseImageTitle,
    SortingHatContainer,
    DescriptionContainer,
    CharacterImage,
    TraitsContainer,
    HouseTopic,
    TopicParagraphs,
    ExpandIcon
} from './HouseDetailsStyle';
import { MdExpandLess } from 'react-icons/md';

const variantsTopic = {
    open: { opacity: 1, scale: 1, height: "auto", },
    closed: { opacity: 0, scale: 0, height: 0 }
}

const variantsYAxis = (yValue) => {
    return {
        changedYAxis: {
            y: yValue,
            opacity: -0.5
        },

        normalYAxis: {
            y: 0,
            opacity: 1
        }
    }

}

const variantsDetailsContainer = {
    onExit: {
        y: -80,
        opacity: -0.5,
        transition: {
            duration: 0.5
        }
    },

    onAnimate: {
        y: [-80, 0],
        opacity: [0, 1]
    }
}

function HouseDetails() {
    const { name } = useParams();
    const [selectedHouse, setSelectedHouse] = useState({
        name: '',
        route: '',
        sortingHatWords: '',
        description: [],
        traits: [],
        image: '',
        characterImage: ''
    })
    const [descriptionIsOpen, setDescriptionIsOpen] = useState(true);
    const [traitIsOpen, setTraitIsOpen] = useState(true);

    useEffect(() => {
        const actualHouse = houses.find((house) => house.route === name);
        setSelectedHouse(actualHouse)
    }, [name])

    return (
        <HouseDetailsContainer exit={"onExit"}
            animate={"onAnimate"}
            variants={variantsDetailsContainer}
        >
            <HouseImageTitle initial={"changedYAxis"}
                whileInView={"normalYAxis"}
                transition={{ duration: 1 }}
                variants={variantsYAxis(-60)}>
                <h2>{selectedHouse.name}</h2>
                <img src={selectedHouse.image} alt={`${selectedHouse.name} icon`} />
            </HouseImageTitle>
            <SortingHatContainer initial={"changedYAxis"}
                whileInView={"normalYAxis"}
                transition={{ duration: 1 }}
                variants={variantsYAxis(-100)}>
                <p>{selectedHouse.sortingHatWords}</p>
                <img src="/images/sortinghat.png" alt="Sorting hat" />
            </SortingHatContainer>
            <DescriptionContainer initial={"changedYAxis"}
                whileInView={"normalYAxis"}
                transition={{ duration: 1 }}
                variants={variantsYAxis(-100)}>
                <HouseTopic onClick={() => setDescriptionIsOpen(!descriptionIsOpen)}>
                    <h3>Description</h3>
                    <ExpandIcon animate={descriptionIsOpen ? { rotate: 180 } : { rotate: 0 }}>
                        <MdExpandLess size={25} color={"white"} />
                    </ExpandIcon>
                </HouseTopic>
                <TopicParagraphs animate={descriptionIsOpen ? "open" : "closed"}
                    transition={{ duration: 0.4 }}
                    variants={variantsTopic} >
                    {
                        selectedHouse.description.map((paragraph, index) =>
                            <p key={`Description paragraph ${index}`}>{paragraph}</p>
                        )
                    }
                </TopicParagraphs>
            </DescriptionContainer>
            <CharacterImage src={selectedHouse.characterImage}
                initial={{ x: -200, opacity: -0.5 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }} />
            <TraitsContainer initial={"changedYAxis"}
                whileInView={"normalYAxis"}
                transition={{ duration: 1 }}
                variants={variantsYAxis(-100)}>
                <HouseTopic onClick={() => setTraitIsOpen(!traitIsOpen)}>
                    <h3>Traits</h3>
                    <ExpandIcon animate={traitIsOpen ? { rotate: 180 } : { rotate: 0 }}>
                        <MdExpandLess size={25} color={"white"} />
                    </ExpandIcon>
                </HouseTopic>
                <TopicParagraphs animate={traitIsOpen ? "open" : "closed"}
                    transition={{ duration: 0.4 }}
                    variants={variantsTopic} >
                    {
                        selectedHouse.traits.map((paragraph, index) =>
                            <p key={`traits paragraph ${index}`}>{paragraph}</p>
                        )
                    }
                </TopicParagraphs>
            </TraitsContainer>
        </HouseDetailsContainer >
    )
}

export default HouseDetails