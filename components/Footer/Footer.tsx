import { Box, Container, Group, Image, Stack, Text, Title } from "@mantine/core";
import logo from "@/public/images/logo.png";
import NextImage from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Footer () {
    const {t} = useTranslation('common');
    const about = [
        { title: t("footer.services.text1"), link: "/" },
        { title: t("footer.services.text2"), link: "/" },
        { title: t("footer.services.text3"), link: "/" },
        // { title: t("footer.pages.title"), link: "/" },
      ];
    
      const pageLinks = [
        { title: t("footer.pageLinks.home"), link: "/" },
        { title: t("footer.pageLinks.about"), link: "/" },
        { title: t("footer.pageLinks.services"), link: "/" },
        { title: t("footer.pageLinks.providers"), link: "/" },
      ];
    
      const services = [
        { title: t("footer.services.text1"), link: "/" },
        { title: t("footer.services.text2"), link: "/" },
        { title: t("footer.services.text3"), link: "/" },
        // { title: t("footer.services.title"), link: "/" },
      ];
    
      const pages = [
        { title: t("footer.pages.follow"), link: "/" },
      ];
    return(
        <Box pt={75} pb="lg" bg=" #54010B">
            <Container size="80%">
                <footer>

                    <Group align="start" justify="space-between">
                        <Group gap={70} align="start" justify="space-between">
                            <Box>
                                <Image
                                    style={{ width: "100%", height: "100%", objectFit: 'fill' }}
                                    priority
                                    loading="eager"
                                    component={NextImage}
                                    src={logo}
                                    alt="Logo"
                                    // w={100}
                                    // h={100}
                                />
                            </Box>
                            <Box>
                                <Title mb={25} c="white" order={4}>{t('footer.about.title')}</Title>
                                <Stack gap="xs" justify="center" align="start"> 
                                    {about.map((item, index) => (
                                        <Text href={item.link} component={Link} key={index} c="white" >{item.title}</Text>
                                    ))}
                                </Stack>
                            </Box>
                            <Box>
                                <Title mb={25} c="white" order={4}>{t('footer.pageLinks.title')}</Title>
                                <Stack gap="xs" justify="center" align="start"> 
                                    {pageLinks.map((item, index) => (
                                        <Text href={item.link} component={Link} key={index} c="white" >{item.title}</Text>
                                    ))}
                                </Stack>
                            </Box>
                            <Box>
                                <Title mb={25} c="white" order={4}>{t('footer.services.title')}</Title>
                                <Stack gap="xs" justify="center" align="start"> 
                                    {services.map((item, index) => (
                                        <Text href={item.link} component={Link} key={index} c="white" >{item.title}</Text>
                                    ))}
                                </Stack>
                            </Box>
                        </Group>
                        <Box>
                            <Title mb={25} c="white" order={4}>{t('footer.pages.title')}</Title>
                            <Stack gap="xs" justify="center" align="start"> 
                                {pages.map((item, index) => (
                                    <Text href={item.link} component={Link} key={index} c="white" >{item.title}</Text>
                                ))}
                            </Stack>
                        </Box>
                    </Group>
                    <Text my="md" c="white" ta="center" size="sm">
                        Copyright,Policy
                    </Text>
                </footer>
            </Container>
        </Box>
    )
}
//#BA0218
//#54010B