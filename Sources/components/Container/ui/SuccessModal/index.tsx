import { Modal, Text } from '@mantine/core';

interface SuccessModalProps {
    opened: boolean;
    close: VoidFunction;
}

export const SuccessModal = ({ opened, close }: SuccessModalProps) => (
    <Modal.Root centered opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
            <Modal.Header bg='green.9' c='white'>
                <Modal.Title fw={500} fz={40}>
                    Congratulations!
                </Modal.Title>
                <Modal.CloseButton c='white' size='xl' />
            </Modal.Header>
            <Modal.Body c='white' bg='green.9'>
                <Text fz={20} lh={1} fw={500}>
                    Your order has been successfully placed on the website.
                </Text>
                <br />
                <Text fz={20} lh={1} fw={500}>
                    A manager will contact you shortly to confirm your order.
                </Text>
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>
);
