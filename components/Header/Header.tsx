import { Box, Button, Container, Group, Menu, Stack, Text } from "@mantine/core";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import { IconCaretUp } from "@tabler/icons-react";
import { useState } from "react";

export default function Header () {
    const {t, i18n} = useTranslation('common')
    const [opened, setOpened] = useState(false);
    const links = [
        { title: t("header.links.home"), link: "/" },
        { title: t("header.links.about"), link: "/" },
        { title: t("header.links.services"), link: "/" },
        { title: t("header.links.providers"), link: "/" },
        { title: t("header.links.contact"), link: "/" }
      ];
    return (
        <Box w="100%" style={{zIndex: 10}} pos= 'fixed'>
            <header style={{ background: 'white', boxShadow: '2px 2px 2px 0 rgba(0, 0, 0, 0.3)', transition: 'all 0.3s ease' }}>
                <Container py={20} size="80%">
                        <Stack justify="center">
                            <Group align="center" justify="end">
                                <Text href="/" c="#BA0218" component={Link}>{t('header.help')}</Text>
                            </Group>
                            <Group gap={130} align="center" justify="end">
                                <Group gap={50} align="center" justify="space-between">
                                    {links.map((item,index) => (
                                        <Text key={index} component={Link} href={item.link} c="#4C535D">{t(item.title)}</Text>
                                    ))}
                                </Group>
                                <Group justify="space-between" align="center">
                                    <Menu opened={opened} shadow="md">
                                        <Menu.Target>
                                            <Group gap={5} onClick={() => setOpened(!opened)} style={{ cursor: 'pointer' }} align="start" justify="space-between">
                                                <Text c="#BA0218">{i18n.language === 'en' ? 'EN' : 'FR'}</Text>
                                                {opened ? <RxCaretUp size={20} color="#BA0218" /> : <RxCaretDown color="#BA0218" size={20} />}
                                            </Group>
                                        </Menu.Target>
                                        <Menu.Dropdown>
                                            <Menu.Item 
                                                onClick={() => {
                                                    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')
                                                    setOpened(false)
                                                }}
                                            >
                                                {i18n.language === 'en' ? 'FR' : 'EN'}
                                            </Menu.Item>
                                        </Menu.Dropdown>
                                    </Menu>
                                    <Button
                                        component={Link}
                                        href="/"
                                        bg="#4C535D"
                                    >
                                        {t('header.connect')}
                                    </Button>
                                </Group>
                            </Group>
                        </Stack>
                </Container>
            </header>
        </Box>
    )
}