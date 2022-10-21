import React, { useState } from 'react'
import {
    NewsLetterIcon,
    ModalContainer,
    Modal,
    CloseModal,
    FieldContainer,
    FieldEmail,
    EmailInput,
    SubscribeButton
} from './NewsLetterStyles'
import { AnimatePresence } from 'framer-motion';
import { MdEmail, MdClose } from 'react-icons/md';

function NewsLetter() {
    const [input, setInput] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const switchShowModal = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            <NewsLetterIcon onClick={() => switchShowModal()}>
                <img src="/images/letter.png" alt="letter icon" />
            </NewsLetterIcon>
            <AnimatePresence>
                {showModal &&
                    <ModalContainer initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.5 } }}
                        transition={{ duration: 0.5 }}>
                        <Modal initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.2, 1] }}
                            exit={{ scale: [1, 1.2, 0], transition: { duration: 0.5 } }}
                            transition={{ duration: 0.5 }}>
                            <CloseModal>
                                <MdClose onClick={() => switchShowModal()}
                                    size={30}
                                    color={"white"} />
                            </CloseModal>
                            <h3>Sign up to our Newsletter</h3>
                            <FieldContainer>
                                <FieldEmail
                                    whileTap={{ scale: 1.1 }}>
                                    <MdEmail size={30} />
                                    <EmailInput text="text"
                                        placeholder="Email"
                                        value={input}
                                        name="Email"
                                        onChange={handleChange}
                                        animate={input.length ? { width: 300 } : { width: 70 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }} />
                                </FieldEmail>
                            </FieldContainer>
                            <SubscribeButton whileTap={{ scale: 0.9, opacity: 0.8 }}>
                                Subscribe
                            </SubscribeButton>
                        </Modal>
                    </ModalContainer>
                }
            </AnimatePresence>
        </>
    )
}

export default NewsLetter